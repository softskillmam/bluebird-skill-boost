import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Ear, BookOpen, Mail, User, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = [
  {
    icon: MessageCircle,
    title: "Speech",
    description: "Words per minute, intonation, voice skills, accent, fluency and more",
    details: ["Voice modulation", "Accent training", "Fluency development", "Presentation skills"]
  },
  {
    icon: Ear,
    title: "Listening",
    description: "Identify accents, write as you listen, encapsulate and speak back",
    details: ["Active listening", "Note-taking skills", "Comprehension", "Feedback techniques"]
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "Three rates of speech - sloth, bear, cheetah reading techniques",
    details: ["Speed reading", "Comprehension", "Analytical reading", "Critical thinking"]
  },
  {
    icon: Mail,
    title: "Email & Writing",
    description: "Professional email etiquette and effective written communication",
    details: ["Email formats", "Business writing", "Report writing", "Proposal drafting"]
  },
  {
    icon: User,
    title: "Body Language",
    description: "Eyes, hands, trunk posture, outfit, hairstyle and professional appearance",
    details: ["Eye contact", "Hand gestures", "Posture training", "Professional grooming"]
  },
  {
    icon: Heart,
    title: "Etiquette",
    description: "Professional and social etiquette for workplace success",
    details: ["Meeting etiquette", "Dining etiquette", "Phone etiquette", "Workplace conduct"]
  }
];

const SoftSkills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(197, 93%, 44%) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Course Module
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Soft Skills <span className="text-gradient">Training</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Created with the intent of getting the trainee equipped with the essential level of non-physical skills that they can keep to excel on the job and for a great life.
            </p>
            
            {/* iOS-style highlight card */}
            <div 
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, hsl(197, 93%, 48%), hsl(197, 93%, 40%))',
                boxShadow: '6px 6px 16px hsl(197, 93%, 25% / 0.3), -3px -3px 10px hsl(0, 0%, 100% / 0.2)',
              }}
            >
              <CheckCircle className="w-6 h-6 text-white" />
              <span className="text-lg font-semibold text-white">Your strong personality is built on soft skills</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What You'll <span className="text-primary">Learn</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Master these essential soft skills to transform your career and personal life
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                style={{
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* iOS-style icon */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(145deg, hsl(197, 93%, 50%), hsl(197, 93%, 40%))',
                    boxShadow: '4px 4px 10px hsl(197, 93%, 25% / 0.3)',
                  }}
                >
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{skill.title}</h3>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                
                {/* Detail chips */}
                <div className="flex flex-wrap gap-2">
                  {skill.details.map((detail, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Skills?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join our comprehensive soft skills program and unlock your full potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftSkills;
