
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, GraduationCap, DollarSign, Users, Award } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Wages",
      description: "Industry-leading pay rates with regular performance reviews and merit increases"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health and dental coverage for you and your family"
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Ongoing skills development and certification opportunities"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All safety equipment provided and comprehensive safety training"
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Family-owned business with a supportive, collaborative culture"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear advancement opportunities with 40+ years of industry experience"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Work With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in our people because they're the foundation of our success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-gray-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Culture Section */}
        <div className="mt-20 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Company Culture
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                For over 40 years, Advance Sheet Metal has been built on the foundation of skilled craftsmanship, 
                safety, and respect for our team members. We believe in fostering an environment where everyone 
                can grow professionally while maintaining a healthy work-life balance.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-800">40+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-gray-600">Safety Focus</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0" 
                alt="Team of workers in safety gear" 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
