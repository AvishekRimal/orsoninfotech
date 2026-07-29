"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  TrendingUp,
  Users,
  Activity,
  Zap,
  Sparkles,
  Bell,
  Search,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  Calendar,
  Layers,
  ShieldCheck,
  Code2
} from "lucide-react";

export default function MacbookDashboard() {
  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full max-w-[660px] mx-auto py-4 select-none cursor-pointer"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative transition-transform duration-200 ease-out"
      >
        {/* Ambient Glow behind Laptop */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-[#0F2742]/10 to-blue-600/20 rounded-3xl blur-2xl pointer-events-none -z-10" />

        {/* MacBook Pro Display Enclosure */}
        <div className="relative rounded-[24px] bg-[#0d131d] p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(15,39,66,0.35)] border border-slate-700/60 ring-1 ring-white/20">
          
          {/* Top Notch & Camera */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0d131d] rounded-b-xl z-30 flex items-center justify-center gap-2 border-b border-x border-slate-800/80">
            <div className="w-2 h-2 rounded-full bg-slate-900 ring-1 ring-slate-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
          </div>

          {/* Screen Inner Frame / Glossy Glass Effect */}
          <div className="relative overflow-hidden rounded-[16px] bg-slate-950 text-slate-100 border border-slate-800/90 shadow-inner">
            
            {/* Glossy Reflective Light Beam Overlay */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none z-20" />

            {/* Dashboard Header Bar */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-400 ml-2">
                  Orson Enterprise Console v4.2
                </span>
              </div>

              {/* Status Badge & Search */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Production Live</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 rounded-lg px-2.5 py-1 text-slate-400">
                  <Search className="w-3 h-3 text-slate-400" />
                  <span className="text-[10px] hidden sm:inline">Search cloud nodes...</span>
                </div>
                <div className="relative p-1 rounded-lg bg-slate-800/60 text-slate-300">
                  <Bell className="w-3.5 h-3.5" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>

            {/* Main SaaS Dashboard Content Grid */}
            <div className="p-3 sm:p-5 space-y-4 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0b111c]">
              
              {/* KPI Cards Row */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                
                {/* KPI 1 */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xs hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[10px] font-medium sm:text-xs">Revenue</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-white tracking-tight">
                    $128,450
                  </div>
                  <div className="flex items-center gap-1 text-[9px] sm:text-[11px] text-emerald-400 mt-0.5">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+24.8% vs last month</span>
                  </div>
                </div>

                {/* KPI 2 */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xs hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[10px] font-medium sm:text-xs">Active Apps</span>
                    <Activity className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-white tracking-tight">
                    48 Services
                  </div>
                  <div className="flex items-center gap-1 text-[9px] sm:text-[11px] text-blue-400 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>99.99% Uptime</span>
                  </div>
                </div>

                {/* KPI 3 */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xs hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[10px] font-medium sm:text-xs">AI Speed</span>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-white tracking-tight">
                    12ms Latency
                  </div>
                  <div className="flex items-center gap-1 text-[9px] sm:text-[11px] text-amber-400 mt-0.5">
                    <Sparkles className="w-3 h-3" />
                    <span>+42% Turbo mode</span>
                  </div>
                </div>
              </div>

              {/* Chart & AI Assistant split row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Revenue & Growth Chart (Span 2) */}
                <div className="sm:col-span-2 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-200">System Workload & Revenue Growth</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-medium">Real-time</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Jan - Jul 2026</span>
                  </div>

                  {/* SVG Chart Graphic */}
                  <div className="h-28 sm:h-32 w-full pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#60A5FA" />
                          <stop offset="50%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#1e293b" strokeDasharray="3 3" />
                      <line x1="0" y1="80" x2="300" y2="80" stroke="#1e293b" strokeDasharray="3 3" />

                      {/* Area Fill */}
                      <path
                        d="M 0,80 Q 50,75 75,55 T 150,40 T 225,25 T 300,15 L 300,100 L 0,100 Z"
                        fill="url(#chartGradient)"
                      />

                      {/* Glowing Line */}
                      <path
                        d="M 0,80 Q 50,75 75,55 T 150,40 T 225,25 T 300,15"
                        fill="none"
                        stroke="url(#lineGrad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Pulse Data Points */}
                      <circle cx="75" cy="55" r="4" fill="#3B82F6" className="animate-pulse" />
                      <circle cx="150" cy="40" r="4" fill="#60A5FA" />
                      <circle cx="225" cy="25" r="4" fill="#93C5FD" />
                      <circle cx="300" cy="15" r="5" fill="#3B82F6" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* AI Assistant Widget & Quick Tasks (Span 1) */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                    <Cpu className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: "8s" }} />
                    <span>Orson AI Assistant</span>
                  </div>

                  <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-800/40 text-[11px] text-slate-300 space-y-1">
                    <div className="flex items-center gap-1.5 text-blue-300 font-medium">
                      <Sparkles className="w-3 h-3 text-blue-400" />
                      <span>Code Optimization</span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-snug">
                      Refactored cloud API endpoints. +38% response speed boost achieved.
                    </p>
                  </div>

                  {/* Active Developers Stack */}
                  <div className="pt-1 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Team Active:</span>
                    <div className="flex -space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-blue-500 text-[9px] font-bold text-white flex items-center justify-center border border-slate-900">
                        AK
                      </div>
                      <div className="w-5 h-5 rounded-full bg-indigo-500 text-[9px] font-bold text-white flex items-center justify-center border border-slate-900">
                        SR
                      </div>
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-[9px] font-bold text-white flex items-center justify-center border border-slate-900">
                        MP
                      </div>
                      <div className="w-5 h-5 rounded-full bg-slate-700 text-[9px] font-semibold text-slate-300 flex items-center justify-center border border-slate-900">
                        +8
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Projects & Calendar Bar */}
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-slate-300 font-medium truncate">Next.js 15 Platform</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold text-[9px]">
                    100% Ready
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-300 font-medium truncate">AWS Cloud Deploy</span>
                  </div>
                  <span className="text-amber-400 font-semibold text-[9px]">Today 14:00</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MacBook Pro Base / Hinge / Lip */}
        <div className="relative mx-auto w-[106%] -ml-[3%] h-3.5 sm:h-4 bg-gradient-to-b from-[#252b36] via-[#1a202c] to-[#121620] rounded-b-2xl border-t border-slate-600/50 shadow-2xl flex items-center justify-center">
          {/* Thumb Opening Notch */}
          <div className="w-16 sm:w-20 h-1.5 bg-[#0f131a] rounded-b-md border-x border-b border-slate-700/60" />
        </div>

        {/* MacBook Base Reflection & Soft Shadow */}
        <div className="mx-auto w-[92%] h-4 bg-blue-900/20 blur-lg rounded-full mt-1 -z-10" />

      </motion.div>
    </div>
  );
}
