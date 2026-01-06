import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, BookOpen, Award, Mic } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import heroIllustration1 from "@/assets/institute-demo3.png";
import { useParallax, useMouseParallax } from "@/hooks/useParallax";

const stats = [
  { icon: Users, value: "500+", label: "Hours of Live Classes" },
  { icon: BookOpen, value: "50+", label: "Soft Skill Modules" },
  { icon: Mic, value: "200+", label: "Mock Interviews" },
  { icon: Award, value: "95%", label: "Placement Success" },
];

const Hero = () => {
  const parallaxOffset = useParallax({ speed: 0.3 });
  const mousePosition = useMouseParallax();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-hero overflow-hidden">
      {/* Parallax Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          style={{ transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"
          style={{ transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)` }}
        />
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            className="space-y-8"
            style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Unlock Your True Potential</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Master <span className="text-gradient">Soft Skills</span> &
              <br />
              Crack Interviews with
              <br />
              <span className="text-primary">Confidence</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              BlueBirdssolutions is your gateway to mastering communication, leadership, 
              and interpersonal skills. Join our expert-led live sessions and transform 
              your career trajectory.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" className="group">
                Get Started Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Illustration with Parallax */}
          <div 
            className="relative flex justify-center lg:justify-end"
            style={{ transform: `translateY(${parallaxOffset * -0.2}px)` }}
          >
            <div 
              className="relative lg:-mr-20 xl:-mr-32"
              style={{ 
                transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` 
              }}
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse-soft" />
              <img
                src={heroIllustration1}
                alt="Students learning soft skills together"
                className="relative z-10 w-[550px] lg:w-[700px] xl:w-[800px] animate-float rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with parallax */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ transform: `translateX(-50%) translateY(${parallaxOffset * -0.3}px)` }}
      >
        <span className="text-xs text-muted-foreground tracking-widest rotate-90 origin-center translate-x-8">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;