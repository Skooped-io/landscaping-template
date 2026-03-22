import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import { Phone, MapPin, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { seoConfig, slugify, getServiceBySlug } from "@/lib/config";

const serviceContent: Record<string, { paragraphs: string[] }> = {};

function generateContent(title: string, industry: string, city: string): string[] {
  const contents: Record<string, string[]> = {
    "lawn-maintenance": [
      `A well-maintained lawn is the foundation of any great landscape. At ${seoConfig.businessName}, our lawn maintenance program is designed to keep your property looking its best throughout every season. We combine proven techniques with local expertise to deliver results that stand out in ${city}.`,
      `Our team handles everything from precision mowing and crisp edging to fertilization schedules tailored to central Illinois soil conditions. We monitor your lawn's health week to week, adjusting treatments for weather, growth patterns, and seasonal needs — so you never have to think about it.`,
      `Whether you need weekly service for a residential yard or scheduled care for a commercial property, we build a maintenance plan around your goals and budget. Consistent, reliable, detail-oriented — that's what sets our lawn care apart.`,
    ],
    "landscape-design-installation": [
      `Great landscapes don't happen by accident. At ${seoConfig.businessName}, our design process starts with understanding how you use your outdoor space — then we create a plan that brings beauty, function, and long-term value to your ${city} property.`,
      `From initial consultation to 3D renderings, plant selection, and full installation, our team manages every detail. We specialize in designs that complement your home's architecture, thrive in the local climate, and reduce long-term maintenance.`,
      `Whether you're envisioning a complete backyard transformation or refreshing your front entry, we'll guide you through material choices, planting palettes, and layout options that fit your style and budget.`,
    ],
    "hardscaping": [
      `Hardscaping adds structure, function, and lasting value to any outdoor space. ${seoConfig.businessName} designs and builds patios, walkways, retaining walls, fire pits, and outdoor living areas using premium materials and expert craftsmanship — right here in ${city}.`,
      `We work with natural stone, pavers, and concrete to create surfaces that are beautiful and built to withstand Illinois weather year after year. Every project starts with proper grading, base preparation, and drainage planning to ensure longevity.`,
      `From a simple front walkway to a full outdoor kitchen and entertainment area, our hardscape team brings precision and creativity to every build. We handle permits, material sourcing, and construction so you can enjoy the finished result worry-free.`,
    ],
    "irrigation-systems": [
      `An efficient irrigation system saves water, protects your landscape investment, and keeps every zone of your property perfectly hydrated. ${seoConfig.businessName} designs, installs, and maintains smart irrigation systems for homes and businesses across ${city}.`,
      `We use modern smart controllers, drip irrigation for beds, and rotor heads for turf — all calibrated to your property's specific soil type, sun exposure, and plant material. The result is healthier plants, lower water bills, and zero guesswork.`,
      `Whether you need a new system installed, an existing setup upgraded, or seasonal maintenance and winterization, our irrigation specialists have you covered from spring startup through fall shutdown.`,
    ],
    "tree-shrub-care": [
      `Healthy trees and shrubs are essential to a beautiful, safe landscape. ${seoConfig.businessName} provides professional pruning, disease treatment, deep root fertilization, and removal services for properties throughout ${city} and the surrounding area.`,
      `Our certified team understands the specific needs of trees and shrubs common to central Illinois — from ornamental maples and oaks to flowering shrubs and hedges. We prune for structure, health, and aesthetics, following ISA best practices.`,
      `Regular care prevents costly problems down the road. We'll identify early signs of disease or pest damage, recommend treatment plans, and keep your trees looking their best through every season.`,
    ],
    "seasonal-cleanup-mulching": [
      `Seasonal transitions demand attention. ${seoConfig.businessName} provides thorough spring and fall cleanup services that prepare your ${city} landscape for the months ahead — removing debris, refreshing beds, and setting the stage for healthy growth.`,
      `Our spring cleanup includes leaf and debris removal, bed edging, pruning of dead material, and fresh mulch installation. In fall, we clear leaves, cut back perennials, and protect sensitive plantings before winter arrives.`,
      `Professional mulching does more than look good — it retains moisture, regulates soil temperature, and suppresses weeds. We install premium hardwood and cedar mulch at the proper depth, every time.`,
    ],
  };

  const slug = slugify(title);
  return contents[slug] || [
    `${seoConfig.businessName} offers professional ${title.toLowerCase()} services in ${city} and the surrounding area. Our experienced team delivers quality workmanship and reliable results on every project.`,
    `We take pride in understanding each client's unique needs and providing solutions tailored to your property. From initial consultation to project completion, you can count on clear communication and attention to detail.`,
    `Contact us today for a free estimate and discover why homeowners and businesses across ${city} trust ${seoConfig.businessName} for their ${title.toLowerCase()} needs.`,
  ];
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : null;
  const cfg = seoConfig;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} in ${cfg.address.city}, ${cfg.address.state} | ${cfg.businessName}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", `Professional ${service.title.toLowerCase()} services in ${cfg.address.city}, ${cfg.address.state} by ${cfg.businessName}. ${service.desc}`);
      }
    }
  }, [service]);

  if (!service) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-secondary mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">We couldn't find that service.</p>
          <Button asChild><Link to="/services">View All Services</Link></Button>
        </div>
      </main>
    );
  }

  const paragraphs = generateContent(service.title, cfg.industry, cfg.address.city);
  const relatedServices = cfg.services.filter((s) => s.title !== service.title).slice(0, 4);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    provider: {
      "@type": "LocalBusiness",
      name: cfg.businessName,
      telephone: cfg.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: cfg.address.street,
        addressLocality: cfg.address.city,
        addressRegion: cfg.address.state,
        postalCode: cfg.address.zip,
      },
    },
    areaServed: cfg.serviceArea,
  };

  return (
    <main className="pt-20">
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Breadcrumb */}
      <div className="bg-secondary/5 border-b border-border">
        <div className="container py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container">
          <SectionReveal>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-balance">
              {service.title}
            </h1>
            <p className="mt-4 text-secondary-foreground/80 text-lg max-w-2xl">
              {service.desc}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-2 space-y-16">
              <SectionReveal>
                <div className="prose prose-lg max-w-none">
                  {paragraphs.map((p, i) => (
                    <p key={i} className="text-foreground/80 leading-relaxed mb-6">{p}</p>
                  ))}
                </div>
              </SectionReveal>

              {/* What's Included */}
              <SectionReveal>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-8">
                  What's Included
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 bg-card rounded-2xl p-4 shadow-sm border border-border/50">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>

              {/* CTA */}
              <SectionReveal>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-3">
                    Ready to Get Started?
                  </h2>
                  <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
                    Request a free, no-obligation estimate for {service.title.toLowerCase()} at your property.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg">
                      <Link to="/contact">Get a Free Estimate</Link>
                    </Button>
                    <a
                      href={`tel:${cfg.phoneRaw}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      {cfg.phone}
                    </a>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Business Info Card */}
              <SectionReveal>
                <div className="bg-card rounded-2xl p-6 shadow-md border border-border/50">
                  <h3 className="font-heading text-lg font-bold text-secondary mb-4">{cfg.businessName}</h3>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <a href={`tel:${cfg.phoneRaw}`} className="hover:text-primary transition-colors">{cfg.phone}</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{cfg.address.full}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <div>
                        <p>{cfg.hours.weekday}</p>
                        <p>{cfg.hours.saturday}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Serving {cfg.serviceArea}
                  </p>
                </div>
              </SectionReveal>

              {/* Related Services */}
              <SectionReveal>
                <div className="bg-card rounded-2xl p-6 shadow-md border border-border/50">
                  <h3 className="font-heading text-lg font-bold text-secondary mb-4">Other Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.title}>
                        <Link
                          to={`/services/${slugify(s.title)}`}
                          className="flex items-center gap-2 py-2 px-3 rounded-lg text-foreground/70 hover:bg-primary/5 hover:text-primary transition-colors text-sm"
                        >
                          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                          {s.shortLabel || s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
