import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const leaseStats = [
  { value: "200+", label: "Luxury Boutiques" },
  { value: "9%", label: "Rent Growth YoY" },
  { value: "11th", label: "Global Ranking" },
];

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="py-24 md:py-40 gradient-dark relative overflow-hidden" ref={ref}>
      <div className="section-padding max-w-[1000px] mx-auto text-center relative z-10">
        <div
          className="space-y-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionDuration: "800ms",
          }}
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
            Downtown Dubai · Adjacent to Burj Khalifa
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display leading-tight">
            The world is watching.
            <br />
            <span className="italic text-gold">Will they see you?</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            111 million visitors. 95–99% occupancy. A $408M expansion. 
            The numbers speak — but the opportunity is for those who act first.
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto py-8">
            {leaseStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-display font-bold text-gold">{stat.value}</p>
                <p className="text-[10px] font-body tracking-[0.1em] uppercase text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-primary-foreground text-xs font-body tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Lease Space Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-10 py-5 border border-foreground/30 text-foreground text-xs font-body tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Download Leasing Pack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
