"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, User, Bot, CheckCircle, Calendar, Database, RefreshCw, Send } from "lucide-react";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  delay: number;
}

export default function DemoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(-1); // -1: idle, 0: lead, 1: contact, 2: qualified, 3: scheduled, 4: crm
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);

  const fullConversation: ChatMessage[] = [
    { sender: "bot", text: "Hi David, I saw you just requested info on 412 Oak Lane. Are you looking to buy this month, or just browsing?", delay: 1200 },
    { sender: "user", text: "Hey! Yes, I want to relocate soon. My family needs to move in by next month.", delay: 2000 },
    { sender: "bot", text: "Got it, moving can be hectic! Have you already been pre-approved for a loan, or are you paying cash? Also, what is your general budget?", delay: 2200 },
    { sender: "user", text: "Pre-approved for up to $950k. Looking to spend around $900k.", delay: 1800 },
    { sender: "bot", text: "Perfect, that budget gives us some fantastic options in that neighborhood! I'd love to schedule a quick 15-min call with our local expert. Does tomorrow at 10:00 AM or 2:00 PM work better?", delay: 2500 },
    { sender: "user", text: "2:00 PM works perfect.", delay: 1500 },
    { sender: "bot", text: "All set! Calendar invitation sent for tomorrow at 2:00 PM. Our agent will call you at this number.", delay: 1500 },
  ];

  const steps = [
    { label: "Incoming Lead", desc: "David Miller, Zillow ($950k Budget)" },
    { label: "AI Contact", desc: "SMS Auto-Response initiated in 2s" },
    { label: "AI Qualified", desc: "Verified: Relocating, Pre-approved" },
    { label: "Scheduled", desc: "Tomorrow @ 2:00 PM on Calendar" },
    { label: "CRM Sync", desc: "Logged in HubSpot + Agent Notified" },
  ];

  const runSimulation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setCurrentStep(0);
    setVisibleMessages([]);

    // Step 0: Incoming Lead
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Step 1: AI Contact & Conversation Start
    setCurrentStep(1);
    
    // Simulate typing and sending messages
    for (let i = 0; i < fullConversation.length; i++) {
      const msg = fullConversation[i];
      
      // Dynamic step transition during the chat
      if (i === 2) {
        setCurrentStep(2); // AI Qualified starts as qualification questions occur
      }
      if (i === 5) {
        setCurrentStep(3); // Scheduled
      }

      await new Promise((resolve) => setTimeout(resolve, 800)); // typing delay simulation
      setVisibleMessages((prev) => [...prev, msg]);
      await new Promise((resolve) => setTimeout(resolve, msg.delay));
    }

    // Step 4: CRM Sync
    setCurrentStep(4);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsPlaying(false);
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    setCurrentStep(-1);
    setVisibleMessages([]);
  };

  return (
    <section className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-brand-red/3 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red-light uppercase block mb-3">
            Interactive Simulator
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-silver">
            See the Engine in Action
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            Click simulate below to watch how our AI system interacts, qualifies, and logs a lead without human intervention.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Timeline Nodes (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/5 bg-surface-dark p-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Automation Timeline</h3>
              <div className="relative pl-8 space-y-8">
                {/* Timeline vertical bar */}
                <div className="absolute left-[11px] top-1 bottom-1 w-[2px] bg-white/5" />

                {steps.map((step, idx) => {
                  const isActive = currentStep >= idx;
                  const isCurrent = currentStep === idx;
                  return (
                    <div key={step.label} className="relative flex flex-col items-start text-left">
                      {/* Node Circle */}
                      <div
                        className={`absolute left-[-29px] top-1 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-bold transition-all duration-300 ${
                          isCurrent
                            ? "bg-brand-red border-brand-red text-white scale-110 shadow-[0_0_12px_rgba(185,28,28,0.6)]"
                            : isActive
                            ? "bg-brand-red/20 border-brand-red/40 text-brand-red-light"
                            : "bg-black/40 border-white/5 text-text-muted"
                        }`}
                      >
                        {isActive ? "✓" : idx + 1}
                      </div>

                      <h4 className={`text-sm font-bold transition-colors ${isActive ? "text-white" : "text-text-muted"}`}>
                        {step.label}
                      </h4>
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Simulation Controls */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
              {!isPlaying && currentStep === 4 ? (
                <button
                  onClick={resetSimulation}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-card-dark hover:bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Reset Demo</span>
                </button>
              ) : (
                <button
                  onClick={runSimulation}
                  disabled={isPlaying}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-red to-brand-red-light px-8 py-3 text-sm font-bold text-white transition-all shadow-[0_0_15px_rgba(185,28,28,0.2)] disabled:opacity-50"
                >
                  <Play className="h-4 w-4" />
                  <span>{isPlaying ? "Simulating..." : "Simulate Lead Intake"}</span>
                </button>
              )}

              {isPlaying && (
                <span className="text-xs text-brand-red-light font-semibold animate-pulse uppercase tracking-wider text-center sm:text-left">
                  System Running...
                </span>
              )}
            </div>
          </div>

          {/* Interactive Chat Console (Right) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/5 bg-card-dark flex flex-col justify-between overflow-hidden min-h-[460px] shadow-2xl">
            {/* Header */}
            <div className="bg-surface-dark border-b border-white/5 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red-light">
                  <Bot className="h-4.5 w-4.5" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-card-dark bg-green-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Ascend SMS Engine</div>
                  <div className="text-[10px] text-text-muted">Chat with Lead (David Miller)</div>
                </div>
              </div>
              <span className="text-[10px] uppercase font-semibold text-text-muted bg-white/5 px-2 py-0.5 rounded">
                Active Session
              </span>
            </div>

            {/* Conversation Window */}
            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 justify-end min-h-[300px]">
              {currentStep === -1 && (
                <div className="flex flex-col items-center justify-center text-center py-12 text-text-muted my-auto">
                  <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-4">
                    <Bot className="h-8 w-8 opacity-40" />
                  </div>
                  <p className="text-sm max-w-xs leading-relaxed">
                    Click "Simulate Lead Intake" on the left to test the instant conversation flow.
                  </p>
                </div>
              )}

              {currentStep >= 0 && visibleMessages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3 items-start my-auto justify-center text-center text-xs text-text-muted"
                >
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-brand-red border-t-transparent" />
                  <span>Waiting for inbound webhook...</span>
                </motion.div>
              )}

              <AnimatePresence>
                {visibleMessages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}
                  >
                    {/* Icon */}
                    <div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs border ${
                      msg.sender === "bot"
                        ? "bg-brand-red/10 border-brand-red/20 text-brand-red-light"
                        : "bg-white/5 border-white/10 text-text-muted"
                    }`}>
                      {msg.sender === "bot" ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                    </div>

                    {/* Text block */}
                    <div className={`rounded-2xl p-4 text-sm leading-relaxed ${
                      msg.sender === "bot"
                        ? "bg-surface-dark border border-white/5 text-white rounded-tl-none"
                        : "bg-brand-red text-white rounded-tr-none shadow-[0_4px_15px_rgba(185,28,28,0.15)]"
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Input bar decoration */}
            <div className="bg-surface-dark border-t border-white/5 px-6 py-4 flex items-center justify-between text-xs text-text-muted">
              <span className="flex items-center gap-2">
                <Database className="h-3.5 w-3.5 text-brand-red-light" />
                <span>Logs mapping directly to HubSpot CRM API</span>
              </span>
              <span className="italic">Read-only simulation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
