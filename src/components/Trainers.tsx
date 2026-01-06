import { Linkedin, Twitter } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { useParallax } from "@/hooks/useParallax";

const trainers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Communication Expert",
    expertise: "15+ years in Corporate Training",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Rajesh Kumar",
    role: "Leadership Coach",
    expertise: "Ex-Google, 12+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Chen",
    role: "Interview Specialist",
    expertise: "HR Director, Fortune 500",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michael Brooks",
    role: "Emotional Intelligence Coach",
    expertise: "Certified EQ Practitioner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
];

const Trainers = () => {
  const parallaxOffset = useParallax({ speed: 0.12 });

  return (
    <section className="py-20 lg:py-32 bg-popover relative overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateX(-50%) translateY(${parallaxOffset * 0.3}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ParallaxSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Expert Trainers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Learn From the
            <br />
            <span className="text-gradient">Best in Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our trainers bring decades of real-world experience from top companies, 
            ready to share their knowledge and help you succeed.
          </p>
        </ParallaxSection>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trainers.map((trainer, index) => (
            <ParallaxSection
              key={index}
              animation="reveal-scale"
              delay={index * 150}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{trainer.name}</h3>
                  <p className="text-primary font-medium mb-2">{trainer.role}</p>
                  <p className="text-sm text-muted-foreground">{trainer.expertise}</p>
                </div>
              </div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;