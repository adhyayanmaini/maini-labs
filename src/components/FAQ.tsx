"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What industries do you serve?",
      answer: "While we have specialized voice and SMS frameworks specifically optimized for Real Estate agencies, our core AI infrastructure is modular and custom-built to integrate with Law Firms, Dentists, Insurance Providers, Home Services, and Financial Advisors. We tailor the logic to fit your specific niche.",
    },
    {
      question: "How long does setup take?",
      answer: "A standard setup takes between 10 to 21 business days. This includes mapping your current lead funnel, drafting custom conversational scripts, programming the AI knowledge base, testing voices/SMS replies for quality assurance, and establishing active API webhooks with your CRM.",
    },
    {
      question: "Can AI replace my staff?",
      answer: "No. Our systems are engineered to eliminate administrative overhead, not replace your core human team. By handling cold calling, appointment scheduling, and lead qualification, the AI frees up your high-performing agents and sales staff to focus entirely on closing qualified, high-intent clients.",
    },
    {
      question: "Do you integrate with existing CRMs?",
      answer: "Yes. Our systems natively map information to HubSpot, Salesforce, Follow Up Boss, GoHighLevel, ActiveCampaign, and many other custom databases via secure API webhooks or Zapier integrations. All phone calls, texts, and booked events log automatically.",
    },
    {
      question: "How much does it cost?",
      answer: "Pricing is custom-built based on the complexity of your system: the number of concurrent channels needed (voice, SMS, email), the depth of the integration, and estimated call volume. During your free demo call, we'll draft a transparent proposal tailored to your business scale.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Absolutely. All systems include a dedicated technical account manager, weekly performance auditing, script optimization to improve conversion, and ongoing security updates to ensure your lines remain 100% stable as your company scales.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-red/3 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red-light uppercase block mb-3">
            Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-silver">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-muted">
            Everything you need to know about setting up Ascend AI systems.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-white/5 bg-surface-dark overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 text-text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <Minus className="h-4 w-4 text-brand-red-light" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-[-1px]">
                        <p className="text-sm leading-relaxed text-text-muted mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
