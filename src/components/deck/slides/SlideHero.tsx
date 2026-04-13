import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function SlideHero({ onExplore }: { onExplore?: () => void }) {
  return (
    <div className="relative w-full h-full flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Dubai skyline at dusk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[1400px] mx-auto">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/40 backdrop-blur-sm border border-border">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground">
              A Global Destination
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight animate-fade-up">
            Dubai Mall
            <br />
            <span className="italic text-gold">Grand Stage Story.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-body animate-fade-up stagger-2">
            Retail. Entertainment. Culture. Scale like never before.
          </p>

          <div className="animate-fade-up stagger-3">
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-xs font-body tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Explore
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
