//components>Navbar.tsx

import Link from "next/link";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full md:top-4 md:px-4 pointer-events-none">
      {/* Mobile: Edge-to-Edge flat border-b. Desktop: Floating Glass Bento Card */}
      <div className="pointer-events-auto w-full md:max-w-6xl mx-auto bg-zinc-950/70 backdrop-blur-xl md:rounded-2xl border-b md:border border-white/10 flex items-center justify-between px-4 py-4 md:px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tighter text-zinc-100">
            EX<span className="text-sky-500">FACTO</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#" className="hover:text-emerald-400 transition-colors">Markets</Link>
          <Link href="#" className="hover:text-emerald-400 transition-colors">Sourcing</Link>
          <Link href="#" className="hover:text-sky-400 transition-colors">Logistics</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="md:hidden text-zinc-400 hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <button className="hidden md:block px-4 py-2 bg-zinc-100 text-zinc-900 font-semibold rounded-lg text-sm hover:bg-white transition-colors">
            Terminal Access
          </button>
        </div>
        
      </div>
    </nav>
  );
}