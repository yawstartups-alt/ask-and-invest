import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dusty-navy text-pale-blue">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl text-pale-blue mb-4">Trident Capital</h3>
            <p className="text-grey-blue text-sm leading-relaxed max-w-md">
              A private capital firm focused on building long-term value through real assets, operating businesses, and future-focused industries.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-grey-blue mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About", href: "/about" },
                { label: "Investment Strategy", href: "/strategy" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Media", href: "/media" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.href} to={item.href} className="text-sm text-grey-blue hover:text-pale-blue transition-colors duration-300">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-grey-blue mb-4">Sectors</h4>
            <nav className="flex flex-col gap-3">
              {["Real Assets", "Infrastructure & Development", "Hospitality & Lifestyle", "Energy Transition"].map((s) => (
                <span key={s} className="text-sm text-grey-blue">{s}</span>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-blue/20">
          <p className="text-xs text-grey-blue leading-relaxed max-w-3xl">
            The information on this website is for informational purposes only and does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation of any investment product or service.
          </p>
          <p className="text-xs text-grey-blue mt-4">
            © {new Date().getFullYear()} Trident Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
