"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS, Project } from "@/data/projectsData";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { SectionDivider } from "./AboutSection";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative z-20 w-full bg-[#070912] px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      {/* Section Partition Header */}
      <SectionDivider number="04" title="PROJECTS & CREATIVE WORK" color="cyan" />

      {/* Main Elevated Glassmorphic Container Panel */}
      <div className="relative max-w-7xl mx-auto">
        {/* Background Subtle Gradient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#11162a]/90 via-[#0d1020]/90 to-[#070914]/95 border border-cyan-500/20 p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] shadow-cyan-500/5">
          {/* Section Header styled like Skills & Technical Capabilities */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8">
            <FolderGit2 className="w-4 h-4" /> Featured Works & Case Studies
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#141930]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:bg-[#19203c] hover:-translate-y-1.5 shadow-2xl hover:shadow-[0_25px_50px_rgba(6,182,212,0.25)] flex flex-col justify-between"
              >
                {/* Subtle Ambient Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Top Badge & Year */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-6">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold shadow-md">
                      {project.category}
                    </span>
                    <span className="text-neutral-400 font-bold">{project.year}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    {project.title}
                    <span className="rounded-full p-2 bg-white/5 border border-white/10 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </h3>
                  <p className="text-sm font-mono text-cyan-400/90 mb-4 font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Footer */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-neutral-300 border border-white/10 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-white/5 text-[11px] font-mono text-neutral-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-cyan-400 underline underline-offset-4 group-hover:text-cyan-300 font-bold">
                    Read Case Study
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
