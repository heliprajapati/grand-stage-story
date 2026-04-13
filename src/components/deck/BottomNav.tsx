import { ChevronLeft, ChevronRight } from "lucide-react";

interface BottomNavProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
  presentMode: boolean;
}

export default function BottomNav({ currentSlide, totalSlides, onPrev, onNext, onGoTo, presentMode }: BottomNavProps) {
  if (presentMode) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-border">
      <div className="flex items-center justify-between h-12 px-6 lg:px-12">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="inline-flex items-center gap-2 text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? "w-6 h-2 bg-gold"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="inline-flex items-center gap-2 text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
