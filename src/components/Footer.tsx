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
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center text-white">
            <svg className="h-7 w-auto text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Stylized M */}
              <path d="M 28 80 L 28 20 L 50 52 L 72 20 L 72 58" stroke="currentColor" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="butt" />
              {/* Blue square */}
              <rect x="65" y="69" width="14" height="14" fill="#0052FF" />
            </svg>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-white font-sans flex items-center gap-1">
            MAINI <span className="font-light text-brand-blue-light">LABS</span>
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
          <p>© {new Date().getFullYear()} Maini Labs. All rights reserved.</p>
          <p className="mt-1 text-[10px] opacity-75">Enterprise-grade systems engineered in Austin, TX.</p>
        </div>
      </div>
    </footer>
  );
}
