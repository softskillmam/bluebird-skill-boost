import { Target, Rocket } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { useParallax } from "@/hooks/useParallax";

const VisionMission = () => {
  const parallaxOffset = useParallax({ speed: 0.1 });

  return (
    <section id="vision-mission" className="py-20 lg:py-32 bg-popover relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ParallaxSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vision & <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Driven by purpose, powered by passion — shaping the future of professional training.
          </p>
        </ParallaxSection>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <ParallaxSection animation="reveal-left" delay={100}>
            <div className="group p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                Our Vision
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To become a <span className="text-primary font-semibold">top-tier provider</span> of campus and on-the-job training in our core areas of expertise.
                </p>
                <p>
                  To continually challenge ourselves with <span className="text-primary font-semibold">higher goalposts</span> in our domain and strive towards achieving them.
                </p>
                <p>
                  To shine as an <span className="text-primary font-semibold">example to others</span> who want to join the industry with similar deliverables in mind.
                </p>
              </div>
            </div>
          </ParallaxSection>

          {/* Mission Card */}
          <ParallaxSection animation="reveal-right" delay={200}>
            <div className="group p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-500 h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent to-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                Our Mission
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                To <span className="text-accent font-semibold">empower students</span> with industry-relevant technical, aptitude, and professional skills through structured training, practical exposure, and continuous mentorship — enabling them to become <span className="text-accent font-semibold">competent, confident, and career-ready professionals</span>.
              </p>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
