
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
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
  );
};

export default AboutCTA;
