"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onBookDemoClick: () => void;
}

export default function Navbar({ onBookDemoClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Industries", href: "#industries" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 border-b border-white/5 backdrop-blur-md py-4"
            : "bg-transparent border-b border-transparent py-4 md:py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-brand-red transition-all group-hover:bg-brand-red-light shadow-[0_0_15px_rgba(185,28,28,0.3)]">
                <Rocket className="h-5 w-5 text-white transition-transform group-hover:translate-y-[-1px] group-hover:translate-x-[1px]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase font-sans">
                Ascend <span className="text-brand-red-light">AI</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-text-muted transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <button
                onClick={onBookDemoClick}
                className="glow-button relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-red to-brand-red-light px-5 py-2.5 text-sm font-bold text-white transition-all shadow-[0_0_20px_rgba(185,28,28,0.2)] hover:shadow-[0_0_30px_rgba(185,28,28,0.4)] hover:scale-[1.02]"
              >
                <span className="relative z-10">Book Demo</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden rounded-lg border border-white/10 bg-black/50 p-2.5 text-text-muted hover:text-white transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[73px] z-30 border-b border-white/5 bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="space-y-3 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-base font-medium text-text-muted transition-colors hover:text-white py-2.5 border-b border-white/[0.03]"
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-white/10 pt-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookDemoClick();
                  }}
                  className="w-full flex justify-center items-center rounded-xl bg-brand-red py-3 text-base font-bold text-white transition-all hover:bg-brand-red-light"
                >
                  Book Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
