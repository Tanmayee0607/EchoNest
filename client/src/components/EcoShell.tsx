/* Living Systems Editorial: shared shell uses an asymmetrical reading rail, mineral surfaces, fern-signal actions, and quiet environmental annotations. */
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, ArrowUpRight, ChevronDown, Leaf, Menu, X } from "lucide-react";

export const assetUrls = {
  hero: "/manus-storage/econest-hero-earth_f51ab491.jpg",
  living: "/manus-storage/econest-living-editorial_78b6bec3.jpg",
  impact: "/manus-storage/econest-impact-landscape_c401714e.jpg",
  community: "/manus-storage/econest-community-hands_57a83d9f.jpg",
  mark: "/manus-storage/econest-leaf-orbit_c20361a0.png",
};

const navItems = [
  { label: "The idea", href: "/about" },
  { label: "Living", href: "/living" },
  { label: "Impact", href: "/impact" },
  { label: "Analyze", href: "/analyze" },
  { label: "Community", href: "/community" },
];

export function BrandMark({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="EcoNest home">
      <span className={`grid place-items-center rounded-full ${compact ? "h-8 w-8" : "h-9 w-9"} ${light ? "bg-white/10" : "bg-[#e1eee6]"}`}>
        <img src={assetUrls.mark} alt="" className={`${compact ? "h-5 w-5" : "h-6 w-6"}`} />
      </span>
      <span className={`font-['Space_Grotesk'] text-[1.1rem] font-bold tracking-[-.07em] ${light ? "text-[#f8f4ec]" : "text-[#1f4b3a]"}`}><span>Eco</span><span className={`${light ? "text-[#a7c8b0]" : "text-[#2f8f68]"}`}>Nest</span></span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const darkPage = location === "/impact" || location === "/vision";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-[#f5f1e9]/92 shadow-[0_8px_30px_rgba(31,75,58,.08)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="container flex h-[76px] items-center justify-between">
        <BrandMark light={!scrolled && darkPage} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`rounded-full px-3.5 py-2 text-[.76rem] font-semibold transition-colors ${location === item.href ? "bg-[#e0ece4] text-[#1f4b3a]" : (!scrolled && darkPage ? "text-[#e8eee6] hover:bg-white/10 hover:text-white" : "text-[#526158] hover:bg-white/70 hover:text-[#1f4b3a]")}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/dashboard" className={`ml-3 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[.76rem] font-bold shadow-sm transition hover:-translate-y-0.5 ${!scrolled && darkPage ? "bg-[#f5f1e9] text-[#1f4b3a] hover:bg-white" : "bg-[#1f4b3a] text-[#f8f4ec] hover:bg-[#2f8f68]"}`}>
            Open dashboard <ArrowUpRight size={14} />
          </Link>
        </nav>
        <button className={`icon-btn lg:hidden ${!scrolled && darkPage ? "border-white/20 bg-white/10 text-white" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="container pb-4 lg:hidden">
          <nav className="surface grid gap-1 rounded-3xl p-3" aria-label="Mobile navigation">
            {navItems.concat([{ label: "Dashboard", href: "/dashboard" }, { label: "Challenges", href: "/challenges" }, { label: "Resources", href: "/resources" }]).map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-[#315443] hover:bg-[#e8eee6]">
                {item.label}<ArrowUpRight size={15} />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#17362a] text-[#f5f1e9]">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.4fr_.8fr_.8fr_.9fr] md:py-20">
        <div>
          <BrandMark light />
          <p className="mt-6 max-w-xs text-sm leading-7 text-[#bdcdbf]">A calmer way to see the habits, signals, and small shifts that shape a more sustainable future.</p>
          <div className="mt-8 flex items-center gap-2 text-[.68rem] font-bold uppercase tracking-[.18em] text-[#8fb59b]"><span className="h-2 w-2 rounded-full bg-[#7ec69d]" /> Concept site · Illustrative data</div>
        </div>
        <div>
          <div className="eyebrow !text-[#8fb59b]">Explore</div>
          <div className="mt-4 grid gap-3 text-sm text-[#d8e4d8]">
            <Link href="/about" className="hover:text-white">About EcoNest</Link>
            <Link href="/living" className="hover:text-white">Sustainable living</Link>
            <Link href="/impact" className="hover:text-white">Eco impact</Link>
            <Link href="/vision" className="hover:text-white">Our vision</Link>
          </div>
        </div>
        <div>
          <div className="eyebrow !text-[#8fb59b]">Make it practical</div>
          <div className="mt-4 grid gap-3 text-sm text-[#d8e4d8]">
            <Link href="/dashboard" className="hover:text-white">Eco dashboard</Link>
            <Link href="/challenges" className="hover:text-white">Challenges</Link>
            <Link href="/resources" className="hover:text-white">Resource library</Link>
            <Link href="/community" className="hover:text-white">Community</Link>
          </div>
        </div>
        <div>
          <div className="eyebrow !text-[#8fb59b]">Stay curious</div>
          <p className="mt-4 text-sm leading-6 text-[#bdcdbf]">One thoughtful note every few weeks. No noise, just useful signals.</p>
          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e6c9a4] hover:text-white">Write to the nest <ArrowRight size={15} /></Link>
        </div>
      </div>
      <div className="container flex flex-col gap-3 border-t border-white/10 py-5 text-[.68rem] uppercase tracking-[.12em] text-[#8fa799] md:flex-row md:items-center md:justify-between">
        <span>© 2026 EcoNest concept</span><span>Built for better everyday choices</span>
      </div>
    </footer>
  );
}

export function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`eyebrow flex items-center gap-3 ${light ? "!text-[#a7c8b0]" : ""}`}><span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-[#a7c8b0]" : "bg-[#2f8f68]"}`} />{children}</div>;
}

export function EcoSignal({ dark = false }: { dark?: boolean }) {
  return <div aria-hidden="true" className={`eco-signal pointer-events-none absolute left-1 top-1/2 hidden h-40 w-40 -translate-y-1/2 md:block lg:left-10 ${dark ? "eco-signal-dark" : ""}`}><div className="eco-signal-orbit eco-signal-orbit-a" /><div className="eco-signal-orbit eco-signal-orbit-b" /><div className="eco-signal-core"><span className="eco-signal-sprout">✦</span></div><span className="eco-signal-leaf eco-signal-leaf-a">◒</span><span className="eco-signal-leaf eco-signal-leaf-b">◓</span></div>;
}

export function PageIntro({ label, title, body, dark = false }: { label: string; title: ReactNode; body: string; dark?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${dark ? "bg-[#17362a] text-[#f5f1e9]" : "bg-[#e7eee7] text-[#1f2a26]"}`}>
      <EcoSignal dark={dark} />
      <div className="container relative z-10 grid min-h-[390px] items-end gap-8 pb-14 pt-36 md:grid-cols-[.85fr_1.15fr] md:pb-20">
        <div className="absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-[#2f8f68]/15 md:h-[460px] md:w-[460px]" />
        <div className="absolute -right-14 -top-14 h-[250px] w-[250px] rounded-full border border-[#2f8f68]/15" />
        <SectionEyebrow light={dark}>{label}</SectionEyebrow>
        <div className="relative md:col-start-2">
          <h1 className="display max-w-3xl text-[clamp(2.7rem,7vw,6.5rem)]">{title}</h1>
          <p className={`mt-6 max-w-xl text-lg leading-8 ${dark ? "text-[#cbdacb]" : "text-[#5d6d63]"}`}>{body}</p>
        </div>
      </div>
    </div>
  );
}

export function StatCard({ value, label, note, accent = "green" }: { value: string; label: string; note?: string; accent?: "green" | "clay" | "cream" }) {
  const color = accent === "clay" ? "#b6754e" : accent === "cream" ? "#e9d5a7" : "#2f8f68";
  return <div className="surface relative overflow-hidden rounded-3xl p-5 md:p-6"><span className="absolute right-5 top-5 h-2 w-2 rounded-full" style={{ backgroundColor: color }} /><div className="display text-4xl text-[#1f4b3a] md:text-5xl">{value}</div><div className="mt-3 max-w-[18ch] text-sm font-semibold leading-5 text-[#40584b]">{label}</div>{note && <div className="mt-4 text-[.68rem] uppercase tracking-[.14em] text-[#8a968d]">{note}</div>}</div>;
}

export function ProgressRing({ value, label, color = "#2f8f68", size = 120 }: { value: number; label: string; color?: string; size?: number }) {
  const r = 43; const circumference = 2 * Math.PI * r; const dash = circumference * value / 100;
  return <div className="relative shrink-0" style={{ width: size, height: size }}><svg viewBox="0 0 100 100" className="h-full w-full -rotate-90"><circle cx="50" cy="50" r={r} fill="none" stroke="rgba(47,143,104,.12)" strokeWidth="7" /><circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" strokeDasharray={`${dash} ${circumference - dash}`} /></svg><div className="absolute inset-0 grid place-items-center text-center"><strong className="display text-xl text-[#1f4b3a]">{value}<span className="text-sm">%</span></strong><span className="absolute bottom-2 text-[.55rem] font-bold uppercase tracking-[.12em] text-[#7a887d]">{label}</span></div></div>;
}

export function TrendChart({ points = [32, 39, 34, 48, 52, 64, 72], color = "#2f8f68" }: { points?: number[]; color?: string }) {
  const max = Math.max(...points); const min = Math.min(...points); const width = 420; const height = 150;
  const coords = points.map((point, i) => `${(i / (points.length - 1)) * width},${height - ((point - min) / (max - min || 1)) * (height - 22) - 10}`).join(" ");
  return <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full overflow-visible" role="img" aria-label="Illustrative sustainability progress trend"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor={color} stopOpacity=".22" /><stop offset="1" stopColor={color} stopOpacity="0" /></linearGradient></defs><path d={`M 0 ${height} L ${coords.replaceAll(" ", " L ")} L ${width} ${height} Z`} fill="url(#chartFill)" /><polyline points={coords} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />{points.map((point, i) => <circle key={i} cx={(i / (points.length - 1)) * width} cy={height - ((point - min) / (max - min || 1)) * (height - 22) - 10} r="4" fill="#fbf9f5" stroke={color} strokeWidth="2" />)}</svg>;
}

export function KickerLink({ href, children }: { href: string; children: ReactNode }) { return <Link href={href} className="inline-flex items-center gap-2 text-sm font-bold text-[#1f4b3a] transition hover:gap-3">{children}<ArrowRight size={15} /></Link>; }

export function Tag({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "clay" | "dark" }) { const styles = tone === "clay" ? "bg-[#f1e1d6] text-[#8e5638]" : tone === "dark" ? "bg-[#e1ece5] text-[#1f4b3a]" : "bg-[#dcebe2] text-[#2f7759]"; return <span className={`inline-flex rounded-full px-2.5 py-1 text-[.62rem] font-bold uppercase tracking-[.12em] ${styles}`}>{children}</span>; }

export function MiniOrbit() { return <div className="relative h-24 w-24 shrink-0"><div className="absolute inset-2 rounded-full border border-[#2f8f68]/30" /><div className="absolute inset-0 rotate-45 rounded-full border border-[#2f8f68]/20" /><div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f8f68] shadow-[0_0_0_7px_rgba(47,143,104,.10)]" /><Leaf className="absolute bottom-1 right-0 text-[#2f8f68]" size={20} strokeWidth={1.5} /></div>; }

export function SelectPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) { return <button onClick={onClick} className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold transition ${active ? "bg-[#1f4b3a] text-[#f8f4ec]" : "bg-white/65 text-[#607267] hover:bg-white"}`}>{label}{active && <ChevronDown size={13} />}</button>; }
