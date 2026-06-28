"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onBookDemoClick: () => void;
}

export default function FinalCTA({ onBookDemoClick }: FinalCTAProps) {
  return (
    <section className="relative py-24 bg-surface-dark overflow-hidden border-t border-white/5">
      {/* Dynamic background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-black/60 p-12 md:p-16 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Top subtle border laser line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent" />

          <div className="mx-auto max-w-2xl flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 text-xs font-semibold tracking-wider text-brand-blue-light uppercase mb-6">
              <Sparkles className="h-3 w-3 text-brand-blue-light" />
              <span>Get Started Today</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-silver">
              Ready To Scale With AI?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed">
              Let's build a custom voice and SMS infrastructure that qualifies leads, books meetings, and grows your revenue while you sleep.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch justify-center">
              <button
                onClick={onBookDemoClick}
                className="glow-button flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-blue-light px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(0,82,255,0.2)] hover:shadow-[0_0_35px_rgba(0,82,255,0.5)] transition-all hover:scale-[1.02]"
              >
                <span>Book Your Free Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={onBookDemoClick}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-card-dark hover:bg-white/5 px-8 py-4 text-base font-bold text-white transition-colors"
              >
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
