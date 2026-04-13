import { ShoppingBag, Megaphone, Calendar } from "lucide-react";

const cards = [
  {
    icon: ShoppingBag,
    title: "Retail Leasing",
    desc: "1,200+ stores. 95% occupancy. The most sought-after retail space on Earth.",
  },
  {
    icon: Megaphone,
    title: "Brand Sponsorships",
    desc: "111M visitors. 2B global broadcast reach. Unmatched brand exposure.",
  },
  {
    icon: Calendar,
    title: "Event Platform",
    desc: "200+ events per year. Concerts, launches, fashion weeks — a global stage.",
  },
];

export default function SlideExperiences({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex items-center gradient-dark">
      <div className="px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[1400px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            The Opportunity
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
            Three Ways to <span className="italic text-gold">Win.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="p-8 border border-border bg-card hover:border-gold/30 transition-all duration-500 group cursor-pointer"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 150}ms`,
                transitionDuration: "700ms",
              }}
            >
              <card.icon size={32} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-display font-semibold mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
