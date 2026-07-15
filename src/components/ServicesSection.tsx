import { Target, UserCheck, PenTool, Calendar, BookOpen, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Target,
    title: "Founder & CEO Brand Strategy",
    description: "We identify what you should be known for and create a clear personal brand strategy around who you are and what you stand for.",
    items: [
      "Your expertise & experience mapping",
      "Your unique leadership story",
      "Your business vision definition",
      "Targeted positioning strategy"
    ],
    goal: "Establish your core authority."
  },
  {
    icon: UserCheck,
    title: "LinkedIn Profile Transformation",
    description: "Your LinkedIn profile should tell people who you are, what you have built, and why they should know you. We build a profile that represents the leader you are today.",
    items: [
      "Sleek profile headline & About section",
      "Experience & achievements positioning",
      "Strategic layout & image alignment",
      "Credibility optimization"
    ],
    goal: "Turn profile visits into opportunities."
  },
  {
    icon: PenTool,
    title: "Personal Brand Content",
    description: "We turn your years of experience, stories, opinions, and business lessons into powerful social media content — all written in your voice.",
    items: [
      "Founder stories & business lessons",
      "Leadership insights & opinions",
      "Company updates & culture stories",
      "Vision, ideas, & industry predictions"
    ],
    goal: "Content written in your unique voice."
  },
  {
    icon: Calendar,
    title: "LinkedIn Content Management",
    description: "You focus on running your company. We manage your LinkedIn presence, ensuring your profile stays active, your ideas stay visible, and your brand grows.",
    items: [
      "Content planning & scheduling",
      "Consistent publishing schedule",
      "Professional profile activity",
      "Network visibility expansion"
    ],
    goal: "Consistent visibility without the effort."
  },
  {
    icon: BookOpen,
    title: "Founder Storytelling",
    description: "Every founder has a story. Why did you start? What challenges did you face? What mistakes did you make? We discover these stories and turn them into content people remember.",
    items: [
      "Origin story extraction",
      "Lessons from failures & challenges",
      "Core industry beliefs",
      "Memorable brand narratives"
    ],
    goal: "Connect deeply through stories."
  },
  {
    icon: Award,
    title: "Thought Leadership Positioning",
    description: "Don't just be another CEO. Become a recognized voice in your industry. We help you share your ideas, opinions, and predictions to position you as a trusted leader.",
    items: [
      "Industry-specific thought pieces",
      "Unique opinion pieces & predictions",
      "Expert commentary mapping",
      "Mindshare ownership strategy"
    ],
    goal: "Become the go-to industry voice."
  }
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4 text-center">
          What We Do
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">
          We Build the Brand <span className="text-gradient-gold">Behind Your Business</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
          We work with Founders, CEOs, Entrepreneurs, and Business Leaders to build a strong and credible personal brand. 
          We understand your business, your journey, your experience, ideas, and vision. 
          Then we turn them into a powerful personal brand that represents you and supports the growth of your business.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.08}>
            <div className="group h-full border border-border rounded-lg p-8 bg-background hover:border-gold transition-colors duration-300">
              <service.icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              {service.goal && (
                <p className="mt-5 text-sm font-semibold text-primary">
                  {service.goal}
                </p>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="text-center font-display text-lg md:text-xl font-medium text-foreground tracking-wide mt-12">
          You run the business. <span className="text-gradient-gold font-bold">We build your brand.</span>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicesSection;
