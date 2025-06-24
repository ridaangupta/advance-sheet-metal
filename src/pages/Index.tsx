import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Users, Calendar, Map, Mail } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import ServiceCard from "@/components/common/ServiceCard";
import ServiceAreas from "@/components/common/ServiceAreas";
import { services, testimonials } from "@/data/services";
import { useImagePreload } from "@/hooks/useImagePreload";

const Index = () => {
  // Preload critical images
  useImagePreload(services.map(s => s.image));

  const fabricationServices = services.filter(service => service.category === "fabrication");
  const installationServices = services.filter(service => service.category === "installation");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={<>Leading <span className="text-gray-300">Sheet Metal</span> Specialists</>}
        subtitle="Transform your space with custom ductwork and premium HVAC sheet metal solutions!"
        backgroundImage="https://images.unsplash.com/photo-1615902135353-b7ace986e359?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              HVAC Sheet Metal Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in [animation-delay:0.2s]">
              Specializing in custom ductwork fabrication and professional installation services 
              for residential, commercial, and industrial HVAC systems throughout Delta and the Lower Mainland.
            </p>
          </div>

          {/* Fabrication Services */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Fabrication Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fabricationServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  index={index}
                  buttonText="Learn More"
                  buttonLink="/services"
                />
              ))}
            </div>
          </div>

          {/* Installation Services */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Installation Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {installationServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  index={index + 3}
                  buttonText="Learn More"
                  buttonLink="/services"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Serve the Lower Mainland
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Based in Delta, we provide HVAC sheet metal services to homes and businesses 
                across Metro Vancouver. We know the local climate and building needs.
              </p>
              <ServiceAreas />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-gray-800" />
                  <div>
                    <div className="font-semibold">(604) 540-4955</div>
                    <div className="text-sm text-gray-600">Call for service</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-gray-800" />
                  <div>
                    <div className="font-semibold">info@advancesheetmetal.com</div>
                    <div className="text-sm text-gray-600">Email for quotes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-gray-800" />
                  <div>
                    <div className="font-semibold">Mon-Fri: 7AM-6PM</div>
                    <div className="text-sm text-gray-600">Saturday: 8AM-4PM</div>
                  </div>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-gray-800 hover:bg-gray-900">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied customers throughout the Lower Mainland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="text-gray-600 mb-4 italic">"{testimonial.text}"</div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="slide-up">
              <div className="text-3xl font-bold text-gray-800 mb-2">40+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-gray-800 mb-2">1000+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
              <div className="text-gray-700">Licensed & Insured</div>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-gray-800 mb-2">5★</div>
              <div className="text-gray-700">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            Contact us today for a free estimate on your HVAC project. 
            Professional service throughout the Lower Mainland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]">
            <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-700 text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
              <a href="tel:6045404955">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
