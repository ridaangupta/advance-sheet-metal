
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCTA?: {
    text: string;
    to: string;
  };
  secondaryCTA?: {
    text: string;
    to: string;
    isExternal?: boolean;
  };
}

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  primaryCTA, 
  secondaryCTA 
}: HeroSectionProps) => {
  return (
    <section className="relative text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/70" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-fade-in [animation-delay:0.2s]">
            {subtitle}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]">
              {primaryCTA && (
                <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                  <Link to={primaryCTA.to}>{primaryCTA.text}</Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-50 border-2 border-white text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                  {secondaryCTA.isExternal ? (
                    <a href={secondaryCTA.to}>{secondaryCTA.text}</a>
                  ) : (
                    <Link to={secondaryCTA.to}>{secondaryCTA.text}</Link>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
