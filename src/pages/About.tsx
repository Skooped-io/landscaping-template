import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import { Award, Heart, Users, Leaf } from "lucide-react";
import { seoConfig } from "@/lib/config";
import ownerImg from "@/assets/owner-portrait.jpg";
import teamImg from "@/assets/team-working.jpg";

const valueIcons = [Heart, Users, Leaf];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionReveal animation="slide-right">
              <div className="rounded-lg overflow-hidden shadow-xl max-w-md">
                <img src={ownerImg} alt={`${seoConfig.ownerName}, founder of ${seoConfig.businessName}`} className="w-full object-cover" loading="eager" data-image-slot="about" />
              </div>
            </SectionReveal>
            <SectionReveal animation="slide-left">
              <span className="text-sm font-semibold text-primary">Our Story</span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-secondary mt-2 leading-tight text-balance">
                Rooted in Hard Work & Love for the Land
              </h1>
              <p className="text-foreground/70 mt-6 leading-relaxed text-lg">
                In {seoConfig.yearEstablished}, {seoConfig.ownerName} started {seoConfig.businessName} with a pickup truck, a mower, and a belief that every family deserves a yard they're proud of. What began as weekend lawn jobs quickly grew as neighbors saw the difference — and word spread.
              </p>
              <p className="text-foreground/70 mt-4 leading-relaxed">
                Today, our team of {seoConfig.teamSize} serves the greater {seoConfig.address.city} area with full-service {seoConfig.industry.toLowerCase()}, from weekly maintenance to complete property makeovers. But the mission hasn't changed: treat every yard like it's our own.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-card">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center text-balance">Our Approach</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {seoConfig.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <SectionReveal key={v.title} delay={i * 100}>
                  <div className="p-8 rounded-lg bg-background shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-secondary">{v.title}</h3>
                    <p className="text-foreground/70 mt-3 leading-relaxed">{v.desc}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center text-balance">Meet the Crew</h2>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
            {seoConfig.team.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 80}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="font-heading text-2xl font-bold text-primary">{t.initials}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-secondary">{t.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-8">
              {seoConfig.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-secondary font-medium">
                  <Award className="w-5 h-5 text-accent" />
                  {cert}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-section text-center">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-section-foreground text-balance">
              Let's Build Something Beautiful Together
            </h2>
            <Button asChild variant="accent" size="xl" className="mt-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
