import { useState, useEffect, useCallback, useRef } from "react";

interface UseDeckOptions {
  totalSlides: number;
  presentModeInterval?: number;
}

export function useDeck({ totalSlides, presentModeInterval = 10000 }: UseDeckOptions) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [presentMode, setPresentMode] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const intervalRef = useRef<number>();

  const goTo = useCallback((index: number) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
  }, [currentSlide, totalSlides]);

  const next = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection("next");
      setCurrentSlide((p) => p + 1);
    }
  }, [currentSlide, totalSlides]);

  const prev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection("prev");
      setCurrentSlide((p) => p - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape") setPresentMode(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Present mode auto-advance
  useEffect(() => {
    if (presentMode) {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((p) => {
          if (p < totalSlides - 1) {
            setDirection("next");
            return p + 1;
          }
          return 0; // loop
        });
      }, presentModeInterval);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [presentMode, totalSlides, presentModeInterval]);

  return { currentSlide, direction, presentMode, setPresentMode, goTo, next, prev };
}
