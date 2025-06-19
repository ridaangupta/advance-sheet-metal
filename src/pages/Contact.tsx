
import { useEffect } from "react";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import ContactMap from "@/components/ContactMap";
import ContactCTA from "@/components/ContactCTA";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add a small delay to override any map-induced scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <ContactHero />
      
      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>

      <ContactMap />
      <ContactCTA />
    </div>
  );
};

export default Contact;
