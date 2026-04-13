import fashionAvenue from "@/assets/fashion-avenue.jpg";

const brands = [
  "Louis Vuitton", "Chanel", "Hermès", "Gucci", "Cartier", "Dior",
  "Prada", "Burberry", "Valentino", "Saint Laurent", "Rolex", "Tiffany & Co.",
];

export default function SlideLuxury({ active }: { active: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center">
      <div className="absolute inset-0">
        <img src={fashionAvenue} alt="Luxury boutiques" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[900px] mx-auto text-center">
        <div
          className="space-y-8"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(20px)",
            transitionDuration: "800ms",
          }}
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            Fashion Avenue
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight">
            Elevated. Curated.
            <br />
            <span className="italic text-gold">Exclusive.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto leading-relaxed">
            200+ luxury boutiques. The 11th most expensive retail location globally.
          </p>

          {/* Brand list */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-4">
            {brands.map((b) => (
              <span key={b} className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
