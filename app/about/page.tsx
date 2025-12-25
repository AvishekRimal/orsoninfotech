"use client"; // Required for framer-motion and interactivity

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import Image from "next/image"; // Use Next.js optimized images
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";

// Note: Metadata cannot be in a "use client" file. 
// To keep SEO, see the note below this code block.

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
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-semibold text-secondary uppercase tracking-wider"
              >
                About Us
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
              >
                Building the Future of{" "}
                <span className="gradient-text">Digital Innovation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Founded in 2016, Orson InfoTech has been at the forefront of software development,
                helping businesses transform their ideas into powerful digital solutions.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold"
              >
                Our Core Values
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-elevated transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-secondary uppercase tracking-wider"
              >
                Our Team
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mt-4"
              >
                Meet the Experts
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group text-center"
                >
                  <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill // Use fill for dynamic images in aspect-square containers
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </div>
  );
};