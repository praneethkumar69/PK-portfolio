"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Live clock
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata"
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "py-3 bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-black font-extrabold text-sm shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            PK
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
              Potupu Reddy Praneeth Kumar
            </div>
            <div className="text-[11px] font-mono text-neutral-400">
              Club Advisor Hult Prize | Creative Dev
            </div>
          </div>
        </button>

        {/* Desktop Nav Links (Clean labels without numbers) */}
        <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            Hero
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className="px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection("leadership")}
            className="px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            Leadership
          </button>
          <button
            onClick={() => scrollToSection("events")}
            className="px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            Events
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Right Action Bar */}
        <div className="hidden md:flex items-center gap-4">
          {/* Time indicator */}
          <div className="text-[11px] font-mono text-neutral-400 px-3 py-1.5 rounded-md bg-white/5 border border-white/5">
            {currentTime || "12:00:00 IST"}
          </div>

          {/* Get in touch CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
          >
            Contact <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-3 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-transform"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-2 font-mono text-sm shadow-2xl"
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-3 px-4 rounded-xl text-neutral-200 hover:text-cyan-400 hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
          >
            <span>Hero</span>
            <span className="text-xs text-neutral-500">01</span>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="w-full text-left py-3 px-4 rounded-xl text-neutral-200 hover:text-cyan-400 hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
          >
            <span>About</span>
            <span className="text-xs text-neutral-500">02</span>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="w-full text-left py-3 px-4 rounded-xl text-neutral-200 hover:text-cyan-400 hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
          >
            <span>Skills</span>
            <span className="text-xs text-neutral-500">03</span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full text-left py-3 px-4 rounded-xl text-neutral-200 hover:text-cyan-400 hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
          >
            <span>Projects</span>
            <span className="text-xs text-neutral-500">04</span>
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className="w-full text-left py-3 px-4 rounded-xl text-neutral-200 hover:text-cyan-400 hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
          >
            <span>Certifications</span>
            <span className="text-xs text-neutral-500">05</span>
          </button>
          <button
            onClick={() => scrollToSection("leadership")}
            className="w-full text-left py-3 px-4 rounded-xl text-neutral-200 hover:text-cyan-400 hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
          >
            <span>Leadership</span>
            <span className="text-xs text-neutral-500">06</span>
          </button>
          <button
            onClick={() => scrollToSection("events")}
            className="w-full text-left py-3 px-4 rounded-xl text-neutral-200 hover:text-cyan-400 hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
          >
            <span>Events</span>
            <span className="text-xs text-neutral-500">07</span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full text-left py-3 px-4 rounded-xl text-neutral-200 hover:text-cyan-400 hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
          >
            <span>Contact</span>
            <span className="text-xs text-neutral-500">08</span>
          </button>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-cyan-500 text-black font-bold hover:bg-cyan-400 active:scale-98 transition-all"
            >
              Contact Me <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
