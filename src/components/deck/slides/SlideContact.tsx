export default function SlideContact({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex items-center">
      <div
        className="px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-[800px] mx-auto text-center"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(20px)",
          transitionDuration: "800ms",
        }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight">
          Let's Build Something
          <br />
          <span className="italic text-gold">Big.</span>
        </h2>

        <div className="mt-12 space-y-4">
          <p className="text-muted-foreground font-body">
            Get in touch with our leasing and partnerships team.
          </p>
          <a
            href="mailto:leasing@dubaimall.com"
            className="text-gold font-body text-lg hover:text-gold-light transition-colors"
          >
            leasing@dubaimall.com
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="font-display text-xl font-bold">
            <span className="text-gold">Dubai</span>Mall
          </div>
          <p className="text-xs text-muted-foreground font-body tracking-[0.1em] mt-2">
            An Emaar Properties Development · Downtown Dubai
          </p>
        </div>
      </div>
    </div>
  );
}
