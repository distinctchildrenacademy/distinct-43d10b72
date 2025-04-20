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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
