"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Zap, ShieldCheck, CalendarRange, Handshake } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Lead Arrives",
      description: "An inbound lead enters from your website form, Facebook Ads, Zillow, or phone system.",
      icon: UserCheck,
      color: "border-blue-500/30 text-blue-400 bg-surface-dark hover:bg-blue-500/[0.03]",
    },
    {
      step: "02",
      title: "AI Responds Instantly",
      description: "Within 3 seconds, the AI Voice or SMS Agent initiates contact. No waiting, no lead loss.",
      icon: Zap,
      color: "border-orange-500/30 text-orange-400 bg-surface-dark hover:bg-orange-500/[0.03]",
    },
    {
      step: "03",
      title: "AI Qualifies Prospect",
      description: "The AI conducts a friendly conversation to gather key details: budget, motivation, and timeline.",
      icon: ShieldCheck,
      color: "border-brand-blue/30 text-brand-blue-light bg-surface-dark hover:bg-brand-blue/[0.03]",
    },
    {
      step: "04",
      title: "Appointment Gets Booked",
      description: "The qualified prospect is immediately presented with open slots and booked directly on your calendar.",
      icon: CalendarRange,
      color: "border-emerald-500/30 text-emerald-400 bg-surface-dark hover:bg-emerald-500/[0.03]",
    },
    {
      step: "05",
      title: "Business Closes More Deals",
      description: "Your sales team steps in only to do what they do best: hold premium demos and close hot opportunities.",
      icon: Handshake,
      color: "border-purple-500/30 text-purple-400 bg-surface-dark hover:bg-purple-500/[0.03]",
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-surface-dark overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-blue-light/3 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold tracking-widest text-brand-blue-light uppercase block mb-3">
            The Automation Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-silver">
            How Maini Labs Works
          </h2>
          <p className="mt-4 text-base text-text-muted max-w-xl">
            Our systems seamlessly bridge the gap between initial lead creation and final booked meeting without manual effort.
          </p>
        </div>

        {/* Vertical Flow Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Connecting Flow Line (Desktop Only) */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[2px] hidden md:block overflow-hidden bg-white/5">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-brand-blue via-brand-blue-light to-emerald-500"
            />
          </div>

          <div className="space-y-12">
            {steps.map((s, index) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative"
                >
                  {/* Step Bubble / Icon */}
                  <div className="flex items-center gap-4 md:block flex-shrink-0 relative z-10">
                    <div className={`relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-2xl border bg-surface-dark ${s.color} transition-all duration-300 hover:scale-105 shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-brand-blue-light md:hidden">
                      STEP {s.step}
                    </span>
                  </div>

                  {/* Step Details */}
                  <div className="flex-1 rounded-2xl border border-white/5 bg-card-dark p-6 md:p-8 hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{s.title}</h3>
                      <span className="hidden md:inline-block text-xs font-bold uppercase tracking-wider text-text-muted bg-white/5 px-2.5 py-1 rounded">
                        Step {s.step}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
