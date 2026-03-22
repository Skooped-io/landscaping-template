import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { seoConfig } from "@/lib/config";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      <section className="py-24 bg-background">
        <div className="container">
          <SectionReveal>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-secondary text-center text-balance">
              Let's Get Growing
            </h1>
            <p className="text-muted-foreground text-center mt-4 max-w-xl mx-auto text-lg">
              Fill out the form below for a free, no-obligation consultation. We'll get back to you within 24 hours.
            </p>
          </SectionReveal>

          <div className="grid lg:grid-cols-5 gap-12 mt-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionReveal animation="slide-right">
                {submitted ? (
                  <div className="bg-card rounded-lg p-12 shadow-lg text-center">
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="font-heading text-2xl font-bold text-secondary">Thank You!</h2>
                    <p className="text-foreground/70 mt-3">We've received your request and will be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-lg space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                        <input required className="w-full h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                        <input required type="tel" className="w-full h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                        <input required type="email" className="w-full h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Property Address</label>
                        <input className="w-full h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Service Interest</label>
                        <select className="w-full h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                          <option value="">Select a service</option>
                          {seoConfig.contactFormServices.map((service) => (
                            <option key={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Start Date</label>
                        <input type="date" className="w-full h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Tell Us About Your Project</label>
                      <textarea rows={4} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                    </div>
                    <Button type="submit" size="xl" className="w-full gap-2">
                      <Send className="w-4 h-4" /> Request a Free Consultation
                    </Button>
                  </form>
                )}
              </SectionReveal>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <SectionReveal animation="slide-left">
                <div className="space-y-8">
                  <div className="bg-card rounded-lg p-8 shadow-lg">
                    <h3 className="font-heading text-xl font-semibold text-secondary mb-6">Contact Info</h3>
                    <ul className="space-y-5">
                      <li className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <a href={`tel:${seoConfig.phoneRaw}`} className="font-medium text-foreground hover:text-primary transition-colors">{seoConfig.phone}</a>
                        </div>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a href={`mailto:${seoConfig.email}`} className="font-medium text-foreground hover:text-primary transition-colors">{seoConfig.email}</a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Service Area</p>
                          <p className="font-medium text-foreground">{seoConfig.serviceArea}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Hours</p>
                          <p className="font-medium text-foreground">{seoConfig.hours.weekday}</p>
                          <p className="font-medium text-foreground">{seoConfig.hours.saturday}</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Map placeholder */}
                  <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-[4/3] bg-primary/5 flex items-center justify-center">
                      <div className="text-center p-8">
                        <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                        <p className="font-heading font-semibold text-secondary">{seoConfig.address.city}, {seoConfig.address.state}</p>
                        <p className="text-sm text-muted-foreground mt-1">Serving the greater {seoConfig.address.city} area</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
