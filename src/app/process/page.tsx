import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialFloat } from "@/components/SocialFloat";

const phases = [
  {
    title: "01. Discovery Survey",
    desc: "Roof inspection, shade analysis, panel layout, sanctioned load mapping, and baseline bill review.",
  },
  {
    title: "02. Engineering And Quote",
    desc: "System sizing, inverter architecture, structure specification, and a full transparent quote.",
  },
  {
    title: "03. Documentation",
    desc: "Subsidy, DISCOM, and net-metering paperwork with milestone timeline and customer checklist.",
  },
  {
    title: "04. Installation",
    desc: "Structure fitment, module mounting, DC/AC cabling, inverter setup, and earthing with safety checks.",
  },
  {
    title: "05. Commissioning",
    desc: "Generation testing, handover pack, app onboarding, and post-install service protocol launch.",
  },
];

const qaChecks = [
  "Torque check for module and structure fasteners",
  "Insulation resistance and polarity verification",
  "Earthing continuity and SPD protection check",
  "Inverter communication and generation validation",
];

const documentationPack = [
  "System single-line diagram (SLD)",
  "Warranty and product datasheets",
  "Commissioning and safety checklist",
  "Customer handover and service contact sheet",
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen w-full">
      <SiteHeader active="/process" />
      <main className="solar-container pb-20 pt-10">
        <Reveal>
          <section className="soft-card section-glow p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-800">Execution Workflow</p>
            <h1 className="mt-2 text-5xl font-bold text-slate-900">How we execute a complete rooftop solar project</h1>
            <p className="mt-3 max-w-3xl text-slate-700">Every stage is mapped with role ownership, quality checkpoints, and customer approvals so projects stay predictable and risk controlled.</p>
          </section>
        </Reveal>

        <section className="mt-8 space-y-4">
          {phases.map((phase, i) => (
            <Reveal key={phase.title} delayMs={i * 110}>
              <article className="soft-card section-glow flex flex-col gap-3 p-6 md:flex-row md:items-start md:justify-between">
                <h2 className="text-2xl font-bold text-blue-900 md:w-1/3">{phase.title}</h2>
                <p className="text-sm text-slate-700 md:w-2/3">{phase.desc}</p>
              </article>
            </Reveal>
          ))}
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <Reveal delayMs={180}>
            <article className="soft-card section-glow p-7">
              <h2 className="text-4xl font-bold text-slate-900">Quality checkpoints</h2>
              <div className="mt-4 space-y-2">
                {qaChecks.map((check, i) => (
                  <Reveal key={check} delayMs={i * 90}>
                    <p className="list-chip rounded-lg px-3 py-2 text-sm text-slate-800">{check}</p>
                  </Reveal>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delayMs={220}>
            <article className="soft-card section-glow p-7">
              <h2 className="text-4xl font-bold text-slate-900">Handover documents</h2>
              <div className="mt-4 space-y-2">
                {documentationPack.map((doc, i) => (
                  <Reveal key={doc} delayMs={i * 90}>
                    <p className="list-chip rounded-lg px-3 py-2 text-sm text-slate-800">{doc}</p>
                  </Reveal>
                ))}
              </div>
            </article>
          </Reveal>
        </section>

        <Reveal delayMs={260}>
          <section className="mt-8 overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#112b7d,#2147aa)] p-8 text-white md:p-10">
            <h2 className="text-4xl font-bold">Average install timeline: 7 to 15 days</h2>
            <p className="mt-3 text-blue-100">Commercial projects follow a customized milestone plan based on capacity, civil conditions, and statutory lead times.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="solar-btn px-6 py-3 text-sm">Book Site Survey</Link>
              <Link href="/services" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-1">See Service Types</Link>
            </div>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
      <SocialFloat />
    </div>
  );
}
