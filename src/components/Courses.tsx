import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, Users } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { useParallax } from "@/hooks/useParallax";

const courses = [
  {
    title: "Soft Skills",
    description: "Master essential communication, body language, and professional etiquette.",
    duration: "8 weeks",
    students: "2.5k+",
    rating: 4.9,
    modules: 24,
    color: "from-blue-500 to-cyan-500",
    link: "/courses/soft-skills",
  },
  {
    title: "Technical Skillsets",
    description: "Learn programming fundamentals, full stack development, and AI basics.",
    duration: "12 weeks",
    students: "3.2k+",
    rating: 4.8,
    modules: 32,
    color: "from-purple-500 to-pink-500",
    link: "/courses/technical-skills",
  },
  {
    title: "Aptitude Training",
    description: "Strengthen analytical thinking and logical reasoning for placements.",
    duration: "6 weeks",
    students: "4.5k+",
    rating: 4.9,
    modules: 18,
    color: "from-green-500 to-teal-500",
    link: "/courses/aptitude",
  },
  {
    title: "Other Courses",
    description: "Goal orientation, GD skills, resume writing, and personal presentation.",
    duration: "4 weeks",
    students: "1.8k+",
    rating: 4.7,
    modules: 12,
    color: "from-orange-500 to-red-500",
    link: "/courses/others",
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
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        />
        <div 
          className="absolute bottom-1/4 -left-32 w-80 h-80 border border-accent/10 rounded-full"
          style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
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
            Choose from our comprehensive range of courses designed 
            by industry experts to accelerate your professional growth.
          </p>
        </ParallaxSection>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <ParallaxSection
              key={index}
              animation="reveal-scale"
              delay={index * 100}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                {/* Gradient header */}
                <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />
                
                <div className="p-5">
                  {/* Rating & Modules */}
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                    <span className="text-muted-foreground text-sm">• {course.modules} modules</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Duration & Students */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                    <Link to={course.link}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ParallaxSection>
          ))}
        </div>

        {/* View All CTA */}
        <ParallaxSection className="text-center mt-12" delay={500}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/courses/soft-skills">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default Courses;

