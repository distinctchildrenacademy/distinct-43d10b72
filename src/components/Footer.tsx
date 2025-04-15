
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Distinct Children Academy</h3>
            <p className="text-gray-300 mb-4">
              Nurturing bright minds and shaping brighter futures through innovative 
              education in a supportive learning environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-academy-purple transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-academy-purple transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-academy-purple transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-academy-purple transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-academy-purple transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-academy-purple transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-academy-purple transition-colors">Programs</a></li>
              <li><a href="#staff" className="text-gray-300 hover:text-academy-purple transition-colors">Our Staff</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-academy-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-academy-purple transition-colors">Early Childhood</a></li>
              <li><a href="#" className="text-gray-300 hover:text-academy-purple transition-colors">Primary School</a></li>
              <li><a href="#" className="text-gray-300 hover:text-academy-purple transition-colors">After-School Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-academy-purple transition-colors">Summer Camps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-academy-purple transition-colors">Special Education</a></li>
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
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-academy-purple w-full"
              />
              <button 
                className="bg-academy-purple hover:bg-academy-purple-dark px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Distinct Children Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
