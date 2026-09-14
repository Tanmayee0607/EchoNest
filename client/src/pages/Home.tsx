/* Living Systems Editorial: the homepage pairs left-led editorial copy with a right-led environmental object, then moves through measurable, tactile stories. */
import { ArrowDown, ArrowUpRight, BarChart3, Droplets, Globe2, Home as HomeIcon, Lightbulb, Leaf, Recycle, Sparkles, SunMedium, Waves, Wind } from "lucide-react";
import { Link } from "wouter";
import { assetUrls, KickerLink, ProgressRing, SectionEyebrow, StatCard, Tag, TrendChart } from "@/components/EcoShell";

const pillars = [
  { icon: Leaf, title: "Sustainable living", body: "Practical ways to make a lighter footprint feel possible, personal, and repeatable.", tone: "bg-[#e0eee4]" },
  { icon: BarChart3, title: "Understand your impact", body: "See the signals behind energy, water, waste, and the patterns that connect them.", tone: "bg-[#eee3d5]" },
  { icon: Lightbulb, title: "Smart choices", body: "Find better everyday alternatives without turning your life into a spreadsheet.", tone: "bg-[#e5ece4]" },
  { icon: Globe2, title: "Global perspective", body: "Zoom out from the single choice to the systems, communities, and futures it shapes.", tone: "bg-[#e2e8ea]" },
];

const journey = [
  ["01", "Discover", "Understand the habits and signals already shaping your day."],
  ["02", "Learn", "Explore alternatives that fit your home, pace, and priorities."],
  ["03", "Act", "Turn one small idea into a choice you can repeat."],
  ["04", "Impact", "See how small shifts compound into meaningful change."],
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="grain relative min-h-[760px] bg-[#f5f1e9] pt-28 md:min-h-[850px] md:pt-32">
        <div className="container relative grid items-center gap-12 pb-16 md:grid-cols-[.82fr_1.18fr] md:gap-8 md:pb-20">
          <div className="relative z-10 max-w-xl pb-4 md:pb-12">
            <SectionEyebrow>Smart living / living systems</SectionEyebrow>
            <h1 className="display mt-6 text-[clamp(3.5rem,8vw,7.7rem)] text-[#1f4b3a]">Build a better future,<br /><span className="text-[#2f8f68]">one choice</span> at a time.</h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#647168]">EcoNest brings awareness, practical habits, and measurable impact together to help create a healthier planet for generations to come.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/about" className="btn-primary">Explore EcoNest <ArrowUpRight size={16} /></Link>
              <Link href="/dashboard" className="btn-secondary">Discover your impact <BarChart3 size={15} /></Link>
            </div>
            <div className="mt-14 flex items-center gap-4 text-[.7rem] font-bold uppercase tracking-[.17em] text-[#7c8b80]"><span className="grid h-9 w-9 place-items-center rounded-full border border-[#2f8f68]/20"><ArrowDown size={14} /></span> Scroll to explore</div>
          </div>
          <div className="relative min-h-[440px] md:min-h-[610px]">
            <div className="absolute right-[-8%] top-[2%] h-[520px] w-[520px] rounded-full border border-[#2f8f68]/20 md:h-[720px] md:w-[720px]" />
            <div className="absolute right-[3%] top-[12%] h-[420px] w-[420px] rounded-full border border-[#2f8f68]/15 md:h-[590px] md:w-[590px]" />
            <div className="absolute right-[10%] top-[23%] h-[300px] w-[300px] rounded-full bg-[#d7e8dc]/50 blur-3xl md:h-[430px] md:w-[430px]" />
            <div className="float-slow absolute right-[0%] top-[13%] z-10 h-[330px] w-[330px] overflow-hidden rounded-[48%_52%_46%_54%] border-8 border-[#dcebe2] shadow-[0_30px_80px_rgba(30,68,52,.20)] sm:h-[420px] sm:w-[420px] md:right-[8%] md:top-[15%] md:h-[510px] md:w-[510px]">
              <img src={assetUrls.hero} alt="Abstract living Earth landscape" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(214,238,220,.2),transparent_30%),linear-gradient(135deg,transparent,rgba(19,54,42,.2))]" />
            </div>
            <div className="surface absolute bottom-[8%] left-[2%] z-20 w-48 rounded-3xl p-4 md:bottom-[12%] md:left-[-6%]"><div className="flex items-center justify-between"><span className="eyebrow !text-[.58rem]">Live signal</span><span className="h-2 w-2 rounded-full bg-[#2f8f68] shadow-[0_0_0_5px_rgba(47,143,104,.13)]" /></div><div className="mt-4 display text-3xl text-[#1f4b3a]">+18.4%</div><p className="mt-1 text-xs leading-5 text-[#718076]">habit confidence this month</p></div>
            <div className="surface absolute right-[-2%] top-[4%] z-20 hidden w-44 rounded-3xl p-4 sm:block md:right-[-4%] md:top-[8%]"><div className="flex items-center gap-2 text-xs font-bold text-[#315443]"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#e1eee6]"><Leaf size={14} /></span> Nest note</div><p className="mt-3 text-xs leading-5 text-[#718076]">Your smallest repeatable choice is often your most powerful one.</p></div>
          </div>
        </div>
        <div className="container flex items-center gap-4 pb-8 text-[.66rem] uppercase tracking-[.18em] text-[#94a198]"><span className="h-px flex-1 bg-[#1f4b3a]/10" /><span>01 / A calmer way forward</span></div>
      </section>

      <section className="section-space bg-[#17362a] text-[#f5f1e9]">
        <div className="container grid gap-14 md:grid-cols-[.78fr_1.22fr] md:items-start">
          <div className="md:sticky md:top-28"><SectionEyebrow light>The planet needs better choices</SectionEyebrow><h2 className="display mt-6 max-w-md text-[clamp(2.6rem,5vw,5rem)]">The future is shaped in the ordinary.</h2><p className="mt-7 max-w-sm text-base leading-7 text-[#bcd0be]">Not by one perfect decision, but by the quiet patterns we make easier to repeat — at home, on the road, and in the choices we share.</p><KickerLink href="/living"><span className="text-[#e8cda8]">See the everyday playbook</span></KickerLink></div>
          <div className="grid gap-3 sm:grid-cols-3"><StatCard value="73%" label="of people are becoming more conscious of environmental choices" note="Illustrative demo statistic" accent="green" /><StatCard value="42%" label="potential reduction through smarter everyday habits" note="Illustrative demo statistic" accent="clay" /><StatCard value="1.2B+" label="people influenced by sustainability initiatives" note="Illustrative demo statistic" accent="cream" /></div>
        </div>
      </section>

      <section className="section-space bg-[#f5f1e9]">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionEyebrow>What is EcoNest?</SectionEyebrow><h2 className="display mt-5 max-w-xl text-[clamp(2.7rem,5vw,5rem)] text-[#1f4b3a]">Make the better choice feel closer.</h2></div><p className="max-w-sm text-sm leading-7 text-[#6b786f]">A digital field guide for people who want the context, confidence, and community to live a little lighter.</p></div>
          <div className="mt-12 grid gap-3 md:grid-cols-4">{pillars.map((item, index) => { const Icon = item.icon; return <Link key={item.title} href={index === 0 ? "/living" : index === 1 ? "/impact" : "/about"} className="group surface rounded-[1.7rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white md:p-6"><div className={`grid h-12 w-12 place-items-center rounded-2xl ${item.tone} text-[#1f4b3a]`}><Icon size={21} strokeWidth={1.7} /></div><div className="mt-14 flex items-start justify-between gap-2"><h3 className="display max-w-[12ch] text-2xl text-[#1f4b3a]">{item.title}</h3><ArrowUpRight size={17} className="mt-1 text-[#86a091] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div><p className="mt-4 text-sm leading-6 text-[#758177]">{item.body}</p></Link>; })}</div>
        </div>
      </section>

      <section className="section-space bg-[#e8eee6]">
        <div className="container grid gap-12 md:grid-cols-[.65fr_1.35fr] md:items-center"><div><SectionEyebrow>How EcoNest works</SectionEyebrow><h2 className="display mt-5 max-w-sm text-[clamp(2.6rem,5vw,4.7rem)] text-[#1f4b3a]">See the habit. Change the pattern.</h2><p className="mt-6 max-w-sm text-sm leading-7 text-[#6c7c71]">A simple journey from awareness to action — designed to help momentum feel visible.</p></div><div className="relative"><div className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-[#2f8f68]/25 md:block" /><div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">{journey.map(([number, title, body]) => <div key={number} className="relative"><div className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-[#2f8f68]/30 bg-[#e8eee6] font-['Space_Grotesk'] text-sm font-bold text-[#2f8f68]">{number}</div><h3 className="mt-6 text-lg font-bold text-[#1f4b3a]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6b7b70]">{body}</p></div>)}</div></div></div>
      </section>

      <section className="section-space bg-[#f5f1e9]">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div className="surface-dark relative overflow-hidden rounded-[2rem] p-6 text-[#f5f1e9] md:p-8"><div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-[#a7c8b0]/20" /><div className="relative flex items-center justify-between"><div><SectionEyebrow light>Impact preview</SectionEyebrow><div className="mt-4 flex items-end gap-2"><span className="display text-6xl">78</span><span className="mb-2 text-sm text-[#a7c8b0]">/ 100 score</span></div></div><ProgressRing value={78} label="nest score" color="#8fb59b" size={116} /></div><div className="mt-10 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white/7 p-4"><div className="flex items-center justify-between text-xs text-[#bdd1c0]"><span>Energy</span><SunMedium size={14} /></div><div className="mt-4 h-1.5 rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-[#e8c99f]" /></div><div className="mt-2 text-sm font-bold">-12.8%</div></div><div className="rounded-2xl bg-white/7 p-4"><div className="flex items-center justify-between text-xs text-[#bdd1c0]"><span>Water</span><Droplets size={14} /></div><div className="mt-4 h-1.5 rounded-full bg-white/10"><div className="h-full w-[52%] rounded-full bg-[#8fb59b]" /></div><div className="mt-2 text-sm font-bold">-8.4%</div></div><div className="rounded-2xl bg-white/7 p-4"><div className="flex items-center justify-between text-xs text-[#bdd1c0]"><span>Waste</span><Recycle size={14} /></div><div className="mt-4 h-1.5 rounded-full bg-white/10"><div className="h-full w-[82%] rounded-full bg-[#d9b88e]" /></div><div className="mt-2 text-sm font-bold">+22.1%</div></div><div className="rounded-2xl bg-white/7 p-4"><div className="flex items-center justify-between text-xs text-[#bdd1c0]"><span>Carbon</span><Wind size={14} /></div><div className="mt-4 h-1.5 rounded-full bg-white/10"><div className="h-full w-[60%] rounded-full bg-[#a7c8b0]" /></div><div className="mt-2 text-sm font-bold">-16.2%</div></div></div><div className="mt-6 text-[.65rem] uppercase tracking-[.15em] text-[#9bb6a1]">Illustrative front-end demonstration</div></div><div><SectionEyebrow>Make progress visible</SectionEyebrow><h2 className="display mt-5 max-w-lg text-[clamp(2.7rem,5vw,5rem)] text-[#1f4b3a]">Good intentions need a signal.</h2><p className="mt-6 max-w-md text-base leading-8 text-[#69786e]">EcoNest turns everyday actions into an understandable picture: where you are, where you are moving, and what is worth trying next.</p><div className="mt-8"><KickerLink href="/impact">Explore the impact room</KickerLink></div></div></div>
      </section>

      <section className="section-space bg-[#f0e5d7]">
        <div className="container grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center"><div><SectionEyebrow>New / monthly consumption analysis</SectionEyebrow><h2 className="display mt-5 max-w-md text-[clamp(2.7rem,5vw,5rem)] text-[#5a3d2a]">See your month. Choose your next move.</h2><p className="mt-6 max-w-md text-base leading-8 text-[#806b5a]">Enter your previous month’s consumption details and let EcoNest identify your environmental impact and suggest practical ways to reduce it.</p><Link href="/analyze" className="btn-primary mt-8 !bg-[#5a3d2a] hover:!bg-[#8e5638]">Analyze my month <ArrowUpRight size={15} /></Link></div><div className="relative overflow-hidden rounded-[2rem] bg-[#17362a] p-6 text-[#f5f1e9] md:p-8"><div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#a7c8b0]/20" /><div className="relative"><div className="eyebrow !text-[#a7c8b0]">Five signals / one picture</div><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">{[["⚡", "Energy"], ["💧", "Water"], ["🚗", "Travel"], ["🍽️", "Food"], ["♻️", "Waste"]].map(([icon, label]) => <div key={label} className="rounded-2xl bg-white/8 p-3"><div className="text-xl">{icon}</div><div className="mt-5 text-xs font-bold text-[#d7e4d8]">{label}</div><div className="mt-2 h-1 rounded-full bg-[#8fb59b]/60" /></div>)}</div><div className="mt-8 flex items-center justify-between gap-4 rounded-2xl bg-white/8 p-4"><span className="text-sm text-[#c5d6c6]">Personalized recommendations from your own pattern.</span><ArrowUpRight className="shrink-0 text-[#8fb59b]" size={18} /></div></div></div></div>
      </section>

      <section className="section-space bg-[#e8eee6]">
        <div className="container"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionEyebrow>Sustainability themes</SectionEyebrow><h2 className="display mt-5 max-w-xl text-[clamp(2.7rem,5vw,5rem)] text-[#1f4b3a]">Zoom out. Stay practical.</h2></div><Link href="/living" className="btn-secondary">Browse the living guide <ArrowUpRight size={15} /></Link></div><div className="mt-12 grid gap-3 md:grid-cols-3">{[["Clean energy", SunMedium, "Make the invisible flow of energy easier to notice."], ["Responsible consumption", Recycle, "Buy less blindly. Keep more intentionally."], ["Climate action", Waves, "Turn concern into the next small, specific action."], ["Clean water", Droplets, "Treat every drop as part of the larger system."], ["Sustainable communities", HomeIcon, "Design better defaults together."], ["Life on land", Leaf, "Protect the living texture around us."]].map(([title, Icon, body], i) => { const I = Icon as typeof Leaf; return <div key={title as string} className="group flex min-h-40 flex-col justify-between rounded-3xl border border-[#1f4b3a]/10 bg-white/45 p-5 transition hover:-translate-y-1 hover:bg-white"><div className="flex items-start justify-between"><span className="font-['Space_Grotesk'] text-xs font-bold text-[#9aa99e]">0{i + 1}</span><I size={20} strokeWidth={1.5} className="text-[#2f8f68]" /></div><div><h3 className="text-lg font-bold text-[#1f4b3a]">{title as string}</h3><p className="mt-2 text-sm leading-6 text-[#718077]">{body as string}</p></div></div>; })}</div></div>
      </section>

      <section className="relative overflow-hidden bg-[#f0e5d7] py-20 md:py-28"><div className="absolute -left-10 -top-36 h-72 w-72 rounded-full border border-[#b6754e]/20" /><div className="absolute -bottom-44 right-10 h-96 w-96 rounded-full border border-[#b6754e]/20" /><div className="container relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><SectionEyebrow>Your choices shape tomorrow</SectionEyebrow><h2 className="display mt-5 max-w-3xl text-[clamp(3rem,7vw,7rem)] text-[#5a3d2a]">Start with one signal.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-[#806b5a]">A more sustainable future is built from choices that can live with you.</p></div><Link href="/dashboard" className="btn-primary !bg-[#5a3d2a] hover:!bg-[#8e5638]">Explore EcoNest <ArrowUpRight size={16} /></Link></div></section>
    </div>
  );
}
