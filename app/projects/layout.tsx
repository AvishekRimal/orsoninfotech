import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Projects - Orson InfoTech Portfolio",
  description: "Explore Orson InfoTech's portfolio of successful software projects including web apps, mobile apps, cloud solutions, and AI platforms.",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}