import { ReactNode } from "react";

interface SlideContainerProps {
  children: ReactNode[];
  currentSlide: number;
  direction: "next" | "prev";
  presentMode: boolean;
}

export default function SlideContainer({ children, currentSlide, presentMode }: SlideContainerProps) {
  return (
    <div
      className={`fixed inset-0 overflow-hidden ${
        presentMode ? "" : "top-14 bottom-12"
      }`}
    >
      {children.map((child, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: currentSlide === i ? 1 : 0,
            transform: currentSlide === i
              ? "translateX(0)"
              : i < currentSlide
                ? "translateX(-8%)"
                : "translateX(8%)",
            pointerEvents: currentSlide === i ? "auto" : "none",
          }}
        >
          <div className="w-full h-full overflow-y-auto">
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
