import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import { Scissors, PenTool, HardHat, Droplets, TreePine, Wind } from "lucide-react";
import { seoConfig } from "@/lib/config";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const serviceIcons = [Scissors, PenTool, HardHat, Droplets, TreePine, Wind];
const serviceImages = [p1, p4, p3, p2, p5, p6];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-background">
        <div className="container">
          <SectionReveal>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-secondary text-center text-balance">
              Our Services
            </h1>
            <p className="text-muted-foreground text-center mt-4 max-w-xl mx-auto text-lg">
              Everything your outdoor space needs — from routine care to complete transformations.
            </p>
          </SectionReveal>

          <div className="space-y-24 mt-20">
            {seoConfig.services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <SectionReveal key={s.title}>
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                    <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                      <div className="rounded-lg overflow-hidden shadow-xl">
                        <img src={serviceImages[i]} alt={s.title} className="w-full aspect-[4/3] object-cover" loading="lazy" data-image-slot={`service_${i + 1}`} />
                      </div>
                    </div>
                    <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary">{s.title}</h2>
                      </div>
                      <p className="text-foreground/70 leading-relaxed text-lg">{s.desc}</p>
                      <ul className="mt-6 space-y-2">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="default" size="lg" className="mt-8">
                        <Link to="/contact">Request This Service</Link>
                      </Button>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
