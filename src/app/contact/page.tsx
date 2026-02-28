import { Reveal } from "@/components/Reveal";
import { ContactConsultationForm } from "@/components/forms/ContactConsultationForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialFloat } from "@/components/SocialFloat";

const beforeCallChecklist = [
  "Recent monthly electricity bill photo or units consumed",
  "Approximate roof area and roof type (RCC / metal / mixed)",
  "City and location details for generation estimate",
  "Preferred budget model (capex / finance / phased)",
];

const branches = [
  { city: "Bhopal", line: "Head Office and central operations desk" },
  { city: "Sehore", line: "Regional installation and service partner point" },
  { city: "Vidisha", line: "Project coordination and support coverage" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full">
      <SiteHeader active="/contact" />
      <main className="solar-container pb-20 pt-10">
        <Reveal>
          <ContactConsultationForm />
        </Reveal>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <Reveal delayMs={180}>
            <article className="soft-card section-glow p-7">
              <h2 className="text-4xl font-bold text-slate-900">Before the consultation call</h2>
              <div className="mt-4 space-y-2">
                {beforeCallChecklist.map((item, i) => (
                  <Reveal key={item} delayMs={i * 90}>
                    <p className="list-chip rounded-lg px-3 py-2 text-sm text-slate-800">{item}</p>
                  </Reveal>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delayMs={240}>
            <article className="soft-card section-glow p-7">
              <h2 className="text-4xl font-bold text-slate-900">Service coverage points</h2>
              <div className="mt-4 space-y-3">
                {branches.map((branch, i) => (
                  <Reveal key={branch.city} delayMs={i * 90}>
                    <div className="list-chip rounded-lg px-3 py-3 text-sm text-slate-800">
                      <p className="font-bold text-amber-900">{branch.city}</p>
                      <p>{branch.line}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
      <SocialFloat />
    </div>
  );
}

