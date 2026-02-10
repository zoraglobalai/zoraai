import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Products", path: "/products" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Our Approach", path: "/our-approach" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Insights", path: "/insights" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/80 backdrop-blur-xl shadow-card border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold text-navy tracking-tight">
          Worktual
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-gradient-cta text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity glow-violet inline-block"
          >
            Let's talk
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border px-6 pb-6 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 w-full bg-gradient-cta text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold block text-center"
          >
            Let's talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
