"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowUp, Phone, MapPin, Mail, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "potupureddypraneethkumar@gmail.com";
  const phone = "+91 8309324027";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative z-20 w-full bg-[#050505] px-6 py-16 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Let&apos;s build something extraordinary<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed mb-6">
              Computer Science Undergraduate at VIT-AP | Club Advisor of Hult Prize VIT-AP Chapter. Open for software engineering roles, creative development projects, and innovative collaborations.
            </p>

            {/* Location, Phone, LinkedIn, and GitHub Links placed together */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                <MapPin className="w-4 h-4 text-cyan-400" /> Vijayawada, Andhra Pradesh
              </span>
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <Phone className="w-4 h-4 text-purple-400" /> {phone}
              </a>

              {/* LinkedIn Direct Button */}
              <a
                href="http://linkedin.com/in/potupureddypraneethkumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* GitHub Direct Button */}
              <a
                href="https://github.com/praneethkumar69"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <svg className="w-4 h-4 fill-current text-purple-400" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Email Actions Card (Direct Mail Button + Copy Email Button) */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl w-full sm:w-auto min-w-[320px] space-y-4">
              <div>
                <span className="text-xs font-mono text-neutral-400 block mb-1">Direct Email Address</span>
                <div className="text-sm font-mono text-white break-all">{email}</div>
              </div>

              <div className="flex flex-col gap-2">
                {/* Direct Mailto Button */}
                <a
                  href={`mailto:${email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <Mail className="w-4 h-4" /> Mail Me Directly
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs font-bold hover:bg-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" /> Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copy Email Address
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Centered Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4 text-xs font-mono">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="http://linkedin.com/in/potupureddypraneethkumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a
              href="https://github.com/praneethkumar69"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-purple-400 hover:bg-white/10 transition-colors"
              title="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>

          {/* Centered Copyright Statement */}
          <div className="text-neutral-400 text-center">
            © 2026 Potupu Reddy Praneeth Kumar.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors group"
          >
            Back to Top
            <span className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-cyan-500 group-hover:text-black transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
