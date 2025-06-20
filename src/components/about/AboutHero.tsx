
import { ReactNode } from "react";

interface AboutHeroProps {
  title: ReactNode;
  subtitle: string;
  backgroundImage: string;
}

const AboutHero = ({ title, subtitle, backgroundImage }: AboutHeroProps) => {
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
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
