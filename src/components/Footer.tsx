import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/61a4741c-66f5-47e6-bb57-4820308482ef.png" 
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
            <h3 className="text-xl font-bold mb-4 font-display">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Distinct Children Academy, Anua Obio Market Square, Opposite Godswill Akpabio International Stadium, Uyo, Akwa Ibom State, Nigeria</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">+234 812 730 9741, +234 701 471 5448</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">distinctchildrenacademy@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-orange-400 transition-colors">Programs</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact Us</a></li>
              <li><a href="#admission-requirements" className="text-gray-300 hover:text-orange-400 transition-colors">Admissions</a></li>
            </ul>
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
