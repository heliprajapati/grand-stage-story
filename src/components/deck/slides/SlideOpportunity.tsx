import { useCountUp } from "@/hooks/useCountUp";
import mallInterior from "@/assets/mall-interior.jpg";

const stats = [
  { value: 111, suffix: "M+", label: "Annual Visitors" },
  { value: 1200, suffix: "+", label: "Retail Stores" },
  { value: 95, suffix: "%", label: "Occupancy Rate" },
];

export default function SlideOpportunity({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[1400px] mx-auto">
        {/* Left: content */}
        <div className="flex flex-col justify-center space-y-8">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold">
            Why This Property
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
            The World's <span className="italic text-gold">Most Visited</span> Destination.
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => {
              const count = useCountUp(stat.value, 2000, active);
              return (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-gold">
                    {count}{stat.suffix}
                  </p>
                  <p className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-muted-foreground font-body leading-relaxed max-w-md">
            Prime global location. Integrated lifestyle ecosystem.
            Adjacent to the Burj Khalifa — owned by Emaar Properties.
          </p>
        </div>

        {/* Right: visual */}
        <div className="hidden lg:flex items-center">
          <img
            src={mallInterior}
            alt="Dubai Mall interior"
            className="w-full aspect-[3/4] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
