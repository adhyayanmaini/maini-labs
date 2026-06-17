"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Scale, Stethoscope, Landmark, Umbrella, Home } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "Real Estate",
      description: "Instantly call new listing leads, book buyer tours, and automate agent follow-ups.",
      icon: Building2,
      isHighlighted: true,
      tag: "Primary Focus",
    },
    {
      name: "Law Firms",
      description: "Qualify client intake requests instantly, triage cases, and calendar consultations.",
      icon: Scale,
      isHighlighted: false,
    },
    {
      name: "Dentists",
      description: "Fill empty cancellation slots, confirm upcoming appointments, and handle emergency calls.",
      icon: Stethoscope,
      isHighlighted: false,
    },
    {
      name: "Insurance",
      description: "Follow up on multi-provider quotes, request policy renewals, and schedule reviews.",
      icon: Umbrella,
      isHighlighted: false,
    },
    {
      name: "Home Services",
      description: "Dispatch urgent calls, qualify project budgets, and schedule technician site visits.",
      icon: Home,
      isHighlighted: false,
    },
    {
      name: "Financial Services",
      description: "Nurture loan applications, schedule wealth consultations, and automate compliance alerts.",
      icon: Landmark,
      isHighlighted: false,
    },
  ];

  return (
    <section id="industries" className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red-light uppercase block mb-3">
            Versatile Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-silver">
            Solutions Across Every Industry
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            While we build tailored frameworks for multiple sectors, our specialized real estate AI agent remains our most in-demand deployment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                  ind.isHighlighted
                    ? "bg-gradient-to-b from-card-dark to-brand-red/10 border-brand-red shadow-[0_0_30px_rgba(185,28,28,0.15)] scale-[1.02] md:scale-[1.03]"
                    : "bg-surface-dark border-white/5 hover:border-white/20"
                }`}
              >
                {/* Highlight Tag */}
                {ind.isHighlighted && (
                  <div className="absolute -top-3 left-6">
                    <span className="rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {ind.tag}
                    </span>
                  </div>
                )}

                <div>
                  <div className={`inline-flex p-3 rounded-xl mb-6 border ${
                    ind.isHighlighted
                      ? "bg-brand-red/15 border-brand-red/30 text-brand-red-light"
                      : "bg-white/5 border-white/10 text-text-muted"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{ind.name}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{ind.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <span className={`text-xs font-semibold ${
                    ind.isHighlighted ? "text-brand-red-light" : "text-text-muted opacity-75"
                  }`}>
                    {ind.isHighlighted ? "Active Deployment Available" : "Custom Configuration"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
