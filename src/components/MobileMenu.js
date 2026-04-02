'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/research", label: "R&D" },
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-[#060d1f]/98 backdrop-blur flex flex-col px-6 py-8 gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-cyan-400 text-lg font-medium py-3 border-b border-slate-800 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <Link href="/#contact" onClick={() => setOpen(false)}
              className="px-6 py-3 text-center font-semibold text-cyan-400 border border-cyan-500/50 rounded-xl hover:bg-cyan-500/10 transition-colors">
              Contact Us
            </Link>
            <Link href="/#quote" onClick={() => setOpen(false)}
              className="px-6 py-3 text-center font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl hover:opacity-90 transition-opacity">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
