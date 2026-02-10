import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Radio, Landmark, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    name: "Retail",
    problem: "Fragmented customer journeys and rising expectations make it difficult to deliver personalised experiences at scale.",
    solution: "AI-powered recommendation engines, demand forecasting, and omnichannel engagement that convert browsers into loyal customers.",
    benefits: ["Personalised product recommendations", "Demand forecasting accuracy", "Automated inventory optimisation", "Unified customer profiles"],
  },
  {
    icon: Heart,
    name: "Healthcare",
    problem: "Patient volumes are increasing while staffing remains constrained, leading to longer wait times and burnout.",
    solution: "Intelligent triage, automated scheduling, and conversational AI that handles routine enquiries while freeing clinicians for critical care.",
    benefits: ["Faster patient query resolution", "HIPAA-compliant automation", "Reduced administrative burden", "Improved patient satisfaction"],
  },
  {
    icon: Radio,
    name: "Telecom",
    problem: "High churn rates and complex service portfolios create massive support volumes and rising operational costs.",
    solution: "Predictive churn models, intelligent ticket routing, and self-service AI agents that resolve issues before customers think of leaving.",
    benefits: ["Churn prediction & prevention", "Automated fault diagnosis", "Proactive service alerts", "Cost-per-contact reduction"],
  },
  {
    icon: Landmark,
    name: "BFSI",
    problem: "Regulatory complexity and security requirements make it challenging to innovate customer-facing processes.",
    solution: "Compliant AI solutions for KYC automation, fraud detection, and personalised financial guidance that maintain the highest security standards.",
    benefits: ["Regulatory compliance built-in", "Real-time fraud detection", "Automated KYC processing", "Personalised financial insights"],
  },
  {
    icon: Building2,
    name: "SaaS & Enterprise",
    problem: "Scaling support and success operations while maintaining quality is a constant balancing act for growing SaaS companies.",
    solution: "AI-driven customer success, automated onboarding, and intelligent support that scales with your user base without scaling your team linearly.",
    benefits: ["Automated user onboarding", "Health score prediction", "Intelligent support triage", "Usage-based engagement triggers"],
  },
];

const IndustriesPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="AI Solutions Across Industries"
        highlight="Industries"
        subtitle="We understand the unique challenges of each sector. Our bespoke AI solutions are tailored to deliver measurable outcomes in your industry."
        breadcrumb="Industries"
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 space-y-16">
          {industries.map((ind, i) => (
            <FadeUp key={ind.name} delay={0.05}>
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <ind.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-3">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ind.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">How AI Solves It</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ind.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {ind.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-sm text-navy">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-alt">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
              Don't see your <span className="text-gradient-cyan">industry</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Our approach is bespoke by design. Let's discuss how AI can transform your specific sector.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity glow-violet">
              Let's Talk <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageLayout>
  );
};

export default IndustriesPage;
