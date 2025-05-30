
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, Users, Map } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "HVAC Installation",
      description: "Complete heating and cooling system installation for residential and commercial properties.",
      features: ["Energy-efficient systems", "Professional installation", "Warranty included", "Code compliant"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      title: "HVAC Repair & Maintenance",
      description: "24/7 emergency repair services and preventive maintenance programs to keep your systems running smoothly.",
      features: ["24/7 emergency service", "Preventive maintenance", "System diagnostics", "Parts warranty"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
    },
    {
      title: "Sheet Metal Fabrication",
      description: "Custom ductwork and sheet metal solutions designed and fabricated to your exact specifications.",
      features: ["Custom ductwork", "Commercial projects", "Precision fabrication", "Quality materials"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop"
    },
    {
      title: "System Upgrades & Retrofits",
      description: "Modernize your existing HVAC systems with energy-efficient upgrades and smart controls.",
      features: ["Energy savings", "Smart thermostats", "System optimization", "Rebate assistance"],
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop"
    },
    {
      title: "Energy Efficiency Consultations",
      description: "Professional assessments to help you reduce energy costs and improve system performance.",
      features: ["Energy audits", "Cost analysis", "Efficiency recommendations", "Rebate programs"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      title: "Commercial HVAC Services",
      description: "Comprehensive commercial heating, cooling, and ventilation solutions for businesses of all sizes.",
      features: ["Large-scale installations", "Planned maintenance", "Emergency service", "System design"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete HVAC Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Professional heating, cooling, and sheet metal solutions for residential and commercial clients throughout the Lower Mainland.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500">
              <Link to="/contact">Request Service Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete system installations, we provide comprehensive HVAC solutions with quality workmanship and reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${service.image})` }}></div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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

      {/* Emergency Service */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              24/7 Emergency Service
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              HVAC emergencies don't wait for business hours. Our emergency service team is available 24/7 
              to restore comfort to your home or business quickly and efficiently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-600">Average response time under 2 hours</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Licensed and experienced professionals</p>
              </div>
              <div className="text-center">
                <Map className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Service</h3>
                <p className="text-gray-600">Serving all of Lower Mainland</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <a href="tel:6045554822">Call Emergency Line</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Advance Sheet Metal?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">25+ Years Experience</h3>
                    <p className="text-gray-600">Decades of experience serving the Lower Mainland community.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                    <p className="text-gray-600">All work guaranteed and completed to the highest standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">Upfront pricing with no hidden fees or surprises.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
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
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-blue-600" />
                  <span>Langley</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-blue-600" />
                  <span>Coquitlam</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
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
