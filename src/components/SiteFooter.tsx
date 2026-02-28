import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-amber-200/70 bg-[linear-gradient(160deg,#fff8eb,#f7edd3)] pt-10">
      <div className="solar-container grid gap-8 pb-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-heading text-2xl font-bold text-slate-900">Agnihotri Solar System</p>
          <p className="mt-2 text-sm text-slate-700">Clean energy partner for homes, businesses, and solar entrepreneurs.</p>
          <p className="mt-3 text-sm text-slate-700">Trusted for rooftop solutions, subsidy guidance, and structured execution quality.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">Contact</p>
          <p className="mt-2 text-sm text-slate-800">Bhopal, Madhya Pradesh</p>
          <p className="mt-1 text-sm text-slate-800">+91 91 98947 535</p>
          <p className="mt-1 text-sm text-slate-800">hello@agnihotrisolar.in</p>
          <a
            href="https://wa.me/919198947535"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-full bg-[#1fb278] px-4 py-1.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#16935f]"
          >
            WhatsApp: +91 91 98947 535
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">Quick Links</p>
          <div className="mt-2 space-y-1 text-sm text-slate-800">
            <Link className="block hover:text-amber-900" href="/services">Services</Link>
            <Link className="block hover:text-amber-900" href="/process">Installation Process</Link>
            <Link className="block hover:text-amber-900" href="/billing-system">Billing System Demo</Link>
            <Link className="block hover:text-amber-900" href="/faq">FAQ</Link>
            <Link className="block hover:text-amber-900" href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-200/70 py-4">
        <div className="solar-container text-center text-sm text-slate-700">
          Demo Provided By{" "}
          <a
            href="https://gautamenterprises.org"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-amber-900 hover:text-amber-700"
          >
            Gautam Tech Studio
          </a>
        </div>
      </div>
    </footer>
  );
}

