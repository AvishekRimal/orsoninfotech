"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FinanceFlow Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics dashboard for enterprise clients with real-time reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
  },
  {
    title: "HealthTrack Mobile",
    category: "Mobile App",
    description: "iOS and Android health tracking application with AI-powered personalized insights.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
  },
  {
    title: "ShopSmart E-commerce",
    category: "E-commerce Platform",
    description: "Full-featured e-commerce solution with advanced multi-vendor inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-wider"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-foreground"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" size="sm" className="group text-xs sm:text-sm" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:border-secondary/40 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shadow-md">
                      <ExternalLink className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <span className="text-[11px] sm:text-xs font-semibold text-secondary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1 mb-2 text-foreground group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;