import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Phone, Map } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Allan Delong",
      position: "Site Supervisor",
      category: "Site Supervisors"
    },
    {
      name: "Hector Giordano",
      position: "Site Supervisor",
      category: "Site Supervisors"
    },
    {
      name: "Stephen Seifried",
      position: "Site Supervisor",
      category: "Site Supervisors"
    },
    {
      name: "Aaron Rodgers",
      position: "Site Supervisor",
      category: "Site Supervisors"
    },
    {
      name: "Karl Delong",
      position: "Upcoming Talent",
      category: "Upcoming Talent"
    },
    {
      name: "Eugene Leo Naldoza",
      position: "Upcoming Talent",
      category: "Upcoming Talent"
    },
    {
      name: "Kin Ho Wong",
      position: "Upcoming Talent",
      category: "Upcoming Talent"
    },
    {
      name: "Robert Delong",
      position: "Shop Team",
      category: "Shop"
    },
    {
      name: "Timothy Hopkins",
      position: "Shop Team",
      category: "Shop"
    },
    {
      name: "Graham Kruse",
      position: "Shop Team",
      category: "Shop"
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

  // Group team members by category
  const groupedTeam = teamMembers.reduce((acc, member) => {
    if (!acc[member.category]) {
      acc[member.category] = [];
    }
    acc[member.category].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image - Metal fabrication workshop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1738162837619-5d0b158abcec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/70" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About Advance Sheet Metal
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-fade-in [animation-delay:0.2s]">
              Serving the Lower Mainland with professional HVAC sheet metal services since 1981. 
              Family-owned, locally operated, and committed to excellence in commercial metalwork.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 1981, Advance Sheet Metal Limited began as a small business 
                  with a team of experienced sheet metal experts who shared a passion for 
                  precision craftsmanship and quality workmanship. What started as a modest 
                  operation has grown steadily over the past 43 years into one of the Lower 
                  Mainland's most trusted commercial HVAC sheet metal specialists.
                </p>
                <p>
                  Our expertise lies in the complex world of commercial HVAC sheet metal 
                  fabrication and installation. We've built our reputation serving diverse 
                  sectors including hospitals where precision and reliability are critical, 
                  elementary schools requiring safe and efficient ventilation systems, 
                  automotive dealerships with unique HVAC challenges, and large-scale 
                  warehouses demanding robust industrial solutions.
                </p>
                <p>
                  Through four decades of continuous growth, we've maintained our commitment 
                  to the core values that founded our company: superior craftsmanship, 
                  innovative problem-solving, and personalized service. Our experienced team 
                  combines traditional metalworking expertise with modern fabrication 
                  techniques, ensuring every project meets the highest standards of quality 
                  and durability that our commercial clients depend on.
                </p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Company Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-800" />
                    <div>
                      <div className="font-semibold">Established 1981</div>
                      <div className="text-sm text-gray-600">43+ years of sheet metal expertise</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-800" />
                    <div>
                      <div className="font-semibold">1000+ Projects</div>
                      <div className="text-sm text-gray-600">Commercial and institutional</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Map className="w-5 h-5 text-gray-800" />
                    <div>
                      <div className="font-semibold">Lower Mainland</div>
                      <div className="text-sm text-gray-600">Local commercial HVAC experts</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-800" />
                    <div>
                      <div className="font-semibold">Specialized Service</div>
                      <div className="text-sm text-gray-600">Hospitals, schools, dealerships, warehouses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in [animation-delay:0.2s]">
              These core values guide everything we do and shape how we serve our customers and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in [animation-delay:0.2s]">
              Our experienced professionals are dedicated to providing you with 
              the highest quality HVAC sheet metal services and exceptional customer experience.
            </p>
          </div>

          {Object.entries(groupedTeam).map(([category, members], categoryIndex) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in" style={{ animationDelay: `${0.1 * categoryIndex}s` }}>{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {members.map((member, index) => (
                  <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * (categoryIndex * 4 + index + 2)}s` }}>
                    <div className="h-32 bg-gray-200 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-2xl text-white font-bold">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                      <p className="text-gray-800 font-medium">{member.position}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 relative">
        {/* Background Image - Manufacturing equipment */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
              Licensed & Certified
            </h2>
            <p className="text-xl text-gray-600 mb-12 animate-fade-in [animation-delay:0.2s]">
              Our team maintains the highest industry certifications and follows all safety protocols 
              to ensure quality work and peace of mind for our customers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border animate-fade-in" style={{ animationDelay: `${0.1 * (index + 3)}s` }}>
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        {/* Background Image - Industrial metal cutting */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582888796567-b8b8dc4b18e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            Ready to work with a team that puts quality, safety, and customer satisfaction first? 
            Contact us today for your HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]">
            <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-700">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" className="bg-gray-600 text-white hover:bg-gray-500 border-gray-600">
              <a href="tel:6045554822">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
