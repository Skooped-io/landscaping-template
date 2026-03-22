import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { seoConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-dark-section text-dark-section-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-accent" />
              <span className="font-heading text-xl font-bold">{seoConfig.businessName.split(' ')[0]}</span>
            </div>
            <p className="text-dark-section-foreground/70 text-sm leading-relaxed">
              {seoConfig.about}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-dark-section-foreground/70">
              {seoConfig.services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="hover:text-accent transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-dark-section-foreground/70">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-section-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                {seoConfig.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                {seoConfig.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {seoConfig.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-section-foreground/10 mt-12 pt-8 text-center text-sm text-dark-section-foreground/50">
          © {new Date().getFullYear()} {seoConfig.businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
