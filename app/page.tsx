import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LatestBlogPosts from "@/components/sections/LatestBlogPosts";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Orson InfoTech - Innovative Software Solutions",
  description: "Orson InfoTech delivers cutting-edge software development solutions. Web apps, mobile apps, cloud solutions to transform your business.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <LatestBlogPosts />
        <CTA />
      </main>
    </div>
  );
}