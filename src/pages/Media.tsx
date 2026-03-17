import RevealSection from "@/components/RevealSection";
import SectionLabel from "@/components/SectionLabel";

const Media = () => {
  return (
    <main className="pt-20">
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <SectionLabel>Media</SectionLabel>
            <h1 className="font-display text-4xl lg:text-6xl text-foreground mt-4 max-w-3xl leading-[1.05]">
              News & Announcements
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-2xl leading-relaxed">
              Updates, announcements, and thought leadership from Trident Capital.
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="pb-24 lg:pb-36">
        <div className="container mx-auto px-6 lg:px-12">
          <RevealSection>
            <div className="border-t border-border py-16 text-center">
              <p className="text-muted-foreground text-sm">
                Media and thought leadership content is being prepared. Check back for updates.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
};

export default Media;
