import RevealSection from "@/components/RevealSection";
import SectionLabel from "@/components/SectionLabel";
import { Link } from "react-router-dom";

const portfolioItems = [
  { sector: "Real Assets", name: "Strategic Land Portfolio", status: "Active", geography: "Malaysia" },
  { sector: "Infrastructure", name: "Construction & Development Platform", status: "Active", geography: "Malaysia" },
  { sector: "Hospitality", name: "Hospitality & Lifestyle Assets", status: "Strategic Allocation in Progress", geography: "MY · SG · AU" },
  { sector: "Energy Transition", name: "Renewable Energy Infrastructure", status: "Strategic Allocation in Progress", geography: "Regional" },
];

const Portfolio = () => {
  return (
    <main className="pt-20">
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="font-display text-4xl lg:text-6xl text-foreground mt-4 max-w-3xl leading-[1.05]">
              Investments built for enduring value.
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-2xl leading-relaxed">
              A growing portfolio of real assets and operating businesses across key sectors and geographies.
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="pb-24 lg:pb-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {portfolioItems.map((item, i) => (
              <RevealSection key={item.name} delay={i * 0.12}>
                <div className="border-t border-border py-10 pr-8 group hover:bg-muted/40 transition-colors duration-500 cursor-default">
                  <span className="text-[10px] uppercase tracking-widest text-primary">{item.sector}</span>
                  <h3 className="font-display text-xl lg:text-2xl text-foreground mt-2 mb-3">{item.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{item.geography}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{item.status}</span>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 bg-dusty-navy text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-3xl lg:text-4xl text-pale-blue leading-[1.1] mb-6">
              Interested in our investment approach?
            </h2>
            <Link to="/contact" className="group relative text-pale-blue font-medium text-sm uppercase tracking-widest pb-1 inline-block mt-4">
              Submit an Enquiry
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
