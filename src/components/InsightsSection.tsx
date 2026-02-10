import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const articles = [
  { category: "AI Strategy", title: "The Future of Bespoke AI in Enterprise", date: "Feb 2026" },
  { category: "Technology", title: "Why Generic AI Falls Short for Regulated Industries", date: "Jan 2026" },
  { category: "Case Study", title: "Building Trust Through Transparent AI Systems", date: "Jan 2026" },
];

const InsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-navy">
            Latest <span className="text-gradient-cyan">Insights</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Thought leadership and expert perspectives on enterprise AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover border border-border hover:border-cyan/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-48 bg-gradient-lavender" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{a.category}</span>
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-4 leading-snug">{a.title}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
