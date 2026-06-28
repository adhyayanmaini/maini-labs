"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  website: string;
  companySize: string;
}

export default function CalendlyModal({ isOpen, onClose, calendlyUrl }: CalendlyModalProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"date" | "form" | "success">("date");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>();

  // Mock available dates (next 5 business days)
  const dates = [
    { day: "Thu", date: "18", month: "Jun" },
    { day: "Fri", date: "19", month: "Jun" },
    { day: "Mon", date: "22", month: "Jun" },
    { day: "Tue", date: "23", month: "Jun" },
    { day: "Wed", date: "24", month: "Jun" },
  ];

  // Mock time slots
  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

  const handleDateSelect = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedTime(null);
  };

  const handleTimeSelect = (timeStr: string) => {
    setSelectedTime(timeStr);
    setStep("form");
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_maini_labs";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_demo_booking";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "user_public_key_placeholder";

    try {
      console.log("EmailJS sending email...");
      await emailjs.send(
        serviceId,
        templateId,
        {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          website: data.website,
          companySize: data.companySize,
          selectedDate: selectedDate,
          selectedTime: selectedTime,
        },
        publicKey
      );
      console.log("EmailJS message sent successfully!");
    } catch (error) {
      console.warn("EmailJS failed to send email. Check configuration. Error detail:", error);
    }

    setIsSubmitting(false);
    setStep("success");
  };

  const handleClose = () => {
    onClose();
    // Reset state after transition completes
    setTimeout(() => {
      setSelectedDate(null);
      setSelectedTime(null);
      setStep("date");
      reset();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-surface-dark shadow-2xl max-h-[90vh] md:max-h-none flex flex-col"
          >
            {/* Blue Accent Top Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-blue to-brand-blue-light" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 rounded-full border border-white/10 bg-black/50 p-2 text-text-muted transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 overflow-y-auto md:overflow-visible flex-1">
              {/* Left Info Panel */}
              <div className="border-b border-white/10 bg-card-dark p-8 md:border-b-0 md:border-r">
                <div className="mb-6">
                  <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold tracking-wider text-brand-blue-light uppercase border border-brand-blue/20">
                    Free Consultation
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">Maini Labs Demo</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Discover how our custom AI calling, texting, and operational automation systems can scale your revenue and free up your team.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <Clock className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                    <span>30 Minutes Strategy Session</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <CalendarIcon className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                    <span>Video Conference</span>
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="mt-8 rounded-lg border border-white/5 bg-black/40 p-4">
                    <span className="text-xs uppercase tracking-wider text-text-muted block">Selected Time</span>
                    <span className="text-sm font-semibold text-white mt-1 block">
                      {selectedDate} @ {selectedTime}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Booking Area */}
              <div className="col-span-2 p-8 bg-surface-dark md:max-h-[80vh] md:overflow-y-auto">
                {calendlyUrl ? (
                  /* Embed Mode */
                  <div className="h-[500px] w-full">
                    <iframe
                      src={calendlyUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Select Date & Time"
                    />
                  </div>
                ) : (
                  /* Mock Mode */
                  <>
                    {/* Step Tracker */}
                    <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-wider font-semibold">
                      <span className={step === "date" ? "text-brand-blue-light" : "text-text-muted"}>1. Pick Time</span>
                      <ChevronRight className="h-3 w-3 text-text-muted" />
                      <span className={step === "form" ? "text-brand-blue-light" : "text-text-muted"}>2. Your Details</span>
                      <ChevronRight className="h-3 w-3 text-text-muted" />
                      <span className={step === "success" ? "text-brand-blue-light" : "text-text-muted"}>3. Confirmed</span>
                    </div>

                    {step === "date" && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-4">Select a Date</h4>
                          <div className="grid grid-cols-5 gap-2">
                            {dates.map((d) => (
                              <button
                                key={d.date}
                                onClick={() => handleDateSelect(`${d.day}, ${d.month} ${d.date}`)}
                                className={`flex flex-col items-center justify-center rounded-xl p-3 border transition-all ${
                                  selectedDate?.includes(`${d.month} ${d.date}`)
                                    ? "bg-brand-blue/10 border-brand-blue text-white shadow-[0_0_15px_rgba(0,82,255,0.15)]"
                                    : "bg-card-dark border-white/5 text-text-muted hover:border-white/20 hover:text-white"
                                }`}
                              >
                                <span className="text-xs uppercase opacity-75">{d.day}</span>
                                <span className="text-lg font-bold mt-1">{d.date}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {selectedDate && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <h4 className="text-lg font-bold text-white mb-4">Select a Time Slot</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {timeSlots.map((time) => (
                                <button
                                  key={time}
                                  onClick={() => handleTimeSelect(time)}
                                  className="rounded-xl border border-white/5 bg-card-dark py-3 text-center text-sm font-medium text-text-muted transition-all hover:border-brand-blue hover:text-white hover:bg-brand-blue/5"
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {step === "form" && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h4 className="text-lg font-bold text-white mb-4">Tell Us About Your Business</h4>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-text-muted uppercase mb-1.5">Full Name</label>
                              <input
                                {...register("fullName", { required: "Name is required" })}
                                type="text"
                                placeholder="John Doe"
                                className="w-full rounded-lg border border-white/10 bg-card-dark px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                              />
                              {errors.fullName && <p className="mt-1 text-xs text-brand-blue-light">{errors.fullName.message}</p>}
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-text-muted uppercase mb-1.5">Work Email</label>
                              <input
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                                })}
                                type="email"
                                placeholder="john@company.com"
                                className="w-full rounded-lg border border-white/10 bg-card-dark px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                              />
                              {errors.email && <p className="mt-1 text-xs text-brand-blue-light">{errors.email.message}</p>}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-text-muted uppercase mb-1.5">Phone Number</label>
                              <input
                                {...register("phone", { required: "Phone number is required" })}
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                className="w-full rounded-lg border border-white/10 bg-card-dark px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                              />
                              {errors.phone && <p className="mt-1 text-xs text-brand-blue-light">{errors.phone.message}</p>}
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-text-muted uppercase mb-1.5">Website / CRM</label>
                              <input
                                {...register("website", { required: "Website or CRM name is required" })}
                                type="text"
                                placeholder="www.yourcompany.com"
                                className="w-full rounded-lg border border-white/10 bg-card-dark px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                              />
                              {errors.website && <p className="mt-1 text-xs text-brand-blue-light">{errors.website.message}</p>}
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-text-muted uppercase mb-1.5">Company Size</label>
                            <select
                              {...register("companySize")}
                              className="w-full rounded-lg border border-white/10 bg-card-dark px-4 py-3 text-sm text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                            >
                              <option value="1-5">1-5 Employees</option>
                              <option value="6-20">6-20 Employees</option>
                              <option value="21-100">21-100 Employees</option>
                              <option value="100+">100+ Employees</option>
                            </select>
                          </div>

                          <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                            <button
                              type="button"
                              onClick={() => setStep("date")}
                              className="text-sm font-semibold text-text-muted hover:text-white"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex items-center justify-center gap-2 rounded-xl bg-brand-blue hover:bg-brand-blue-light text-white font-semibold text-sm px-6 py-3 transition-colors disabled:opacity-50"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  <span>Scheduling...</span>
                                </>
                              ) : (
                                <span>Confirm Booking</span>
                              )}
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}

                    {step === "success" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center py-12"
                      >
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-brand-blue/30 blur-xl rounded-full" />
                          <CheckCircle2 className="h-16 w-16 text-brand-blue relative z-10" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">Your Demo is Confirmed!</h4>
                        <p className="mt-3 text-text-muted max-w-md text-sm leading-relaxed">
                          We've sent a calendar invitation and confirmation email with meeting details. Prepare to see how Maini Labs can automate your growth.
                        </p>
                        <div className="mt-8 rounded-xl border border-white/10 bg-card-dark p-6 max-w-sm w-full">
                          <h5 className="font-semibold text-white text-sm">Meeting Schedule</h5>
                          <div className="mt-3 flex items-center gap-3 justify-center text-sm text-text-muted">
                            <CalendarIcon className="h-4 w-4 text-brand-blue-light" />
                            <span>{selectedDate}</span>
                          </div>
                          <div className="mt-2 flex items-center gap-3 justify-center text-sm text-text-muted">
                            <Clock className="h-4 w-4 text-brand-blue-light" />
                            <span>{selectedTime} EST</span>
                          </div>
                        </div>

                        <button
                          onClick={handleClose}
                          className="mt-8 text-sm font-bold text-brand-blue-light hover:text-white transition-colors"
                        >
                          Close Window
                        </button>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
