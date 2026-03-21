import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import { Award, Heart, Leaf, Users } from "lucide-react";
import ownerImg from "@/assets/owner-portrait.jpg";
import teamImg from "@/assets/team-working.jpg";

const values = [
  { icon: Heart, title: "Quality First", desc: "We never cut corners. Every project gets the same care and craftsmanship, whether it's a small garden bed or a full property transformation." },
  { icon: Users, title: "Clear Communication", desc: "You'll always know what's happening, when it's happening, and what it costs. No surprises, no hidden fees." },
  { icon: Leaf, title: "Sustainable Practices", desc: "Native plantings, water-smart irrigation, organic treatments — we design landscapes that work with nature, not against it." },
];

const team = [
  { name: "Tom Callahan", role: "Founder & Lead Designer", initials: "TC" },
  { name: "Maria Santos", role: "Operations Manager", initials: "MS" },
  { name: "Jake Brennan", role: "Hardscape Specialist", initials: "JB" },
  { name: "Lily Nguyen", role: "Horticulturist", initials: "LN" },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionReveal animation="slide-right">
              <div className="rounded-lg overflow-hidden shadow-xl max-w-md">
                <img src={ownerImg} alt="Tom Callahan, founder of GreenCraft" className="w-full object-cover" loading="eager" />
              </div>
            </SectionReveal>
            <SectionReveal animation="slide-left">
              <span className="text-sm font-semibold text-primary">Our Story</span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-secondary mt-2 leading-tight text-balance">
                Rooted in Hard Work & Love for the Land
              </h1>
              <p className="text-foreground/70 mt-6 leading-relaxed text-lg">
                In 2008, Tom Callahan started GreenCraft with a pickup truck, a mower, and a belief that every family deserves a yard they're proud of. What began as weekend lawn jobs quickly grew as neighbors saw the difference — and word spread.
              </p>
              <p className="text-foreground/70 mt-4 leading-relaxed">
                Today, our team of 12 serves the greater Springfield area with full-service landscaping, from weekly maintenance to complete property makeovers. But the mission hasn't changed: treat every yard like it's our own.
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
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 100}>
                <div className="p-8 rounded-lg bg-background shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-secondary">{v.title}</h3>
                  <p className="text-foreground/70 mt-3 leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
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
            {team.map((t, i) => (
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
              {["Licensed & Insured", "EPA Certified", "NALP Member", "5-Star Rated"].map((cert) => (
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
