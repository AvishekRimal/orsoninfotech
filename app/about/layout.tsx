// src/app/about/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us - Orson InfoTech Software Development",
  description: "Learn about Orson InfoTech's mission, values, and the talented team behind our innovative software solutions.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}