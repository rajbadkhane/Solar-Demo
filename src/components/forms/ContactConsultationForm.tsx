"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "919198947535";

type ConsultationState = {
  fullName: string;
  phone: string;
  city: string;
  billRange: string;
  service: string;
};

const defaultState: ConsultationState = {
  fullName: "",
  phone: "",
  city: "",
  billRange: "",
  service: "Residential Rooftop Solar",
};

function toWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function ContactConsultationForm() {
  const [form, setForm] = useState<ConsultationState>(defaultState);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.city || !form.billRange) {
      alert("Please fill all required fields.");
      return;
    }

    const message = [
      "Agnihotri Solar System - Consultation Request",
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Monthly Bill Range: ${form.billRange}`,
      `Interested Service: ${form.service}`,
    ].join("\n");

    window.open(toWhatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="soft-card section-glow overflow-hidden p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Consultation Form</p>
          <h1 className="mt-1 text-4xl font-bold text-slate-900 md:text-5xl">Book a FREE Solar Consultation</h1>
          <p className="mt-2 text-sm text-slate-600">Share details for subsidy guidance, project sizing, and expected bill savings estimate.</p>
        </div>
        <div className="rounded-full border border-yellow-300 bg-yellow-100 px-4 py-1.5 text-xs font-semibold text-slate-900">
          Fast Response
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold text-slate-800">Full Name <span className="text-red-500">*</span></label>
          <input
            required
            value={form.fullName}
            onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
            className="w-full rounded-lg border border-amber-200 px-3 py-2.5 text-sm"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-800">Phone <span className="text-red-500">*</span></label>
          <input
            required
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className="w-full rounded-lg border border-amber-200 px-3 py-2.5 text-sm"
            placeholder="10-digit mobile number"
          />
        </div>
        <div>
          <label className="mb-2 block font-semibold text-slate-800">City <span className="text-red-500">*</span></label>
          <input
            required
            value={form.city}
            onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
            className="w-full rounded-lg border border-amber-200 px-3 py-2.5 text-sm"
            placeholder="Bhopal"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold text-slate-800">Monthly Electricity Bill <span className="text-red-500">*</span></label>
          <select
            required
            value={form.billRange}
            onChange={(e) => setForm((p) => ({ ...p, billRange: e.target.value }))}
            className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm"
          >
            <option value="">Select bill range</option>
            <option>INR 1,500 - 3,000</option>
            <option>INR 3,000 - 6,000</option>
            <option>INR 6,000 - 10,000</option>
            <option>INR 10,000+</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold text-slate-800">Interested Service</label>
          <select
            value={form.service}
            onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
            className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm"
          >
            <option>Residential Rooftop Solar</option>
            <option>Commercial Solar EPC</option>
            <option>Hybrid With Battery</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="solar-btn w-full px-6 py-3 text-sm">Request Consultation</button>
        </div>
      </form>
    </section>
  );
}

