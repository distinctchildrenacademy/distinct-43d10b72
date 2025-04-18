
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, School } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-orange-50 opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 font-display">
            Welcome to <span className="text-blue-600">Distinct Children</span> <span className="text-orange-500">Academy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            A beacon of academic excellence in Anua Obio, Uyo
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white">
              Enroll Now
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Learn More
            </Button>
          </div>
        </div>

        {/* Academic Programs Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 md:mt-20">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-800">Creche</h3>
              <p className="text-sm text-gray-600">Ages 1-2 years</p>
              <p className="text-gray-600">A nurturing environment for our youngest learners</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-800">Nursery</h3>
              <p className="text-sm text-gray-600">Ages 3-5 years</p>
              <p className="text-gray-600">Building foundational skills through play and exploration</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-800">Primary School</h3>
              <p className="text-sm text-gray-600">Ages 6-11 years</p>
              <p className="text-gray-600">Developing core academic and social skills</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-800">Secondary School</h3>
              <p className="text-sm text-gray-600">Ages 12-15 years</p>
              <p className="text-gray-600">Preparing students for academic and life success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
