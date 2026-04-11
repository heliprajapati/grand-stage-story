export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-xl font-bold">
            <span className="text-gold">Dubai</span>Mall
          </div>
          <p className="text-xs text-muted-foreground font-body tracking-[0.1em]">
            An Emaar Properties Development
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs font-body tracking-[0.1em] uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
