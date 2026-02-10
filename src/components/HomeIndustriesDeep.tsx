import FadeUp from "./FadeUp";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  { name: "Retail", desc: "Personalised experiences and demand forecasting at scale." },
  { name: "Healthcare", desc: "Compliant AI for patient queries and operational efficiency." },
  { name: "Telecom", desc: "Churn prevention and automated fault resolution." },
  { name: "BFSI", desc: "KYC automation, fraud detection, and regulatory compliance." },
  { name: "SaaS & Enterprise", desc: "Scalable support and AI-driven customer success." },
];

const HomeIndustriesDeep = () => (
  <section className="py-16 lg:py-20">
    <div className="container mx-auto px-6 lg:px-8">
      <FadeUp>
        <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
          Industry <span className="text-gradient-cyan">Expertise</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Deep domain knowledge across sectors that demand precision, compliance, and measurable outcomes.
        </p>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {industries.map((ind, i) => (
          <FadeUp key={ind.name} delay={i * 0.06}>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-cyan/30 hover:shadow-card-hover transition-all duration-300 h-full">
              <h4 className="text-sm font-bold text-navy mb-2">{ind.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{ind.desc}</p>
              <Link to="/industries" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all">
                Details <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default HomeIndustriesDeep;
