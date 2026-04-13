import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import SlideContainer from "./SlideContainer";
import SlideHero from "./slides/SlideHero";
import SlideOpportunity from "./slides/SlideOpportunity";
import SlideExperiences from "./slides/SlideExperiences";
import SlideRetail from "./slides/SlideRetail";
import SlideLuxury from "./slides/SlideLuxury";
import SlideDining from "./slides/SlideDining";
import SlideEntertainment from "./slides/SlideEntertainment";
import SlideEvents from "./slides/SlideEvents";
import SlideCTA from "./slides/SlideCTA";
import SlideContact from "./slides/SlideContact";
import { useDeck } from "@/hooks/useDeck";

const TOTAL_SLIDES = 10;

export default function DeckLayout() {
  const { currentSlide, direction, presentMode, setPresentMode, goTo, next, prev } = useDeck({
    totalSlides: TOTAL_SLIDES,
  });

  return (
    <div className="h-screen bg-background overflow-hidden">
      <TopNav
        currentSlide={currentSlide}
        onGoTo={goTo}
        presentMode={presentMode}
        onTogglePresent={() => setPresentMode(!presentMode)}
      />

      <SlideContainer currentSlide={currentSlide} direction={direction} presentMode={presentMode}>
        <SlideHero />
        <SlideOpportunity active={currentSlide === 1} />
        <SlideExperiences active={currentSlide === 2} />
        <SlideRetail active={currentSlide === 3} />
        <SlideLuxury active={currentSlide === 4} />
        <SlideDining active={currentSlide === 5} />
        <SlideEntertainment active={currentSlide === 6} />
        <SlideEvents active={currentSlide === 7} />
        <SlideCTA active={currentSlide === 8} />
        <SlideContact active={currentSlide === 9} />
      </SlideContainer>

      <BottomNav
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrev={prev}
        onNext={next}
        onGoTo={goTo}
        presentMode={presentMode}
      />

      {/* Present mode exit hint */}
      {presentMode && (
        <button
          onClick={() => setPresentMode(false)}
          className="fixed top-4 right-4 z-50 px-4 py-2 text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground/50 hover:text-foreground bg-background/20 backdrop-blur-sm border border-border/30 transition-all duration-300"
        >
          ESC to exit
        </button>
      )}
    </div>
  );
}
