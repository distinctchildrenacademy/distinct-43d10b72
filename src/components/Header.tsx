import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    about: false,
    academic: false,
    admissions: false,
    student: false
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu: 'about' | 'academic' | 'admissions' | 'student') => {
    setSubmenuOpen({
      ...submenuOpen,
      [menu]: !submenuOpen[menu]
    });
  };

  // Navigation menu data
  const aboutUsLinks = [
    {
      title: "Overview",
      description: "Learn about our institution and its values",
      href: "#about-overview",
    },
    {
      title: "School History",
      description: "Discover our journey since founding in 2023",
      href: "/school-history",
    },
    {
      title: "Proprietor's Profile",
      description: "Meet Prof. Isidore Ekpe, our founder",
      href: "/proprietor-profile",
    },
    {
      title: "Leadership Team",
      description: "Our dedicated administrative and teaching staff",
      href: "/leadership-team",
    },
    {
      title: "Vision & Mission",
      description: "Our guiding principles and aspirations",
      href: "/vision-and-mission",
    },
    {
      title: "School Anthem & Pledge",
      description: "Symbols of our unity and commitment",
      href: "/school-anthem-pledge",
    },
    {
      title: "Safety & Child Protection",
      description: "Our measures to ensure student wellbeing",
      href: "/safety-child-protection",
    },
  ];

  const academicProgramsLinks = [
    {
      title: "School Rules & Regulations",
      description: "Guidelines for student conduct and behavior",
      href: "/school-rules",
    },
    {
      title: "Instructional Aids",
      description: "Tools and resources for effective learning",
      href: "/instructional-aids",
    },
    {
      title: "Library",
      description: "Our resource center for learning and research",
      href: "/library",
    },
    {
      title: "Laboratory",
      description: "Facilities for hands-on scientific exploration",
      href: "/laboratory",
    },
    {
      title: "Power Supply Infrastructure",
      description: "Ensuring uninterrupted learning",
      href: "/power-supply",
    },
    {
      title: "Gallery",
      description: "View our collection of student photos and activities",
      href: "/gallery",
    },
  ];

  const admissionsLinks = [
    {
      title: "Admission Requirements",
      description: "Learn more about our Admission requirements and How to Apply",
      href: "/admission-requirements",
    },
    {
      title: "Examination Rules",
      description: "Guidelines and regulations for examinations",
      href: "/examination-rules",
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
                src="/lovable-uploads/32dbe30c-5fea-4791-ad85-7d5eb50ae1c2.png"
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
                  <NavigationMenuLink
                    href="/"
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 transition-colors"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {aboutUsLinks.map((item) => (
                        <li key={item.title} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {item.description}
                              </p>
                            </a>
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
                        <li key={item.title} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Admissions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {admissionsLinks.map((item) => (
                        <li key={item.title} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="row-span-1">
                          <NavigationMenuLink asChild>
                          <Link
                            to="/enroll"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                            <div className="text-sm font-medium leading-none">Enroll Now</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                              Start your enrollment process today
                              </p>
                          </Link>
                          </NavigationMenuLink>
                        </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/contact"
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 transition-colors"
                  >
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Enrollment Button */}
          <div className="hidden lg:block">
            <Link to="/enroll">
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-medium">
              Enroll Now
            </Button>
            </Link>
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
            <a href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100">Home</a>

            <div className="py-2 border-b border-gray-100">
              <div className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-blue-600 font-medium" onClick={() => toggleSubmenu('about')}>
                <span>About Us</span>
                <ChevronDown size={16} className={`transition-transform ${submenuOpen.about ? 'rotate-180' : ''}`} />
              </div>
              {submenuOpen.about && (
                <div className="pl-4 mt-2 space-y-2">
                  {aboutUsLinks.map(item => (
                    <a key={item.title} href={item.href} className="block text-gray-600 hover:text-blue-600 py-1 text-sm">
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="py-2 border-b border-gray-100">
              <div className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-blue-600 font-medium" onClick={() => toggleSubmenu('academic')}>
                <span>Academic Programs</span>
                <ChevronDown size={16} className={`transition-transform ${submenuOpen.academic ? 'rotate-180' : ''}`} />
              </div>
              {submenuOpen.academic && (
                <div className="pl-4 mt-2 space-y-2">
                  {academicProgramsLinks.map(item => (
                    <a key={item.title} href={item.href} className="block text-gray-600 hover:text-blue-600 py-1 text-sm">
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="py-2 border-b border-gray-100">
              <div className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-blue-600 font-medium" onClick={() => toggleSubmenu('admissions')}>
                <span>Admissions</span>
                <ChevronDown size={16} className={`transition-transform ${submenuOpen.admissions ? 'rotate-180' : ''}`} />
              </div>
              {submenuOpen.admissions && (
                <div className="pl-4 mt-2 space-y-2">
                  {admissionsLinks.map(item => (
                    <a key={item.title} href={item.href} className="block text-gray-600 hover:text-blue-600 py-1 text-sm">
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100">Contact Us</a>

            <div className="pt-2">
              <Link to="/enroll">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-medium">
                Enroll Now
              </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
