"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneOff, Hourglass, Sliders, CheckCircle } from "lucide-react";

export default function Problems() {
  const problems = [
    {
      icon: PhoneOff,
      title: "Missed Calls",
      description: "62% of calls to small-to-medium businesses go unanswered. Potential customers hang up, call a competitor, and never call back.",
      leakRate: "45% Revenue Leak",
    },
    {
      icon: Hourglass,
      title: "Slow Follow-Up",
      description: "Leads respond best within the first 5 minutes. If your team takes hours (or days) to reply, the prospect is already cold.",
      leakRate: "80% Lead Drop-off",
    },
    {
      icon: Sliders,
      title: "Manual Processes",
      description: "High-value sales teams spend up to 70% of their day on repetitive administrative tasks: scheduling, qualifying, and CRM input.",
      leakRate: "30h+ Wasted Weekly",
    },
  ];

  return (
    <section className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Radial glow around the header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-red/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red-light uppercase block mb-3">
            The Cost of Inaction
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-silver">
            Most Businesses Lose Revenue Here
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-muted">
            Identify the leaks in your pipeline before trying to acquire more traffic.
          </p>
        </div>

        {/* Problems Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={prob.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col justify-between rounded-2xl border border-white/5 bg-surface-dark p-8 transition-all hover:border-brand-red/20 group"
              >
                {/* Diagonal warning slash top decoration */}
                <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden pointer-events-none rounded-tr-2xl">
                  <div className="absolute top-[-10px] right-[-10px] h-6 w-[80px] rotate-45 bg-brand-red/5 border-b border-brand-red/10" />
                </div>

                <div>
                  <div className="inline-flex p-3 rounded-xl bg-brand-red/5 border border-brand-red/10 text-brand-red-light mb-6 transition-transform group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{prob.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{prob.description}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-red-light">
                    {prob.leakRate}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Resolution Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/5 px-6 py-3 text-sm font-semibold text-green-400">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span>Our automated systems solve all three leaks automatically.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
