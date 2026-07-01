import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section className="section-padding bg-card relative overflow-hidden">
    <div className="absolute inset-0 glow-gold opacity-30" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Your Public Image{" "}
          <span className="text-gradient-gold">Defines Your Future.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Let professionals manage and grow your brand. Book a confidential
          consultation today.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="#contact">Contact Us</a>
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
