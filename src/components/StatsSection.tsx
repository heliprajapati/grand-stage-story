import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 111, suffix: "M", label: "Annual Visitors", desc: "Including 200+ luxury boutiques" },
  { value: 1200, suffix: "+", label: "Retail Stores", desc: "Emaar 2024 expansion plan" },
  { value: 408, prefix: "$", suffix: "M", label: "Expansion Budget", desc: "Near-full with long waitlists" },
  { value: 95, suffix: "%", label: "Occupancy Rate", desc: "Owned and operated by Emaar Properties" },
];

function StatCard({ stat, visible, delay }: { stat: typeof stats[0]; visible: boolean; delay: number }) {
  const count = useCountUp(stat.value, 2000, visible);
  return (
    <div
      className="text-center space-y-2 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold">
        {stat.prefix}{count}{stat.suffix}
      </p>
      <p className="text-sm font-body tracking-[0.15em] uppercase text-foreground">{stat.label}</p>
      <p className="text-xs text-muted-foreground font-body">{stat.desc}</p>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="stats" className="py-24 md:py-32 gradient-dark" ref={ref}>
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            By the Numbers · Dubai Mall 2024
          </span>
          <p className="text-sm text-muted-foreground font-body">
            Most visited place on Earth · 2024
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} visible={isVisible} delay={i * 150} />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground font-body mt-16 max-w-2xl mx-auto leading-relaxed">
          Owned and operated by Emaar Properties — the same visionaries behind the Burj Khalifa. 
          Dubai Mall is not just a shopping center. It is the beating heart of a global city.
        </p>
      </div>
    </section>
  );
}
