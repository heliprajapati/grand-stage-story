import { useScrollReveal } from "@/hooks/useScrollReveal";
import aquarium from "@/assets/aquarium.jpg";
import iceRink from "@/assets/ice-rink.jpg";
import fountain from "@/assets/fountain.jpg";
import kidzania from "@/assets/kidzania.jpg";
import fashionAvenue from "@/assets/fashion-avenue.jpg";
import ekart from "@/assets/ekart.jpg";

const experiences = [
  {
    image: aquarium,
    tag: "Marine Life",
    subtitle: "& Underwater Zoo",
    title: "Dubai Aquarium",
    desc: "300+ marine species including sharks and rays in the world's largest suspended aquarium tank.",
  },
  {
    image: iceRink,
    tag: "Sport & Leisure",
    subtitle: "Olympic-Sized",
    title: "Dubai Ice Rink",
    desc: "Olympic-standard ice rink hosting recreational skating and Emirates Ice Hockey League.",
  },
  {
    image: fountain,
    tag: "Iconic Show",
    subtitle: "World's Largest",
    title: "Dubai Fountain",
    desc: "Choreographed water shows with 25 color projectors and 1,000 water expressions.",
  },
  {
    image: kidzania,
    tag: "Family",
    subtitle: "Dubai",
    title: "KidZania",
    desc: "A child-sized city where kids explore 80+ real-world professions through immersive role-play.",
  },
  {
    image: fashionAvenue,
    tag: "Luxury Retail",
    subtitle: "200+ Luxury Boutiques",
    title: "Fashion Avenue",
    desc: "The 11th most expensive retail location globally. Louis Vuitton, Chanel, Cartier, Hermès, and Gucci.",
  },
  {
    image: ekart,
    tag: "Thrill",
    subtitle: "Rooftop Go-Karting",
    title: "Ekart Zabeel",
    desc: "Award-winning rooftop go-karting experience with panoramic views of Downtown Dubai.",
  },
];

export default function ExperiencesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="experiences" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            World-Class Experiences
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
            Beyond <span className="italic text-gold">Shopping.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Six iconic attractions. Zero compromises. Every visit is a world in itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className="group relative overflow-hidden bg-card border border-border hover:border-gold/30 transition-all duration-500 cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 100}ms`,
                transitionDuration: "700ms",
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-body tracking-[0.2em] uppercase text-gold">{exp.tag}</span>
                  <span className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground">{exp.subtitle}</span>
                </div>
                <h3 className="text-xl font-display font-semibold">{exp.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
