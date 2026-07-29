"use client";

import { motion } from "framer-motion";

const trustLogos = [
  {
    name: "React",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#00D8FF" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#000000" />
        <path d="M14.8 16.5L9.2 8.5H7.5V16.5H9V10.8L13.8 17.5C14.1 17.2 14.5 16.9 14.8 16.5Z" fill="white" />
        <path d="M15.5 8.5H17V16.5H15.5V8.5Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#5FA04E" />
        <path d="M12 2L12 12L20.5 7L12 2Z" fill="#68A063" opacity="0.6" />
        <path d="M12 12L3.5 17L12 22L12 12Z" fill="#43853D" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 10.5C6.5 10.5 5.8 11.2 5.8 12.2C5.8 13.2 6.5 13.8 7.5 13.8C8.5 13.8 9.2 13.2 9.2 12.2C9.2 11.2 8.5 10.5 7.5 10.5Z" fill="#FF9900" />
        <path d="M12.5 8H10.5V15.5H12.5V8Z" fill="#FF9900" />
        <path d="M17.5 8L15.8 14L14.2 8H12.8L15 15.5H16.5L18.8 8H17.5Z" fill="#FF9900" />
        <path d="M4 17.5C8 20 16 20 20 17.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 16.5L21 17.5L19 19.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" fill="#4285F4" />
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C10.74 4 9.56 4.31 8.53 4.86L10.3 8.3C10.83 8.11 11.4 8 12 8C14.21 8 16.09 9.47 16.74 11.5L19.35 10.04Z" fill="#EA4335" />
        <path d="M6 20H19C21.76 20 24 17.76 24 15C24 12.92 22.73 11.14 20.9 10.4L18.4 13.5C18.78 13.93 19 14.44 19 15C19 16.66 17.66 18 16 18H6V20Z" fill="#34A853" />
        <path d="M5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20V18C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L5.35 8.04Z" fill="#FBBC05" />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
        <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
        <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
      </svg>
    ),
  },
];

export default function TrustLogos() {
  return (
    <div className=" mt-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
        Trusted Tech Stack & Ecosystem
      </p>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {trustLogos.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
            whileHover={{ y: -2, scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/80 hover:bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 group cursor-pointer"
          >
            <span className="group-hover:scale-110 transition-transform duration-300">
              {logo.icon}
            </span>
            <span className="text-xs font-medium text-slate-700 group-hover:text-[#0F2742] transition-colors">
              {logo.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
