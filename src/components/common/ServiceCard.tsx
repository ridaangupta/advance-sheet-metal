
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
  buttonText?: string;
  buttonLink?: string;
  index?: number;
  isDetailed?: boolean;
  category?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  features, 
  buttonText = "Learn More", 
  buttonLink = "/services",
  index = 0,
  isDetailed = false,
  category
}: ServiceCardProps) => {
  return (
    <Card className="service-card overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} - Professional HVAC sheet metal work`} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          loading={index < 2 ? "eager" : "lazy"} 
        />
      </div>
      <CardHeader>
        <CardTitle className={isDetailed ? "text-2xl" : "text-xl"}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Button asChild variant="outline" className="w-full hover:scale-105 transition-transform duration-200">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
