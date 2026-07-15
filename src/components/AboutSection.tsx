import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="section-padding bg-gradient-dark">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4">
          THE PERSON BEHIND THE BUSINESS MATTERS
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
          Great Companies Have{" "}
          <span className="text-gradient-gold">Recognisable Leaders</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Tesla has <strong className="text-foreground">Elon Musk</strong>.<br />
            Zoho has <strong className="text-foreground">Sridhar Vembu</strong>.<br /><br />
            Behind every great business is a founder, CEO, or leader with a story, experience, vision, and point of view. But many successful business leaders remain invisible.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Your company may have a website. Your company may have a LinkedIn page. Your company may be active on social media.<br /><br />
            <strong>But what about you?</strong>
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-12 border border-gold rounded-lg p-8 glow-gold text-center">
          <p className="font-display text-xl md:text-2xl text-foreground">
            People want to know the person behind the business. <span className="text-gradient-gold font-bold">We help you become that person.</span>
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
