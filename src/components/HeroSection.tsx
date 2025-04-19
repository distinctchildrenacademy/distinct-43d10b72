
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative">
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
            <Link to="/programs">
              <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white">
                Enroll Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-transparent bg-transparent text-gray-700 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* About Our Academy Section */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">About Our Academy</h2>
          <p className="text-gray-700 text-center text-lg">
            We provide a nurturing environment where children discover their potential through innovative learning and creative exploration.
          </p>
        </div>

        {/* Academic Programs Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-100/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">Creche</h3>
                <p className="text-sm text-gray-600">Ages 1-2 years</p>
                <p className="text-gray-600">A nurturing environment for our youngest learners</p>
              </div>
            </div>
            
            <div className="bg-green-100/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">Nursery</h3>
                <p className="text-sm text-gray-600">Ages 3-5 years</p>
                <p className="text-gray-600">Building foundational skills through play and exploration</p>
              </div>
            </div>
            
            <div className="bg-yellow-100/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">Primary School</h3>
                <p className="text-sm text-gray-600">Ages 6-11 years</p>
                <p className="text-gray-600">Developing core academic and social skills</p>
              </div>
            </div>
            
            <div className="bg-orange-100/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">Secondary School</h3>
                <p className="text-sm text-gray-600">Ages 12-15 years</p>
                <p className="text-gray-600">Preparing students for academic and life success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
