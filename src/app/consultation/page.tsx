import { Reveal } from "@/components/Reveal";
import { ContactConsultationForm } from "@/components/forms/ContactConsultationForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialFloat } from "@/components/SocialFloat";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen w-full">
      <SiteHeader active="/consultation" />
      <main className="solar-container pb-20 pt-10">
        <Reveal>
          <ContactConsultationForm />
        </Reveal>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {["Subsidy support", "Quick proposal", "Trusted execution"].map((item, i) => (
            <Reveal key={item} delayMs={i * 100}>
              <article className="soft-card section-glow p-5 text-center">
                <p className="font-heading text-3xl font-bold text-blue-900">{item}</p>
                <p className="mt-2 text-sm text-slate-700">Detailed guidance with clear next steps and transparent communication.</p>
              </article>
            </Reveal>
          ))}
        </section>
      </main>
      <SiteFooter />
      <SocialFloat />
    </div>
  );
}
