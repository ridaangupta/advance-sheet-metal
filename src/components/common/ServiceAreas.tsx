
import { Map } from "lucide-react";
import { serviceAreas } from "@/data/services";

const ServiceAreas = () => {
  return (
    <div className="grid grid-cols-2 gap-4 text-gray-700">
      {serviceAreas.map((area, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Map className="w-4 h-4 text-gray-800" />
          <span>{area}</span>
        </div>
      ))}
    </div>
  );
};

export default ServiceAreas;
