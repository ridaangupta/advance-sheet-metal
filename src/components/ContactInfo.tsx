
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Map, Clock } from "lucide-react";

const ContactInfo = () => {
  const serviceAreas = [
    "Delta", "Richmond", "Surrey", "Vancouver", "Burnaby", 
    "New Westminster", "Langley", "Coquitlam", "Port Coquitlam", "White Rock"
  ];

  return (
    <div className="space-y-6">
      {/* Business Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Business Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <Map className="w-5 h-5 text-gray-800 mt-1" />
            <div>
              <div className="font-semibold">Address</div>
              <div className="text-gray-600">
                1546 Derwent Way # 311C<br />
                Delta, BC V4K 3N5
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-gray-800 mt-1" />
            <div>
              <div className="font-semibold">Phone</div>
              <div className="text-gray-600">(604) 540-4955</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-gray-800 mt-1" />
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-gray-600">info@advancesheetmetal.com</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Business Hours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-gray-800" />
            <div>
              <div className="font-semibold">Regular Hours</div>
              <div className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</div>
              <div className="text-gray-600">Saturday: 8:00 AM - 4:00 PM</div>
              <div className="text-gray-600">Sunday: Closed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Areas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Service Areas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-3">
            We proudly serve the following communities:
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
