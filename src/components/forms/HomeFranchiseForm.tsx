"use client";

import { FormEvent, useMemo, useState } from "react";

const WHATSAPP_NUMBER = "919198947535";

type FranchiseFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  text: string;
};

const defaultState: FranchiseFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  service: "Smart Franchise Partner",
  text: "",
};

function toWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function HomeFranchiseForm() {
  const [form, setForm] = useState<FranchiseFormState>(defaultState);

  const fullName = useMemo(() => `${form.firstName} ${form.lastName}`.trim(), [form.firstName, form.lastName]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.phone || !form.city || !form.service) {
      alert("Please fill all required fields.");
      return;
    }

    const message = [
      "Agnihotri Solar System - Franchise Form",
      `Name: ${fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Interested Service: ${form.service}`,
      `Message: ${form.text || "N/A"}`,
    ].join("\n");

    window.open(toWhatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="soft-card section-glow p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">Franchise Lead Form</p>
          <h2 className="mt-1 text-4xl font-bold text-slate-900 md:text-5xl">Franchise and Consultation Form</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">Share details to connect with our business and solar setup team.</p>
        </div>
        <div className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-900">
          Priority Callback
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-[linear-gradient(95deg,#17368d,#2148ad)] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-yellow-300 shadow-[0_10px_20px_rgba(23,54,141,0.28)] md:text-base">
        Get APN Solar Franchise in 59,000 only and start your own business.
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-slate-800">Name <span className="text-red-500">*</span></label>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input
                required
                value={form.firstName}
                onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                className="w-full rounded-lg border border-blue-200 px-3 py-2.5 text-sm"
              />
              <p className="mt-1 text-xs text-slate-500">First</p>
            </div>
            <div>
              <input
                value={form.lastName}
                onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
                className="w-full rounded-lg border border-blue-200 px-3 py-2.5 text-sm"
              />
              <p className="mt-1 text-xs text-slate-500">Last</p>
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-800">Email <span className="text-red-500">*</span></label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="w-full rounded-lg border border-blue-200 px-3 py-2.5 text-sm"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-800">Phone <span className="text-red-500">*</span></label>
          <input
            required
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className="w-full rounded-lg border border-blue-200 px-3 py-2.5 text-sm"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-800">City <span className="text-red-500">*</span></label>
          <input
            required
            value={form.city}
            onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
            className="w-full rounded-lg border border-blue-200 px-3 py-2.5 text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold text-slate-800">Interested Service <span className="text-red-500">*</span></label>
          <select
            required
            value={form.service}
            onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
            className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2.5 text-sm"
          >
            <option>Smart Franchise Partner</option>
            <option>Residential Rooftop Solar</option>
            <option>Commercial Solar EPC</option>
            <option>Hybrid With Battery</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold text-slate-800">Text</label>
          <textarea
            rows={4}
            value={form.text}
            onChange={(e) => setForm((p) => ({ ...p, text: e.target.value }))}
            className="w-full rounded-lg border border-blue-200 px-3 py-2.5 text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="solar-btn w-full px-7 py-3 text-base">
            Submit Franchise Request
          </button>
        </div>
      </form>
    </section>
  );
}
