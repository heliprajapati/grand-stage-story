import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="cta" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle gold gradient accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full gradient-gold" />
      </div>

      <div className="section-padding max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDuration: "800ms",
            }}
          >
            <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
              Host Your Event · Dubai Mall
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
              A Global Stage <span className="italic text-gold">For Your Brand.</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-lg">
              From intimate brand activations to concert-scale productions — Dubai Mall's $408M expansion 
              opens 240 new event venues in 2025. Position your brand where the world is already looking.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-xs font-body tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300"
              >
                Book Event Space
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 border border-foreground/30 text-foreground text-xs font-body tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
              >
                View Event Deck
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Audience Reach", desc: "111M annual visitors — the most affluent, connected audience on Earth." },
              { title: "Global Broadcast", desc: "Events here reach 2 billion viewers via live streams and media coverage." },
              { title: "Brand Exposure", desc: "240 new venues opening 2025 — premium placements across every zone." },
              { title: "Cultural Moments", desc: "From NYE fireworks to fashion weeks — your brand becomes part of history." },
            ].map((card, i) => (
              <div
                key={card.title}
                className="p-6 border border-border bg-card/50 hover:border-gold/30 transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${200 + i * 100}ms`,
                  transitionDuration: "600ms",
                }}
              >
                <h3 className="font-display text-sm font-semibold text-gold mb-2">{card.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
