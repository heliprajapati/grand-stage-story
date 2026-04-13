import fountain from "@/assets/fountain.jpg";
import ekart from "@/assets/ekart.jpg";

const attractions = [
  { image: fountain, title: "Dubai Fountain", tag: "Iconic Show", stat: "1,000", statLabel: "Water Expressions", desc: "Choreographed water shows with 25 color projectors — the world's largest performing fountain." },
  { image: ekart, title: "Ekart Zabeel", tag: "Thrill", stat: "#1", statLabel: "Rooftop Karting", desc: "Award-winning rooftop go-karting experience with panoramic views of Downtown Dubai." },
];

export default function SlideRetail2({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Slide title */}
      <div
        className="pt-12 pb-6 text-center"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(-20px)",
          transitionDuration: "600ms",
        }}
      >
        <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
          Activities & Experiences
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight mt-2">
          Moments That <span className="italic text-gold">Move.</span>
        </h2>
      </div>

      {/* Two featured attractions */}
      <div className="flex-1 flex items-center px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {attractions.map((a, i) => (
            <div
              key={a.title}
              className="group relative overflow-hidden"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 200}ms`,
                transitionDuration: "700ms",
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-[10px] font-body tracking-[0.25em] uppercase text-gold">
                    {a.tag}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold mt-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mt-2 max-w-sm">
                    {a.desc}
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-display font-bold text-gold">{a.stat}</span>
                    <span className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground">
                      {a.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
