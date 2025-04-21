import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <img 
                src="/lovable-uploads/61a4741c-66f5-47e6-bb57-4820308482ef.png" 
                alt="Distinct Children Academy" 
                className="h-20 w-auto mb-4"
              />
              <p className="text-gray-300 text-sm">
                Nurturing Young Minds for a Brighter Future
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/distinctchildrenacademy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/distinctchildrenacademy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@DistinctChildrenAcademy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 font-display">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Phone Numbers:</p>
                  <p className="text-gray-300">+234 812 730 9741</p>
                  <p className="text-gray-300">+234 701 471 5448</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Email:</p>
                  <a href="mailto:distinctchildrenacademy@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                    distinctchildrenacademy@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Distinct Children Academy, Anua Obio Market Square, Opposite Godswill Akpabio International Stadium, Uyo, Akwa Ibom State, Nigeria
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admission-requirements" className="text-gray-300 hover:text-white transition-colors">
                  Admission Requirements
                </Link>
              </li>
              <li>
                <Link to="/enroll" className="text-gray-300 hover:text-white transition-colors">
                  Enroll Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-700 text-center">
          <p className="text-gray-400">© {currentYear} Distinct Children Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
