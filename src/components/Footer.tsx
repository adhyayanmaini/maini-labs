"use client";

import React from "react";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-bg-dark border-t border-white/5 py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo left */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red text-white shadow-[0_0_10px_rgba(185,28,28,0.2)]">
            <Rocket className="h-4.5 w-4.5" />
          </div>
          <span className="text-lg font-bold tracking-wider text-white uppercase">
            Ascend <span className="text-brand-red-light">AI</span>
          </span>
        </div>

        {/* Links middle */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-text-muted">
          <a href="#solutions" onClick={(e) => handleLinkClick(e, "#solutions")} className="transition-colors hover:text-white">
            Solutions
          </a>
          <a href="#industries" onClick={(e) => handleLinkClick(e, "#industries")} className="transition-colors hover:text-white">
            Industries
          </a>
          <a href="#process" onClick={(e) => handleLinkClick(e, "#process")} className="transition-colors hover:text-white">
            Process
          </a>
          <a href="#faq" onClick={(e) => handleLinkClick(e, "#faq")} className="transition-colors hover:text-white">
            FAQ
          </a>
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
        </div>

        {/* Copyright right */}
        <div className="text-center md:text-right text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Ascend AI Corp. All rights reserved.</p>
          <p className="mt-1 text-[10px] opacity-75">Enterprise-grade systems engineered in Austin, TX.</p>
        </div>
      </div>
    </footer>
  );
}
