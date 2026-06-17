"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap, LineChart, Cpu, Shield, TrendingUp } from "lucide-react";

export default function WhyUs() {
  const cards = [
    {
      title: "24/7 Availability",
      description: "AI agents operate day, night, weekends, and holidays. Never miss another hot midnight prospect.",
      icon: Clock,
    },
    {
      title: "Instant Response",
      description: "Engage fresh inquiries in under 3 seconds. Stop leaving prospects waiting for callbacks.",
      icon: Zap,
    },
    {
      title: "Scalable Systems",
      description: "Handle 10 or 10,000 inbound leads simultaneously. Scale your operations without adding overhead.",
      icon: LineChart,
    },
    {
      title: "Custom Built",
      description: "We design, write, and train AI voices/prompts specifically for your unique industry workflows.",
      icon: Cpu,
    },
    {
      title: "Enterprise Security",
      description: "Professional-grade encryption and secure CRM endpoints protect your customer data privacy.",
      icon: Shield,
    },
    {
      title: "Measurable ROI",
      description: "Track every call length, qualification status, and booked demo directly in a live dashboard.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative py-24 bg-surface-dark overflow-hidden border-t border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] rounded-full bg-brand-red/3 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red-light uppercase block mb-3">
            Why Ascend AI
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-silver">
            The Competitive Advantage
          </h2>
          <p className="mt-4 text-base text-text-muted max-w-xl">
            We don't sell generic templates. We build custom-engineered AI systems tailored to your unique scaling requirements.
          </p>
        </div>

        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-8 rounded-2xl border border-white/5 bg-card-dark transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-brand-red/5 border border-brand-red/10 text-brand-red-light transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
