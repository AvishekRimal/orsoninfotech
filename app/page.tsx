import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTA from "@/components/sections/CTA";

// Replace Helmet with this Metadata object
export const metadata: Metadata = {
  title: "TechFlow - Innovative Software Development Solutions",
  description: "TechFlow delivers cutting-edge software development solutions. Web apps, mobile apps, cloud solutions, and AI services to transform your business.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <CTA />
      </main>
    </div>
  );
}