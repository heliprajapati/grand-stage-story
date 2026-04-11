import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import mallInterior from "@/assets/mall-interior.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dubai skyline at dusk with Burj Khalifa"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 gradient-overlay-top" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/40 backdrop-blur-sm border border-border">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground">
                World's Most Visited · 111M Visitors 2024
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              Not a mall.
              <br />
              <span className="italic text-gold">A global</span>
              <br />
              destination.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed font-body">
              Downtown Dubai. Adjacent to the Burj Khalifa. 1,200 stores, 200+ restaurants, 
              and experiences found nowhere else on Earth.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#experiences"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-xs font-body tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300"
              >
                Explore Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#cta"
                className="inline-flex items-center px-8 py-4 border border-foreground/30 text-foreground text-xs font-body tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
              >
                Lease Space
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <img
                src={mallInterior}
                alt="Dubai Mall interior with golden light and luxury storefronts"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
                width={800}
                height={1024}
              />
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-6 border-t border-border">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground">Daily Visitors</span>
                    <p className="text-3xl font-display font-bold text-foreground">300,000+</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground">Ranking</span>
                    <p className="text-3xl font-display italic text-gold">#1</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground font-body mt-2">
                  Most visited place on Earth · 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
