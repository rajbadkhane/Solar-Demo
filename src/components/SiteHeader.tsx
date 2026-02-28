import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/savings", label: "Savings" },
  { href: "/faq", label: "FAQ" },
  { href: "/billing-system", label: "Billing System" },
];

type SiteHeaderProps = {
  active?: string;
};

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-200/70 bg-[#f8f4e8]/92 backdrop-blur">
      <div className="solar-container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Agnihotri Solar System logo"
            width={52}
            height={52}
            className="h-12 w-12 rounded-full border border-yellow-300 object-cover shadow-sm"
            priority
          />
          <div>
            <p className="font-heading text-xl font-bold leading-none text-slate-900">Agnihotri</p>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-600">Solar System</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.href === active ? "text-blue-900" : "hover:-translate-y-0.5 hover:text-blue-900"}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="blue-btn px-5 py-2.5 text-sm">Book Consultation</Link>
        </nav>

        <details className="relative lg:hidden">
          <summary className="list-none rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-blue-400">Menu</summary>
          <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-blue-50">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 block rounded-full bg-blue-900 px-3 py-2 text-center text-sm font-semibold text-white">Consultation</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
