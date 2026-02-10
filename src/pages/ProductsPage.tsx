import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { Link } from "react-router-dom";
import { Headphones, Ticket, TrendingUp, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Headphones,
    title: "AI Contact Centre",
    desc: "Transform your contact centre with intelligent routing, real-time sentiment analysis, and AI-powered agent assistance that reduces wait times and improves first-call resolution.",
    features: ["Intelligent call routing & prioritisation", "Real-time sentiment & emotion detection", "Automated post-call summarisation", "Agent performance analytics", "Seamless CRM integration"],
  },
  {
    icon: Ticket,
    title: "AI Ticketing System",
    desc: "Eliminate ticket backlogs with smart classification, automated triage, and intelligent escalation workflows that ensure every issue reaches the right team instantly.",
    features: ["Automatic ticket classification & tagging", "Priority-based intelligent routing", "SLA monitoring & breach prediction", "Knowledge base auto-suggestions", "Multi-channel ticket aggregation"],
  },
  {
    icon: TrendingUp,
    title: "Customer Value Management",
    desc: "Maximise lifetime value with predictive churn models, dynamic segmentation, and personalised engagement strategies powered by your proprietary data.",
    features: ["Predictive churn modelling", "Dynamic customer segmentation", "Next-best-action recommendations", "Revenue impact forecasting", "Cross-sell & upsell intelligence"],
  },
  {
    icon: MessageSquare,
    title: "Conversational AI Agents",
    desc: "Deploy human-like virtual agents that understand context, handle complex multi-turn conversations, and resolve queries autonomously across every channel.",
    features: ["Natural language understanding", "Multi-turn conversation handling", "Context-aware responses", "Seamless human handoff", "Continuous learning from interactions"],
  },
];

const ProductsPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Products Built for Enterprise Scale"
        highlight="Enterprise"
        subtitle="A comprehensive suite of AI-powered products designed to transform how enterprises engage with customers, manage operations, and drive growth."
        breadcrumb="Products"
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 space-y-24">
          {products.map((p, i) => (
            <FadeUp key={p.title} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <p.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">{p.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{p.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm font-medium text-navy">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity glow-violet"
                  >
                    Talk to Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-lavender rounded-2xl p-12 lg:p-16 flex items-center justify-center border border-border shadow-card">
                    <p.icon className="w-32 h-32 text-primary/20" />
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
              Ready to <span className="text-gradient-cyan">transform</span> your operations?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Discover how our products can deliver measurable impact for your enterprise.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity glow-violet"
            >
              Let's Talk <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductsPage;
