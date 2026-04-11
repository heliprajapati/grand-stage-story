import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import events from "@/assets/events.jpg";

const eventStats = [
  { value: 111, suffix: "M", label: "Annual Audience" },
  { value: 200, suffix: "+", label: "Events Per Year" },
  { value: 2, suffix: "B", label: "Global Broadcast Reach" },
  { value: 408, prefix: "$", suffix: "M", label: "Expansion Budget" },
];

export default function EventsSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="events" className="py-24 md:py-32 gradient-dark" ref={ref}>
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            Events & Platform · Global Stage
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
            The World <span className="italic text-gold">Is Watching.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Dubai Mall is not just a venue — it is the world's most powerful media stage. 
            What happens here resonates globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {eventStats.map((stat, i) => {
            const count = useCountUp(stat.value, 2000, isVisible);
            return (
              <div
                key={stat.label}
                className="text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 100}ms`,
                  transitionDuration: "600ms",
                }}
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-gold">
                  {stat.prefix}{count}{stat.suffix}
                </p>
                <p className="text-xs font-body tracking-[0.1em] uppercase text-muted-foreground mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.95)",
              transitionDuration: "800ms",
              transitionDelay: "300ms",
            }}
          >
            <img
              src={events}
              alt="Massive concert with laser beams"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
          <div className="space-y-8">
            {[
              { title: "World-Class Concerts", desc: "From global superstars to regional icons — Dubai Mall's outdoor stage and atrium have hosted performances seen by millions." },
              { title: "Fashion Week", desc: "Runway shows, brand launches, and cultural moments that redefine what retail can be." },
              { title: "Brand Launches", desc: "Product launches that become global news. The Dubai Mall audience is the world's most affluent and connected." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-6 border border-border bg-card/50 hover:border-gold/30 transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(30px)",
                  transitionDelay: `${400 + i * 150}ms`,
                  transitionDuration: "700ms",
                }}
              >
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
