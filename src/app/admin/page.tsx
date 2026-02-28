"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type BillItem = {
  id: number;
  name: string;
  qty: number;
  rate: number;
};

const productCatalog = [
  "545W Mono PERC Panel",
  "3kW On-grid Inverter",
  "5kW Hybrid Inverter",
  "Hot-dip GI Structure",
  "DCDB + ACDB Safety Kit",
  "Lithium Battery Pack",
  "Installation and Cabling",
  "Net-Metering Documentation",
];

const recentInvoices = [
  { id: "INV-24031", customer: "M/s Verma Traders", amount: 186500, due: "Paid", date: "20 Feb 2026" },
  { id: "INV-24029", customer: "Sakshi Residency", amount: 324000, due: "Pending", date: "19 Feb 2026" },
  { id: "INV-24028", customer: "Aarav Foods", amount: 512800, due: "Partially Paid", date: "18 Feb 2026" },
  { id: "INV-24026", customer: "Mishra Home", amount: 228900, due: "Paid", date: "17 Feb 2026" },
  { id: "INV-24024", customer: "Rudra School", amount: 742000, due: "Pending", date: "16 Feb 2026" },
];

const collectionRows = [
  { zone: "Bhopal West", target: 1150000, achieved: 996000 },
  { zone: "Bhopal East", target: 920000, achieved: 784000 },
  { zone: "Sehore", target: 680000, achieved: 594000 },
  { zone: "Vidisha", target: 510000, achieved: 331000 },
];

const rupee = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export default function BillingSystemPage() {
  const [customerName, setCustomerName] = useState("Rajat Agrawal");
  const [phone, setPhone] = useState("+91 91 98947 535");
  const [address, setAddress] = useState("E-12 Arera Colony, Bhopal");
  const [gst, setGst] = useState("23ABCDE1234F1Z5");
  const [discount, setDiscount] = useState(5000);
  const [items, setItems] = useState<BillItem[]>([
    { id: 1, name: "545W Mono PERC Panel", qty: 10, rate: 11500 },
    { id: 2, name: "5kW Hybrid Inverter", qty: 1, rate: 74500 },
    { id: 3, name: "Installation and Cabling", qty: 1, rate: 28000 },
  ]);

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.qty * item.rate, 0), [items]);
  const tax = Math.round(subtotal * 0.13);
  const grandTotal = Math.max(subtotal + tax - discount, 0);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: productCatalog[(prev.length + 1) % productCatalog.length],
        qty: 1,
        rate: 12000,
      },
    ]);
  };

  const updateItem = (id: number, field: keyof BillItem, value: string | number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        if (field === "name") return { ...item, name: String(value) };
        if (field === "qty") return { ...item, qty: Math.max(1, Number(value) || 1) };
        if (field === "rate") return { ...item, rate: Math.max(0, Number(value) || 0) };
        return item;
      }),
    );
  };

  const removeItem = (id: number) => setItems((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#efebdb_0%,#e7eefb_100%)] pb-14">
      <header className="border-b border-blue-200/70 bg-[#f8f4e8]">
        <div className="solar-container flex flex-wrap items-center justify-between gap-3 py-5">
          <div>
            <p className="font-heading text-3xl font-bold text-slate-900">Billing System</p>
            <p className="text-sm text-slate-600">Agnihotri Solar System | Finance + Operations Console</p>
          </div>
          <div className="flex gap-2">
            <Link href="/" className="rounded-full border border-blue-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-500">Website</Link>
            <button className="blue-btn px-4 py-2 text-sm font-semibold">Export Demo Invoice</button>
          </div>
        </div>
      </header>

      <main className="solar-container space-y-6 pt-6">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="soft-card section-glow fade-in-up p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Today Billing</p>
            <p className="mt-2 font-heading text-4xl font-bold text-slate-900">{rupee(845000)}</p>
            <p className="mt-1 text-xs text-emerald-700">+12% vs yesterday</p>
          </article>
          <article className="soft-card section-glow fade-in-up p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Pending Collection</p>
            <p className="mt-2 font-heading text-4xl font-bold text-slate-900">{rupee(2130000)}</p>
            <p className="mt-1 text-xs text-amber-700">38 invoices pending</p>
          </article>
          <article className="soft-card section-glow fade-in-up p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">This Month Revenue</p>
            <p className="mt-2 font-heading text-4xl font-bold text-slate-900">{rupee(9450000)}</p>
            <p className="mt-1 text-xs text-emerald-700">Target achievement 86%</p>
          </article>
          <article className="soft-card section-glow fade-in-up p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Active Installations</p>
            <p className="mt-2 font-heading text-4xl font-bold text-slate-900">64</p>
            <p className="mt-1 text-xs text-blue-700">Linked with billing milestones</p>
          </article>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <article className="soft-card section-glow fade-in-up p-5 sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-3xl font-bold text-slate-900">Create Invoice</h2>
              <button onClick={addItem} className="solar-btn px-4 py-2 text-sm font-bold">+ Add Line Item</button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Customer Name
                <input
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Phone
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm" />
              </label>
              <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
                Site Address
                <input value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                GSTIN
                <input value={gst} onChange={(e) => setGst(e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Discount (INR)
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(Math.max(0, Number(e.target.value) || 0))}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm"
                />
              </label>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-blue-200">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-blue-50 text-slate-700">
                  <tr>
                    <th className="px-3 py-3">Item</th>
                    <th className="px-3 py-3">Qty</th>
                    <th className="px-3 py-3">Rate</th>
                    <th className="px-3 py-3">Amount</th>
                    <th className="px-3 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t border-blue-100 bg-white hover:bg-blue-50/40">
                      <td className="px-3 py-2.5">
                        <select
                          value={item.name}
                          onChange={(e) => updateItem(item.id, "name", e.target.value)}
                          className="w-full rounded-lg border border-blue-200 px-2 py-2"
                        >
                          {productCatalog.map((name) => (
                            <option key={name}>{name}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-3 py-2.5">
                        <input
                          type="number"
                          min={1}
                          value={item.qty}
                          onChange={(e) => updateItem(item.id, "qty", e.target.value)}
                          className="w-24 rounded-lg border border-blue-200 px-2 py-2"
                        />
                      </td>
                      <td className="px-3 py-2.5">
                        <input
                          type="number"
                          min={0}
                          value={item.rate}
                          onChange={(e) => updateItem(item.id, "rate", e.target.value)}
                          className="w-32 rounded-lg border border-blue-200 px-2 py-2"
                        />
                      </td>
                      <td className="px-3 py-2.5 font-semibold text-slate-800">{rupee(item.qty * item.rate)}</td>
                      <td className="px-3 py-2.5">
                        <button onClick={() => removeItem(item.id)} className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <p className="text-xs text-slate-600">Sub Total</p>
                <p className="mt-1 text-lg font-bold text-slate-900">{rupee(subtotal)}</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-3">
                <p className="text-xs text-slate-600">GST (13%)</p>
                <p className="mt-1 text-lg font-bold text-slate-900">{rupee(tax)}</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-3">
                <p className="text-xs text-slate-600">Discount</p>
                <p className="mt-1 text-lg font-bold text-slate-900">{rupee(discount)}</p>
              </div>
              <div className="rounded-xl bg-[linear-gradient(120deg,#17368d,#2348ad)] p-3 text-white">
                <p className="text-xs text-blue-100">Grand Total</p>
                <p className="mt-1 text-lg font-bold">{rupee(grandTotal)}</p>
              </div>
            </div>
          </article>

          <article className="soft-card section-glow fade-in-up p-5 sm:p-6">
            <h2 className="text-3xl font-bold text-slate-900">Invoice Preview</h2>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-heading text-xl font-bold text-slate-900">Agnihotri Solar System</p>
                  <p className="text-xs text-slate-500">Tax Invoice | Demo Format</p>
                </div>
                <p className="rounded-full bg-[linear-gradient(120deg,#f5a400,#ffd043)] px-3 py-1 text-xs font-bold text-slate-900">INV-ASS-2026-031</p>
              </div>
              <div className="mt-4 space-y-1 text-xs text-slate-600">
                <p><span className="font-semibold text-slate-800">Customer:</span> {customerName}</p>
                <p><span className="font-semibold text-slate-800">Phone:</span> {phone}</p>
                <p><span className="font-semibold text-slate-800">Address:</span> {address}</p>
                <p><span className="font-semibold text-slate-800">GSTIN:</span> {gst}</p>
              </div>
              <div className="mt-4 border-t border-slate-200 pt-3">
                <p className="text-xs text-slate-600">Payable amount</p>
                <p className="font-heading text-4xl font-bold text-blue-900">{rupee(grandTotal)}</p>
                <p className="mt-1 text-xs text-slate-500">Due in 7 days | UPI / NEFT / Cheque accepted</p>
              </div>
              <button className="blue-btn mt-4 w-full px-4 py-2.5 text-sm font-semibold">Send Invoice Link</button>
            </div>

            <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Payment Modes</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-white p-2 hover:bg-yellow-50">UPI QR</div>
                <div className="rounded-lg bg-white p-2 hover:bg-yellow-50">Bank Transfer</div>
                <div className="rounded-lg bg-white p-2 hover:bg-yellow-50">Card POS</div>
                <div className="rounded-lg bg-white p-2 hover:bg-yellow-50">Cheque</div>
              </div>
            </div>
          </article>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <article className="soft-card section-glow fade-in-up p-5 sm:p-6">
            <h2 className="text-3xl font-bold text-slate-900">Recent Invoices</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-blue-200">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-blue-50 text-slate-700">
                  <tr>
                    <th className="px-3 py-3">Invoice No</th>
                    <th className="px-3 py-3">Customer</th>
                    <th className="px-3 py-3">Amount</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentInvoices.map((invoice) => (
                    <tr key={invoice.id} className="border-t border-blue-100 bg-white hover:bg-blue-50/40">
                      <td className="px-3 py-2.5 font-semibold text-slate-800">{invoice.id}</td>
                      <td className="px-3 py-2.5 text-slate-700">{invoice.customer}</td>
                      <td className="px-3 py-2.5 text-slate-700">{rupee(invoice.amount)}</td>
                      <td className="px-3 py-2.5">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${invoice.due === "Paid" ? "bg-emerald-100 text-emerald-700" : invoice.due === "Pending" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-700"}`}>
                          {invoice.due}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-slate-600">{invoice.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="soft-card section-glow fade-in-up p-5 sm:p-6">
            <h2 className="text-3xl font-bold text-slate-900">Zone Collection Tracker</h2>
            <div className="mt-4 space-y-4">
              {collectionRows.map((row) => {
                const percent = Math.min(100, Math.round((row.achieved / row.target) * 100));
                return (
                  <div key={row.zone} className="rounded-2xl border border-blue-200 bg-white p-4 transition hover:-translate-y-1">
                    <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                      <p className="font-semibold text-slate-800">{row.zone}</p>
                      <p className="text-xs text-slate-500">{rupee(row.achieved)} / {rupee(row.target)}</p>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-200">
                      <div style={{ width: `${percent}%` }} className="h-2.5 rounded-full bg-gradient-to-r from-blue-700 to-blue-400" />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-blue-800">{percent}% achieved</p>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <article className="soft-card section-glow fade-in-up p-5 sm:p-6">
            <h3 className="text-2xl font-bold text-slate-900">Pending Follow-ups</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="list-chip rounded-xl p-3">Call Rudra School for stage-2 billing approval</li>
              <li className="list-chip rounded-xl p-3">Share updated AMC quotation to Verma Traders</li>
              <li className="list-chip rounded-xl p-3">Collect post-installation payment from Patel Farmhouse</li>
              <li className="list-chip rounded-xl p-3">Send tax invoice copy to Sakshi Residency</li>
            </ul>
          </article>

          <article className="soft-card section-glow fade-in-up p-5 sm:p-6">
            <h3 className="text-2xl font-bold text-slate-900">Upcoming Billing Milestones</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="rounded-xl border border-blue-200 p-3 hover:bg-blue-50">01 Mar: 40% milestone - Apollo Packaging (75kW)</li>
              <li className="rounded-xl border border-blue-200 p-3 hover:bg-blue-50">03 Mar: Final payment - Sharma Villa (5kW)</li>
              <li className="rounded-xl border border-blue-200 p-3 hover:bg-blue-50">05 Mar: Advance invoice - Sai Hospital (30kW)</li>
              <li className="rounded-xl border border-blue-200 p-3 hover:bg-blue-50">07 Mar: O&M billing cycle renewal - 14 clients</li>
            </ul>
          </article>

          <article className="soft-card section-glow fade-in-up p-5 sm:p-6">
            <h3 className="text-2xl font-bold text-slate-900">System Notes</h3>
            <p className="mt-3 text-sm text-slate-700">
              This is a frontend demo billing panel for presentation and workflow validation. Connect it with backend APIs for persistent invoice storage, user roles, and payment gateway reconciliation.
            </p>
            <div className="mt-4 rounded-2xl bg-[linear-gradient(120deg,#17368d,#2348ad)] p-4 text-sm text-blue-100">
              <p className="font-semibold text-white">Recommended production modules:</p>
              <ul className="mt-2 space-y-1">
                <li>Role-based login for Billing Manager / Sales / Accounts</li>
                <li>GST-compliant PDF invoice generation</li>
                <li>Automated WhatsApp payment reminders</li>
                <li>Tally/ERP export integration</li>
              </ul>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
