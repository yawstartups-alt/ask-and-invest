import RevealSection from "@/components/RevealSection";
import SectionLabel from "@/components/SectionLabel";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <SectionLabel>About Trident</SectionLabel>
            <h1 className="font-display text-4xl lg:text-6xl text-foreground mt-4 max-w-3xl leading-[1.05]">
              Building institutional-scale investment platforms.
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-2xl leading-relaxed">
              Trident is a private capital and asset management firm focused on acquiring, developing, and scaling real assets and operating businesses that generate long-term value.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 lg:py-36 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <RevealSection>
                <SectionLabel>What We Do</SectionLabel>
                <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-4 leading-[1.1]">
                  Deploying capital with discipline.
                </h2>
              </RevealSection>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <RevealSection delay={0.15}>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Trident deploys investor capital into carefully selected assets and businesses where active management, development expertise, and operational improvement can unlock long-term value.
                </p>
                <ul className="space-y-4">
                  {[
                    "Acquiring undervalued or strategic assets",
                    "Improving performance through active management",
                    "Developing assets where value can be created",
                    "Building platforms in future-growth industries",
                    "Delivering strong risk-adjusted returns to investors",
                  ].map((item) => (
                    <li key={item} className="text-sm text-foreground flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>What Sets Us Apart</SectionLabel>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-4 leading-[1.1] mb-6">
                Integrated platforms, not passive positions.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Trident differentiates itself through its vertically integrated investment model—combining capital allocation, development capability, and operating businesses into a single platform. We are builders of integrated platforms, not passive investors in assets.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 lg:py-36 bg-dusty-navy">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <RevealSection>
            <SectionLabel>Vision</SectionLabel>
            <h2 className="font-display text-3xl lg:text-4xl text-pale-blue mt-4 leading-[1.1] max-w-2xl mx-auto mb-8">
              Building a diversified portfolio positioned for institutional scale.
            </h2>
            <p className="text-grey-blue max-w-xl mx-auto leading-relaxed mb-10">
              Trident aims to build a diversified portfolio of high-quality assets and operating businesses positioned for long-term growth and institutional scale.
            </p>
            <Link
              to="/strategy"
              className="group relative text-pale-blue font-medium text-sm uppercase tracking-widest pb-1 inline-block"
            >
              View Investment Strategy
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </main>
  );
};

export default About;
