import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/90 backdrop-blur border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image src="/userbyte-logo.svg" alt="UserByte Solution Logo" width={160} height={40} priority />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="/#services" className="hover:text-cyan-400 transition-colors">Services</Link>
          <Link href="/research" className="hover:text-cyan-400 transition-colors">R&amp;D</Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
          <Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link>
          <Link href="/#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex gap-3">
          <Link href="/#contact" className="px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 transition-colors">
            Contact Us
          </Link>
          <Link href="/#quote" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg hover:opacity-90 transition-opacity">
            Get Quote
          </Link>
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
}
