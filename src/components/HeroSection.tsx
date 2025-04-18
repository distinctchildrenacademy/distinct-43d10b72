
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-orange-50 opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Welcome to <span className="text-blue-600">Distinct Children</span> <span className="text-orange-500">Academy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              A beacon of academic excellence in Anua Obio, Uyo. We provide a nurturing 
              environment where children discover their potential through innovative learning 
              and creative exploration.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white">
                Enroll Now
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1922&auto=format&fit=crop" 
              alt="Happy students learning" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20">
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <GraduationCap className="text-blue-600 h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">15+ Years</h3>
              <p className="text-gray-600">Educational Excellence</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <Users className="text-orange-500 h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-3 rounded-full mr-4">
              <BookOpen className="text-blue-600 h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">20+</h3>
              <p className="text-gray-600">Expert Teachers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
