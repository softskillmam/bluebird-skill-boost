import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { useParallax } from "@/hooks/useParallax";

const courses = [
  {
    title: "Communication Mastery",
    description: "Master verbal and non-verbal communication for professional success.",
    duration: "8 weeks",
    students: "2.5k+",
    rating: 4.9,
    modules: 24,
    color: "from-primary to-accent",
  },
  {
    title: "Interview Confidence",
    description: "Build unshakeable confidence to ace any job interview.",
    duration: "6 weeks",
    students: "3.2k+",
    rating: 4.8,
    modules: 18,
    color: "from-accent to-secondary",
  },
  {
    title: "Emotional Intelligence",
    description: "Develop self-awareness, empathy, and social skills for leadership.",
    duration: "10 weeks",
    students: "1.8k+",
    rating: 4.9,
    modules: 30,
    color: "from-secondary to-primary",
  },
  {
    title: "Leadership & Teamwork",
    description: "Learn to lead teams effectively and collaborate with excellence.",
    duration: "8 weeks",
    students: "2.1k+",
    rating: 4.7,
    modules: 22,
    color: "from-primary to-secondary",
  },
  {
    title: "Presentation Skills",
    description: "Deliver impactful presentations that captivate any audience.",
    duration: "4 weeks",
    students: "4.5k+",
    rating: 4.9,
    modules: 12,
    color: "from-accent to-primary",
  },
];

const Courses = () => {
  const parallaxOffset = useParallax({ speed: 0.1 });

  return (
    <section id="courses" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -right-32 w-64 h-64 border border-primary/10 rounded-full"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute bottom-1/4 -left-32 w-80 h-80 border border-accent/10 rounded-full"
          style={{ transform: `translateY(${parallaxOffset * -0.3}px) rotate(${parallaxOffset * -0.1}deg)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ParallaxSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Career with
            <br />
            <span className="text-gradient">Expert-Led Training</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our comprehensive range of soft skills courses designed 
            by industry experts to accelerate your professional growth.
          </p>
        </ParallaxSection>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <ParallaxSection
              key={index}
              animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}
              delay={index * 100}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift h-full">
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                    <span className="text-muted-foreground text-sm">• {course.modules} modules</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </ParallaxSection>
          ))}
        </div>

        {/* View All CTA */}
        <ParallaxSection className="text-center mt-12" delay={500}>
          <Button variant="hero" size="lg">
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Button>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default Courses;