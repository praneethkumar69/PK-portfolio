"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthOscillatorRef = useRef<OscillatorNode | null>(null);

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

  // Web Audio Synth Fallback if mp3 file is missing
  const startSynthAudio = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      if (!synthOscillatorRef.current) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        synthOscillatorRef.current = osc;
      }
    } catch (e) {
      console.warn("Synth audio fallback error:", e);
    }
  };

  const stopSynthAudio = () => {
    if (synthOscillatorRef.current) {
      synthOscillatorRef.current.stop();
      synthOscillatorRef.current.disconnect();
      synthOscillatorRef.current = null;
    }
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isMuted) {
      if (audio) {
        audio.play().then(() => {
          setIsMuted(false);
        }).catch(() => {
          startSynthAudio();
          setIsMuted(false);
        });
      } else {
        startSynthAudio();
        setIsMuted(false);
      }
    } else {
      if (audio) {
        audio.pause();
      }
      stopSynthAudio();
      setIsMuted(true);
    }
  };

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <audio ref={audioRef} src="/audio/ambient.mp3" loop preload="auto" />

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
              Praneeth Kumar
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

          {/* Sound Toggle Button */}
          <button
            onClick={toggleAudio}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center"
            title={isMuted ? "Play Audio" : "Mute Audio"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            )}
          </button>

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
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 space-y-4 font-mono text-sm"
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-neutral-300 hover:text-cyan-400"
          >
            Hero
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left py-2 text-neutral-300 hover:text-cyan-400"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="block w-full text-left py-2 text-neutral-300 hover:text-cyan-400"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left py-2 text-neutral-300 hover:text-cyan-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className="block w-full text-left py-2 text-neutral-300 hover:text-cyan-400"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection("leadership")}
            className="block w-full text-left py-2 text-neutral-300 hover:text-cyan-400"
          >
            Leadership
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left py-2 text-neutral-300 hover:text-cyan-400"
          >
            Contact
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};
