"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award, Sparkles } from "lucide-react";
import Image from "next/image";
import CTA from "@/components/sections/CTA";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to understand their needs and deliver exceptional results.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering the highest quality in every project we undertake.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Honest communication and transparent processes are at the core of everything we do.",
  },
];

const team = [
  { name: "Alex Johnson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format" },
  { name: "Sarah Chen", role: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format" },
  { name: "Michael Park", role: "Lead Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format" },
  { name: "Emily Davis", role: "Design Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary uppercase tracking-wider mb-3"
              >
                <Sparkles className="w-3.5 h-3.5" />
                About Us
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2 mb-4 text-foreground leading-tight"
              >
                Building the Future of{" "}
                <span className="gradient-text">Digital Innovation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              >
                Founded in 2016, Orson InfoTech has been at the forefront of software development,
                helping businesses transform their ideas into powerful, scalable digital solutions.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground"
              >
                Our Core Values
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="bg-card rounded-xl sm:rounded-2xl p-6 border border-border text-center hover:shadow-elevated hover:border-secondary/40 transition-all duration-300 flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-sm">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-wider"
              >
                Our Team
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-foreground"
              >
                Meet the Experts
              </motion.h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group text-center bg-card p-4 rounded-xl sm:rounded-2xl border border-border/80 hover:border-secondary/40 hover:shadow-card transition-all"
                >
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden mb-3 aspect-square bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </div>
  );
}