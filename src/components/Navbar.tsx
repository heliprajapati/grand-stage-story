import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Discover", href: "#stats" },
  { label: "Attractions", href: "#experiences" },
  { label: "Dining", href: "#dining" },
  { label: "Fashion", href: "#luxury" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground">
          <span className="text-gold">Dubai</span>Mall
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#cta"
            className="hidden md:inline-flex items-center px-6 py-2.5 text-xs font-body tracking-widest uppercase bg-gold text-primary-foreground hover:bg-gold-light transition-colors duration-300"
          >
            Lease Space
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col py-6 px-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 text-xs font-body tracking-widest uppercase bg-gold text-primary-foreground"
            >
              Lease Space
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
