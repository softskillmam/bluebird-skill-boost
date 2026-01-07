import { Monitor, BookOpen, Award, BarChart3, Users, Clock } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Monitor,
    title: "Interactive Learning",
    description: "Engaging video lessons, quizzes, and hands-on exercises"
  },
  {
    icon: BookOpen,
    title: "Course Library",
    description: "Access to 100+ curated courses anytime, anywhere"
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Earn industry-recognized certificates upon completion"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics"
  },
  {
    icon: Users,
    title: "Live Sessions",
    description: "Interactive live classes with industry experts"
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Flexible schedules that fit your lifestyle"
  }
];

const LMSSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(197, 93%, 44%) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ParallaxSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Platform
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powerful <span className="text-gradient">LMS Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We also provide a comprehensive Learning Management System (LMS) to enhance your training experience 
            with interactive features and seamless learning.
          </p>
        </ParallaxSection>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <ParallaxSection key={index} animation="reveal-scale" delay={index * 100}>
              <div className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(145deg, hsl(197, 93%, 50%), hsl(197, 93%, 40%))',
                    boxShadow: '3px 3px 10px hsl(197, 93%, 25% / 0.2)',
                  }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </ParallaxSection>
          ))}
        </div>

        {/* CTA */}
        <ParallaxSection className="text-center">
          <div 
            className="inline-block p-8 rounded-3xl"
            style={{
              background: 'linear-gradient(145deg, hsl(197, 93%, 48%), hsl(197, 93%, 38%))',
              boxShadow: '8px 8px 24px hsl(197, 93%, 25% / 0.3)',
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Experience Our LMS?</h3>
            <p className="text-white/80 mb-6">Get a personalized demo of our learning platform</p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="#contact">Request Demo</a>
            </Button>
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default LMSSection;
