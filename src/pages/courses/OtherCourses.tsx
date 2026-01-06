import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, FileText, Heart, Globe, Presentation, ArrowRight, UserX, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  {
    icon: Target,
    title: "Goal Orientation Module",
    description: "Learn to set clear goals, create action plans, and stay focused on achieving your career objectives.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Group Discussion Module",
    description: "Master the art of group discussions with effective communication, active listening, and leadership skills.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FileText,
    title: "Resume Writing Module",
    description: "Craft compelling resumes that highlight your strengths and make you stand out to recruiters.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Heart,
    title: "Team Spirit Module",
    description: "Develop collaboration skills, understand team dynamics, and become an effective team player.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Culture Shock Module",
    description: "Prepare for diverse work environments, cross-cultural communication, and global workplace dynamics.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Presentation,
    title: "Personal Presentation Module",
    description: "Enhance your personal branding, presentation skills, and professional image for career success.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: UserX,
    title: "The Failed Employee",
    description: "Learn from common workplace mistakes and develop strategies to overcome setbacks and grow professionally.",
    color: "from-slate-500 to-gray-600"
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Master prioritization, productivity techniques, and effective scheduling for maximum efficiency.",
    color: "from-sky-500 to-blue-500"
  },
  {
    icon: Flame,
    title: "Anger Management",
    description: "Develop emotional control, conflict resolution skills, and maintain professional composure under pressure.",
    color: "from-rose-500 to-red-600"
  }
];

const OtherCourses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(197, 93%, 44%) 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Additional Modules
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Specialized <span className="text-gradient">Modules</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Essential professional development modules designed to complement your core skills and prepare you for every aspect of your career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Professional <span className="text-primary">Modules</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Comprehensive training modules to make you truly career-ready
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Gradient icon */}
                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${module.color} group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: '4px 4px 15px rgba(0,0,0,0.15)' }}
                >
                  <module.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">{module.title}</h3>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Explore All Modules?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get access to our complete training program and transform your career prospects
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

export default OtherCourses;
