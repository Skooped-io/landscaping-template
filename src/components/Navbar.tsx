import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { seoConfig } from "@/lib/config";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <Leaf className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-heading text-xl md:text-2xl font-bold text-secondary">
            {seoConfig.businessName.split(' ')[0]}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="default" size="lg">
            <Link to="/contact">Free Quote</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <ul className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    location.pathname === link.to ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full mt-2">
                <Link to="/contact" onClick={() => setOpen(false)}>Free Quote</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
