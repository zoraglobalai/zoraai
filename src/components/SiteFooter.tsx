import { Link } from "react-router-dom";

const footerLinks = {
  Products: [
    { label: "AI Contact Centre", path: "/products" },
    { label: "AI Ticketing", path: "/products" },
    { label: "Customer Value Management", path: "/products" },
    { label: "Conversational AI", path: "/products" },
  ],
  Company: [
    { label: "Our Approach", path: "/our-approach" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Contact", path: "/contact" },
  ],
  Resources: [
    { label: "Insights", path: "/insights" },
    { label: "Industries", path: "/industries" },
    { label: "Solutions", path: "/solutions" },
  ],
  Legal: [
    { label: "Privacy Policy", path: "#" },
    { label: "Terms of Service", path: "#" },
    { label: "Cookie Policy", path: "#" },
  ],
};

const SiteFooter = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-primary-foreground tracking-tight">Zora Global AI Technologies</Link>
            <p className="mt-4 text-sm text-primary-foreground/50 leading-relaxed">
              Enterprise AI solutions, built bespoke.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-primary-foreground/30">© 2026 Zora Global AI. All rights reserved.</p>
            <p className="text-xs text-primary-foreground/30">Email: info@zoraglobalai.com | Phone:+91 9087000345</p>
          </div>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a key={social} href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
