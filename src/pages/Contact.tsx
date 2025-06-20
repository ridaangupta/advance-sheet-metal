
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import ContactMap from "@/components/ContactMap";
import ContactCTA from "@/components/ContactCTA";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      
      {/* Contact Form & Info */}
      <section className="py-20 relative">
        {/* Background Image - Metal workshop/fabrication */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-50 relative">
        {/* Background Image - Industrial metalwork */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581093458791-9f3c3250a33a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
              Get in Touch Today
            </h2>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:0.2s]">
              Ready to discuss your HVAC sheet metal project? Our experienced team is here to provide 
              expert consultation and reliable service throughout the Lower Mainland.
            </p>
          </div>
        </div>
      </section>

      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <ContactMap />
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <ContactCTA />
      </div>
    </div>
  );
};

export default Contact;
