import { useScrollReveal } from "@/hooks/useScrollReveal";
import dining from "@/assets/dining.jpg";

const diningStats = [
  { value: "200+", label: "Restaurants & Cafés" },
  { value: "30+", label: "Fountain-View Terraces" },
  { value: "24/7", label: "Open Year Round" },
  { value: "50+", label: "Cuisines Represented" },
];

export default function DiningSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="dining" className="py-24 md:py-32 gradient-dark" ref={ref}>
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            Dining & Lifestyle · 200+ Venues
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
            Taste the <span className="italic text-gold">World.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            From Michelin-starred dining to fountain-side terraces — every meal here is an event.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {diningStats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 border border-border bg-card/50"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 100}ms`,
                transitionDuration: "600ms",
              }}
            >
              <p className="text-2xl md:text-3xl font-display font-bold text-gold">{stat.value}</p>
              <p className="text-xs font-body tracking-[0.1em] uppercase text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-40px)",
              transitionDuration: "800ms",
              transitionDelay: "300ms",
            }}
          >
            <img
              src={dining}
              alt="Luxury Japanese restaurant interior"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
          <div
            className="space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transitionDuration: "800ms",
              transitionDelay: "500ms",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-display">
              Fine Dining · <span className="italic text-gold">Nobu Dubai</span>
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Robert De Niro and Nobu Matsuhisa's legendary restaurant. 
              Omakase menus, black cod miso, and a view of the Burj Khalifa.
            </p>
            <div className="pt-4 border-t border-border">
              <blockquote className="font-display italic text-lg text-foreground/80">
                "A meal here isn't just dinner.
                <br />
                It's a memory you carry home."
              </blockquote>
              <p className="text-xs text-muted-foreground font-body mt-3 tracking-[0.1em] uppercase">
                — Dubai Mall Dining · Downtown Dubai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
