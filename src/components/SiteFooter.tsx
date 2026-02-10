const footerLinks = {
  Products: ["AI Contact Centre", "AI Ticketing", "Customer Value Management", "Conversational AI"],
  Company: ["About Us", "Careers", "Our Approach", "Case Studies"],
  Resources: ["Insights", "Documentation", "API Reference", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const SiteFooter = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-bold text-primary-foreground tracking-tight">Worktual</span>
            <p className="mt-4 text-sm text-primary-foreground/50 leading-relaxed">
              Enterprise AI solutions, built bespoke.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">© 2026 Worktual. All rights reserved.</p>
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
