"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Award,
  CheckCircle2,
  Code2,
  Video,
  Palette,
  Terminal,
  Users,
  Sparkles,
  ExternalLink,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";

// ================= REUSABLE SECTION DIVIDER =================
export const SectionDivider: React.FC<{
  number: string;
  title: string;
  color?: "cyan" | "purple" | "amber" | "emerald";
}> = ({ number, title, color = "cyan" }) => {
  const colorMap = {
    cyan: {
      line: "from-transparent via-cyan-500/50 to-transparent",
      badge: "bg-cyan-950/80 border-cyan-500/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]",
    },
    purple: {
      line: "from-transparent via-purple-500/50 to-transparent",
      badge: "bg-purple-950/80 border-purple-500/40 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    },
    amber: {
      line: "from-transparent via-amber-500/50 to-transparent",
      badge: "bg-amber-950/80 border-amber-500/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    },
    emerald: {
      line: "from-transparent via-emerald-500/50 to-transparent",
      badge: "bg-emerald-950/80 border-emerald-500/40 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    },
  };

  const style = colorMap[color];

  return (
    <div className="relative w-full py-12 sm:py-16 flex items-center justify-center">
      {/* Background Gradient Line Partition */}
      <div className={`absolute inset-x-0 h-[2px] bg-gradient-to-r ${style.line}`} />
      
      {/* Center Partition Pill */}
      <div
        className={`relative z-10 px-6 py-2 rounded-full border backdrop-blur-2xl text-xs font-mono tracking-widest uppercase flex items-center gap-3 ${style.badge}`}
      >
        <span className="font-extrabold text-sm">{number}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 animate-pulse" />
        <span className="font-semibold">{title}</span>
      </div>
    </div>
  );
};

// ================= 1. ABOUT ME SECTION =================
export const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="relative z-20 w-full bg-[#07080c] px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      {/* Section Partition Header */}
      <SectionDivider number="01" title="ABOUT ME" color="cyan" />

      {/* Main Elevated Glassmorphic Container Panel */}
      <div className="relative max-w-7xl mx-auto">
        {/* Glow Halo */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#111420]/90 via-[#0d0f18]/90 to-[#090b10]/95 border border-cyan-500/20 p-6 sm:p-10 md:p-14 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] shadow-cyan-500/5">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 uppercase tracking-widest w-fit shadow-lg shadow-cyan-500/10">
            <User className="w-4 h-4" /> Personal Overview
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Potupu Reddy Praneeth Kumar<span className="text-cyan-400">.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-xl text-neutral-300 font-light leading-relaxed max-w-4xl mb-8">
            Computer Science undergraduate at VIT-AP with a strong focus on technology, innovation, and product development. Experienced in building digital projects, exploring emerging technologies, and collaborating with teams to turn ideas into practical solutions. Currently serving as a <span className="text-cyan-300 font-semibold">Club Advisor at Hult Prize VIT-AP</span>, contributing to team development, innovation, event coordination, and strategic initiatives.
          </p>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xs font-mono text-cyan-400 mb-1">EDUCATION</div>
              <div className="text-sm font-bold text-white">B.Tech CSE @ VIT-AP</div>
              <div className="text-xs text-neutral-400 font-mono">2023 – 2027 · CGPA 8.39</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xs font-mono text-purple-400 mb-1">LEADERSHIP</div>
              <div className="text-sm font-bold text-white">Club Advisor</div>
              <div className="text-xs text-neutral-400 font-mono">Hult Prize VIT-AP Chapter</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xs font-mono text-emerald-400 mb-1">FOCUS AREAS</div>
              <div className="text-sm font-bold text-white">Software & UI/UX Dev</div>
              <div className="text-xs text-neutral-400 font-mono">Full Stack & 3D Interactive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= 2. ACADEMIC BACKGROUND SECTION =================
export const AcademicBackgroundSection: React.FC = () => {
  const education = [
    {
      institution: "Vellore Institute of Technology AP",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2023 – 2027",
      score: "CGPA: 8.39 / 10.0",
      accent: "from-purple-500/20 to-transparent",
      borderColor: "hover:border-purple-400/60 shadow-purple-500/10",
      badgeColor: "text-purple-300 bg-purple-500/10 border-purple-500/30",
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate (MPC)",
      duration: "2021 – 2023",
      score: "Percentage: 70.3%",
      accent: "from-cyan-500/20 to-transparent",
      borderColor: "hover:border-cyan-400/60 shadow-cyan-500/10",
      badgeColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      institution: "DR. KKR’s Gowtham School",
      degree: "Secondary School Certificate (SSC)",
      duration: "2019 – 2021",
      score: "Percentage: 99.8%",
      accent: "from-emerald-500/20 to-transparent",
      borderColor: "hover:border-emerald-400/60 shadow-emerald-500/10",
      badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
    },
  ];

  return (
    <section id="education" className="relative z-20 w-full bg-[#0a0c14] px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      {/* Section Partition Header */}
      <SectionDivider number="02" title="ACADEMIC BACKGROUND" color="purple" />

      {/* Main Elevated Glassmorphic Container Panel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute -top-20 right-10 w-[500px] h-[300px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#131122]/90 via-[#0e0d19]/90 to-[#0a0b12]/95 border border-purple-500/20 p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] shadow-purple-500/5">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-8">
            <GraduationCap className="w-4 h-4" /> Academic Journey
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative group p-6 sm:p-7 rounded-3xl bg-[#151326]/80 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-2xl hover:shadow-2xl ${edu.borderColor} flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Subtle Gradient Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full border text-xs font-mono ${edu.badgeColor}`}>
                      {edu.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                    {edu.institution}
                  </h3>

                  <div className="text-sm font-mono text-neutral-300 mb-6">{edu.degree}</div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">Score</span>
                  <div className="text-base sm:text-lg font-mono font-bold text-cyan-400">{edu.score}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= 3. SKILLS SECTION =================
export const SkillsSection: React.FC = () => {
  const skillGroups = [
    {
      title: "Core Computer Science",
      icon: Terminal,
      skills: ["OOP", "DSA", "DBMS", "Computer Networks (CN)", "Operating Systems (OS)", "DAA"],
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      cardBorder: "hover:border-cyan-500/50 shadow-cyan-500/10",
    },
    {
      title: "Languages & Databases",
      icon: Code2,
      skills: ["C Language", "Python", "Java", "SQL"],
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      cardBorder: "hover:border-purple-500/50 shadow-purple-500/10",
    },
    {
      title: "UI/UX & Web Development",
      icon: Palette,
      skills: ["HTML5", "JavaScript (ES6+)", "Three.js 3D", "Figma", "Canva"],
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      cardBorder: "hover:border-emerald-500/50 shadow-emerald-500/10",
    },
    {
      title: "Video Editing & Production",
      icon: Video,
      skills: ["Adobe Premiere Pro", "Filmora", "CapCut", "iMovie", "VN Video Editor"],
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      cardBorder: "hover:border-amber-500/50 shadow-amber-500/10",
    },
  ];

  return (
    <section id="skills" className="relative z-20 w-full bg-[#07090e] px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      {/* Section Partition Header */}
      <SectionDivider number="03" title="SKILLS & TECHNICAL CAPABILITIES" color="cyan" />

      {/* Main Elevated Glassmorphic Container Panel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#101424]/90 via-[#0d101d]/90 to-[#080a12]/95 border border-cyan-500/20 p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] shadow-cyan-500/5">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8">
            <Sparkles className="w-4 h-4" /> Technical Competencies & Tools
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`p-6 sm:p-8 rounded-3xl bg-[#14182a]/80 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-2xl ${group.cardBorder}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-2xl border ${group.color} shadow-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-200 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= 4. CERTIFICATIONS SECTION =================
export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      link: "https://drive.google.com/file/d/1XP3i49sg1894MRDou6JWlODr1xzQtk4J/view?usp=sharing",
      issuer: "Oracle Cloud",
    },
    {
      title: "Black Bucks: UI/UX Design",
      link: "https://drive.google.com/file/d/1FueW_rc9lC7Uj_4-17wBKVsadO6ZYVUA/view?pli=1",
      issuer: "Black Bucks",
    },
    {
      title: "100 Days of Coding Challenge – Phase 1",
      link: "https://credsverse.com/credentials/ebc8ffe0-106e-4d82-9e59-e5251bf286c9",
      issuer: "Credsverse",
    },
    {
      title: "100 Days of Coding Challenge – Phase 2",
      link: "https://credsverse.com/credentials/c8264794-1c39-4395-90ec-f30bb82524e3",
      issuer: "Credsverse",
    },
    {
      title: "C-Language",
      link: "https://drive.google.com/file/d/1sYxrhbVw7t7jRQP3BntYIF2JAWPU5Q6J/view",
      issuer: "Programming Certificate",
    },
  ];

  return (
    <section id="certifications" className="relative z-20 w-full bg-[#0c0a06] px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      {/* Section Partition Header */}
      <SectionDivider number="05" title="CERTIFICATIONS" color="amber" />

      {/* Main Elevated Glassmorphic Container Panel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#1c1810]/90 via-[#14110a]/90 to-[#0a0905]/95 border border-amber-500/20 p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] shadow-amber-500/5">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-8">
            <Award className="w-4 h-4" /> Verified Credentials
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group flex flex-col justify-between p-6 rounded-3xl bg-[#221d12]/80 border border-white/10 backdrop-blur-xl hover:border-amber-400/60 hover:bg-[#2a2416] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-2xl hover:shadow-amber-500/15"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400 uppercase mb-3">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" /> {cert.issuer}
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-amber-400 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white">
                  <span>View Credential</span>
                  <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= 5. LEADERSHIP SECTION =================
export const LeadershipSection: React.FC = () => {
  const hultExperience = {
    organization: "HULT PRIZE VIT-AP",
    totalDuration: "2 yrs 1 mo",
    roles: [
      {
        title: "club advisor",
        duration: "Jul 2026 - Present · 2 mos",
        location: null,
      },
      {
        title: "President",
        duration: "Jul 2025 - Jul 2026 · 1 yr",
        location: "Amaravati, Andhra Pradesh, India",
      },
      {
        title: "Marketing Team Lead",
        duration: "Feb 2025 - Jul 2025 · 6 mos",
        location: "Amaravati, Andhra Pradesh, India",
      },
      {
        title: "Technical Team Member",
        duration: "Aug 2024 - Feb 2025 · 7 mos",
        location: "Amaravati, Andhra Pradesh, India",
      },
    ],
  };

  return (
    <section id="leadership" className="relative z-20 w-full bg-[#060b08] px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      {/* Section Partition Header */}
      <SectionDivider number="06" title="LEADERSHIP EXPERIENCE" color="emerald" />

      {/* Main Elevated Glassmorphic Container Panel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#0f1d16]/90 via-[#0a150f]/90 to-[#050b07]/95 border border-emerald-500/20 p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] shadow-emerald-500/5">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-8">
            <Users className="w-4 h-4" /> Organizational Leadership
          </div>

          <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#12241b]/80 border border-emerald-500/30 backdrop-blur-xl shadow-2xl">
            {/* Organization Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-lg">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {hultExperience.organization}
                  </h3>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wide shadow-md">
                {hultExperience.totalDuration}
              </span>
            </div>

            {/* Timeline of Roles */}
            <div className="relative pl-5 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-emerald-400 before:via-emerald-500/40 before:to-white/10">
              {hultExperience.roles.map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="relative group"
                >
                  {/* Timeline node dot */}
                  <div className="absolute -left-[27px] sm:-left-[39px] top-4 h-3.5 w-3.5 rounded-full border-2 border-emerald-400 bg-[#070d0a] group-hover:bg-emerald-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(52,211,153,0.6)]" />

                  <div className="bg-[#172c21]/60 border border-white/10 rounded-2xl p-4 sm:p-5 hover:border-emerald-400/50 hover:bg-[#1f3b2d]/80 transition-all duration-300 shadow-xl">
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                      {role.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-neutral-300">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{role.duration}</span>
                      </div>

                      {role.location && (
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{role.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= 6. EVENTS HOSTED SECTION =================
export const EventsHostedSection: React.FC = () => {
  const events = [
    {
      title: "OnCampus 2026 – Innovation for Impact",
      role: "President & Lead Host, HULT PRIZE VIT-AP",
      date: "26 Feb 2026",
      time: "11:00 AM – 1:00 PM",
      location: "Newton Hall (AB-1), VIT-AP",
      description:
        "Hosted OnCampus 2026 at VIT-AP University as part of the global Hult Prize Foundation program in collaboration with the Climate Change Action Initiatives Club. Student teams pitched real-world solutions in sustainability & social impact to an esteemed panel of judges.",
      collaborators: "Climate Change Action Initiatives Club · Faculty Coordinator: Deepjoy Katuwal",
      highlights: ["Global Hult Program", "Sustainability & Social Impact", "Judges Pitching Round"],
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7437944059697987584/",
      image: "/events/oncampus-2026.jpg",
      category: "Social Entrepreneurship",
    },
    {
      title: "IDEA FORGE 2025 | Ignite the Spark, Forge the Vision",
      role: "President, Hult Prize Chapter VIT-AP",
      date: "16 Dec 2025",
      time: "Full Day Summit",
      location: "Newton Hall (AB-1), VIT-AP",
      description:
        "Organized a Medical Sector Startup Pitch Competition with a ₹30,000 prize pool sponsored by NATS (North America Telugu Society) in collaboration with CSI Student Chapter. Rewarded top Healthcare innovations with cash prizes, mementoes, and cheques.",
      collaborators: "Sponsored by NATS · CSI Student Chapter · Faculty: Dr. Deepjoy Katuwal",
      highlights: ["₹30,000 Prize Pool", "NATS Sponsored", "Medical Sector Startups"],
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7422353791183790080/",
      image: "/events/idea-forge-2025.jpg",
      category: "Healthcare & Startup Pitch",
    },
    {
      title: "FunFiesta 2025 – A Day of Fun & Friendship",
      role: "President, Hult Prize Chapter VIT-AP",
      date: "27 Sep 2025",
      time: "4:00 PM – 6:00 PM",
      location: "AB1 Newton Hall, VIT-AP",
      description:
        "First major event as President welcoming the 25th batch of VIT-AP. Focused on community building, trust, and team engagement, setting the foundation for upcoming ideation rounds, workshops, and social impact pitching.",
      collaborators: "Organized by Hult Prize VIT-AP · Faculty Coordinator: Dr. Deepjoy Katuwal",
      highlights: ["1st Event as President", "25th Batch Welcome", "Community Building"],
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7404996001951850498/",
      image: "/events/funfiesta-2025.jpg",
      category: "Orientation & Networking",
    },
  ];

  return (
    <section id="events" className="relative z-20 w-full bg-[#080914] px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      {/* Section Partition Header */}
      <SectionDivider number="07" title="COMMUNITY & LEADERSHIP / EVENTS HOSTED" color="cyan" />

      {/* Main Elevated Glassmorphic Container Panel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#11152a]/90 via-[#0d1020]/90 to-[#070912]/95 border border-cyan-500/20 p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] shadow-cyan-500/5">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" /> Events & Summits
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Events I Hosted<span className="text-cyan-400">.</span>
              </h2>
            </div>
            <p className="text-sm text-neutral-300 max-w-md font-mono">
              Highlights from major global programs, startup pitch competitions, and orientation summits hosted at VIT-AP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex flex-col justify-between rounded-3xl bg-[#151930]/80 border border-white/10 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)]"
              >
                {/* Event Clickable Photo Container Header (Directs to LinkedIn) */}
                <a
                  href={event.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-52 w-full bg-gradient-to-br from-cyan-950/60 via-purple-950/40 to-black overflow-hidden flex items-center justify-center border-b border-white/10 block group/photo cursor-pointer"
                >
                  {event.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative z-10 p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-3 group-hover/photo:scale-110 transition-transform">
                        <Sparkles className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-cyan-300/80 uppercase tracking-widest block">
                        {event.category}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400 mt-2 flex items-center justify-center gap-1 opacity-70 group-hover/photo:opacity-100 group-hover/photo:text-cyan-400 transition-all">
                        Click to view photo &amp; post on LinkedIn <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  )}

                  {/* Overlay Date Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 shadow-md">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </div>

                  {/* Overlay LinkedIn Tag Badge */}
                  <div
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-cyan-400 group-hover/photo:bg-cyan-500 group-hover/photo:text-black transition-colors shadow-md"
                    title="View LinkedIn Post"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                </a>

                {/* Event Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-purple-400 mb-2">
                      <span className="font-semibold">{event.role}</span>
                      <span className="flex items-center gap-1 text-neutral-400">
                        <MapPin className="w-3 h-3 text-neutral-500" /> {event.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3">
                      {event.description}
                    </p>

                    <div className="text-[11px] font-mono text-neutral-400 border-t border-white/10 pt-2.5">
                      {event.collaborators}
                    </div>
                  </div>

                  {/* Highlights & LinkedIn Link */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {event.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* LinkedIn Redirect Link */}
                    <a
                      href={event.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-black font-mono text-xs font-bold transition-all group/btn shadow-md"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        View LinkedIn Post &amp; Photo
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
