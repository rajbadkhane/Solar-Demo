import Link from "next/link";
import { HeroParallax } from "@/components/HeroParallax";
import { HomeFranchiseForm } from "@/components/forms/HomeFranchiseForm";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialFloat } from "@/components/SocialFloat";

const featureCards = [
  {
    title: "Residential Rooftop",
    text: "From 1kW to 25kW with subsidy support, net-metering, and clean installation finish.",
    href: "/services",
  },
  {
    title: "Commercial EPC",
    text: "Structured delivery for offices, schools, factories, and retail projects up to MW scale.",
    href: "/services",
  },
  {
    title: "Transparent Billing",
    text: "Milestone-based invoice visibility, payment workflow, and customer-ready documentation.",
    href: "/billing-system",
  },
];

const journey = [
  "Site survey and load profiling",
  "System engineering and approvals",
  "Installation and commissioning",
  "Monitoring, service, and warranty care",
];

const trustStats = [
  { label: "Installations Delivered", value: "8,500+" },
  { label: "Customer Retention Rate", value: "96%" },
  { label: "Avg. Service TAT", value: "< 24 Hours" },
  { label: "Panel Performance Warranty", value: "25 Years" },
];

const customerTypes = [
  {
    title: "Homeowners",
    desc: "Reduce monthly electricity bills and protect against future tariff hikes with subsidy-backed systems.",
  },
  {
    title: "Shops And Offices",
    desc: "Stabilize operating expenses with predictable daytime generation and lower dependency on grid power.",
  },
  {
    title: "Schools And Hospitals",
    desc: "Run critical daytime loads on clean energy and improve sustainability profile for institutional impact.",
  },
];

const awardHighlights = [
  "Top-performing rooftop execution team across key MP zones (demo claim)",
  "Structured project governance with milestone-based transparency",
  "Service coverage model optimized for urban and tier-2 locations",
];

const emiPlans = [
  {
    name: "Starter Home Plan",
    system: "3kW Rooftop",
    projectCost: "INR 1,85,000",
    subsidy: "Up to INR 54,000",
    emi: "From INR 2,250 / month",
    tenure: "84 months",
  },
  {
    name: "Popular Family Plan",
    system: "5kW Rooftop",
    projectCost: "INR 2,75,000",
    subsidy: "Up to INR 78,000",
    emi: "From INR 2,899 / month",
    tenure: "96 months",
  },
  {
    name: "High Consumption Plan",
    system: "8kW Rooftop",
    projectCost: "INR 4,10,000",
    subsidy: "As applicable",
    emi: "From INR 4,850 / month",
    tenure: "96 months",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <SiteHeader active="/" />
      <main className="pb-20">
        <HeroParallax />

        <section className="solar-container py-8">
          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((card, i) => (
              <Reveal key={card.title} delayMs={i * 120}>
                <article className="soft-card section-glow p-6">
                  <h2 className="text-2xl font-bold text-slate-900">{card.title}</h2>
                  <p className="mt-3 text-sm text-slate-700">{card.text}</p>
                  <Link href={card.href} className="mt-5 inline-block text-sm font-semibold text-blue-900 hover:text-blue-700">Explore more</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="solar-container py-10">
          <Reveal>
            <div className="soft-card section-glow overflow-hidden p-7 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-800">Delivery Journey</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">A high-trust workflow from day one</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {journey.map((step, i) => (
                  <Reveal key={step} delayMs={i * 140}>
                    <div className="list-chip rounded-xl px-4 py-3 text-sm font-medium text-slate-800">{i + 1}. {step}</div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/process" className="blue-btn px-5 py-2.5 text-sm">See Full Process</Link>
                <Link href="/contact" className="solar-btn px-5 py-2.5 text-sm">Start Your Project</Link>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="solar-container py-4">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal delayMs={80}>
              <article className="section-glow overflow-hidden rounded-3xl border border-blue-900/20 bg-[linear-gradient(120deg,#112b7d,#2147aa)] p-7 text-white shadow-[0_14px_34px_rgba(17,40,109,0.26)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">Savings And Subsidy</p>
                <h2 className="mt-2 text-4xl font-bold">Check your annual return before install</h2>
                <p className="mt-3 text-sm text-blue-100">Use our estimation framework to compare project cost, subsidy, payback window, and generation performance.</p>
                <Link href="/savings" className="mt-6 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 hover:-translate-y-1">Open Savings Center</Link>
              </article>
            </Reveal>
            <Reveal delayMs={180}>
              <article className="soft-card section-glow p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-800">Support Desk</p>
                <h2 className="mt-2 text-4xl font-bold text-slate-900">Answers to every pre-install question</h2>
                <p className="mt-3 text-sm text-slate-700">Explore technical, billing, subsidy, and maintenance FAQs or directly talk with our support team.</p>
                <div className="mt-6 flex gap-3">
                  <Link href="/faq" className="blue-btn px-5 py-2.5 text-sm">Visit FAQ</Link>
                  <Link href="/contact" className="solar-btn px-5 py-2.5 text-sm">Talk To Expert</Link>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="solar-container py-10">
          <Reveal>
            <div className="soft-card section-glow overflow-hidden p-7 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-800">EMI and Finance</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">Pay monthly from your electricity savings</h2>
              <p className="mt-3 text-sm text-slate-700">
                Structured financing helps you install solar with lower upfront burden. Select a plan based on system size and expected monthly bill offset.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {emiPlans.map((plan, i) => (
                  <Reveal key={plan.name} delayMs={i * 100}>
                    <article className="rounded-2xl border border-blue-200 bg-[linear-gradient(180deg,#f4f8ff,#e9f1ff)] p-5 transition hover:-translate-y-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-800">{plan.name}</p>
                      <p className="mt-2 font-heading text-3xl font-bold text-slate-900">{plan.emi}</p>
                      <div className="mt-4 space-y-1.5 text-sm text-slate-700">
                        <p><strong>System:</strong> {plan.system}</p>
                        <p><strong>Project Cost:</strong> {plan.projectCost}</p>
                        <p><strong>Subsidy:</strong> {plan.subsidy}</p>
                        <p><strong>Tenure:</strong> {plan.tenure}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-slate-700">
                  EMI rates are indicative for demo presentation and depend on lender policy, credit profile, and final project scope.
                </p>
                <Link href="/contact" className="solar-btn px-6 py-2.5 text-sm">
                  Check My EMI Eligibility
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="solar-container py-10">
          <Reveal>
            <div className="soft-card section-glow p-7 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-800">Who We Serve</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">Solar programs for different customer goals</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {customerTypes.map((item, i) => (
                  <Reveal key={item.title} delayMs={i * 100}>
                    <article className="list-chip rounded-xl p-4">
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="solar-container py-2">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((stat, i) => (
              <Reveal key={stat.label} delayMs={i * 90}>
                <article className="soft-card section-glow p-5 text-center">
                  <p className="font-heading text-3xl font-bold text-blue-900">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-600">{stat.label}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="franchise-form" className="solar-container py-6">
          <Reveal>
            <HomeFranchiseForm />
          </Reveal>
        </section>

        <section className="solar-container py-4">
          <Reveal>
            <div className="soft-card section-glow p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-800">Why This Demo Stands Out</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">World-class visual and content presentation layer</h2>
              <div className="mt-4 space-y-2">
                {awardHighlights.map((item, index) => (
                  <Reveal key={item} delayMs={index * 90}>
                    <p className="list-chip rounded-lg px-3 py-2 text-sm text-slate-800">{item}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="solar-container py-12">
          <Reveal>
            <div className="section-glow rounded-3xl bg-[linear-gradient(140deg,#dfe5fb,#e7e9f8)] p-8 text-center md:p-12">
              <p className="text-lg text-slate-700">Save electricity bills by switching to solar</p>
              <Link href="/contact" className="blue-btn mt-5 inline-block px-10 py-4 text-xl font-bold animate-pulse">
                Book a Free Consultation
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
      <SocialFloat />
    </div>
  );
}
