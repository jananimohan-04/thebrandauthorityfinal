import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="section-padding bg-gradient-dark">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4">
          About Us
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
          Your Digital Team,{" "}
          <span className="text-gradient-gold">24/7</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            <strong className="text-foreground">The Brand Authority</strong> is
            a specialized Personal Brand Management and Digital PR agency
            dedicated to managing and growing the public image of Actors,
            Actresses, Politicians, and High-Profile Individuals.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            In today's digital world, your public image is your greatest asset.
            Every post, every appearance, and every interaction shapes how people
            perceive you. We ensure your digital presence reflects your true
            strength, influence, and leadership.
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-12 border border-gold rounded-lg p-8 glow-gold text-center">
          <p className="font-display text-xl md:text-2xl text-foreground">
            We act as your digital team — managing, protecting, and growing your
            brand <span className="text-gradient-gold font-bold">24/7</span>.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
