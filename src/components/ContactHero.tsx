
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            Ready to get started? Contact us today for a free quote on your HVAC project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
              <a href="tel:6045404955">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (604) 540-4955
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-800">
              <a href="mailto:info@advancesheetmetal.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
