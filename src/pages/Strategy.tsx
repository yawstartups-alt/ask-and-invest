import RevealSection from "@/components/RevealSection";
import SectionLabel from "@/components/SectionLabel";
import { Link } from "react-router-dom";

const sectors = [
  {
    title: "Real Assets",
    items: ["Strategic land holdings", "Development sites", "Income-producing property"],
  },
  {
    title: "Infrastructure & Development",
    items: ["Construction platforms", "Infrastructure services", "Development companies"],
  },
  {
    title: "Hospitality & Lifestyle",
    items: ["Hotels", "Tourism assets", "Senior living & retirement communities", "Lifestyle real estate"],
  },
  {
    title: "Energy Transition",
    items: ["Renewable gas assets", "Commodity trading platforms", "Digital commodity infrastructure"],
    future: true,
  },
];

const Strategy = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <SectionLabel>Investment Strategy</SectionLabel>
            <h1 className="font-display text-4xl lg:text-6xl text-foreground mt-4 max-w-3xl leading-[1.05]">
              Focused on sectors where capital and expertise create asymmetric upside.
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-2xl leading-relaxed">
              We invest across property, infrastructure services, hospitality, and emerging industrial sectors—with a growing focus on future-driven asset classes.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 lg:py-36 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <SectionLabel>Focus Areas</SectionLabel>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-4 mb-16 leading-[1.1]">
              Investment sectors.
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {sectors.map((sector, i) => (
              <RevealSection key={sector.title} delay={i * 0.1}>
                <div className="border-t border-border py-10 pr-10">
                  <div className="flex items-start gap-3">
                    <h3 className="font-display text-2xl text-foreground">{sector.title}</h3>
                    {sector.future && (
                      <span className="text-[10px] uppercase tracking-widest text-primary bg-muted px-2 py-1 rounded-sm mt-1">
                        Expanding
                      </span>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {sector.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <div className="max-w-3xl">
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-4 mb-8 leading-[1.1]">
                Vertically integrated. Operationally driven.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Trident operates as a builder of integrated platforms—combining capital allocation with development capability and operating businesses. This approach allows us to capture value across the entire investment lifecycle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We focus on assets aligned with demographic, infrastructure, and energy trends, ensuring every investment is positioned for structural tailwinds.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-36 bg-dusty-navy text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-3xl lg:text-4xl text-pale-blue leading-[1.1] mb-6">
              Explore our portfolio.
            </h2>
            <p className="text-grey-blue max-w-md mx-auto mb-10">
              Review our current investments and value creation approach.
            </p>
            <div className="flex justify-center gap-8">
              <Link to="/portfolio" className="group relative text-pale-blue font-medium text-sm uppercase tracking-widest pb-1">
                View Portfolio
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
              <Link to="/contact" className="group relative text-pale-blue font-medium text-sm uppercase tracking-widest pb-1">
                Make an Enquiry
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
};

export default Strategy;
