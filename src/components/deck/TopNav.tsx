import { Monitor, MonitorOff } from "lucide-react";

const sections = [
  { label: "Overview", slide: 0 },
  { label: "Opportunity", slide: 1 },
  { label: "Experiences", slide: 2 },
  { label: "Activities", slide: 3 },
  { label: "Luxury", slide: 5 },
  { label: "Dining", slide: 6 },
  { label: "Entertainment", slide: 7 },
  { label: "Events", slide: 8 },
  { label: "Partner", slide: 9 },
  { label: "Contact", slide: 10 },
];

interface TopNavProps {
  currentSlide: number;
  onGoTo: (index: number) => void;
  presentMode: boolean;
  onTogglePresent: () => void;
}

export default function TopNav({ currentSlide, onGoTo, presentMode, onTogglePresent }: TopNavProps) {
  if (presentMode) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-14 px-6 lg:px-12">
        <a className="font-display text-lg font-bold tracking-wide text-foreground shrink-0">
          <span className="text-gold">Dubai</span>Mall
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.label}
              onClick={() => onGoTo(s.slide)}
              className={`px-3 py-1.5 text-[10px] font-body tracking-[0.15em] uppercase transition-all duration-300 ${
                currentSlide === s.slide || (s.label === "Activities" && currentSlide === 4)
                  ? "text-gold border-b-2 border-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onTogglePresent}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-body tracking-[0.15em] uppercase border border-border text-muted-foreground hover:text-gold hover:border-gold transition-all duration-300"
            title={presentMode ? "Exit Present Mode" : "Present Mode"}
          >
            {presentMode ? <MonitorOff size={14} /> : <Monitor size={14} />}
            <span className="hidden sm:inline">Present</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
