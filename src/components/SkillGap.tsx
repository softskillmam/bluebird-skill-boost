import ParallaxSection from "./ParallaxSection";
import { useParallax } from "@/hooks/useParallax";

const SkillGap = () => {
  const parallaxOffset = useParallax({ speed: 0.1 });

  return (
    <section className="py-20 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Dotted pattern background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Parallax decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full opacity-60"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 right-20 w-3 h-3 bg-primary rounded-full opacity-40"
          style={{ transform: `translateY(${parallaxOffset * -0.2}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <ParallaxSection animation="reveal-left">
            <div className="relative">
              <img 
                src="/bluebirds.png" 
                alt="Bluebird students climbing towards success" 
                className="w-full h-auto max-w-lg mx-auto lg:mx-0 drop-shadow-2xl"
              />
            </div>
          </ParallaxSection>

          {/* Content Section */}
          <ParallaxSection animation="reveal-right" delay={200}>
            <div className="space-y-6">
              {/* Section badge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-muted-foreground/50" />
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                  <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                    Bridging The Skill Gap
                  </span>
                </div>
              </div>

              {/* Main heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Bridging The Skill Gap
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                At Bluebird, we bridge the gap between students' skills and companies' needs with 
                in-demand, hands-on courses. Our programs ensure students gain real-world 
                expertise and are job-ready for top companies.
              </p>

              {/* Optional stats or highlights */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Students Trained</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Placement Rate</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Partner Companies</p>
                </div>
              </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

export default SkillGap;
