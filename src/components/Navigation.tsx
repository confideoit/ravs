import { Link, useLocation } from "react-router-dom";
import { Home, Compass, Building2, Palette, MapPin, Info } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Planners", path: "/planners", icon: Compass },
    { name: "Constructions", path: "/constructions", icon: Building2 },
    { name: "Interiors", path: "/interiors", icon: Palette },
    { name: "Land Consulting", path: "/land-consulting", icon: MapPin },
    { name: "Projects", path: "/projects", icon: Building2 },
    { name: "About Us", path: "/about", icon: Info },
  ];

  return (
    <nav className="bg-secondary shadow-lg fixed top-[110px] md:top-[132px] left-0 right-0 z-30">
      <div className="container mx-auto px-4">
        <div
          className="flex items-center justify-start md:justify-center 
          gap-3 md:gap-4 overflow-x-auto pt-4 pb-2 scrollbar-none 
          whitespace-nowrap px-2"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 
                  rounded-md text-sm md:text-base transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "text-secondary-foreground hover:bg-primary/10 hover:scale-105"
                  }`}
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
