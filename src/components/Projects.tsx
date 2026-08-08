"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS, Project } from "@/data/projectsData";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative z-20 w-full bg-[#0a0a0a] px-5 sm:px-8 py-14 sm:py-20 md:px-12 lg:px-24">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header styled like Skills & Technical Capabilities */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8">
          <FolderGit2 className="w-4 h-4" /> Projects
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
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-5 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              {/* Subtle Ambient Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div>
                {/* Top Badge & Year */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  {project.title}
                  <span className="rounded-full p-2 bg-white/5 border border-white/10 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </h3>
                <p className="text-sm font-mono text-neutral-400 mb-4">
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
                      className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-neutral-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-white/5 text-[11px] font-mono text-neutral-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <span className="text-xs font-mono text-cyan-400 underline underline-offset-4 group-hover:text-cyan-300">
                  Read Case Study
                </span>
              </div>
            </motion.div>
          ))}
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
