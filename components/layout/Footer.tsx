import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand & Mission */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="Orson InfoTech Logo"
                width={36}
                height={36}
                className="object-contain w-8 h-8 sm:w-9 sm:h-9"
              />
              <span className="text-lg font-bold">Orson InfoTech</span>
            </Link>
            <p className="text-primary-foreground/75 text-xs sm:text-sm leading-relaxed max-w-sm">
              Building innovative software solutions that transform businesses and drive digital success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-5 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {["Home", "About", "Projects", "Blog", "Training", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-5 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "AI & Machine Learning",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/75 text-xs sm:text-sm cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-5 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5 text-primary-foreground/75">
                <Mail className="w-4 h-4 flex-shrink-0 text-secondary" />
                <a href="mailto:infotech.orson@gmail.com" className="hover:text-primary-foreground transition-colors truncate">
                  infotech.orson@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-primary-foreground/75">
                <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
                <a href="tel:9802111635" className="hover:text-primary-foreground transition-colors">
                  +977 9802111635
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-primary-foreground/75">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-secondary" />
                <span>Shantinagar-31, Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-primary-foreground/60 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} ORSON INFO TECH. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link 
              href="/privacy" 
              className="text-primary-foreground/60 hover:text-primary-foreground text-xs sm:text-sm transition-colors"
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