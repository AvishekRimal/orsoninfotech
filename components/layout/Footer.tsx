import { Code2, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Added mx-auto and px-4 to ensure centering in Next.js */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              {/* <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center transition-colors group-hover:bg-primary-foreground/20">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div> */}
              <Image
                src="/logo.png"
                alt="Orson InfoTech Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold">Orson InfoTech</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Building innovative software solutions that transform businesses and drive digital success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Placeholder */}
          <div>
            <h4 className="font-semibold mb-6 text-base">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "AI & Machine Learning",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-semibold mb-6 text-base">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-secondary" />
                <a href="mailto:infotech.orson@gmail.com" className="hover:text-primary-foreground transition-colors">
                  infotech.orson@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
                <a href="tel:9802111635" className="hover:text-primary-foreground transition-colors">
                  +977 9802111635
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-secondary" />
                <span>Shantinagar-31, Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} ORSON INFO TECH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;