import logo from "@/assets/logo.jpeg";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="FunkTechnik" className="w-40 mb-4" />
            <p className="text-muted-foreground">
              Premium audio equipment designed and engineered in Germany for those who demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#warranty" className="hover:text-primary transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Designed & Engineered in Germany 🇩🇪</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@funktechnik.com" className="hover:text-primary transition-colors">
                  info@funktechnik.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+49" className="hover:text-primary transition-colors">
                  +49 (0) XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FunkTechnik. All rights reserved. Made with passion in Germany.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
