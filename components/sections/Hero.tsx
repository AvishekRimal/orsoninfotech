"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Code, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20">
      {/* Background Gradient & Glow Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] bg-secondary/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -left-20 w-[300px] sm:w-[450px] lg:w-[550px] h-[300px] sm:h-[450px] lg:h-[550px] bg-accent/15 rounded-full blur-3xl" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_10%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted/80 backdrop-blur-md border border-border/80 mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">
              Transforming Ideas into Digital Reality
            </span>
          </motion.div>

          {/* Heading - Responsive text sizes */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight mb-4 sm:mb-6 text-foreground"
          >
            We Build{" "}
            <span className="gradient-text">Software</span>
            <br />
            That Drives Success
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
          >
            From innovative startups to enterprise solutions, we craft cutting-edge
            web, mobile, and cloud software that empowers businesses to scale globally.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button variant="gradient" size="lg" className="w-full sm:w-auto group shadow-md" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-muted/60" asChild>
              <Link href="/projects">
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Stats Section - Pixel Perfect Padding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-10 sm:mt-14 pt-8 sm:pt-12 border-t border-border/60 max-w-3xl mx-auto"
          >
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "8+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="text-center p-2 sm:p-3 rounded-xl hover:bg-card/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;