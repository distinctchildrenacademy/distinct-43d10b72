import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const academicProgramsLinks = [
    {
      title: "Early Childhood Education",
      description: "Nurturing young minds ages 2-4",
      href: "#early-childhood"
    },
    {
      title: "Primary Education",
      description: "Comprehensive learning for ages 5-10",
      href: "#primary"
    },
    {
      title: "After-School Programs",
      description: "Extended learning opportunities",
      href: "#after-school"
    },
    {
      title: "Summer Programs",
      description: "Engaging summer activities",
      href: "#summer"
    },
    {
      title: "Gallery",
      description: "View our school activities and facilities",
      href: "/gallery"
    },
    {
      title: "News & Events",
      description: "Stay updated with school activities",
      href: "#news-events"
    }
  ];

  const aboutLinks = [
    {
      title: "School History",
      href: "/about/history",
      description: "Our journey since establishment"
    },
    {
      title: "Proprietor's Profile",
      href: "#proprietor",
      description: "Meet our founder and leader"
    },
    {
      title: "Leadership Team",
      href: "#leadership",
      description: "Our administrative team"
    },
    {
      title: "Vision & Mission",
      href: "#vision-mission",
      description: "Our guiding principles"
    },
    {
      title: "Safety & Child Protection",
      href: "#safety",
      description: "Our commitment to student safety"
    }
  ];

  return (
    <header className="w-full z-30 bg-white border-b border-gray-100 sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/e04b1eec-5a91-4e04-834c-1ee6726a9f53.png"
                alt="Distinct Children Academy"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {aboutLinks.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Academic Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {academicProgramsLinks.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 transition-colors">
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Enrollment Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full absolute z-20 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-0">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100">Home</Link>

            <div className="py-2 border-b border-gray-100">
              <Link to="/about" className="block text-gray-700 hover:text-blue-600 font-medium py-2">About Us</Link>
            </div>

            <div className="py-2 border-b border-gray-100">
              <Link to="/programs" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Academic Programs</Link>
            </div>

            <div className="py-2 border-b border-gray-100">
              <Link to="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Contact Us</Link>
            </div>

            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
