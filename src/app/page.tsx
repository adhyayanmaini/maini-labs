"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Infrastructure from "@/components/Infrastructure";
import Problems from "@/components/Problems";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import DemoPreview from "@/components/DemoPreview";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookDemoClick = () => {
    setIsModalOpen(true);
  };

  const handleSeeSolutionsClick = () => {
    const targetElement = document.querySelector("#solutions");
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark flex flex-col font-sans text-white select-none">
      {/* Navigation */}
      <Navbar onBookDemoClick={handleBookDemoClick} />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <Hero
          onBookDemoClick={handleBookDemoClick}
          onSeeSolutionsClick={handleSeeSolutionsClick}
        />

        {/* Section 2: Trusted AI Growth Infrastructure */}
        <Infrastructure />

        {/* Section 3: Problems We Solve */}
        <Problems />

        {/* Section 4: How It Works */}
        <HowItWorks />

        {/* Section 5: Industry Focus */}
        <Industries />

        {/* Section 6: Why Ascend AI */}
        <WhyUs />

        {/* Section 7: Demo Preview */}
        <DemoPreview />

        {/* Section 8: Testimonials */}
        <Testimonials />

        {/* Section 9: FAQ */}
        <FAQ />

        {/* Section 10: Final CTA */}
        <FinalCTA onBookDemoClick={handleBookDemoClick} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Action Booking Modal */}
      <CalendlyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
