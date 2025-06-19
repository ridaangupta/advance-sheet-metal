
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    urgency: "",
    location: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      urgency: "",
      location: "",
      message: ""
    });
  };

  const serviceAreas = [
    "Delta", "Richmond", "Surrey", "Vancouver", "Burnaby", 
    "New Westminster", "Langley", "Coquitlam", "Port Coquitlam", "White Rock"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Request a Free Quote</CardTitle>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(604) 555-0123"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="serviceType">Service Needed</Label>
              <Select onValueChange={(value) => handleSelectChange("serviceType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="installation">HVAC Installation</SelectItem>
                  <SelectItem value="repair">Repair & Maintenance</SelectItem>
                  <SelectItem value="fabrication">Sheet Metal Fabrication</SelectItem>
                  <SelectItem value="upgrade">System Upgrade</SelectItem>
                  <SelectItem value="consultation">Energy Consultation</SelectItem>
                  <SelectItem value="emergency">Emergency Service</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="urgency">Project Urgency</Label>
              <Select onValueChange={(value) => handleSelectChange("urgency", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                  <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                  <SelectItem value="soon">Soon (Within 1 month)</SelectItem>
                  <SelectItem value="planning">Planning (Future project)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="location">Service Location</Label>
            <Select onValueChange={(value) => handleSelectChange("location", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                {serviceAreas.map((area) => (
                  <SelectItem key={area} value={area.toLowerCase()}>{area}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Project Details</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please describe your HVAC project, including any specific requirements, building type, square footage, etc."
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-gray-800 hover:bg-gray-900">
            Submit Quote Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
