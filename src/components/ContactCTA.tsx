
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Need HVAC Service? We're Here to Help!
        </h2>
        <p className="text-xl mb-6">
          Contact us today for professional HVAC solutions.
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
          <a href="tel:6045404955">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
