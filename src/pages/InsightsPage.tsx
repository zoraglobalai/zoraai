import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { ArrowRight } from "lucide-react";

const articles = [
  { category: "AI Strategy", title: "The Future of Bespoke AI in Enterprise", date: "Feb 2026", excerpt: "Why off-the-shelf AI solutions are reaching their limits and how purpose-built models are becoming the new competitive advantage for forward-thinking enterprises." },
  { category: "Technology", title: "Why Generic AI Falls Short for Regulated Industries", date: "Jan 2026", excerpt: "Regulated sectors like healthcare and finance need AI that understands compliance from the ground up. Here's why bespoke is the only viable path." },
  { category: "Leadership", title: "Building Trust Through Transparent AI Systems", date: "Jan 2026", excerpt: "How explainable AI and transparent decision-making processes are helping enterprises build trust with customers, regulators, and internal stakeholders." },
  { category: "Operations", title: "Measuring AI ROI: Beyond the Hype", date: "Dec 2025", excerpt: "A practical framework for measuring the true return on investment from enterprise AI initiatives, with benchmarks from real deployments." },
  { category: "Customer Experience", title: "The AI-Powered Contact Centre of 2026", date: "Dec 2025", excerpt: "What the modern contact centre looks like when AI handles routing, sentiment analysis, and resolution — and why agents are more important than ever." },
  { category: "Data Science", title: "Fine-Tuning vs. Prompt Engineering: When to Choose What", date: "Nov 2025", excerpt: "A technical guide for enterprise AI teams navigating the trade-offs between fine-tuned models and prompt-engineered solutions." },
  { category: "Industry", title: "AI in Healthcare: Lessons from Early Adopters", date: "Nov 2025", excerpt: "Key takeaways from healthcare organisations that have successfully deployed AI while maintaining patient trust and regulatory compliance." },
  { category: "Product", title: "Introducing Predictive SLA Management", date: "Oct 2025", excerpt: "How our latest AI Ticketing feature predicts SLA breaches before they happen, giving support teams the lead time to prevent escalations." },
  { category: "Culture", title: "Building an AI-Ready Organisation", date: "Oct 2025", excerpt: "The organisational changes, skills development, and cultural shifts needed to successfully adopt enterprise AI at scale." },
];

const InsightsPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Insights & Thought Leadership"
        highlight="Insights"
        subtitle="Expert perspectives on enterprise AI, customer experience, and the future of intelligent automation."
        breadcrumb="Insights"
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.05}>
                <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover border border-border hover:border-cyan/20 transition-all duration-300 flex flex-col h-full">
                  <div className="h-44 bg-gradient-lavender" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">{a.category}</span>
                      <span className="text-xs text-muted-foreground">{a.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3 leading-snug">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InsightsPage;
