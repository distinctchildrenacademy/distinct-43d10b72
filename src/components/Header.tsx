
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      href: "#school-history",
    },
    {
      title: "Proprietor's Profile",
      description: "Meet Prof. Isidore Ekpe, our founder",
      href: "#proprietor-profile",
    },
    {
      title: "Leadership Team",
      description: "Our dedicated administrative and teaching staff",
      href: "#leadership-team",
    },
    {
      title: "Vision & Mission",
      description: "Our guiding principles and aspirations",
      href: "#vision-mission",
    },
    {
      title: "School Anthem & Pledge",
      description: "Symbols of our unity and commitment",
      href: "#anthem-pledge",
    },
    {
      title: "Safety & Child Protection",
      description: "Our measures to ensure student wellbeing",
      href: "#safety",
    },
  ];

  const academicProgramsLinks = [
    {
      title: "Overview",
      description: "Our comprehensive educational programs",
      href: "#programs-overview",
    },
    {
      title: "Instructional Aids",
      description: "Tools and resources for effective learning",
      href: "#instructional-aids",
    },
    {
      title: "Library",
      description: "Our resource center for learning and research",
      href: "#library",
    },
    {
      title: "Laboratory",
      description: "Facilities for hands-on scientific exploration",
      href: "#laboratory",
    },
    {
      title: "Power Supply Infrastructure",
      description: "Ensuring uninterrupted learning",
      href: "#power-supply",
    },
  ];

  const admissionsLinks = [
    {
      title: "Admission Requirements",
      description: "What you need to join our community",
      href: "#admission-requirements",
    },
    {
      title: "How to Apply",
      description: "Step-by-step guide to our application process",
      href: "#how-to-apply",
    },
    {
      title: "Entrance Examinations",
      description: "Assessment for prospective students",
      href: "#entrance-exams",
    },
    {
      title: "Fee Structure",
      description: "Tuition and other costs",
      href: "#fees",
    },
    {
      title: "Payment Methods",
      description: "Available options for financial transactions",
      href: "#payment-methods",
    },
  ];

  const studentLifeLinks = [
    {
      title: "School Uniform",
      description: "Our dress code and uniform requirements",
      href: "#uniform",
    },
    {
      title: "School Rules & Regulations",
      description: "Guidelines for conduct and behavior",
      href: "#rules",
    },
    {
      title: "Student Activities",
      description: "Extracurricular programs and clubs",
      href: "#activities",
    },
    {
      title: "Excursions",
      description: "Educational trips and field experiences",
      href: "#excursions",
    },
    {
      title: "Gallery",
      description: "Photos of our school and events",
      href: "#gallery",
    },
  ];

  return (
    <header className="w-full z-30 bg-white border-b border-gray-100 sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img
                src="/lovable-uploads/32dbe30c-5fea-4791-ad85-7d5eb50ae1c2.png"
                alt="Distinct Children Academy"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#home"
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
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Student Life
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {studentLifeLinks.map((item) => (
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
                  <NavigationMenuLink
                    href="#news-events"
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 transition-colors"
                  >
                    News & Events
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
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
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-medium">
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
            <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100">Home</a>

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

            <div className="py-2 border-b border-gray-100">
              <div className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-blue-600 font-medium" onClick={() => toggleSubmenu('student')}>
                <span>Student Life</span>
                <ChevronDown size={16} className={`transition-transform ${submenuOpen.student ? 'rotate-180' : ''}`} />
              </div>
              {submenuOpen.student && (
                <div className="pl-4 mt-2 space-y-2">
                  {studentLifeLinks.map(item => (
                    <a key={item.title} href={item.href} className="block text-gray-600 hover:text-blue-600 py-1 text-sm">
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#news-events" className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100">News & Events</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100">Contact Us</a>

            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-medium">
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
