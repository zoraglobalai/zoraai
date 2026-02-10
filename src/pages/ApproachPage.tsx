import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { Link } from "react-router-dom";
import { Search, Brain, Wrench, Plug, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  { num: "01", icon: Search, title: "Discovery", desc: "We begin with a deep understanding of your business — processes, pain points, data landscape, and strategic goals. This phase ensures we're solving the right problems with the right approach.", details: ["Stakeholder interviews & workshops", "Data audit & readiness assessment", "Competitive landscape analysis", "Opportunity prioritisation framework"] },
  { num: "02", icon: Brain, title: "Intelligence Mapping", desc: "We map your data assets, identify high-value AI opportunities, and design the architecture that will deliver maximum impact with minimum disruption.", details: ["AI opportunity scoring", "Data flow architecture", "Model selection & design", "ROI projection & business case"] },
  { num: "03", icon: Wrench, title: "Build & Train", desc: "Our engineers build and train bespoke models using your proprietary data, ensuring accuracy, fairness, and performance that generic solutions can't match.", details: ["Custom model development", "Training on proprietary data", "Bias testing & fairness audits", "Performance benchmarking"] },
  { num: "04", icon: Plug, title: "Integration", desc: "Seamless deployment into your existing tech stack with zero disruption to live operations. We handle the complexity so your teams can focus on results.", details: ["API-first integration", "Legacy system compatibility", "Security & compliance review", "User training & enablement"] },
  { num: "05", icon: RefreshCw, title: "Continuous Optimisation", desc: "AI doesn't stop at deployment. We monitor, retrain, and optimise your models continuously to ensure they improve as your business evolves.", details: ["Ongoing model monitoring", "Drift detection & retraining", "Performance reporting", "Quarterly strategy reviews"] },
];

const ApproachPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Our Proven Approach to Bespoke AI"
        highlight="Bespoke AI"
        subtitle="A structured, transparent methodology that transforms ambitious AI visions into measurable business outcomes — every time."
        breadcrumb="Our Approach"
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-16 relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-[2.25rem] top-0 bottom-0 w-px bg-border" />

            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.08}>
                <div className="grid lg:grid-cols-[4.5rem_1fr] gap-6 lg:gap-10">
                  <div className="relative">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-card border-2 border-accent flex items-center justify-center shadow-card z-10 relative">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">{`Step ${step.num}`}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-navy mt-2 mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{step.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm text-navy">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-lavender">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
              Ready to start your <span className="text-gradient-cyan">AI journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Every engagement begins with Discovery. Let's explore what's possible for your enterprise.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity glow-violet">
              Start Discovery <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageLayout>
  );
};

export default ApproachPage;
