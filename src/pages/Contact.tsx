
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Contact, Map, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Ready to get started? Contact us today for a free quote on your HVAC project. 
              Emergency services available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:6045554822">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (604) 555-HVAC
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="mailto:info@advancesheetmetal.ca">
                  <Contact className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
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
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(604) 555-0123"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="serviceType">Service Needed *</Label>
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
                      <Label htmlFor="location">Service Location *</Label>
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

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Business Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Map className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-gray-600">
                        123 Industrial Way<br />
                        Delta, BC V4K 3N5
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">(604) 555-HVAC</div>
                      <div className="text-sm text-gray-500">24/7 Emergency Line</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Contact className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@advancesheetmetal.ca</div>
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
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">Regular Hours</div>
                      <div className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</div>
                      <div className="text-gray-600">Saturday: 8:00 AM - 4:00 PM</div>
                      <div className="text-gray-600">Sunday: Emergency only</div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="font-semibold text-red-800">Emergency Service</div>
                    <div className="text-red-700">Available 24/7 for urgent repairs</div>
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
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Map className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p>123 Industrial Way, Delta, BC V4K 3N5</p>
                <p className="text-sm mt-2">Map integration would be added here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            HVAC Emergency? We're Here to Help!
          </h2>
          <p className="text-xl mb-6">
            Don't wait - emergency HVAC problems require immediate attention.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
            <a href="tel:6045554822">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
