"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { title: "11+ Years", desc: "Solar execution experience across MP and surrounding regions." },
  { title: "8,500+", desc: "Residential and commercial rooftops installed." },
  { title: "99.1%", desc: "On-time service response through local support teams." },
  { title: "24x7", desc: "Monitoring and issue reporting from mobile dashboard." },
];

const slides = [
  { src: "/sliders/slider_1.jpg", alt: "Agnihotri solar installation visual one" },
  { src: "/sliders/slider_2.jpg", alt: "Agnihotri solar installation visual two" },
];

export function HeroParallax() {
  const [offset, setOffset] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.08);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="solar-container pb-12 pt-8 lg:pt-10">
      <div className="section-glow overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#102a7f_0%,#1d3f9f_55%,#17398f_100%)] text-white">
        <div style={{ transform: `translateY(${Math.min(offset, 16)}px)` }} className="p-6 sm:p-8">
          <p className="mb-3 inline-flex rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Switch To Solar In Bhopal And Beyond
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            <span className="text-cyan-300">Switch to solar</span>, at Zero Investment!
          </h1>
          <p className="mt-4 max-w-xl text-base text-blue-100 sm:text-lg">
            Government subsidy covers your down payment and monthly solar savings help offset your EMI.
          </p>
        </div>

        <div className="relative overflow-hidden border-y border-white/10 bg-[#0f2d78]">
          <div className="relative h-44 w-full sm:h-56 md:h-64 lg:h-72">
            <div
              className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.src} className="relative h-full min-w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className="object-contain object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/12 to-transparent" />
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-8 bg-yellow-400" : "w-2.5 bg-white/90"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-cyan-500 px-4 py-3 text-center text-xl font-bold text-white sm:text-3xl">
          Bharat ki <span className="text-blue-950">#1</span> home solar company*
        </div>

        <div className="p-6 sm:p-8">
          <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item, index) => (
              <article
                key={item.title}
                style={{ transform: `translateY(${Math.max(0, 8 - offset * 0.35 + index)}px)` }}
                className="rounded-2xl border border-white/20 bg-white/10 p-3 transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <p className="font-heading text-2xl font-bold text-yellow-300">{item.title}</p>
                <p className="mt-1 text-xs text-blue-100">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="solar-btn px-6 py-3 text-sm">Get Free Solar Consultation</Link>
            <Link href="/billing-system" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">View Billing Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
