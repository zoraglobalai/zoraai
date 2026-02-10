import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const cases = [
  { tag: "Financial Services", title: "40% Reduction in Customer Wait Times", desc: "How a leading bank transformed their contact centre with AI-powered routing and sentiment analysis." },
  { tag: "Healthcare", title: "2x Faster Patient Query Resolution", desc: "Deploying conversational AI to handle patient inquiries while maintaining HIPAA compliance." },
  { tag: "Telecommunications", title: "£2.3M Annual Cost Savings", desc: "Automated ticket classification and intelligent escalation for a major telecom provider." },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-gradient-alt" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-navy">
            Case <span className="text-gradient-cyan">Studies</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real enterprises. See how our AI solutions drive measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover border border-border hover:border-primary/20 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">{c.tag}</span>
              <h3 className="text-xl font-bold text-navy mb-3 leading-snug">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
