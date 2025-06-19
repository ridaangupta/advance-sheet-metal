
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormPopup = ({ isOpen, onClose }: ContactFormPopupProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
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
      message: ""
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-gray-800" />
            <span>Get a Free Quote</span>
          </DialogTitle>
          <DialogDescription>
            Fill out this quick form and we'll contact you within 24 hours with a detailed quote.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="popup-name">Full Name</Label>
            <Input
              id="popup-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="popup-email">Email</Label>
              <Input
                id="popup-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <Label htmlFor="popup-phone">Phone</Label>
              <Input
                id="popup-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(604) 555-0123"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="popup-service">Service Needed</Label>
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
            <Label htmlFor="popup-message">Project Details</Label>
            <Textarea
              id="popup-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Brief description of your HVAC needs..."
            />
          </div>

          <div className="flex space-x-3 pt-2">
            <Button type="submit" className="flex-1 bg-gray-800 hover:bg-gray-900">
              Get Free Quote
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Not Now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormPopup;
