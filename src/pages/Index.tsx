import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SkillGap from "@/components/SkillGap";
import Courses from "@/components/Courses";
import LMSSection from "@/components/LMSSection";
// import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import VisionMission from "@/components/VisionMission";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SkillGap />
        <Courses />
        <LMSSection />
        {/* <Trainers /> */}
        <Testimonials />
        <Pricing />
        <CTA />
        <VisionMission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;