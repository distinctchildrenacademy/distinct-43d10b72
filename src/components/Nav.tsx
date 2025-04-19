
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Academy</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-[400px]">
                        <Link to="/overview" className="block hover:bg-gray-50 p-2 rounded">
                          About Us
                        </Link>
                        <Link to="/overview/mission" className="block hover:bg-gray-50 p-2 rounded">
                          Our Mission
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-[400px]">
                        <Link to="/programs" className="block hover:bg-gray-50 p-2 rounded">
                          All Programs
                        </Link>
                        <Link to="/programs/courses" className="block hover:bg-gray-50 p-2 rounded">
                          Courses
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
