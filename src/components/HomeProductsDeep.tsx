import FadeUp from "./FadeUp";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  { title: "AI Contact Centre", points: ["Intelligent routing", "Sentiment analysis", "Automated summarisation"] },
  { title: "AI Ticketing", points: ["Smart classification", "SLA prediction", "Auto-escalation"] },
  { title: "Customer Value Management", points: ["Churn prediction", "Dynamic segmentation", "Upsell intelligence"] },
  { title: "Conversational AI", points: ["Natural language", "Multi-turn context", "Human handoff"] },
];

const HomeProductsDeep = () => (
  <section className="py-16 lg:py-20 bg-gradient-alt">
    <div className="container mx-auto px-6 lg:px-8">
      <FadeUp>
        <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
          Product <span className="text-gradient-cyan">Highlights</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Key capabilities across our product suite — each built with enterprise-grade security and scalability.
        </p>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <FadeUp key={h.title} delay={i * 0.08}>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border h-full">
              <h4 className="text-base font-bold text-navy mb-4">{h.title}</h4>
              <ul className="space-y-2 mb-5">
                {h.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/products" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default HomeProductsDeep;
