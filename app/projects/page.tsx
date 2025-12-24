"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image"; // Next.js Image Optimization
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";

const projects = [
  {
    title: "FinanceFlow Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics dashboard for enterprise clients with real-time data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
  },
  {
    title: "HealthTrack Mobile",
    category: "Mobile App",
    description: "iOS and Android health tracking application with AI-powered insights and personalized wellness recommendations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
    technologies: ["React Native", "TensorFlow", "Firebase"],
  },
  {
    title: "ShopSmart E-commerce",
    category: "E-commerce Platform",
    description: "Full-featured e-commerce solution with advanced inventory management and multi-vendor support.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format",
    technologies: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "CloudSync Enterprise",
    category: "Cloud Solution",
    description: "Scalable cloud infrastructure management platform for enterprise-level deployments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
    technologies: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    title: "AI Content Studio",
    category: "AI Platform",
    description: "AI-powered content creation platform with natural language processing and image generation capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
    technologies: ["Python", "OpenAI", "FastAPI"],
  },
  {
    title: "SecureVault",
    category: "Cybersecurity",
    description: "Enterprise-grade password management and security auditing solution.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format",
    technologies: ["Go", "Vault", "Zero-Knowledge Encryption"],
  },
];

export default function ProjectsPage() {
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
                Our Portfolio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
              >
                Projects That{" "}
                <span className="gradient-text">Make Impact</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Discover our latest work and see how we&apos;ve helped businesses achieve their digital goals.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/30 hover:shadow-elevated transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center cursor-pointer">
                        <ExternalLink className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold mt-2 mb-4 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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