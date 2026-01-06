import { Link } from "react-router-dom";
import { ArrowLeft, Database, Palette, Layers, Cpu, CheckCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJava } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type SkillItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

const skills: SkillItem[] = [
  {
    icon: <FontAwesomeIcon icon={faC} className="w-7 h-7 text-white" />,
    title: "C & C++",
    description: "Programming fundamentals, logical reasoning, and problem-solving",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FontAwesomeIcon icon={faJava} className="w-7 h-7 text-white" />,
    title: "Java",
    description: "Object-oriented programming and core application development",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <FontAwesomeIcon icon={faPython} className="w-7 h-7 text-white" />,
    title: "Python",
    description: "Scripting, automation, and foundations for AI and data-driven technologies",
    color: "from-yellow-500 to-green-500"
  },
  {
    icon: <Database className="w-7 h-7 text-white" />,
    title: "Data Structures & Algorithms",
    description: "Efficient problem-solving and coding assessment readiness",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Layers className="w-7 h-7 text-white" />,
    title: "Full Stack Development",
    description: "Frontend, backend, databases, APIs, and real-time projects",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: <Palette className="w-7 h-7 text-white" />,
    title: "UI/UX Development",
    description: "User-centric design principles, wireframing, and practical projects",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: <Cpu className="w-7 h-7 text-white" />,
    title: "Introduction to AI",
    description: "Basics of AI concepts and real-world applications",
    color: "from-green-500 to-teal-500"
  }
];

const highlights = [
  "Hands-on learning approach",
  "Project-based implementation",
  "Industry-relevant curriculum",
  "Placement readiness focus",
  "Expert mentorship"
];

const TechnicalSkills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, hsl(197, 93%, 44%) 1px, transparent 1px),
                             linear-gradient(hsl(197, 93%, 44%) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
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
              Technical <span className="text-gradient">Skillsets</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Bluebirds Solutions delivers industry-aligned technical skill training to equip students with strong programming fundamentals and practical exposure required for placements and higher studies.
            </p>
            
            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, i) => (
                <div 
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
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
            Master these technical skills to become industry-ready
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Gradient icon */}
                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: '4px 4px 15px rgba(0,0,0,0.15)' }}
                >
                  {skill.icon}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Training Emphasis
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The training emphasizes <strong className="text-foreground">hands-on learning</strong>, 
              <strong className="text-foreground"> project-based implementation</strong>, and 
              <strong className="text-foreground"> industry relevance</strong>, supporting employability, 
              placement readiness, and skill enhancement.
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

export default TechnicalSkills;
