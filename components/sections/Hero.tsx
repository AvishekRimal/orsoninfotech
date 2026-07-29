"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Users,
  Trophy,
  Star,
  Bot,
  Cloud,
  Code2,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import TrustLogos from "@/components/hero/TrustLogos";
import MacbookDashboard from "@/components/hero/MacbookDashboard";
import FloatingGlassCard from "@/components/hero/FloatingGlassCard";
import CountUpNumber from "@/components/hero/CountUpNumber";

export default function Hero() {
  const stats = [
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      value: 150,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      value: 50,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: <Trophy className="w-6 h-6 text-white" />,
      value: 8,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="relative min-h-screen bg-white text-[#0F2742] overflow-hidden pt-24 sm:pt-28 pb-16 md:pb-24 font-sans">
      
      {/* ---------------------------------------------------- */}
      {/* BACKGROUND EFFECTS */}
      {/* ---------------------------------------------------- */}

      {/* 1. Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. Glowing Blobs & Soft Radial Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-0 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-gradient-to-br from-[#3B82F6]/20 to-blue-400/10 rounded-full blur-[130px] pointer-events-none -z-10"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-20 left-10 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] bg-gradient-to-br from-[#0F2742]/10 via-blue-500/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-1/3 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-300/15 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* 3. Tiny Glowing Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { top: "15%", left: "10%", size: "w-2 h-2", delay: 0 },
          { top: "25%", left: "45%", size: "w-1.5 h-1.5", delay: 1.5 },
          { top: "60%", left: "15%", size: "w-2.5 h-2.5", delay: 0.8 },
          { top: "75%", left: "85%", size: "w-2 h-2", delay: 2.2 },
          { top: "35%", left: "88%", size: "w-1.5 h-1.5", delay: 3 },
          { top: "80%", left: "40%", size: "w-2 h-2", delay: 1.2 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            style={{ top: particle.top, left: particle.left }}
            className={`absolute ${particle.size} rounded-full bg-[#3B82F6] shadow-[0_0_12px_#3B82F6]`}
          />
        ))}
      </div>

      {/* 4. Abstract Light Mesh Circles */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] border border-blue-200/40 rounded-full pointer-events-none -z-10 border-dashed animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-1/3 right-28 w-[450px] h-[450px] border border-blue-300/30 rounded-full pointer-events-none -z-10" />

      {/* Main Layout Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* HERO GRID: Split 45% (Left) / 55% (Right) on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[640px]">
          
          {/* ---------------------------------------------------- */}
          {/* LEFT SIDE (45% -> lg:col-span-5) */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Small Rounded Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-200/80 shadow-xs mb-3 w-fit hover:bg-blue-100/70 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#3B82F6] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#0F2742] tracking-wide">
                ✨ Transforming Ideas into Digital Reality
              </span>
            </motion.div>

            {/* Large Heading: Exactly 72px Desktop, 48px Tablet, 38px Mobile */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[25px] md:text-[35px] lg:text-[50px] font-extrabold leading-[1.08] tracking-tight text-[#0F2742] mb-3"
            >
              We Build{" "}
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent drop-shadow-xs">
                Software
              </span>
              <br />
              That Drives Success
            </motion.h1>

            {/* Description: 18px text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[18px] text-slate-600 font-normal leading-relaxed mb-8 max-w-xl"
            >
              From innovative startups to enterprise solutions, we craft cutting-edge web, mobile, AI, and cloud software that empowers businesses worldwide.
            </motion.p>

            {/* Two CTA Buttons: 18px SemiBold */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[20px] bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] text-white text-[18px] font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-[20px] bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-7 py-4 rounded-[20px] bg-white/90 backdrop-blur-md border border-slate-300/80 text-[#0F2742] text-[18px] font-semibold hover:bg-slate-50 hover:border-slate-400 hover:shadow-md transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Trust Logos Component */}
            <TrustLogos />

          </div>

          {/* ---------------------------------------------------- */}
          {/* RIGHT SIDE (55% -> lg:col-span-7) */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[480px] sm:min-h-[580px]">
            
            {/* FLOATING GLASS CARDS AROUND LAPTOP */}
            
            {/* Card 1: 🤖 AI Integration (Top Left) */}
            <FloatingGlassCard
              icon={<Bot className="w-5 h-5 text-white" />}
              title="🤖 AI Integration"
              subtitle="LLMs & Neural Systems"
              badge="v2.4"
              positionClass="-top-4 sm:top-2 left-0 sm:left-2"
              floatDuration={5.5}
              delay={0.2}
            />

            {/* Card 2: ☁ Cloud Solutions (Top Right) */}
            <FloatingGlassCard
              icon={<Cloud className="w-5 h-5 text-white" />}
              title="☁ Cloud Solutions"
              subtitle="AWS & Azure DevOps"
              badge="99.99%"
              positionClass="-top-6 sm:top-0 right-2 sm:right-6"
              floatDuration={6.5}
              delay={0.4}
            />

            {/* Card 3: 💻 Web Development (Middle Left) */}
            <FloatingGlassCard
              icon={<Code2 className="w-5 h-5 text-white" />}
              title="💻 Web Development"
              subtitle="Next.js & React Apps"
              positionClass="top-1/2 -translate-y-1/2 -left-2 sm:-left-6"
              floatDuration={7}
              delay={0.6}
            />

            {/* Card 4: 📱 Mobile Apps (Middle Right) */}
            <FloatingGlassCard
              icon={<Smartphone className="w-5 h-5 text-white" />}
              title="📱 Mobile Apps"
              subtitle="iOS & Android Native"
              positionClass="top-2/3 -right-2 sm:-right-6"
              floatDuration={5}
              delay={0.8}
            />

            {/* Card 5: 🔐 Cyber Security (Bottom Center/Right) */}
            <FloatingGlassCard
              icon={<ShieldCheck className="w-5 h-5 text-white" />}
              title="🔐 Cyber Security"
              subtitle="Zero Trust & SOC2"
              badge="Encrypted"
              positionClass="-bottom-6 sm:-bottom-2 left-1/3"
              floatDuration={6}
              delay={1}
            />

            {/* CENTRAL 3D COMPOSITION: Macbook Dashboard */}
            <MacbookDashboard />

          </div>

        </div>

        {/* ---------------------------------------------------- */}
        {/* BOTTOM STATISTICS SECTION */}
        {/* ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-8 md:mt-12 p-6 sm:p-4 lg:p-5 rounded-[28px] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(15,39,66,0.08)] max-w-6xl mx-auto"
        >
          {/* Subtle top ambient bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent rounded-full" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 divide-slate-100">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 p-2 rounded-2xl hover:bg-slate-50/80 transition-colors group cursor-pointer"
              >
                {/* Blue Gradient Rounded Square Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0">
                  {stat.icon}
                </div>

                <div className="flex flex-col">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2742] tracking-tight flex items-center gap-0.5">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}