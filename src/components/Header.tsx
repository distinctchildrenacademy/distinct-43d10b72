
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full z-30 bg-white border-b border-gray-100 sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-academy-purple font-bold text-2xl md:text-3xl">Distinct Children</span>
              <span className="text-gray-700 font-medium text-xl md:text-2xl ml-2">Academy</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-academy-purple font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-academy-purple font-medium transition-colors">About</a>
            <a href="#programs" className="text-gray-700 hover:text-academy-purple font-medium transition-colors">Programs</a>
            <a href="#testimonials" className="text-gray-700 hover:text-academy-purple font-medium transition-colors">Testimonials</a>
            <a href="#staff" className="text-gray-700 hover:text-academy-purple font-medium transition-colors">Our Staff</a>
            <a href="#contact" className="text-gray-700 hover:text-academy-purple font-medium transition-colors">Contact</a>
          </nav>

          {/* Enrollment Button */}
          <div className="hidden md:block">
            <Button className="bg-academy-purple hover:bg-academy-purple-dark font-medium">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-academy-purple focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute z-20 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-academy-purple font-medium py-2 transition-colors">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-academy-purple font-medium py-2 transition-colors">About</a>
            <a href="#programs" className="block text-gray-700 hover:text-academy-purple font-medium py-2 transition-colors">Programs</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-academy-purple font-medium py-2 transition-colors">Testimonials</a>
            <a href="#staff" className="block text-gray-700 hover:text-academy-purple font-medium py-2 transition-colors">Our Staff</a>
            <a href="#contact" className="block text-gray-700 hover:text-academy-purple font-medium py-2 transition-colors">Contact</a>
            <Button className="w-full bg-academy-purple hover:bg-academy-purple-dark font-medium">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
