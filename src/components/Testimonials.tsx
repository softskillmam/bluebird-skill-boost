import { Star, Quote } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { useParallax } from "@/hooks/useParallax";

const testimonials = [
  {
    name: "Priya Lakshmi",
    role: "Software Engineer at TCS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "BlueBirdssolutions completely transformed my interview skills. I went from being nervous to confident, and landed my dream job at TCS! The mock interviews were incredibly helpful.",
  },
  {
    name: "Karthik Raman",
    role: "Associate Consultant at Wipro",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The communication mastery course helped me articulate my ideas clearly. I've seen a remarkable improvement in my presentations and team collaborations. Highly recommend!",
  },
  {
    name: "Lakshmi Narayana",
    role: "Business Analyst at HCL Technologies",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The emotional intelligence course was a game-changer for me. I've become more self-aware and empathetic, which has greatly improved my relationships at work.",
  },
  {
    name: "Venkatesh Kumar",
    role: "Team Lead at Infosys",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Leadership training at BlueBirdssolutions taught me how to motivate my team effectively. The practical exercises and role-plays were extremely valuable.",
  },
  {
    name: "Divya Bharathi",
    role: "Senior Associate at Cognizant",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The presentation skills course helped me deliver impactful pitches. I now feel confident speaking to large audiences and have received great feedback from clients.",
  },
  {
    name: "Srinivasan Reddy",
    role: "Project Lead at Tech Mahindra",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The personalized feedback from trainers was invaluable. They identified my weak areas and helped me work on them systematically. Best investment in my career!",
  },
];

const Testimonials = () => {
  const parallaxOffset = useParallax({ speed: 0.1 });

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        />
        <div 
          className="absolute bottom-1/3 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
        />
        
        {/* Floating quote marks */}
        <Quote 
          className="absolute top-20 left-1/4 w-20 h-20 text-primary/5"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(-15deg)` }}
        />
        <Quote 
          className="absolute bottom-20 right-1/4 w-16 h-16 text-accent/5"
          style={{ transform: `translateY(${parallaxOffset * -0.5}px) rotate(15deg)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ParallaxSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Students
            <br />
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of successful professionals who transformed their careers with our training.
          </p>
        </ParallaxSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ParallaxSection
              key={index}
              animation="reveal"
              delay={index * 100}
            >
              <div className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift relative h-full">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 transition-transform duration-300 group-hover:scale-110" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/50"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;