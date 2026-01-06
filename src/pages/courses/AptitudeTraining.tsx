import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, Brain, BookOpen, Target, Trophy, CheckCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = [
  {
    icon: Calculator,
    title: "Quantitative Aptitude",
    description: "Arithmetic, algebra, percentages, ratios, time & work, and data interpretation",
    topics: ["Arithmetic", "Algebra", "Percentages", "Ratios", "Time & Work", "Data Interpretation"]
  },
  {
    icon: Brain,
    title: "Logical Reasoning",
    description: "Analytical reasoning, puzzles, patterns, and decision-making skills",
    topics: ["Analytical Reasoning", "Puzzles", "Patterns", "Decision Making"]
  },
  {
    icon: BookOpen,
    title: "Verbal Ability",
    description: "Grammar, vocabulary, reading comprehension, and verbal reasoning",
    topics: ["Grammar", "Vocabulary", "Reading Comprehension", "Verbal Reasoning"]
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Techniques",
    description: "Shortcut methods, accuracy improvement, and time management",
    topics: ["Shortcut Methods", "Accuracy Tips", "Time Management"]
  },
  {
    icon: Trophy,
    title: "Placement-Oriented Practice",
    description: "Company-specific patterns, mock tests, and assessment strategies",
    topics: ["Mock Tests", "Company Patterns", "Assessment Strategies"]
  }
];

const AptitudeTraining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 3px 3px, hsl(197, 93%, 44%) 1.5px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
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
              Aptitude <span className="text-gradient">Training</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Mental faculties required for the job get honed in this module for fast calculation and response needed to complete tasks in a timely fashion.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bluebirds Solutions provides focused aptitude training to strengthen students' analytical thinking, quantitative ability, and logical reasoning—key competencies assessed in campus placements and competitive examinations.
            </p>
            
            <div 
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, hsl(197, 93%, 48%), hsl(197, 93%, 40%))',
                boxShadow: '6px 6px 16px hsl(197, 93%, 25% / 0.3)',
              }}
            >
              <Target className="w-6 h-6 text-white" />
              <span className="text-lg font-semibold text-white">Ace your placement tests with confidence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Key Areas <span className="text-primary">Covered</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Master these aptitude skills to excel in placement tests and assessments
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
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
                
                <div className="flex flex-wrap gap-2">
                  {skill.topics.map((topic, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Training Focus
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: CheckCircle, text: "Concept Clarity" },
                { icon: Target, text: "Regular Practice" },
                { icon: Trophy, text: "Exam-Oriented Prep" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-background border border-border">
                  <item.icon className="w-6 h-6 text-primary" />
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mb-8">
              Enabling students to perform confidently in placement tests and aptitude-based assessments.
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AptitudeTraining;
