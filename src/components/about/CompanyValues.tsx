
import { Card, CardContent } from "@/components/ui/card";

const CompanyValues = () => {
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
  );
};

export default CompanyValues;
