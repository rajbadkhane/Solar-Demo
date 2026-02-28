import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialFloat } from "@/components/SocialFloat";

const scenarios = [
  { size: "3kW Home", monthlyUnits: "360-420", savings: "INR 2,700 - 3,500", payback: "4.5 - 5 years" },
  { size: "5kW Home", monthlyUnits: "650-750", savings: "INR 4,800 - 6,100", payback: "3.5 - 4.5 years" },
  { size: "10kW Small Business", monthlyUnits: "1,250-1,500", savings: "INR 10,000 - 14,000", payback: "3 - 4 years" },
  { size: "50kW Commercial", monthlyUnits: "6,000-7,500", savings: "INR 55,000 - 85,000", payback: "2.8 - 3.6 years" },
];

const financeExamples = [
  { title: "Low Upfront EMI", detail: "5kW system with subsidy adjusted and monthly EMI from INR 2,899." },
  { title: "Capex Purchase", detail: "Direct purchase model with faster lifetime return and lower long-term cost." },
  { title: "Business Tax Benefit", detail: "Commercial systems can optimize taxable income under applicable depreciation norms." },
];

const assumptions = [
  "Generation values vary by location, orientation, and seasonal irradiance.",
  "Savings depend on actual tariff slab and load consumption behavior.",
  "Subsidy eligibility is policy-linked and subject to applicable rules.",
  "Preventive maintenance is required to sustain expected output curve.",
];

export default function SavingsPage() {
  return (
    <div className="min-h-screen w-full">
      <SiteHeader active="/savings" />
      <main className="solar-container pb-20 pt-10">
        <Reveal>
          <section className="section-glow overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#112b7d,#2147aa)] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">Savings Center</p>
            <h1 className="mt-2 text-5xl font-bold">Understand cost, subsidy, and return before investing</h1>
            <p className="mt-4 max-w-3xl text-blue-100">We map your expected generation to actual bill bands and present realistic savings windows instead of inflated promises.</p>
          </section>
        </Reveal>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {scenarios.map((item, i) => (
            <Reveal key={item.size} delayMs={i * 120}>
              <article className="soft-card section-glow p-6">
                <h2 className="text-3xl font-bold text-slate-900">{item.size}</h2>
                <div className="mt-4 grid gap-2 text-sm text-slate-700">
                  <p className="list-chip rounded-lg px-3 py-2"><strong>Generation:</strong> {item.monthlyUnits} units/month</p>
                  <p className="list-chip rounded-lg px-3 py-2"><strong>Estimated savings:</strong> {item.savings}/month</p>
                  <p className="list-chip rounded-lg px-3 py-2"><strong>Payback:</strong> {item.payback}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {financeExamples.map((example, i) => (
            <Reveal key={example.title} delayMs={i * 110}>
              <article className="soft-card section-glow p-6">
                <h2 className="text-2xl font-bold text-blue-900">{example.title}</h2>
                <p className="mt-3 text-sm text-slate-700">{example.detail}</p>
              </article>
            </Reveal>
          ))}
        </section>

        <Reveal delayMs={280}>
          <section className="soft-card section-glow mt-8 p-7">
            <h2 className="text-4xl font-bold text-slate-900">What influences savings the most?</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="list-chip rounded-lg px-3 py-2">Roof orientation and shadow pattern across seasons</li>
              <li className="list-chip rounded-lg px-3 py-2">DISCOM tariff slab and sanctioned load behavior</li>
              <li className="list-chip rounded-lg px-3 py-2">System component quality and inverter efficiency band</li>
              <li className="list-chip rounded-lg px-3 py-2">Preventive maintenance and panel cleaning routine</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="solar-btn px-6 py-3 text-sm">Get Personalized Savings Report</Link>
              <Link href="/faq" className="blue-btn px-6 py-3 text-sm">Read Financial FAQ</Link>
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={320}>
          <section className="soft-card section-glow mt-8 p-7">
            <h2 className="text-4xl font-bold text-slate-900">Calculation assumptions and notes</h2>
            <div className="mt-4 space-y-2">
              {assumptions.map((note, i) => (
                <Reveal key={note} delayMs={i * 90}>
                  <p className="list-chip rounded-lg px-3 py-2 text-sm text-slate-800">{note}</p>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
      <SocialFloat />
    </div>
  );
}
