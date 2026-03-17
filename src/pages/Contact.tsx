import { useState } from "react";
import RevealSection from "@/components/RevealSection";
import SectionLabel from "@/components/SectionLabel";

const inquiryTypes = ["Investor Enquiry", "Partnership", "Media", "General"];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <RevealSection>
                <SectionLabel>Contact</SectionLabel>
                <h1 className="font-display text-4xl lg:text-5xl text-foreground mt-4 leading-[1.05]">
                  Get in touch.
                </h1>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  We welcome enquiries from professional investors, family offices, institutional investors, and strategic partners.
                </p>
                <div className="mt-10 border-t border-border pt-8">
                  <p className="text-xs text-muted-foreground">
                    We aim to respond to relevant enquiries within 2–5 business days.
                  </p>
                </div>
              </RevealSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <RevealSection delay={0.15}>
                {submitted ? (
                  <div className="border-t border-border pt-10 text-center">
                    <h2 className="font-display text-2xl text-foreground mb-4">Enquiry received.</h2>
                    <p className="text-muted-foreground text-sm">
                      Thank you for your interest. Our team will review your enquiry and respond within 2–5 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Company / Organisation *</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Enquiry Type *</label>
                      <select
                        required
                        className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="">Select type</option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message *</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="group relative text-foreground font-medium text-sm uppercase tracking-widest pb-1"
                      >
                        Submit Enquiry
                        <span className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left scale-x-100 group-hover:bg-primary transition-colors duration-500" />
                      </button>
                    </div>
                  </form>
                )}
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
