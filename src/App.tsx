import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Overview from "./pages/Overview";
import Programs from "./pages/Programs";
import VisionAndMission from "./pages/VisionAndMission";
import SchoolHistory from "./pages/SchoolHistory";
import ProprietorProfile from "./pages/ProprietorProfile";
import LeadershipTeam from "./pages/LeadershipTeam";
import SchoolAnthemPledge from "./pages/SchoolAnthemPledge";
import SafetyChildProtection from "./pages/SafetyChildProtection";
import AdmissionRequirements from "./pages/AdmissionRequirements";
import ExaminationRules from "./pages/ExaminationRules";
import SchoolRules from "./pages/SchoolRules";
import InstructionalAids from "./pages/InstructionalAids";
import Library from "./pages/Library";
import Laboratory from "./pages/Laboratory";
import PowerSupply from "./pages/PowerSupply";
import EnrollmentForm from "./pages/EnrollmentForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/vision-and-mission" element={<VisionAndMission />} />
          <Route path="/school-history" element={<SchoolHistory />} />
          <Route path="/proprietor-profile" element={<ProprietorProfile />} />
          <Route path="/leadership-team" element={<LeadershipTeam />} />
          <Route path="/school-anthem-pledge" element={<SchoolAnthemPledge />} />
          <Route path="/safety-child-protection" element={<SafetyChildProtection />} />
          <Route path="/admission-requirements" element={<AdmissionRequirements />} />
          <Route path="/examination-rules" element={<ExaminationRules />} />
          <Route path="/school-rules" element={<SchoolRules />} />
          <Route path="/instructional-aids" element={<InstructionalAids />} />
          <Route path="/library" element={<Library />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/power-supply" element={<PowerSupply />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
