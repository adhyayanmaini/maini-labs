"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Before Ascend AI, we were sending roughly 40% of our listing inquiries to voicemail because our agents were on client showings. Since installing their voice agent, every single call is answered in under two seconds. Our booked consultations went up by 37% in month one.",
      author: "Marcus Vance",
      role: "Managing Partner",
      company: "Vance Realty Group",
      initials: "MV",
      glowColor: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]",
    },
    {
      quote: "The CRM automation works flawlessly. The AI text system qualifies the lead, schedules the consultation directly on our calendar, and updates HubSpot with a complete conversation transcript. My team steps in only to run the demos.",
      author: "Eleanor Sterling",
      role: "Operations Director",
      company: "Sterling Law Partners",
      initials: "ES",
      glowColor: "group-hover:border-brand-red/30 group-hover:shadow-[0_0_25px_rgba(185,28,28,0.08)]",
    },
    {
      quote: "Our marketing spend ROI has doubled. Previously, we lost leads that came in after 6 PM because nobody was working. Ascend AI's system engages evening traffic instantly, qualifies them, and books them for the next morning.",
      author: "Devon Cross",
      role: "Founder & CEO",
      company: "Cross Financial Group",
      initials: "DC",
      glowColor: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.08)]",
    },
  ];

  return (
    <section className="relative py-24 bg-surface-dark overflow-hidden border-t border-b border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-brand-red/2 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red-light uppercase block mb-3">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-silver">
            Trusted by Growing Agencies
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-muted">
            Hear from businesses scaling their lead management with our automated infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col justify-between p-8 rounded-2xl border border-white/5 bg-card-dark transition-all duration-500 ${t.glowColor}`}
            >
              <div>
                <Quote className="h-8 w-8 text-brand-red-light/35 mb-6 transition-transform group-hover:scale-105" />
                <p className="text-sm leading-relaxed text-text-muted italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                {/* Initials Placeholder Circle */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 font-sans text-xs font-bold text-white uppercase">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    {t.role}, <span className="text-brand-red-light">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
