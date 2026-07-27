"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
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
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary uppercase tracking-wider mb-3"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Our Portfolio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2 mb-4 text-foreground leading-tight"
              >
                Projects That{" "}
                <span className="gradient-text">Make Impact</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                Discover our latest work and see how we&apos;ve helped businesses achieve their digital goals.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:border-secondary/40 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-44 sm:h-52 md:h-60 overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center cursor-pointer shadow-md">
                          <ExternalLink className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 md:p-7">
                      <span className="text-[11px] sm:text-xs font-semibold text-secondary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold mt-1 mb-2 text-foreground group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-muted/80 rounded-full text-[11px] sm:text-xs font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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