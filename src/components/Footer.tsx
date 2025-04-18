
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/f08a3488-6e8a-4994-86c5-ff897d2d2c60.png" 
                alt="Distinct Children Academy" 
                className="h-16 w-auto bg-white p-1 rounded-md"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Nurturing Young Minds for a Brighter Future
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Distinct Children Academy, Anua Obio Market Square, Opposite Godswill Akpabio International Stadium, Uyo, Akwa Ibom State, Nigeria</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">+234 812 730 9741, +234 701 471 5448, +234 905 908 4076</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">distinctchildrenacademy@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-orange-400 transition-colors">Programs</a></li>
              <li><a href="#admission-requirements" className="text-gray-300 hover:text-orange-400 transition-colors">Admissions</a></li>
              <li><a href="#student-life" className="text-gray-300 hover:text-orange-400 transition-colors">Student Life</a></li>
              <li><a href="#news-events" className="text-gray-300 hover:text-orange-400 transition-colors">News & Events</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-orange-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on events, programs, and educational insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-blue-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              />
              <button 
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-700 text-center text-gray-400">
          <p>© {currentYear} Distinct Children Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
