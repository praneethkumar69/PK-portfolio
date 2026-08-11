"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, Award, CheckCircle2, Code2, Video, Palette, Terminal, Users, Sparkles, ExternalLink, MapPin, Calendar, Briefcase } from "lucide-react";

// ================= 1. ABOUT ME SECTION =================
export const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="relative z-20 w-full bg-[#0a0a0a] px-5 sm:px-8 py-14 sm:py-20 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 uppercase tracking-widest">
          <User className="w-3.5 h-3.5" /> About Me
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
          Potupu Reddy Praneeth Kumar<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-neutral-300 font-light leading-relaxed max-w-4xl">
          Computer Science undergraduate at VIT-AP with an interest in technology, innovation, and product development. Experienced in building digital projects, exploring emerging technologies, and collaborating with teams to turn ideas into practical solutions. Currently serving as a Club Advisor at Hult Prize VIT-AP, contributing to team development, innovation, event coordination, and strategic initiatives.
        </p>
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
      score: "CGPA: 8.39 / 10.0"
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate (MPC)",
      duration: "2021 – 2023",
      score: "Percentage: 70.3%"
    },
    {
      institution: "DR. KKR’s Gowtham School",
      degree: "Secondary School Certificate (SSC)",
      duration: "2019 – 2021",
      score: "Percentage: 99.8%"
    }
  ];

  return (
    <section id="education" className="relative z-20 w-full bg-[#0a0a0a] px-5 sm:px-8 py-14 sm:py-20 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-8">
          <GraduationCap className="w-4 h-4" /> Academic Background
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-neutral-400 block mb-2">{edu.duration}</span>
                <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                <div className="text-sm font-mono text-purple-300 mb-4">{edu.degree}</div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-lg font-mono font-bold text-cyan-400">{edu.score}</div>
              </div>
            </motion.div>
          ))}
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
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10"
    },
    {
      title: "Languages & Databases",
      icon: Code2,
      skills: ["C Language", "Python", "Java", "SQL"],
      color: "text-purple-400 border-purple-500/20 bg-purple-500/10"
    },
    {
      title: "UI/UX & Web Development",
      icon: Palette,
      skills: ["HTML5", "JavaScript (ES6+)", "Three.js 3D", "Figma", "Canva"],
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
    },
    {
      title: "Video Editing & Production",
      icon: Video,
      skills: ["Adobe Premiere Pro", "Filmora", "CapCut", "iMovie", "VN Video Editor"],
      color: "text-amber-400 border-amber-500/20 bg-amber-500/10"
    }
  ];

  return (
    <section id="skills" className="relative z-20 w-full bg-[#0a0a0a] px-5 sm:px-8 py-14 sm:py-20 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8">
          <Sparkles className="w-4 h-4" /> Skills &amp; Technical Capabilities
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
                className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl border ${group.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-200 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
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
    </section>
  );
};

// ================= 4. CERTIFICATIONS SECTION (With Clickable External Credential Links) =================
export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      link: "https://drive.google.com/file/d/1XP3i49sg1894MRDou6JWlODr1xzQtk4J/view?usp=sharing",
      issuer: "Oracle Cloud"
    },
    {
      title: "Black Bucks: UI/UX Design",
      link: "https://drive.google.com/file/d/1FueW_rc9lC7Uj_4-17wBKVsadO6ZYVUA/view?pli=1",
      issuer: "Black Bucks"
    },
    {
      title: "100 Days of Coding Challenge – Phase 1",
      link: "https://credsverse.com/credentials/ebc8ffe0-106e-4d82-9e59-e5251bf286c9",
      issuer: "Credsverse"
    },
    {
      title: "100 Days of Coding Challenge – Phase 2",
      link: "https://credsverse.com/credentials/c8264794-1c39-4395-90ec-f30bb82524e3",
      issuer: "Credsverse"
    },
    {
      title: "C-Language",
      link: "https://drive.google.com/file/d/1sYxrhbVw7t7jRQP3BntYIF2JAWPU5Q6J/view",
      issuer: "Programming Certificate"
    }
  ];

  return (
    <section id="certifications" className="relative z-20 w-full bg-[#0a0a0a] px-5 sm:px-8 py-14 sm:py-20 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-8">
          <Award className="w-4 h-4" /> Certifications
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
              className="group flex flex-col justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-amber-400/50 hover:bg-white/[0.04] transition-all cursor-pointer shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 uppercase mb-3">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" /> {cert.issuer}
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-amber-400 transition-all" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white">
                <span>View Certificate</span>
                <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
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
    <section id="leadership" className="relative z-20 w-full bg-[#0a0a0a] px-5 sm:px-8 py-14 sm:py-20 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-8">
          <Users className="w-4 h-4" /> Leadership Experience
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-emerald-500/40 transition-all shadow-2xl"
        >
          {/* Organization Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {hultExperience.organization}
                </h3>
              </div>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-wide">
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
                <div className="absolute -left-[27px] sm:-left-[39px] top-4 h-3.5 w-3.5 rounded-full border-2 border-emerald-400 bg-[#0a0a0a] group-hover:bg-emerald-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(52,211,153,0.5)]" />

                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                    {role.title}
                  </h4>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-neutral-300">
                    <div className="flex items-center gap-1.5 text-emerald-400">
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
        </motion.div>
      </div>
    </section>
  );
};
