
import { Button } from "@/components/ui/button";

const CareersHero = () => {
  return (
    <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Join Our <span className="text-gray-300">Expert Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in [animation-delay:0.2s]">
            Build your career with the Lower Mainland's leading sheet metal specialists. 
            40+ years of excellence, competitive benefits, and opportunities for growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
