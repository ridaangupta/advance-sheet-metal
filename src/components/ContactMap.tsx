
import InteractiveMap from "@/components/Map";

const ContactMap = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <p className="text-xl text-gray-600">
            Visit our Delta location or contact us to schedule an on-site consultation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <InteractiveMap />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
