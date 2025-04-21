
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
            A beacon of academic excellence in Anua Obio, Uyo, Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/enroll">
              <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white">
                Enroll Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

