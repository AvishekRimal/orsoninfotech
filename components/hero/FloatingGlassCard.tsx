"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingGlassCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  positionClass: string;
  floatDuration?: number;
  delay?: number;
}

export default function FloatingGlassCard({
  icon,
  title,
  subtitle,
  badge,
  positionClass,
  floatDuration = 5,
  delay = 0,
}: FloatingGlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      whileHover={{ scale: 1.08, y: -5, transition: { duration: 0.2 } }}
      className={`absolute z-30 pointer-events-auto ${positionClass}`}
    >
      <div className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_15px_35px_-5px_rgba(15,39,66,0.12)] hover:shadow-[0_20px_40px_-5px_rgba(59,130,246,0.25)] hover:border-blue-300/80 transition-all duration-300">
        {/* Glow backdrop behind card on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-[#0F2742]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

        {/* Icon Container */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F2742] to-[#1E40AF] text-white flex items-center justify-center shadow-md shadow-blue-900/10 group-hover:scale-110 transition-transform duration-300 shrink-0 text-lg">
          {icon}
        </div>

        {/* Card Content */}
        <div className="flex flex-col pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs sm:text-sm font-bold text-[#0F2742] tracking-tight group-hover:text-blue-600 transition-colors">
              {title}
            </span>
            {badge && (
              <span className="px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="text-[11px] font-medium text-slate-500 line-clamp-1">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
