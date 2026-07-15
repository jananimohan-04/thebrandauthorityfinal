import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section className="section-padding bg-card relative overflow-hidden">
    <div className="absolute inset-0 glow-gold opacity-30" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4">
          YOUR BUSINESS HAS A BRAND.
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 uppercase">
          Now It's Time to <span className="text-gradient-gold">Build Yours.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          You spent years building your business. Let us help the world discover the person behind it.
        </p>
        <div className="mb-6">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Build My Personal Brand</a>
          </Button>
        </div>
        <p className="text-sm font-semibold tracking-[0.15em] text-muted-foreground uppercase mt-4">
          The Brand Behind the Business.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
