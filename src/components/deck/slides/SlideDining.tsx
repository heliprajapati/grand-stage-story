import dining from "@/assets/dining.jpg";
import kidzania from "@/assets/kidzania.jpg";

export default function SlideDining({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex items-center gradient-dark">
      <div className="px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[1400px] mx-auto">
        <div className="text-center mb-12 space-y-4">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            Dining & Lifestyle
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
            Not Just Dining. <span className="italic text-gold">A Destination.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { image: dining, title: "Fine Dining", desc: "200+ restaurants. 50+ cuisines. Michelin-starred chefs.", tag: "200+ Venues" },
            { image: kidzania, title: "Lifestyle & Family", desc: "KidZania, Olympic ice rink, fountain-view terraces.", tag: "24/7 Open" },
          ].map((item, i) => (
            <div
              key={item.title}
              className="group relative overflow-hidden"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 200}ms`,
                transitionDuration: "700ms",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[9px] font-body tracking-[0.2em] uppercase text-gold">{item.tag}</span>
                <h3 className="text-2xl font-display font-semibold mt-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
