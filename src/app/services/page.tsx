import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialFloat } from "@/components/SocialFloat";

const serviceBlocks = [
  {
    name: "Residential Rooftop Solar",
    details: "End-to-end setup for homes, villas, and apartment rooftops with subsidy filing support.",
    points: ["1kW to 25kW design range", "Subsidy documentation", "Net-metering support", "Performance handover report"],
  },
  {
    name: "Commercial And Industrial EPC",
    details: "High-load designs for shops, institutions, and factories with fast execution planning.",
    points: ["25kW to 2MW EPC", "Electrical safety compliance", "Generation projection", "Milestone-based delivery"],
  },
  {
    name: "Hybrid And Battery Systems",
    details: "Backup-first architecture for unstable supply zones and critical operations.",
    points: ["Hybrid inverter integration", "Battery sizing", "Critical load isolation", "Smart backup profile"],
  },
  {
    name: "Franchise Partner Program",
    details: "Business model support for local entrepreneurs with project and technical backend.",
    points: ["Territory planning", "Branding assets", "Lead funnel guidance", "Commission + margin framework"],
  },
];

const amcPlans = [
  { name: "Essential AMC", visits: "2 visits/year", coverage: "Cleaning + basic checks", bestFor: "Homes < 5kW" },
  { name: "Performance AMC", visits: "4 visits/year", coverage: "Cleaning + preventive service", bestFor: "Homes and small shops" },
  { name: "Enterprise O&M", visits: "Monthly", coverage: "Monitoring + corrective maintenance", bestFor: "Commercial clients" },
];

const executionScopes = [
  "Site survey, roof audit, and engineering blueprint",
  "Component procurement from approved product list",
  "Civil + electrical installation with safety checklist",
  "Net-metering, documentation, and commissioning support",
];

const availableProducts = [
  {
    title: "Solar Inverters",
    detail: "On-grid and hybrid inverter options for residential, shop, and farm usage with stable conversion efficiency.",
  },
  {
    title: "Solar Batteries",
    detail: "Tubular and lithium battery solutions for backup support, hybrid systems, and evening load stability.",
  },
  {
    title: "Solar Panels",
    detail: "High-efficiency mono panel ranges for rooftop and ground-mounted installations with long-term performance.",
  },
  {
    title: "Solar Water Heaters",
    detail: "Domestic and commercial hot-water systems designed for homes, hostels, and institutional usage.",
  },
  {
    title: "Solar Water Pumps",
    detail: "Submersible and surface pump kits for farm irrigation, borewell lifting, and rural water applications.",
  },
  {
    title: "Solar Street Lights",
    detail: "All-in-one and modular street lighting systems for villages, campuses, and private roads.",
  },
  {
    title: "Solar Aata Chakki",
    detail: "Solar-powered flour mill setup for rural entrepreneurship and low-cost community processing usage.",
  },
];

const capacityBands = [
  { segment: "Home Installations", range: "1kW to 10kW", note: "Roof-friendly systems for monthly bill reduction and subsidy compatibility." },
  { segment: "Shops and Small Commercial", range: "3kW to 30kW", note: "Daytime load optimization for business electricity cost control." },
  { segment: "Farm and Agro Loads", range: "2kW to 50kW", note: "Pump, storage, and utility support for agricultural energy demands." },
  { segment: "Large Commercial/Institutional", range: "25kW to 100kW", note: "Structured project execution for schools, plants, and office facilities." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full">
      <SiteHeader active="/services" />
      <main className="solar-container pb-20 pt-10">
        <Reveal>
          <section className="section-glow overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#112b7d,#2147aa)] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">Service Catalog</p>
            <h1 className="mt-2 text-5xl font-bold">Solar services built for every customer type</h1>
            <p className="mt-4 max-w-3xl text-blue-100">Agnihotri Solar System delivers structured solar programs for homeowners, institutions, and businesses with transparent quality, warranty, and post-install support.</p>
          </section>
        </Reveal>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {serviceBlocks.map((service, i) => (
            <Reveal key={service.name} delayMs={i * 100}>
              <article className="soft-card section-glow p-6">
                <h2 className="text-3xl font-bold text-slate-900">{service.name}</h2>
                <p className="mt-3 text-sm text-slate-700">{service.details}</p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="list-chip rounded-lg px-3 py-2 text-sm text-slate-800">{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </section>

        <Reveal delayMs={220}>
          <section className="soft-card section-glow mt-8 p-7">
            <h2 className="text-4xl font-bold text-slate-900">What is included in every project</h2>
            <div className="mt-4 grid gap-2">
              {executionScopes.map((scope, i) => (
                <Reveal key={scope} delayMs={i * 80}>
                  <p className="list-chip rounded-lg px-3 py-2 text-sm text-slate-800">{i + 1}. {scope}</p>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={240}>
          <section className="soft-card section-glow mt-8 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-800">Available Products and Systems</p>
            <h2 className="mt-2 text-4xl font-bold text-slate-900">Inverter, battery, panel, pump, street light and more</h2>
            <p className="mt-3 text-sm text-slate-700">We supply and install complete solar equipment lineup based on site type, load profile, and budget model.</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {availableProducts.map((item, i) => (
                <Reveal key={item.title} delayMs={i * 70}>
                  <article className="list-chip rounded-xl p-4">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-700">{item.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={260}>
          <section className="mt-8 overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#112b7d,#2147aa)] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">Installation Capacity</p>
            <h2 className="mt-2 text-4xl font-bold">From 1kW to 100kW for home, shop, and farm</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {capacityBands.map((band, i) => (
                <Reveal key={band.segment} delayMs={i * 90}>
                  <article className="rounded-xl border border-white/25 bg-white/10 p-4">
                    <p className="text-lg font-bold text-yellow-300">{band.segment}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{band.range}</p>
                    <p className="mt-1 text-sm text-blue-100">{band.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={260}>
          <section className="mt-8 overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#112b7d,#2147aa)] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">After-Sales Programs</p>
            <h2 className="mt-2 text-4xl font-bold">AMC and O&M support plans</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {amcPlans.map((plan, i) => (
                <Reveal key={plan.name} delayMs={i * 90}>
                  <article className="rounded-xl border border-white/25 bg-white/10 p-4">
                    <p className="text-xl font-bold text-yellow-300">{plan.name}</p>
                    <p className="mt-2 text-sm text-blue-100"><strong>Visits:</strong> {plan.visits}</p>
                    <p className="mt-1 text-sm text-blue-100"><strong>Coverage:</strong> {plan.coverage}</p>
                    <p className="mt-1 text-sm text-blue-100"><strong>Best for:</strong> {plan.bestFor}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={280}>
          <section className="soft-card section-glow mt-8 p-7">
            <h2 className="text-4xl font-bold text-slate-900">Need a custom proposal?</h2>
            <p className="mt-3 text-sm text-slate-700">Share sanctioned load, roof details, and monthly electricity consumption. Our engineering team will prepare a project-ready proposal with bill savings and expected payback.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="solar-btn px-6 py-3 text-sm">Request Detailed Proposal</Link>
              <Link href="/process" className="blue-btn px-6 py-3 text-sm">Understand Process</Link>
            </div>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
      <SocialFloat />
    </div>
  );
}
