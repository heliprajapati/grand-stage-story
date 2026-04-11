import { useScrollReveal } from "@/hooks/useScrollReveal";
import fashionAvenue from "@/assets/fashion-avenue.jpg";

const brands = [
  "Louis Vuitton", "Chanel", "Hermès", "Gucci", "Cartier", "Dior",
  "Prada", "Burberry", "Valentino", "Bottega Veneta", "Saint Laurent",
  "Balenciaga", "Versace", "Fendi", "Givenchy", "Rolex", "Patek Philippe",
  "IWC", "Bulgari", "Tiffany & Co.",
];

const features = [
  { num: "01", title: "Fashion Avenue", desc: "200+ premium boutiques spanning two dedicated wings. Ranked 11th most expensive retail location globally." },
  { num: "02", title: "Global Flagship Destination", desc: "Super-regional malls running at 95–99% occupancy. Dubai sits among the top five cities globally for retail rental growth." },
  { num: "03", title: "The New District", desc: "65 new shops and restaurants in Dubai Mall's newest wing — The District. The freshest retail real estate on the planet." },
];

export default function LuxurySection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="luxury" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="text-center mb-12 space-y-4">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            Fashion Avenue · Luxury Retail
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
            Where Luxury <span className="italic text-gold">Finds Its Home.</span>
          </h2>
        </div>

        {/* Brand Marquee */}
        <div className="overflow-hidden py-8 border-y border-border mb-16">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="mx-6 text-sm font-body tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.num}
              className="space-y-4 p-8 border border-border bg-card hover:border-gold/30 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 150}ms`,
                transitionDuration: "700ms",
              }}
            >
              <span className="text-5xl font-display font-bold text-gold/30">{f.num}</span>
              <h3 className="text-xl font-display font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Full width image */}
        <div
          className="mt-16 overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDuration: "1000ms",
            transitionDelay: "500ms",
          }}
        >
          <img
            src={fashionAvenue}
            alt="Luxury fashion boutique with gold fixtures"
            className="w-full aspect-[21/9] object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
