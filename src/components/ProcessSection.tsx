import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Understand You", desc: "We start by understanding you, your business, your experience, and your goals." },
  { num: "02", title: "Discover Your Story", desc: "We speak with you regularly to discover your stories, ideas, opinions, and experiences." },
  { num: "03", title: "Build Your Brand Strategy", desc: "We define your positioning, content themes, audience, and personal brand direction." },
  { num: "04", title: "Create Your Content", desc: "Our team turns your thoughts and experience into high-quality content written in your voice." },
  { num: "05", title: "Build Your Visibility", desc: "We consistently build your presence across LinkedIn and relevant social platforms." },
  { num: "06", title: "Grow Your Business Brand", desc: "As your personal brand grows, more people discover, trust, and connect with the business behind you." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding bg-gradient-dark">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4 text-center">
          How It Works
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          We Learn. We Listen. <span className="text-gradient-gold">We Build Your Brand.</span>
        </h2>
      </AnimatedSection>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.1}>
            <div className="flex gap-6 items-start relative pb-10 last:pb-0">
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[23px] top-12 bottom-0 w-px bg-border" />
              )}
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 text-primary-foreground font-body text-sm font-bold">
                {step.num}
              </div>
              <div className="pt-2">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
