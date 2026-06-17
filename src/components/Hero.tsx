"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, UserPlus, PhoneCall, CheckCircle, Calendar, MessageSquare, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onBookDemoClick: () => void;
  onSeeSolutionsClick: () => void;
}

export default function Hero({ onBookDemoClick, onSeeSolutionsClick }: HeroProps) {
  const [activeCycle, setActiveCycle] = useState(0);

  // Cycle through dashboard steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCycle((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const leadName = "Sarah Jenkins";
  const leadSource = "Zillow Lead";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bg-dark">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-red-light/5 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Headlines and CTAs */}
        <div className="lg:col-span-6 flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-dark px-3 py-1 text-xs font-medium text-text-muted mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-red animate-pulse-glow" />
              <span>Next-Gen Intelligent Automations</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-gradient-silver">
              Stop Losing Leads. <br />
              <span className="text-gradient-red">Start Closing More Deals.</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-xl">
              Ascend AI builds enterprise-grade AI systems that answer calls, qualify leads, follow up automatically, and book appointments so your business never misses an opportunity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <button
              onClick={onBookDemoClick}
              className="glow-button flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-red to-brand-red-light px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(185,28,28,0.2)] hover:shadow-[0_0_30px_rgba(185,28,28,0.4)] transition-all hover:scale-[1.02]"
            >
              <span>Book a Demo</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={onSeeSolutionsClick}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-card-dark hover:bg-white/5 px-8 py-4 text-base font-bold text-white transition-all"
            >
              <span>See Solutions</span>
            </button>
          </motion.div>

          {/* Social proof/metrics placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-8 max-w-md"
          >
            <div>
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-xs text-text-muted mt-1">AI Availability</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">&lt; 3s</p>
              <p className="text-xs text-text-muted mt-1">Response Time</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10x</p>
              <p className="text-xs text-text-muted mt-1">Lead Capacity</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Luxury Animated Dashboard Mockup */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-auto min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] rounded-2xl border border-white/10 bg-surface-dark/60 p-6 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* Top Bar Decoration */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
            
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-red/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-semibold text-text-muted ml-2 uppercase tracking-widest">Ascend AI Console</span>
              </div>
              <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-brand-red-light uppercase font-semibold">
                Live Engine
              </span>
            </div>

            {/* Dashboard Workspace */}
            <div className="flex-1 flex flex-col gap-4 justify-center relative">
              {/* Floating Glass Cards representing workflow steps */}
              <AnimatePresence mode="popLayout">
                {/* Step 1: New Lead */}
                {activeCycle >= 0 && (
                  <motion.div
                    key="hero-step-new-lead"
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`glass-card p-4 rounded-xl flex items-center justify-between relative overflow-hidden ${
                      activeCycle === 0 ? "border-brand-red bg-brand-red/[0.02]" : "border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        <UserPlus className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted">Inbound Lead Detected</div>
                        <div className="text-sm font-bold text-white">{leadName}</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 font-medium">
                      {leadSource}
                    </span>
                  </motion.div>
                )}

                {/* Step 2: AI Calling */}
                {activeCycle >= 1 && (
                  <motion.div
                    key="hero-step-ai-calling"
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`glass-card p-4 rounded-xl flex items-center justify-between relative overflow-hidden ${
                      activeCycle === 1 ? "border-brand-red bg-brand-red/[0.02]" : "border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
                        <PhoneCall className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted">AI Voice Assistant calling</div>
                        <div className="text-sm font-bold text-white">Active Dialing...</div>
                      </div>
                    </div>
                    {/* Simulated Voice Waveform */}
                    <div className="flex items-center gap-1.5 h-6">
                      <motion.span animate={{ height: [8, 20, 8] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-brand-red rounded-full" />
                      <motion.span animate={{ height: [12, 24, 12] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-brand-red-light rounded-full" />
                      <motion.span animate={{ height: [6, 16, 6] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-brand-red rounded-full" />
                      <motion.span animate={{ height: [10, 20, 10] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-brand-red-light rounded-full" />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: AI Qualification */}
                {activeCycle >= 2 && (
                  <motion.div
                    key="hero-step-ai-qualification"
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`glass-card p-4 rounded-xl flex items-center justify-between relative overflow-hidden ${
                      activeCycle === 2 ? "border-brand-red bg-brand-red/[0.02]" : "border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-brand-red/10 border border-brand-red/20 text-brand-red-light">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted">AI Qualification Checklist</div>
                        <div className="text-sm font-bold text-white">High Intent Client</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <span className="text-[10px] text-green-400 font-bold flex items-center gap-1">
                        ✓ Budget: $1.2M+
                      </span>
                      <span className="text-[10px] text-green-400 font-bold flex items-center gap-1">
                        ✓ Timeline: &lt; 30 Days
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Appointment Scheduled */}
                {activeCycle >= 3 && (
                  <motion.div
                    key="hero-step-appointment-scheduled"
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`glass-card p-4 rounded-xl flex items-center justify-between relative overflow-hidden ${
                      activeCycle === 3 ? "border-brand-red bg-brand-red/[0.02]" : "border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted">Appointment Scheduled</div>
                        <div className="text-sm font-bold text-white">Consultation Call booked</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-white font-bold block">Tomorrow</span>
                      <span className="text-[10px] text-text-muted">2:30 PM EST</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Status bar */}
            <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                <span>AI System Active</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Total Calls: 1,482</span>
                <span className="text-brand-red-light font-bold">ROI: +420%</span>
              </div>
            </div>

            {/* Subtle floating glass overlay element for depth */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-brand-red/10 blur-xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
