"use client";

import React, { useState } from "react";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { Projects } from "@/components/Projects";
import { Navbar } from "@/components/Navbar";
import {
  AboutMeSection,
  AcademicBackgroundSection,
  SkillsSection,
  CertificationsSection,
  LeadershipSection,
} from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

export default function Home() {
  const [preloadProgress, setPreloadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloadProgress = (progressPercent: number) => {
    setPreloadProgress(progressPercent);
  };

  const handlePreloadComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500 selection:text-black">
      {/* Preloader */}
      <Preloader progress={preloadProgress} isLoading={isLoading} />

      {/* Navigation Header */}
      <Navbar />

      {/* Core Scrollytelling Section */}
      <div className="relative w-full">
        <ScrollyCanvas
          onProgress={handlePreloadProgress}
          onLoaded={handlePreloadComplete}
        />
        <Overlay />
      </div>

      {/* 1st: About Me */}
      <AboutMeSection />

      {/* 2nd: Academic Background */}
      <AcademicBackgroundSection />

      {/* 3rd: Skills & Technical Capabilities */}
      <SkillsSection />

      {/* 4th: Projects */}
      <Projects />

      {/* Certifications (Under Projects) */}
      <CertificationsSection />

      {/* 5th: Leadership Experience */}
      <LeadershipSection />

      {/* Get in touch / Footer */}
      <Footer />
    </main>
  );
}
