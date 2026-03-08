//components>Hero.tsx

"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center text-center w-full max-w-4xl gap-6">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-zinc-300 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          ExFacto Terminal v2.0
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-600"
        >
          Wholesale Sourcing. <br className="hidden md:block" />
          Engineered.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl"
        >
          Direct factory access with live pricing and MOQs.
        </motion.p>

        {/* Command+K Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl mt-8 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
          <div className="relative flex items-center w-full h-14 md:h-16 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 hover:border-zinc-700 rounded-2xl px-4 transition-colors">
            <Search className="w-5 h-5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search factories, MOQs, or SKUs..." 
              className="w-full h-full bg-transparent border-none outline-none text-zinc-100 px-4 placeholder:text-zinc-600"
            />
            <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-mono">
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}