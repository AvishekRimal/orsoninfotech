"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Brain, GraduationCap, Shield } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
    link: "/projects",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions that deliver seamless user experiences.",
    link: "/projects",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    link: "/projects",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI and ML technologies.",
    link: "/projects",
  },
  {
    icon: GraduationCap,
    title: "IT & Skill Training",
    description: "Industry-aligned certification training in AI, Full Stack Development, DevOps, and Data Science.",
    link: "/training",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    link: "/projects",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Services = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 text-foreground"
          >
            Solutions That Drive Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            We offer comprehensive software engineering and professional training programs tailored to your needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
              className="group relative bg-card rounded-xl sm:rounded-2xl p-6 sm:p-7 border border-border hover:border-secondary/40 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-secondary transition-colors">
                  <Link href={service.link}>{service.title}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Link button */}
              <div className="pt-4 mt-2">
                <Link
                  href={service.link}
                  className="text-xs font-semibold text-secondary hover:underline inline-flex items-center gap-1"
                >
                  Learn More →
                </Link>
              </div>

              {/* Hover Effect Layer */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;