import { motion } from "framer-motion";
import heroImage from "@/assets/hero-ai-visual.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-24 lg:pt-0">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left: Text */}
        <motion.div
          className="flex-1 py-16 lg:py-0 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-navy leading-[1.1] tracking-tight">
            When your AI is{" "}
            <span className="text-gradient-cyan">bespoke</span>,
            <br />
            your advantage is
            <br />
            permanent.
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Enterprise AI solutions tailored to your unique business challenges. Purpose-built, not one-size-fits-all.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-gradient-cta text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all glow-violet">
              Get Started
            </button>
            <button className="border border-border text-foreground px-8 py-3.5 rounded-full text-base font-semibold hover:bg-secondary transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan/10 rounded-full blur-[80px] animate-glow-pulse" />
            <img
              src={heroImage}
              alt="AI-powered enterprise solutions"
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
