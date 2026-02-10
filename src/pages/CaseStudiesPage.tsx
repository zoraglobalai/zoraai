import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    tag: "Financial Services",
    title: "40% Reduction in Customer Wait Times",
    challenge: "A leading European bank was struggling with increasing call volumes, long wait times, and declining customer satisfaction scores across their contact centre operations.",
    solution: "We deployed our AI Contact Centre solution with intelligent routing, real-time sentiment analysis, and automated post-call summarisation, integrated seamlessly with their existing CRM.",
    outcome: "Wait times dropped 40%, first-call resolution improved by 28%, and agent satisfaction scores increased as repetitive queries were handled autonomously.",
  },
  {
    tag: "Healthcare",
    title: "2x Faster Patient Query Resolution",
    challenge: "A national healthcare provider needed to handle surging patient enquiries without proportionally increasing staff, while maintaining strict compliance standards.",
    solution: "We built a HIPAA-compliant conversational AI agent that handles routine patient queries — appointment scheduling, prescription refills, and test results — with seamless handoff to human agents for complex cases.",
    outcome: "Patient query resolution time was cut in half, staff were freed to focus on clinical care, and patient satisfaction increased by 35%.",
  },
  {
    tag: "Telecommunications",
    title: "£2.3M Annual Cost Savings",
    challenge: "A major telecom provider was spending millions on manual ticket classification and routing, with SLA breaches causing customer churn.",
    solution: "Our AI Ticketing System automatically classifies, prioritises, and routes tickets using NLP models trained on 3 years of historical data, with predictive SLA breach alerts.",
    outcome: "Annual savings of £2.3M, SLA compliance improved from 72% to 96%, and average resolution time decreased by 45%.",
  },
  {
    tag: "Retail",
    title: "18% Increase in Customer Lifetime Value",
    challenge: "An omnichannel retailer needed to reduce churn and increase repeat purchases but lacked the data infrastructure to personalise at scale.",
    solution: "We implemented our Customer Value Management platform with predictive churn models, dynamic segmentation, and next-best-action recommendations across all touchpoints.",
    outcome: "Customer lifetime value increased 18%, churn was reduced by 22%, and campaign ROI improved 3x through AI-driven personalisation.",
  },
  {
    tag: "SaaS",
    title: "60% Reduction in Support Ticket Volume",
    challenge: "A fast-growing B2B SaaS company couldn't scale their support team fast enough to keep up with their expanding user base, leading to longer response times.",
    solution: "We deployed conversational AI agents trained on their product documentation, combined with intelligent ticket triage that surfaces relevant knowledge base articles before a ticket is created.",
    outcome: "Support ticket volume dropped 60%, average response time improved from 4 hours to under 15 minutes, and CSAT scores rose to 4.7/5.",
  },
];

const CaseStudiesPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Real Results from Real Enterprises"
        highlight="Real Results"
        subtitle="See how our bespoke AI solutions have delivered measurable, lasting impact for enterprises across industries."
        breadcrumb="Case Studies"
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 space-y-12">
          {caseStudies.map((cs, i) => (
            <FadeUp key={cs.title} delay={0.05}>
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{cs.tag}</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-navy mt-3 mb-8">{cs.title}</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Challenge</h4>
                    <p className="text-sm text-navy leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Solution</h4>
                    <p className="text-sm text-navy leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Outcome</h4>
                    <p className="text-sm text-navy leading-relaxed">{cs.outcome}</p>
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
              Your success story <span className="text-gradient-cyan">starts here</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's discuss how we can achieve similar results for your enterprise.
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

export default CaseStudiesPage;
