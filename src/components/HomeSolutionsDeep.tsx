import FadeUp from "./FadeUp";
import { Link } from "react-router-dom";
import { ArrowRight, Cog, Rocket, TrendingUp } from "lucide-react";

const items = [
  { icon: Cog, title: "AI for Service", desc: "Automate resolutions, coach agents in real-time, and deliver consistent experiences across every channel." },
  { icon: Rocket, title: "AI for Process", desc: "Identify bottlenecks, automate repetitive workflows, and continuously optimise for operational efficiency." },
  { icon: TrendingUp, title: "AI for Growth", desc: "Unlock new revenue with predictive insights, personalised engagement, and AI-driven go-to-market strategies." },
];

const HomeSolutionsDeep = () => (
  <section className="py-16 lg:py-20">
    <div className="container mx-auto px-6 lg:px-8">
      <FadeUp>
        <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
          Explore Our <span className="text-gradient-cyan">Solution Areas</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Purpose-built AI across three core pillars — service, process, and growth — each tailored to your enterprise's unique challenges.
        </p>
      </FadeUp>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-card-hover hover:border-cyan/30 transition-all duration-300 h-full flex flex-col">
              <item.icon className="w-8 h-8 text-accent mb-5" />
              <h4 className="text-lg font-bold text-navy mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
              <Link to="/solutions" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default HomeSolutionsDeep;
