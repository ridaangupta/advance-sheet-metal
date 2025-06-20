
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Users, Map } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import ServiceCard from "@/components/common/ServiceCard";
import ServiceAreas from "@/components/common/ServiceAreas";
import { services } from "@/data/services";
import { useImagePreload } from "@/hooks/useImagePreload";

const Services = () => {
  useImagePreload(services.map(s => s.image));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="HVAC Sheet Metal Services"
        subtitle="Specializing in custom ductwork fabrication and sheet metal solutions for residential, commercial, and industrial HVAC systems throughout the Lower Mainland."
        backgroundImage="https://images.unsplash.com/photo-1581093458791-9f3c3250a33a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        primaryCTA={{ text: "Request Service Quote", to: "/contact" }}
      />

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
              <ServiceCard
                key={index}
                {...service}
                index={index}
                isDetailed={true}
                buttonText="Get Quote"
                buttonLink="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Service */}
      <section className="py-20 bg-gray-50 relative">
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
                {[
                  { title: "Licensed & Insured", desc: "Fully licensed, bonded, and insured for your peace of mind." },
                  { title: "40+ Years Experience", desc: "Decades of experience serving the Lower Mainland community." },
                  { title: "Quality Workmanship", desc: "All work guaranteed and completed to the highest standards." },
                  { title: "Transparent Pricing", desc: "Upfront pricing with no hidden fees or surprises." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <ServiceAreas />
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
