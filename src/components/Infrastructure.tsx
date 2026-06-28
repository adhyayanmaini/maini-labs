"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, Filter, CalendarClock, Database } from "lucide-react";

export default function Infrastructure() {
  const features = [
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "Answer, qualify, and converse naturally with incoming callers 24/7. Never send another hot lead to voicemail.",
      color: "from-blue-500/20 to-brand-blue/5",
      iconColor: "text-blue-400",
    },
    {
      icon: MessageSquare,
      title: "AI SMS Automation",
      description: "Engage prospects instantly via interactive text messages. Nurture, follow up, and reply in under 3 seconds.",
      color: "from-blue-500/20 to-blue-900/5",
      iconColor: "text-blue-400",
    },
    {
      icon: Mail,
      title: "AI Email Automation",
      description: "Send personalized, context-aware emails to follow up with leads, answer detailed questions, and revive cold pipelines.",
      color: "from-purple-500/20 to-purple-900/5",
      iconColor: "text-purple-400",
    },
    {
      icon: Filter,
      title: "AI Lead Qualification",
      description: "Filter and score incoming prospects based on budget, timeline, and intent before transferring to your sales team.",
      color: "from-brand-blue/20 to-brand-blue-light/5",
      iconColor: "text-brand-blue-light",
    },
    {
      icon: CalendarClock,
      title: "Appointment Booking",
      description: "Integrate calendar booking directly into SMS, email, and voice conversations to schedule meetings autonomously.",
      color: "from-emerald-500/20 to-emerald-900/5",
      iconColor: "text-emerald-400",
    },
    {
      icon: Database,
      title: "CRM Automation",
      description: "Automatically log conversation summaries, update lead statuses, and map qualified information into your current CRM.",
      color: "from-indigo-500/20 to-indigo-900/5",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section id="solutions" className="relative py-24 bg-surface-dark border-t border-b border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-brand-blue/3 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Content */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-blue-light uppercase block mb-3">
            Core Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-silver">
            Built For Modern Businesses
          </h2>
          <p className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
            Businesses lose up to 60% of their revenue because they respond too slowly to inbound inquiries.
            Maini Labs solves this leakage by deploying intelligent systems that respond in seconds, 24/7.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card-dark p-8 transition-all duration-300 hover:border-white/10 hover:shadow-2xl"
              >
                {/* Accent Background Gradient Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-white/5 border border-white/10 ${feature.iconColor} mb-6 transition-all group-hover:scale-110 group-hover:border-white/20`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
