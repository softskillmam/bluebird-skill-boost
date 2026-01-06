import { Video, Users, Mic2, Brain, Target, Clock } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { useParallax } from "@/hooks/useParallax";

const features = [
  {
    icon: Video,
    title: "Live Soft Skill Sessions",
    description: "Interactive live classes with industry experts covering communication, body language, and professional etiquette.",
  },
  {
    icon: Users,
    title: "Roleplay Practice",
    description: "Real-world scenario simulations to build confidence in workplace conversations and negotiations.",
  },
  {
    icon: Mic2,
    title: "Mock Interviews",
    description: "Face-to-face interview simulations with personalized feedback to ace any job interview.",
  },
  {
    icon: Brain,
    title: "Personality Assessment",
    description: "Comprehensive assessments to identify strengths and areas for improvement in your soft skills.",
  },
  {
    icon: Target,
    title: "Personalized Learning Path",
    description: "Customized curriculum based on your career goals and current skill level.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn at your own pace with recorded sessions and 24/7 access to course materials.",
  },
];

const Features = () => {
  const parallaxOffset = useParallax({ speed: 0.15 });

  return (
    <section id="features" className="py-20 lg:py-32 bg-popover relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ParallaxSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="text-gradient">Master Soft Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive platform offers everything from live training to personalized assessments, 
            ensuring you're fully prepared for your dream career.
          </p>
        </ParallaxSection>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ParallaxSection
              key={index}
              animation="reveal-scale"
              delay={index * 100}
            >
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;