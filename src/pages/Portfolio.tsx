import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import { X } from "lucide-react";
import { seoConfig } from "@/lib/config";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";

const portfolioImages = [p1, p2, p3, p4, p5, p6, ba1, ba2];
const categories = ["All", "Residential", "Commercial", "Hardscaping", "Gardens"] as const;

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const projects = seoConfig.portfolio.map((p, i) => ({
    ...p,
    img: portfolioImages[i],
  }));

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="pt-20">
      <section className="py-24 bg-background">
        <div className="container">
          <SectionReveal>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-secondary text-center text-balance">
              Our Work
            </h1>
            <p className="text-muted-foreground text-center mt-4 max-w-xl mx-auto text-lg">
              Browse our recent projects and see the {seoConfig.businessName.split(' ')[0]} difference.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-10">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 ${
                    filter === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-foreground/70 hover:bg-primary/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-14 space-y-6">
            {filtered.map((p, i) => (
              <SectionReveal key={p.title + filter} delay={i * 60}>
                <div
                  className="break-inside-avoid rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  onClick={() => setLightbox(i)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      data-image-slot={`gallery_${i + 1}`}
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-heading text-lg font-semibold text-secondary mt-1">{p.title}</h3>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-card p-2" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-3xl w-full bg-card rounded-lg overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={filtered[lightbox].img} alt={filtered[lightbox].title} className="w-full" />
            <div className="p-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{filtered[lightbox].category}</span>
              <h3 className="font-heading text-2xl font-bold text-secondary mt-1">{filtered[lightbox].title}</h3>
              <p className="text-foreground/70 mt-2">{filtered[lightbox].desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-dark-section text-center">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-section-foreground text-balance">
              Like What You See?
            </h2>
            <p className="text-dark-section-foreground/70 mt-3 max-w-md mx-auto">
              Let's talk about making your property the next one in our portfolio.
            </p>
            <Button asChild variant="accent" size="xl" className="mt-8">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
