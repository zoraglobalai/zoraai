import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Products", "Solutions", "Industries", "Our Approach", "Case Studies", "Insights"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/80 backdrop-blur-xl shadow-card border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-navy tracking-tight">
          Worktual
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <button className="bg-gradient-cta text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity glow-violet">
            Let's talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border px-6 pb-6 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-4 w-full bg-gradient-cta text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold">
            Let's talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
