import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import { Scissors, PenTool, HardHat, Droplets, TreePine, Wind, Quote, ArrowRight, Sprout } from "lucide-react";
import { seoConfig, getImage } from "@/lib/config";

import heroImg from "@/assets/hero-backyard.jpg";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";
import teamImg from "@/assets/team-working.jpg";
import springImg from "@/assets/spring-garden.jpg";

const serviceIcons = [Scissors, PenTool, HardHat, Droplets, TreePine, Wind];

const baImages = [ba1, ba2, ba3];

export default function HomePage() {
  const services = seoConfig.services.map((s, i) => ({
    icon: serviceIcons[i],
    label: s.shortLabel,
  }));

  const projects = seoConfig.beforeAfter.map((p, i) => ({
    img: baImages[i],
    title: p.title,
    desc: p.desc,
  }));

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt={`${seoConfig.businessName} - ${seoConfig.industry}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          data-image-slot="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-section/80 via-dark-section/50 to-transparent" />
        <div className="container relative z-10 max-w-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-section-foreground leading-[1.1] text-balance animate-fade-up">
            {seoConfig.seo.home.h1}
          </h1>
          <p className="mt-6 text-lg text-dark-section-foreground/85 max-w-lg leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
            {seoConfig.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center text-balance">
              What We Do
            </h2>
            <p className="text-muted-foreground text-center mt-3 max-w-md mx-auto">
              Comprehensive {seoConfig.industry.toLowerCase()} services for every season
            </p>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {services.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 80}>
                <Link
                  to="/services"
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-background hover:bg-primary/5 transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-body text-sm font-semibold text-foreground text-center">{s.label}</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 bg-background">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center text-balance">
              Transformations That Speak for Themselves
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {projects.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 100}>
                <div className="group rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden aspect-[3/2]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      data-image-slot={`before_after_${i + 1}`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-secondary">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio" className="gap-2">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </SectionReveal>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal animation="slide-right">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={teamImg} alt={`${seoConfig.businessName} team at work`} className="w-full h-full object-cover" loading="lazy" data-image-slot="team" />
              </div>
            </SectionReveal>
            <SectionReveal animation="slide-left">
              <div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mb-3">
                  <Sprout className="w-4 h-4" /> About Us
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary leading-tight text-balance">
                  Family-Owned Since {seoConfig.yearEstablished}
                </h2>
                <p className="text-foreground/70 mt-4 leading-relaxed text-lg">
                  We treat your yard like it's our own. What started as a one-truck operation has grown into a full-service {seoConfig.industry.toLowerCase()} company — but we've never lost the personal touch that got us here.
                </p>
                <Button asChild variant="outline" size="lg" className="mt-6">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary/5">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center text-balance">
              What Our Clients Say
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {seoConfig.testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 100}>
                <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-foreground/80 leading-relaxed flex-1">{t.text}</p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-heading font-semibold text-secondary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.project}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Tip */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal animation="slide-right">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
                  🌱 Seasonal Tip
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary leading-tight text-balance">
                  Spring Is the Perfect Time to Prepare Your Lawn
                </h2>
                <p className="text-foreground/70 mt-4 leading-relaxed">
                  After winter dormancy, your lawn needs attention — aeration, overseeding, and a balanced fertilizer treatment. Start now and you'll have the thickest, greenest lawn on the street by summer.
                </p>
                <p className="text-foreground/70 mt-3 leading-relaxed">
                  Our spring care packages handle everything from soil testing to the first mow. Let us take the guesswork out of getting your yard in shape.
                </p>
                <Button asChild variant="default" size="lg" className="mt-6">
                  <Link to="/contact">Book Spring Care</Link>
                </Button>
              </div>
            </SectionReveal>
            <SectionReveal animation="slide-left">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={springImg} alt="Spring tulips in bloom" className="w-full h-full object-cover" loading="lazy" data-image-slot="seasonal" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-dark-section">
        <div className="container text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark-section-foreground text-balance leading-tight">
              Ready for the Yard You've Always Wanted?
            </h2>
            <p className="text-dark-section-foreground/70 mt-4 text-lg max-w-lg mx-auto">
              Get a free, no-obligation consultation. We'll visit your property, listen to your vision, and design a plan that fits.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button asChild variant="accent" size="xl">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <a
                href={`tel:${seoConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 text-dark-section-foreground/80 hover:text-accent transition-colors text-lg font-medium"
              >
                📞 {seoConfig.phone}
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
