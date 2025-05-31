
import { Link } from "react-router-dom";
import { Phone, Mail, Map } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/faf92a7b-f67b-4e87-b52f-6346f769737a.png" 
                  alt="Advance Sheet Metal" 
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Advance Sheet Metal Limited</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional HVAC sub-contracting and sheet metal fabrication services 
              throughout Delta and the Lower Mainland. Quality workmanship you can trust.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Map className="w-4 h-4 text-gray-400" />
                <span>1546 Derwent Way # 311C, Delta, BC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>(604) 540-4955</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>info@advancesheetmetal.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>HVAC Installation</li>
              <li>Repair & Maintenance</li>
              <li>Sheet Metal Fabrication</li>
              <li>System Upgrades</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Advance Sheet Metal Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400">Licensed & Insured</span>
              <span className="text-gray-400">WorkSafeBC Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
