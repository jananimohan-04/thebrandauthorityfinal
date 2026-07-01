import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-background/70" />

    <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
      >
        Public Figure Management
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
      >
        Build Influence.{" "}
        <span className="text-gradient-gold">Shape Public Image.</span>{" "}
        Dominate Social Media.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
      >
        We help Actors, Actresses, Politicians, and Public Figures build powerful
        personal brands through strategic social media management, PR, and
        digital promotion.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="hero" size="lg" asChild>
          <a href="#contact">Book a Confidential Consultation</a>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <a href="#services">Build Your Personal Brand Today</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
