
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src="/lovable-uploads/faf92a7b-f67b-4e87-b52f-6346f769737a.png" 
                alt="Advance Sheet Metal" 
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Advance Sheet Metal</h1>
              <p className="text-sm text-gray-600">Limited</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-gray-800 border-b-2 border-gray-800 pb-1"
                    : "text-gray-700 hover:text-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(604) 540-4955</span>
              </div>
              <div className="text-sm text-gray-600">Professional Service</div>
            </div>
            <Button asChild className="bg-gray-800 hover:bg-gray-900">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-800 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.path) ? "text-gray-800" : "text-gray-700 hover:text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-700 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">(604) 540-4955</span>
                </div>
                <Button asChild className="w-full bg-gray-800 hover:bg-gray-900">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
