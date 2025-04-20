import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import AcademicPrograms from "@/components/AcademicPrograms";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionStatement />
        <AcademicPrograms />
        <ProgramsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

