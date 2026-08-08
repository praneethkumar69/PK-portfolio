"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface PreloaderProps {
  progress: number;
  isLoading: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ progress, isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6"
        >
          <div className="w-full max-w-md flex flex-col items-center text-center">
            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold text-2xl mb-8 shadow-2xl shadow-cyan-500/20"
            >
              PK
            </motion.div>

            {/* Status text */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> Potupu Reddy Praneeth Kumar&apos;s portfolio is loading
            </div>

            {/* Percentage Indicator */}
            <div className="text-6xl font-extrabold font-mono text-white mb-6">
              {progress}<span className="text-cyan-400">%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>


          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
