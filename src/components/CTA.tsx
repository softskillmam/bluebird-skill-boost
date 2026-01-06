import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { useParallax, useMouseParallax } from "@/hooks/useParallax";

const CTA = () => {
  const parallaxOffset = useParallax({ speed: 0.15 });
  const mousePosition = useMouseParallax();

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Parallax background decorations */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2 + parallaxOffset * 0.3}px)` 
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5 + parallaxOffset * -0.2}px)` 
          }}
        />
        
        {/* Floating elements */}
        <div 
          className="absolute top-1/4 left-20 w-4 h-4 bg-primary/30 rounded-full"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-20 w-6 h-6 border-2 border-accent/30 rounded-full"
          style={{ transform: `translateY(${parallaxOffset * -0.5}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/40 rotate-45"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(45deg)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ParallaxSection className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Start Your Transformation Today</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Unlock Your
            <br />
            <span className="text-gradient">Full Potential?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join 10,000+ professionals who have transformed their careers with BlueBirdssolutions. 
            Start your journey to mastering soft skills and landing your dream job today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Get Started Free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Schedule a Demo
            </Button>
          </div>
        </ParallaxSection>

        {/* Stats with parallax */}
        <ParallaxSection 
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-border"
          delay={200}
        >
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gradient">10K+</p>
            <p className="text-muted-foreground mt-2">Students Trained</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gradient">95%</p>
            <p className="text-muted-foreground mt-2">Placement Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gradient">50+</p>
            <p className="text-muted-foreground mt-2">Partner Companies</p>
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default CTA;