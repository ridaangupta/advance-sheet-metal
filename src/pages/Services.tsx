
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, Users, Map } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  const services = [
    {
      title: "Custom Ductwork Fabrication",
      description: "Precision-engineered ductwork designed and fabricated in our shop to meet your exact specifications and project requirements.",
      features: ["Custom design solutions", "Precision fabrication", "Quality materials", "Code compliant"],
      image: "/custom-ductwork.png"
    },
    {
      title: "Sheet Metal Installation",
      description: "Professional installation of custom sheet metal components for commercial, industrial, and residential HVAC systems.",
      features: ["Expert installation", "Proper sealing", "System integration", "Quality workmanship"],
      image: "/sheet-metal-install.png"
    },
    {
      title: "Ventilation Systems",
      description: "Complete ventilation solutions including exhaust systems, makeup air units, and specialized ventilation for industrial applications.",
      features: ["Exhaust systems", "Makeup air units", "Industrial ventilation", "Custom solutions"],
      image: "/ventilation-systems.png"
    },
    {
      title: "Ductwork Repair & Modification",
      description: "Professional repair and modification services for existing ductwork systems to improve efficiency and performance.",
      features: ["System repairs", "Efficiency improvements", "Modifications", "Maintenance services"],
      image: "/ductwork-repair.png"
    },
    {
      title: "Commercial Kitchen Exhaust",
      description: "Specialized kitchen exhaust systems and ductwork for restaurants and commercial food service operations.",
      features: ["Kitchen exhaust hoods", "Grease duct systems", "Fire suppression ready", "Health code compliant"],
      image: "/kitchen-exhaust.png"
    },
    {
      title: "Industrial Sheet Metal",
      description: "Heavy-duty sheet metal fabrication and installation for industrial facilities, including specialized ventilation and process equipment.",
      features: ["Heavy-duty construction", "Industrial grade materials", "Process ventilation", "Custom fabrication"],
      image: "/industrial-metal.png"
    }
  ];

  // Preload only the first 2 critical images for better performance
  useEffect(() => {
    services.slice(0, 2).forEach((service) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = service.image;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image - Industrial metalworking */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581093458791-9f3c3250a33a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/70" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              HVAC Sheet Metal Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-fade-in [animation-delay:0.2s]">
              Specializing in custom ductwork fabrication and sheet metal solutions for residential, commercial, and industrial HVAC systems throughout the Lower Mainland.
            </p>
            <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 animate-fade-in [animation-delay:0.4s]">
              <Link to="/contact">Request Service Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in [animation-delay:0.2s]">
              From precision ductwork fabrication to complete sheet metal installations, we provide specialized HVAC metalwork solutions with expert craftsmanship and reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`${service.title} - Professional HVAC sheet metal work`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Service */}
      <section className="py-20 bg-gray-50 relative">
        {/* Background Image - Manufacturing/Factory floor */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
              Sheet Metal Expertise
            </h2>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:0.2s]">
              Our specialized team provides expert sheet metal fabrication and ductwork solutions for your project. 
              We're committed to delivering precision metalwork and customer satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Phone className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Custom Fabrication</h3>
                <p className="text-gray-600">Precision sheet metal work in our shop</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Users className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Installers</h3>
                <p className="text-gray-600">Skilled technicians with metalwork expertise</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Map className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Service</h3>
                <p className="text-gray-600">Serving all of Lower Mainland</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 animate-fade-in [animation-delay:0.6s]">
              <a href="tel:6045404955">Call for Service</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Advance Sheet Metal?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">40+ Years Experience</h3>
                    <p className="text-gray-600">Decades of experience serving the Lower Mainland community.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                    <p className="text-gray-600">All work guaranteed and completed to the highest standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">Upfront pricing with no hidden fees or surprises.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Delta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Richmond</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Surrey</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Vancouver</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Burnaby</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>New Westminster</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Langley</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Coquitlam</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-gray-800 hover:bg-gray-900">
                <Link to="/contact">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
