import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import RevealSection from "@/components/RevealSection";
import SectionLabel from "@/components/SectionLabel";

const stats = [
  { value: "3", label: "Core Sectors" },
  { value: "MY · SG · AU", label: "Geographic Footprint" },
  { value: "RM42M+", label: "Tangible Assets" },
  { value: "15+", label: "Years Leadership" },
];

const pillars = [
  {
    title: "Real Assets",
    description: "Strategic land holdings, development sites, income-producing property, and hospitality assets positioned for long-term capital appreciation.",
  },
  {
    title: "Operating Businesses",
    description: "Construction platforms, infrastructure services, and vertically integrated development companies that generate operational value.",
  },
  {
    title: "Future Industries",
    description: "Energy transition assets, commodity platforms, and digital infrastructure positioned at the intersection of structural demand and emerging opportunity.",
  },
];

const valueSteps = [
  { num: "01", title: "Strategic Acquisition", desc: "Targeting assets where pricing does not reflect long-term potential." },
  { num: "02", title: "Active Management", desc: "Improving operations, capital structure, and performance." },
  { num: "03", title: "Development Capability", desc: "Unlocking additional value through in-house development expertise." },
  { num: "04", title: "Platform Building", desc: "Scaling businesses rather than holding isolated assets." },
  { num: "05", title: "Long-Term Positioning", desc: "Aligning with demographic, infrastructure, and energy trends." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 lg:pb-32">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-dusty-navy/90 via-dusty-navy/50 to-dusty-navy/20" />
        </div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold mb-4">
              Invest in Asia's next generation of real estate and hospitality growth
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-pale-blue leading-[1.05] mb-6 tracking-[0.04em]">
              Capital, directed with institutional discipline and private-market agility.
            </h1>
            <p className="text-grey-blue text-lg leading-relaxed max-w-xl mb-10 tracking-[0.03em]">
              A private capital firm focused on building long-term value through real assets, scalable operating businesses, and future-focused industries.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/strategy"
                className="group relative text-pale-blue font-medium text-sm uppercase tracking-widest pb-1"
              >
                View Strategy
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
              <Link
                to="/contact"
                className="group relative text-pale-blue font-medium text-sm uppercase tracking-widest pb-1"
              >
                Make an Enquiry
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-dusty-navy border-t border-slate-blue/20">
        <div className="container mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 0.1}>
                <div className="text-center lg:text-left">
                  <p className="font-display text-3xl text-pale-blue tabular-nums">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-grey-blue mt-1">{stat.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Pillars */}
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <SectionLabel>Investment Focus</SectionLabel>
            <h2 className="font-display text-3xl lg:text-5xl text-foreground mt-4 mb-16 max-w-2xl leading-[1.1]">
              Building value across three core pillars.
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {pillars.map((pillar, i) => (
              <RevealSection key={pillar.title} delay={i * 0.12}>
                <div className="group border-t border-border py-10 lg:pr-10 hover:bg-muted/40 transition-colors duration-500">
                  <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                  <h3 className="font-display text-2xl text-foreground mt-3 mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Quote */}
      <section className="py-24 lg:py-36 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Our Philosophy</SectionLabel>
              <blockquote className="font-display text-2xl lg:text-4xl text-foreground mt-6 leading-[1.2] italic">
                "Our focus is simple: deploy capital with discipline, actively build value through operational and development expertise, and position every investment for long-term growth."
              </blockquote>
              <div className="w-12 h-px bg-gold mx-auto mt-10" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Value Creation */}
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <RevealSection>
                <SectionLabel>Value Creation</SectionLabel>
                <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-4 leading-[1.1]">
                  A disciplined model built on operational expertise.
                </h2>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  Capital discipline. Operational expertise. Long-term value. Every investment decision is guided by a clear value creation thesis.
                </p>
              </RevealSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              {valueSteps.map((step, i) => (
                <RevealSection key={step.num} delay={i * 0.08}>
                  <div className="border-t border-border py-6 flex gap-6">
                    <span className="text-xs text-primary tabular-nums font-medium mt-1">{step.num}</span>
                    <div>
                      <h4 className="font-display text-lg text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-36 bg-dusty-navy">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <RevealSection>
            <h2 className="font-display text-3xl lg:text-5xl text-pale-blue leading-[1.1] mb-6">
              Explore how Trident creates value.
            </h2>
            <p className="text-grey-blue max-w-lg mx-auto mb-10">
              We welcome enquiries from professional investors, family offices, and institutional partners.
            </p>
            <div className="flex justify-center gap-8">
              <Link
                to="/strategy"
                className="group relative text-pale-blue font-medium text-sm uppercase tracking-widest pb-1"
              >
                Review Strategy
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
              <Link
                to="/contact"
                className="group relative text-pale-blue font-medium text-sm uppercase tracking-widest pb-1"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Response SLA */}
      <section className="py-6 bg-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs text-background/60 tracking-wide">
            We aim to respond to relevant enquiries within 2–5 business days.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
