"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          className="relative rounded-2xl sm:rounded-3xl gradient-primary p-6 sm:p-10 md:p-14 overflow-hidden shadow-elevated"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3 sm:mb-4 tracking-tight leading-snug">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-primary-foreground/90 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto">
              Let&apos;s collaborate to bring your vision to life. Our engineering team is ready to deliver world-class solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 group shadow-md"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/projects">
                  Explore Our Work
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;