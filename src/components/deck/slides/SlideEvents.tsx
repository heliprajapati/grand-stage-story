import { ArrowRight } from "lucide-react";
import events from "@/assets/events.jpg";

const eventTypes = [
  { title: "World-Class Concerts", desc: "Global superstars. Millions of viewers." },
  { title: "Product Launches", desc: "Events that become global headlines." },
  { title: "Brand Activations", desc: "240 new venues opening 2025." },
];

export default function SlideEvents({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[1400px] mx-auto">
        {/* Left */}
        <div className="flex flex-col justify-center space-y-8">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            Events Platform
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
            A Global <span className="italic text-gold">Stage.</span>
          </h2>
          <div className="space-y-4">
            {eventTypes.map((e, i) => (
              <div
                key={e.title}
                className="p-5 border border-border bg-card/50 hover:border-gold/30 transition-all duration-300"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "translateX(0)" : "translateX(-30px)",
                  transitionDelay: `${i * 150}ms`,
                  transitionDuration: "600ms",
                }}
              >
                <h3 className="font-display text-base font-semibold">{e.title}</h3>
                <p className="text-xs text-muted-foreground font-body mt-1">{e.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-xs font-body tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300 w-fit"
          >
            Host Your Event
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center">
          <img src={events} alt="Concert at Dubai Mall" className="w-full aspect-[4/3] object-cover" />
        </div>
      </div>
    </div>
  );
}
