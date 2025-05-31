import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Phone, Map } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Mavi",
      position: "General Manager",
      experience: "15+ years",
      certifications: "Project Management, Operations"
    },
    {
      name: "Shabad",
      position: "Head of Business Development",
      experience: "12+ years",
      certifications: "Business Development, Client Relations"
    },
    {
      name: "Jorin",
      position: "Head of Estimating",
      experience: "18+ years",
      certifications: "Cost Estimation, Project Planning"
    },
    {
      name: "Shane",
      position: "Estimator",
      experience: "10+ years",
      certifications: "Cost Analysis, Technical Estimation"
    },
    {
      name: "Vince",
      position: "Estimator",
      experience: "8+ years",
      certifications: "Project Estimation, Material Sourcing"
    },
    {
      name: "Tim",
      position: "Shop Lead",
      experience: "20+ years",
      certifications: "Sheet Metal Fabrication, Shop Management"
    },
    {
      name: "Hector",
      position: "Site Lead",
      experience: "16+ years",
      certifications: "Site Management, Safety Coordination"
    }
  ];

  const certifications = [
    "WorkSafeBC Certified",
    "Red Seal Certified Technicians",
    "Gas Fitter Class A License",
    "HVAC Excellence Certified",
    "TSSA Licensed",
    "Better Business Bureau Member"
  ];

  const values = [
    {
      title: "Quality Workmanship",
      description: "We take pride in every installation, repair, and maintenance job, ensuring the highest standards of quality and safety.",
      icon: "🔧"
    },
    {
      title: "Customer First",
      description: "Your comfort and satisfaction are our top priorities. We listen to your needs and provide honest, reliable service.",
      icon: "👥"
    },
    {
      title: "Local Expertise",
      description: "As Delta locals, we understand the unique climate challenges and building codes of the Lower Mainland.",
      icon: "🏠"
    },
    {
      title: "Continuous Learning",
      description: "We stay current with the latest HVAC technologies and best practices to serve you better.",
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Advance Sheet Metal
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Serving the Lower Mainland with professional HVAC services since 1995. 
              Family-owned, locally operated, and committed to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 1995 by Mike Johnson, Advance Sheet Metal Limited began as a small 
                  family business with a simple mission: provide reliable, professional HVAC 
                  services to the growing communities of Delta and the Lower Mainland.
                </p>
                <p>
                  Over the past 25+ years, we've built our reputation on quality workmanship, 
                  honest service, and treating every customer like family. What started as a 
                  one-man operation has grown into a trusted team of certified professionals 
                  serving hundreds of satisfied customers throughout Metro Vancouver.
                </p>
                <p>
                  Today, we continue to honor our founding values while embracing new technologies 
                  and sustainable practices that benefit our customers and our community. Our 
                  commitment to excellence has made us one of the most trusted HVAC contractors 
                  in the Lower Mainland.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-gray-800" />
                  <div>
                    <div className="font-semibold">Established 1995</div>
                    <div className="text-sm text-gray-600">25+ years serving the community</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-gray-800" />
                  <div>
                    <div className="font-semibold">1000+ Projects</div>
                    <div className="text-sm text-gray-600">Residential and commercial</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Map className="w-6 h-6 text-gray-800" />
                  <div>
                    <div className="font-semibold">Lower Mainland</div>
                    <div className="text-sm text-gray-600">Local experts you can trust</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-gray-800" />
                  <div>
                    <div className="font-semibold">Professional Service</div>
                    <div className="text-sm text-gray-600">Available when you need us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our customers and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced, certified professionals are dedicated to providing you with 
              the highest quality HVAC services and exceptional customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gray-200 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-800 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-xs text-gray-500">{member.certifications}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Licensed & Certified
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our team maintains the highest industry certifications and follows all safety protocols 
              to ensure quality work and peace of mind for our customers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 h-64 rounded-lg bg-cover bg-center" 
                 style={{ backgroundImage: `url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop)` }}></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Community Commitment
              </h2>
              <p className="text-gray-700 mb-6">
                As proud members of the Delta community, we believe in giving back. We support 
                local sports teams, participate in community events, and provide professional services 
                during extreme weather events.
              </p>
              <p className="text-gray-700 mb-6">
                Our commitment extends beyond just HVAC services – we're your neighbors, and we're 
                invested in the comfort and well-being of our entire community.
              </p>
              <Button asChild className="bg-gray-800 hover:bg-gray-900">
                <Link to="/contact">Join Our Community of Satisfied Customers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to work with a team that puts quality, safety, and customer satisfaction first? 
            Contact us today for your HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-700">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <a href="tel:6045554822">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
