import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { Link } from "react-router-dom";
import { Cog, Rocket, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    icon: Cog,
    title: "AI for Service",
    desc: "Elevate customer service with intelligent automation that resolves issues faster, reduces agent workload, and delivers consistent experiences across every touchpoint.",
    points: ["Automated query resolution", "Intelligent escalation paths", "Omnichannel consistency", "Real-time agent coaching"],
  },
  {
    icon: Rocket,
    title: "AI for Process",
    desc: "Streamline operations with AI that identifies bottlenecks, automates repetitive tasks, and continuously optimises workflows for peak efficiency.",
    points: ["Workflow automation", "Process mining & analysis", "Predictive maintenance", "Resource optimisation"],
  },
  {
    icon: TrendingUp,
    title: "AI for Growth",
    desc: "Unlock new revenue streams with AI-driven insights that identify opportunities, personalise engagement, and accelerate your go-to-market strategy.",
    points: ["Revenue intelligence", "Market opportunity mapping", "Personalised campaigns", "Customer lifetime value maximisation"],
  },
];

const SolutionsPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Solutions Designed for Impact"
        highlight="Impact"
        subtitle="Purpose-built AI solutions that address your most critical business challenges — from customer service excellence to operational efficiency and growth acceleration."
        breadcrumb="Solutions"
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 space-y-20">
          {solutions.map((s, i) => (
            <FadeUp key={s.title} delay={0.1}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <s.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">{s.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{s.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {s.points.map((p) => (
                      <div key={p} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm font-medium text-navy">{p}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-alt rounded-2xl p-12 lg:p-16 flex items-center justify-center border border-border shadow-card">
                    <s.icon className="w-32 h-32 text-accent/15" />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-lavender">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
              Let's find the right <span className="text-gradient-cyan">solution</span> for you
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Every enterprise is unique. Let's explore how our AI solutions can address your specific challenges.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity glow-violet">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageLayout>
  );
};

export default SolutionsPage;
