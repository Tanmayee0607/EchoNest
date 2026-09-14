/* Living Systems Editorial: monthly analysis turns a user's own signals into calm, interpretable estimates with clear assumptions instead of false precision. */
export type TransportMode = "Car" | "Bike / Scooter" | "Bus" | "Metro" | "Train" | "Walking" | "Cycling";

export type TransportItem = {
  id: string;
  mode: TransportMode;
  distance: string;
  fuel: string;
};

export type MonthlyEntry = {
  id: string;
  month: string;
  electricityKwh: string;
  electricityBill: string;
  electricityTariff: string;
  waterLitres: string;
  waterBill: string;
  waterUnknown: boolean;
  householdSize: string;
  transport: TransportItem[];
  foodWasteMeals: string;
  mealsOut: string;
  packaging: "Mostly reusable" | "A mix" | "Mostly disposable";
  plasticItems: string;
  recycling: "Always" | "Sometimes" | "Not yet";
  composting: "Yes" | "Sometimes" | "No";
  wasteKg: string;
  updatedAt: string;
};

export type CategoryResult = {
  key: "electricity" | "water" | "transport" | "food" | "waste";
  label: string;
  icon: string;
  score: number;
  impact: number;
  unit: string;
  detail: string;
  color: string;
};

export type MonthlyReport = {
  score: number;
  status: "Excellent" | "Good" | "Needs Improvement" | "High Environmental Impact";
  categories: CategoryResult[];
  highest: CategoryResult;
  recommendations: string[];
  totalImpact: number;
};

export type PredictionResult = {
  month: string;
  method: "trend" | "estimate";
  explanation: string;
  electricityKwh: number;
  waterLitres: number;
  wasteKg: number;
  score: number;
};

export type SavingsResult = {
  monthly: number;
  yearly: number;
  electricityReduction: number;
  tariff: number;
  available: boolean;
  explanation: string;
};

export const STORAGE_KEY = "econest_monthly_entries_v1";
export const modeOptions: TransportMode[] = ["Car", "Bike / Scooter", "Bus", "Metro", "Train", "Walking", "Cycling"];

export const emptyEntry = (month: string): MonthlyEntry => ({
  id: `${month}-${Date.now()}`,
  month,
  electricityKwh: "",
  electricityBill: "",
  electricityTariff: "",
  waterLitres: "",
  waterBill: "",
  waterUnknown: false,
  householdSize: "2",
  transport: [{ id: `${Date.now()}-car`, mode: "Car", distance: "", fuel: "" }],
  foodWasteMeals: "2",
  mealsOut: "4",
  packaging: "A mix",
  plasticItems: "20",
  recycling: "Sometimes",
  composting: "No",
  wasteKg: "8",
  updatedAt: new Date().toISOString(),
});

export const previousMonth = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
};

export const formatMonth = (value: string) => {
  if (!value) return "Selected month";
  const [year, month] = value.split("-");
  return new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(new Date(Number(year), Number(month) - 1, 1));
};

export const loadEntries = (): MonthlyEntry[] => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved) as Partial<MonthlyEntry>[];
    return parsed.map((entry) => ({ ...emptyEntry(entry.month || previousMonth()), ...entry, electricityTariff: entry.electricityTariff || "" } as MonthlyEntry));
  } catch {
    return [];
  }
};

export const saveEntries = (entries: MonthlyEntry[]) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  window.dispatchEvent(new CustomEvent("econest:monthly-update"));
};

const number = (value: string | undefined, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};
const clamp = (value: number, min = 0, max = 100) => Math.min(max, Math.max(min, value));

export const getWaterLitres = (entry: MonthlyEntry) => entry.waterUnknown ? Math.max(1, number(entry.householdSize, 2)) * 4500 : number(entry.waterLitres) || number(entry.waterBill) * 180;
export const getWasteKg = (entry: MonthlyEntry) => number(entry.wasteKg);

export const getElectricityTariff = (entry: MonthlyEntry) => {
  const directTariff = number(entry.electricityTariff);
  if (directTariff > 0) return directTariff;
  const bill = number(entry.electricityBill);
  const units = number(entry.electricityKwh);
  return bill > 0 && units > 0 ? bill / units : 0;
};

const nextMonthValue = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  const date = new Date(year, month, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
};

const forecast = (values: number[]) => {
  const clean = values.filter((value) => Number.isFinite(value) && value >= 0);
  if (!clean.length) return 0;
  if (clean.length === 1) return clean[0];
  const recent = clean.slice(-3);
  if (recent.length === 1) return recent[0];
  const slope = (recent[recent.length - 1] - recent[0]) / Math.max(1, recent.length - 1);
  return Math.max(0, recent[recent.length - 1] + slope * 0.5);
};

export const predictNextMonth = (entries: MonthlyEntry[], current: MonthlyEntry): PredictionResult => {
  const ordered = [...entries].sort((a, b) => a.month.localeCompare(b.month));
  const relevant = ordered.filter((entry) => entry.month <= current.month);
  const electricityValues = relevant.map((entry) => number(entry.electricityKwh));
  const waterValues = relevant.map((entry) => entry.waterUnknown ? Math.max(1, number(entry.householdSize, 2)) * 4500 : number(entry.waterLitres) || number(entry.waterBill) * 180);
  const wasteValues = relevant.map((entry) => number(entry.wasteKg));
  const predictedEntry: MonthlyEntry = { ...current, month: nextMonthValue(current.month), electricityKwh: String(forecast(electricityValues)), waterLitres: String(forecast(waterValues)), waterUnknown: false, wasteKg: String(forecast(wasteValues)) };
  const predictedReport = analyzeEntry(predictedEntry);
  const method = relevant.length >= 2 ? "trend" : "estimate";
  return { month: predictedEntry.month, method, explanation: method === "trend" ? "Estimated from your recent monthly consumption trend." : "Basic estimate based on your latest saved month. Add another month to make the outlook more useful.", electricityKwh: Math.round(forecast(electricityValues)), waterLitres: Math.round(forecast(waterValues)), wasteKg: Math.round(forecast(wasteValues) * 10) / 10, score: predictedReport.score };
};

export const estimateSavings = (entry: MonthlyEntry, prediction: PredictionResult): SavingsResult => {
  const tariff = getElectricityTariff(entry);
  const electricityReduction = Math.max(0, number(entry.electricityKwh) - prediction.electricityKwh);
  const monthly = tariff > 0 ? Math.round(electricityReduction * tariff) : 0;
  return { monthly, yearly: monthly * 12, electricityReduction: Math.round(electricityReduction * 10) / 10, tariff, available: tariff > 0 && monthly > 0, explanation: tariff > 0 ? `Uses your electricity rate of ₹${tariff.toFixed(2)} per kWh and the predicted next-month reduction.` : "Add an electricity rate or bill amount to estimate potential savings without inventing a tariff." };
};

export type RecommendationSavingsResult = {
  monthly: number;
  yearly: number;
  electricityReduction: number;
  reductionRate: number;
  tariff: number;
  available: boolean;
  explanation: string;
};

export const estimateRecommendationSavings = (entry: MonthlyEntry, report: MonthlyReport): RecommendationSavingsResult => {
  const tariff = getElectricityTariff(entry);
  const electricityCategory = report.categories.find((category) => category.key === "electricity");
  const signalStrength = Math.min(1, Math.max(0, (electricityCategory?.score || 0) / 100));
  const reductionRate = 0.08 + signalStrength * 0.12;
  const electricityReduction = Math.round(number(entry.electricityKwh) * reductionRate * 10) / 10;
  const monthly = tariff > 0 ? Math.round(electricityReduction * tariff) : 0;
  return {
    monthly,
    yearly: monthly * 12,
    electricityReduction,
    reductionRate: Math.round(reductionRate * 100),
    tariff,
    available: tariff > 0 && monthly > 0,
    explanation: tariff > 0 ? `Modeled from your current electricity signal and ₹${tariff.toFixed(2)} per kWh. It assumes consistent follow-through on the highest-impact recommendations, not a guaranteed bill reduction.` : "Add an electricity rate or bill amount to turn the recommendation plan into a money estimate without inventing a tariff.",
  };
};

export const analyzeEntry = (entry: MonthlyEntry): MonthlyReport => {
  const household = Math.max(1, number(entry.householdSize, 2));
  const electricity = number(entry.electricityKwh);
  const water = getWaterLitres(entry);
  const transport = entry.transport.reduce((sum, item) => {
    const km = number(item.distance);
    const factor = item.mode === "Car" ? 0.192 : item.mode === "Bike / Scooter" ? 0.08 : item.mode === "Bus" ? 0.08 : item.mode === "Metro" ? 0.041 : item.mode === "Train" ? 0.041 : 0;
    return sum + km * factor;
  }, 0);
  const food = number(entry.foodWasteMeals) * 2.4 + number(entry.mealsOut) * 0.55 + (entry.packaging === "Mostly disposable" ? 9 : entry.packaging === "A mix" ? 4 : 1);
  const waste = number(entry.plasticItems) * 0.08 + getWasteKg(entry) * 0.7 + (entry.recycling === "Always" ? 0 : entry.recycling === "Sometimes" ? 4 : 8) + (entry.composting === "Yes" ? 0 : entry.composting === "Sometimes" ? 2 : 4);

  const categories: CategoryResult[] = [
    { key: "electricity", label: "Electricity", icon: "⚡", score: clamp(electricity / 360 * 100), impact: electricity * 0.42, unit: "kg CO₂e est.", detail: `${Math.round(electricity || 0)} kWh recorded`, color: "#d7a872" },
    { key: "water", label: "Water", icon: "💧", score: clamp(water / (household * 7500) * 100), impact: water / 1100, unit: "L-use index", detail: `${Math.round(water || 0).toLocaleString()} L estimated`, color: "#6fa7a2" },
    { key: "transport", label: "Transportation", icon: "🚗", score: clamp(transport / 70 * 100), impact: transport, unit: "kg CO₂e est.", detail: `${Math.round(entry.transport.reduce((sum, item) => sum + number(item.distance), 0))} km recorded`, color: "#77939f" },
    { key: "food", label: "Food", icon: "🍽️", score: clamp(food / 45 * 100), impact: food, unit: "food index", detail: `${Math.round(number(entry.mealsOut))} outside meals`, color: "#7ba36f" },
    { key: "waste", label: "Waste", icon: "♻️", score: clamp(waste / 32 * 100), impact: waste, unit: "waste index", detail: `${Math.round(number(entry.wasteKg))} kg estimated`, color: "#8a9f82" },
  ];
  const weightedImpact = categories.reduce((sum, category) => sum + category.score * ({ electricity: .22, water: .16, transport: .3, food: .14, waste: .18 }[category.key]), 0);
  const score = Math.round(clamp(100 - weightedImpact));
  const status = score >= 82 ? "Excellent" : score >= 65 ? "Good" : score >= 45 ? "Needs Improvement" : "High Environmental Impact";
  const sorted = [...categories].sort((a, b) => b.score - a.score);
  const recommendations = sorted.slice(0, 4).map((category) => {
    if (category.key === "electricity") return `Your electricity pattern is carrying the most weight. Try reducing unnecessary AC use, switching off standby appliances, and choosing efficient settings for your highest-use devices.`;
    if (category.key === "transport") return `Transportation is your highest-impact signal. Combine two short trips, try public transport for one regular journey, or walk/cycle when the distance is manageable.`;
    if (category.key === "water") return `Your water estimate is higher than the other signals. Shorter showers, leak checks, and a more intentional laundry routine are practical places to start.`;
    if (category.key === "food") return `Food is a meaningful part of this month’s picture. Plan one flexible meal around what you already have and make leftovers visible before ordering out.`;
    return `Your waste pattern has room to improve. Keep reusable bags, bottles, and containers easy to reach, and choose one material stream to separate consistently this month.`;
  });
  return { score, status, categories, highest: sorted[0], recommendations, totalImpact: Math.round(categories.reduce((sum, category) => sum + category.impact, 0) * 10) / 10 };
};
