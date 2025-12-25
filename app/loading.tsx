"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
      
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: 1,
            rotate: [0, 10, -10, 0] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated mb-8"
        >
            <Image
              src="/logo.png"
              alt="Orson InfoTech Logo"
              width={48}
              height={48}
              className="object-contain"
            />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tight mb-4"
        >
          Orson<span className="gradient-text">Infotech</span>
        </motion.h2>

        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 bottom-0 w-1/2 gradient-primary rounded-full shadow-[0_0_15px_rgba(var(--secondary),0.5)]"
          />
        </div>

        {/* Subtle Status Text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-6"
        >
          Initializing Innovation...
        </motion.p>
      </div>

      <motion.div 
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-secondary/10 z-0 pointer-events-none"
      />
    </div>
  );
}