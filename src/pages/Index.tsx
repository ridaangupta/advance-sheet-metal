import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Users, Calendar, Map, Mail } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "HVAC Installation",
      description: "Complete heating and cooling system installation for residential and commercial properties.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Repair & Maintenance",
      description: "24/7 emergency repair services and preventive maintenance programs.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    },
    {
      title: "Sheet Metal Fabrication",
      description: "Custom ductwork and sheet metal solutions for any project size.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Delta, BC",
      text: "Exceptional service! They installed our new HVAC system efficiently and professionally. Highly recommend for anyone in the Lower Mainland."
    },
    {
      name: "Mike Chen",
      location: "Richmond, BC",
      text: "Called them for an emergency repair on a weekend. They came out quickly and fixed our heating system. Great customer service!"
    },
    {
      name: "Lisa Thompson",
      location: "Surrey, BC",
      text: "Professional team that completed our commercial HVAC project on time and within budget. Will definitely use them again."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Delta's Trusted <span className="text-blue-300">HVAC</span> Experts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional heating, cooling, and sheet metal services throughout the Lower Mainland. 
              Licensed, insured, and committed to excellence for over 40 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Link to="/contact">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
                <a href="tel:6045404955">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="slide-up">
              <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="slide-up">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="slide-up">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Licensed & Insured</div>
            </div>
            <div className="slide-up">
              <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-gray-700">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete HVAC Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential repairs to large commercial installations, we provide comprehensive 
              heating, cooling, and sheet metal services throughout Delta and the Lower Mainland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card overflow-hidden">
                <div className="h-48 bg-gray-200 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${service.image})` }}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving the Lower Mainland
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Based in Delta, we proudly serve residential and commercial clients throughout 
                Metro Vancouver. Our local expertise means we understand the unique climate 
                challenges and building requirements of our region.
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-blue-600" />
                  <span>Delta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-blue-600" />
                  <span>Richmond</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-blue-600" />
                  <span>Surrey</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-blue-600" />
                  <span>Vancouver</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-blue-600" />
                  <span>Burnaby</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-blue-600" />
                  <span>New Westminster</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">(604) 540-4955</div>
                    <div className="text-sm text-gray-600">Call for Service</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">info@advancesheetmetal.com</div>
                    <div className="text-sm text-gray-600">Email for quotes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">Mon-Fri: 7AM-6PM</div>
                    <div className="text-sm text-gray-600">Saturday: 8AM-4PM</div>
                  </div>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Request Service</Link>
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your HVAC project. 
            Professional service throughout the Lower Mainland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              <a href="tel:6045404955">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
