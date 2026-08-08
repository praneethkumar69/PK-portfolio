"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

export const Overlay: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: overlayRef,
    offset: ["start start", "end end"],
  });

  // ================= SECTION 1: HERO (0% -> 22%) [LEFT SIDE] =================
  const opacitySection1 = useTransform(scrollYProgress, [0, 0.10, 0.18, 0.22, 1], [1, 1, 0, 0, 0]);
  const ySection1 = useTransform(scrollYProgress, [0, 0.22], [0, -100]);
  const scaleSection1 = useTransform(scrollYProgress, [0, 0.20], [1, 0.95]);
  const displaySection1 = useTransform(scrollYProgress, (v) => (v > 0.22 ? "none" : "flex"));

  // Subtle dynamic hover motion for tagline
  const taglineY = useTransform(scrollYProgress, [0, 0.20], [0, -20]);

  // ================= SECTION 2: RIGHT ALIGNED (26% -> 50%) [RIGHT SIDE] =================
  const opacitySection2 = useTransform(scrollYProgress, [0.24, 0.30, 0.44, 0.50, 1], [0, 1, 1, 0, 0]);
  const ySection2 = useTransform(scrollYProgress, [0.24, 0.30, 0.44, 0.50], [60, 0, 0, -60]);
  const displaySection2 = useTransform(scrollYProgress, (v) => (v >= 0.24 && v <= 0.52 ? "flex" : "none"));

  // ================= SECTION 3: LEFT ALIGNED (54% -> 84%) [LEFT SIDE] =================
  const opacitySection3 = useTransform(scrollYProgress, [0.54, 0.60, 0.78, 0.84, 1], [0, 1, 1, 0, 0]);
  const ySection3 = useTransform(scrollYProgress, [0.54, 0.60, 0.78, 0.84], [60, 0, 0, -60]);
  const displaySection3 = useTransform(scrollYProgress, (v) => (v >= 0.54 && v <= 0.86 ? "flex" : "none"));

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none absolute inset-0 z-10 h-[500vh] w-full"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-6 md:p-12 lg:p-20 overflow-hidden">

        {/* ================= SECTION 1: HERO (LEFT SIDE) ================= */}
        <motion.div
          style={{
            opacity: opacitySection1,
            y: ySection1,
            scale: scaleSection1,
            display: displaySection1,
          }}
          className="absolute inset-0 flex items-center justify-start px-5 sm:px-8 md:px-16 lg:px-24 py-12 md:py-0"
        >
          <div className="pointer-events-auto flex flex-col items-start max-w-xl text-left">

            {/* Main Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl"
            >
              Praneeth<br />
              Kumar<span className="text-cyan-400">.</span>
            </motion.h1>

            {/* Tagline Box */}
            <motion.div
              style={{ y: taglineY }}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-4 sm:mb-6 group cursor-pointer transition-all hover:border-cyan-500/40 hover:bg-white/[0.06]"
            >
              <p className="text-sm sm:text-base md:text-xl font-light text-neutral-200 leading-relaxed group-hover:text-white transition-colors">
                Computer Science Undergraduate building responsive web applications, interactive 3D experiences, and user-focused digital solutions with modern web technologies.
              </p>
            </motion.div>

            {/* Club Advisor Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-[11px] sm:text-xs font-mono text-cyan-400 uppercase tracking-widest shadow-2xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Club Advisor, Hult Prize VIT-AP &amp; Creative Dev
            </motion.div>

          </div>
        </motion.div>


        {/* ================= SECTION 2: RIGHT ALIGNED ("I turn ideas into digital products.") ================= */}
        <motion.div
          style={{
            opacity: opacitySection2,
            y: ySection2,
            display: displaySection2,
          }}
          className="absolute inset-0 flex items-center justify-end px-5 sm:px-8 md:px-16 lg:px-24 py-12 md:py-0"
        >
          <div className="pointer-events-auto max-w-xl text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] sm:text-xs font-mono mb-3 sm:mb-4 uppercase tracking-wider ml-auto">
              <Sparkles className="w-3.5 h-3.5" /> SOFTWARE ENGINEER • AI • UI/UX
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
              I turn ideas into digital products<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-xl text-neutral-300 font-light leading-relaxed mb-6 sm:mb-8">
              I build modern web applications and interactive experiences using React, AI, UI/UX, and 3D — combining engineering with design to create products people enjoy using.
            </p>

            {/* Glassmorphism Stat Card */}
            <div className="flex justify-end">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl text-right">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 font-mono tracking-wide">AI + 3D</div>
                <div className="text-[11px] sm:text-xs text-neutral-400 mt-1">Intelligent &amp; Interactive Experiences</div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* ================= SECTION 3: LEFT ALIGNED ("Building with code, creativity & purpose.") ================= */}
        <motion.div
          style={{
            opacity: opacitySection3,
            y: ySection3,
            display: displaySection3,
          }}
          className="absolute inset-0 flex items-center justify-start px-5 sm:px-8 md:px-16 lg:px-24 py-12 md:py-0"
        >
          <div className="pointer-events-auto max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] sm:text-xs font-mono mb-3 sm:mb-4 uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" /> DESIGN • DEVELOPMENT • LEADERSHIP
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
              Building with code, creativity &amp; purpose<span className="text-purple-400">.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-xl text-neutral-300 font-light leading-relaxed mb-6 sm:mb-8">
              I combine frontend development, UI/UX, 3D experiences, and creative problem-solving to build meaningful digital products and experiences.
            </p>

            {/* Interactive Pill Badges */}
            <div className="flex flex-wrap justify-start gap-2 text-xs font-mono">
              {["React.js", "JavaScript", "Three.js", "UI/UX Design", "HTML & CSS", "Git & GitHub"].map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-200 text-[11px] sm:text-xs hover:border-purple-500/50 hover:text-purple-300 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
