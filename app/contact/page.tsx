"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "infotech.orson@gmail.com",
    link: "mailto:infotech.orson@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+977 9802111635",
    link: "tel:9802111635",
  },
  {
    icon: MapPin,
    title: "Office Location",
    value: "Shantinagar-31, Kathmandu, Nepal",
    link: "#",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary uppercase tracking-wider mb-3"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Contact Us
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2 mb-4 text-foreground leading-tight"
              >
                Let&apos;s Build Something{" "}
                <span className="gradient-text">Amazing</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s start a conversation.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 bg-card rounded-2xl p-6 sm:p-8 md:p-10 border border-border shadow-elevated"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 sm:h-12 text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-11 sm:h-12 text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-1.5 text-foreground">
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-11 sm:h-12 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px] sm:min-h-[140px] resize-none text-xs sm:text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full text-xs sm:text-sm shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-5 space-y-6 sm:space-y-8 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">Get in touch</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Whether you have a question about our services, need a quote, or want to discuss a potential project,
                    our team is ready to assist.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      whileHover={{ x: 5, scale: 1.01 }}
                      className="flex items-start gap-4 p-4 sm:p-5 bg-card rounded-xl border border-border hover:border-secondary/40 hover:shadow-card transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-foreground mb-0.5">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border/80 h-48 sm:h-56 bg-muted/60 flex items-center justify-center">
                  <div className="text-center text-muted-foreground p-4">
                    <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50 text-secondary" />
                    <p className="text-xs sm:text-sm font-medium text-foreground">Orson InfoTech Office</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Shantinagar-31, Kathmandu, Nepal</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}