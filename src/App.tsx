import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SoftSkills from "./pages/courses/SoftSkills";
import TechnicalSkills from "./pages/courses/TechnicalSkills";
import AptitudeTraining from "./pages/courses/AptitudeTraining";
import OtherCourses from "./pages/courses/OtherCourses";
import Auth from "./pages/Auth";
import ScrollToTop from "./components/ScrollToTop";

// Dashboard Imports
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import MyCourses from "./pages/dashboard/MyCourses";
import CourseLibrary from "./pages/dashboard/CourseLibrary";
import Assessments from "./pages/dashboard/Assessments";
import Discussions from "./pages/dashboard/Discussions";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses/soft-skills" element={<SoftSkills />} />
          <Route path="/courses/technical-skills" element={<TechnicalSkills />} />
          <Route path="/courses/aptitude" element={<AptitudeTraining />} />
          <Route path="/courses/others" element={<OtherCourses />} />
          <Route path="/auth" element={<Auth />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="courses" element={<MyCourses />} />
            <Route path="library" element={<CourseLibrary />} />
            <Route path="assessments" element={<Assessments />} />
            <Route path="discussions" element={<Discussions />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
