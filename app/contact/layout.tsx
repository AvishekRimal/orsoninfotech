import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us - Orson InfoTech Software Development",
  description: "Get in touch with Orson InfoTech. Let&apos;s discuss your software development project and bring your ideas to life.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}