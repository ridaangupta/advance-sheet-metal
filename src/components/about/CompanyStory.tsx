
import { Calendar, Users, Map, Phone } from "lucide-react";

const CompanyStory = () => {
  return (
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
  );
};

export default CompanyStory;
