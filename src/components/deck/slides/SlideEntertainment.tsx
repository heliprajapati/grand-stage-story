import fountain from "@/assets/fountain.jpg";

export default function SlideEntertainment({ active }: { active: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center">
      <div className="absolute inset-0">
        <img src={fountain} alt="Dubai Fountain light show" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div
        className="relative z-10 px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[900px] mx-auto text-center"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(30px)",
          transitionDuration: "800ms",
        }}
      >
        <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
          Entertainment & Attractions
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight mt-4">
          Where People Come to
          <br />
          <span className="italic text-gold">Experience.</span>
        </h2>
        <p className="text-lg text-muted-foreground font-body max-w-lg mx-auto leading-relaxed mt-6">
          Not just shop. The Dubai Fountain, Aquarium, Ice Rink, and Ekart Zabeel 
          create moments that drive footfall and dwell time.
        </p>
        <div className="flex justify-center gap-12 mt-10">
          {[
            { value: "300K+", label: "Daily Visitors" },
            { value: "#1", label: "Global Ranking" },
            { value: "6", label: "Iconic Attractions" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-display font-bold text-gold">{s.value}</p>
              <p className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
