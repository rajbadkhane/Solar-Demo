"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialFloat } from "@/components/SocialFloat";

type FaqItem = {
  q: string;
  a: string;
};

const faqMap: Record<string, FaqItem[]> = {
  general: [
    { q: "What is the life of a rooftop solar system?", a: "Most systems are designed for 25 years of panel performance, with inverter replacement cycle based on usage and product category." },
    { q: "Can I install solar on any roof type?", a: "Yes, RCC, metal sheet, and elevated structures are possible with the right mounting design and wind-load compliance." },
    { q: "How much roof area is needed for 1kW?", a: "Typically 80 to 100 square feet depending on module wattage and layout clearance." },
    { q: "Do I need net-metering for rooftop solar?", a: "For on-grid systems, net-metering is usually required to export excess daytime units and optimize savings." },
    { q: "Is subsidy available for home users?", a: "Eligible residential projects may receive subsidy support as per applicable policy and sanctioned limits." },
  ],
  maintenance: [
    { q: "Do Solar Rooftop projects have a high maintenance cost?", a: "No. Maintenance is generally low and mostly includes periodic cleaning, visual checks, and scheduled preventive service." },
    { q: "Can Solar projects damage my roof?", a: "No, when installed with proper engineering and waterproofing standards, rooftop systems are safe and structurally stable." },
    { q: "Do I need to clean my Solar plant?", a: "Yes, regular panel cleaning improves generation output. Cleaning frequency depends on dust, season, and local conditions." },
    { q: "My roof is not made of concrete; can I still install a Solar Project?", a: "Yes. Metal roofs and custom structures can be used with suitable clamp-based or engineered mounting systems." },
    { q: "How quickly can service support be arranged?", a: "Typical first response is within 24 working hours for logged service requests." },
  ],
  economics: [
    { q: "How much can I save monthly after installation?", a: "Savings depend on tariff slab, system size, and daytime usage; many homes reduce bills substantially once commissioned." },
    { q: "Can EMI be covered by electricity savings?", a: "In many cases yes, especially with optimized system sizing and subsidy-adjusted project planning." },
    { q: "What is typical payback period?", a: "Home projects often see payback in approximately 3.5 to 5 years based on usage and tariff conditions." },
    { q: "Do commercial users get financial benefits?", a: "Commercial customers generally benefit from reduced operating expense and applicable accounting/tax frameworks." },
    { q: "Is there a transparent billing format?", a: "Yes, project billing can be structured with milestone-based invoices and clear component-level costing." },
  ],
};

const tabs = [
  { key: "general", label: "General" },
  { key: "maintenance", label: "Solar Maintenance" },
  { key: "economics", label: "Solar Economics" },
] as const;

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["key"]>("maintenance");
  const [openIndex, setOpenIndex] = useState(0);

  const items = useMemo(() => faqMap[activeTab], [activeTab]);

  return (
    <div className="min-h-screen w-full">
      <SiteHeader active="/faq" />
      <main className="solar-container pb-20 pt-10">
        <Reveal>
          <section className="soft-card section-glow overflow-hidden p-6 md:p-10">
            <h1 className="text-center text-5xl font-bold text-slate-900">Frequently Asked Questions</h1>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.95fr]">
              <div>
                <div className="border-b border-slate-300">
                  <div className="grid grid-cols-3 gap-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => {
                          setActiveTab(tab.key);
                          setOpenIndex(0);
                        }}
                        className={`px-3 py-3 text-sm font-semibold md:text-[1.1rem] ${activeTab === tab.key ? "bg-[#1d1ea8] text-white" : "text-slate-900 hover:bg-blue-50"}`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5 divide-y divide-slate-300">
                  {items.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <article key={item.q} className="py-4">
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? -1 : index)}
                          className="flex w-full items-start gap-4 text-left"
                        >
                          <span className="mt-0.5 text-2xl font-bold text-blue-900">{isOpen ? "-" : "+"}</span>
                          <span className="text-xl font-semibold text-slate-900">{item.q}</span>
                        </button>
                        {isOpen && <p className="mt-3 pl-9 text-sm text-slate-700">{item.a}</p>}
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="grid place-items-center">
                <div className="relative h-[330px] w-[330px] sm:h-[420px] sm:w-[420px]">
                  <div className="absolute inset-0 rounded-full bg-[#e6e7ec]" />
                  <div className="absolute -right-2 top-3 h-32 w-32 rounded-full border-[20px] border-cyan-400 border-l-transparent border-b-transparent sm:h-40 sm:w-40" />
                  <div className="absolute inset-5 overflow-hidden rounded-full border-8 border-white shadow-[0_20px_40px_rgba(17,40,109,0.22)] sm:inset-7">
                    <Image
                      src="/faq-boy.jpg"
                      alt="Solar support representative"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "74% center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={180}>
          <section className="mt-8 overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#112b7d,#2147aa)] p-8 text-white md:p-10">
            <h2 className="text-4xl font-bold">Need project-specific answers?</h2>
            <p className="mt-3 text-blue-100">Share your location, load profile, and roof details to receive exact guidance from our technical team.</p>
            <Link href="/contact" className="solar-btn mt-6 inline-block px-6 py-3 text-sm">Talk To Engineer</Link>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
      <SocialFloat />
    </div>
  );
}
