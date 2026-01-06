import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SoftSkills from "./pages/courses/SoftSkills";
import TechnicalSkills from "./pages/courses/TechnicalSkills";
import AptitudeTraining from "./pages/courses/AptitudeTraining";
import OtherCourses from "./pages/courses/OtherCourses";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses/soft-skills" element={<SoftSkills />} />
          <Route path="/courses/technical-skills" element={<TechnicalSkills />} />
          <Route path="/courses/aptitude" element={<AptitudeTraining />} />
          <Route path="/courses/others" element={<OtherCourses />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
