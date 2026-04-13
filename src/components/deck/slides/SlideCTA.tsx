import { ArrowRight } from "lucide-react";

export default function SlideCTA({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex items-center gradient-dark">
      <div
        className="px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[900px] mx-auto text-center"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(30px)",
          transitionDuration: "800ms",
        }}
      >
        <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
          Downtown Dubai · Adjacent to Burj Khalifa
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight mt-6">
          Be Part <span className="italic text-gold">Of It.</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto leading-relaxed mt-6">
          111 million visitors. 95% occupancy. $408M expansion.
          The opportunity is for those who act first.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            { label: "Lease Space", primary: true },
            { label: "Become a Partner", primary: false },
            { label: "Book an Event", primary: false },
          ].map((btn) => (
            <a
              key={btn.label}
              href="#"
              className={`group inline-flex items-center gap-3 px-8 py-4 text-xs font-body tracking-[0.2em] uppercase transition-all duration-300 ${
                btn.primary
                  ? "bg-gold text-primary-foreground hover:bg-gold-light hover:shadow-[0_0_30px_hsl(43_72%_55%/0.3)]"
                  : "border border-foreground/30 text-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {btn.label}
              {btn.primary && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
