import aquarium from "@/assets/aquarium.jpg";
import iceRink from "@/assets/ice-rink.jpg";
import fountain from "@/assets/fountain.jpg";
import ekart from "@/assets/ekart.jpg";

const attractions = [
  { image: aquarium, title: "Dubai Aquarium", tag: "Marine Life" },
  { image: iceRink, title: "Dubai Ice Rink", tag: "Sport & Leisure" },
  { image: fountain, title: "Dubai Fountain", tag: "Iconic Show" },
  { image: ekart, title: "Ekart Zabeel", tag: "Thrill" },
];

export default function SlideRetail({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex items-center">
      <div className="px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[1400px] mx-auto">
        <div className="text-center mb-12 space-y-4">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            World-Class Attractions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
            Retail That <span className="italic text-gold">Performs.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Flagship stores. Pop-ups. Global brands. Experiences found nowhere else.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {attractions.map((a, i) => (
            <div
              key={a.title}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "scale(1)" : "scale(0.9)",
                transitionDelay: `${i * 100}ms`,
                transitionDuration: "600ms",
              }}
            >
              <img
                src={a.image}
                alt={a.title}
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[9px] font-body tracking-[0.2em] uppercase text-gold">{a.tag}</span>
                <h3 className="text-sm font-display font-semibold mt-1">{a.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
