
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Commercial Office Building HVAC",
      category: "commercial",
      location: "Richmond, BC",
      description: "Complete HVAC system installation for a 50,000 sq ft office complex including rooftop units, ductwork, and controls.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      details: ["50,000 sq ft coverage", "Energy-efficient design", "Smart building integration", "3-month timeline"]
    },
    {
      title: "Residential Heat Pump Installation",
      category: "residential",
      location: "Delta, BC",
      description: "Modern heat pump system replacement in family home, improving energy efficiency by 40%.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      details: ["40% energy savings", "Quiet operation", "Smart thermostat", "1-day installation"]
    },
    {
      title: "Industrial Ventilation System",
      category: "industrial",
      location: "Surrey, BC",
      description: "Custom ventilation system for manufacturing facility with specialized air filtration requirements.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
      details: ["Custom fabrication", "HEPA filtration", "Code compliance", "Safety integration"]
    },
    {
      title: "Restaurant Kitchen Exhaust",
      category: "commercial",
      location: "Vancouver, BC",
      description: "Complete kitchen exhaust system installation for busy downtown restaurant.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
      details: ["Commercial grade", "Fire suppression ready", "City permits", "Health code compliant"]
    },
    {
      title: "Townhouse Complex HVAC",
      category: "residential",
      location: "Burnaby, BC",
      description: "Multi-unit residential HVAC installation for new townhouse development.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      details: ["12 unit complex", "Individual controls", "Energy Star rated", "2-week completion"]
    },
    {
      title: "Warehouse Climate Control",
      category: "industrial",
      location: "Richmond, BC",
      description: "Large-scale climate control system for temperature-sensitive warehouse storage.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      details: ["100,000 sq ft", "Precise temperature control", "Humidity management", "24/7 monitoring"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              See examples of our quality workmanship across residential, commercial, and industrial HVAC projects throughout the Lower Mainland.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "bg-gray-800 hover:bg-gray-900" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${project.image})` }}></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-sm text-gray-500">{project.location}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <ul className="space-y-1 mb-6">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Case Study
              </h2>
              <p className="text-xl text-gray-600">
                Deep dive into one of our most challenging and successful projects.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gray-200 bg-cover bg-center" 
                     style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop)` }}></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Delta Community Center HVAC Retrofit
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Complete HVAC system upgrade for a 30-year-old community center, 
                    replacing outdated equipment with modern, energy-efficient systems 
                    while maintaining operations throughout the project.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Aging infrastructure</li>
                        <li>• Minimal downtime required</li>
                        <li>• Budget constraints</li>
                        <li>• Complex scheduling</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 50% energy reduction</li>
                        <li>• Improved air quality</li>
                        <li>• Zero downtime</li>
                        <li>• On-time completion</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us bring the same level of expertise and quality to your HVAC project. 
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-gray-600 text-white hover:bg-gray-500 border-gray-600">
              <a href="tel:6045554822">Call Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
