
import { useLayoutEffect, useEffect, useState } from "react";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import ContactMap from "@/components/ContactMap";
import ContactCTA from "@/components/ContactCTA";

const Contact = () => {
  const [scrollLocked, setScrollLocked] = useState(true);

  useLayoutEffect(() => {
    // Immediate scroll restoration before paint
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Lock scroll temporarily
    document.body.style.overflow = 'hidden';
    
    // Unlock scroll after map initialization
    const unlockTimer = setTimeout(() => {
      document.body.style.overflow = '';
      setScrollLocked(false);
    }, 500);

    return () => {
      clearTimeout(unlockTimer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    // Additional scroll restoration after component mount
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);

    // Intersection observer fallback to detect unwanted scrolling
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'contact-map' && !scrollLocked) {
          // If map comes into view unexpectedly, scroll back to top
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          if (currentScroll > 100) {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        }
      });
    }, { threshold: 0.1 });

    const mapElement = document.getElementById('contact-map');
    if (mapElement) {
      observer.observe(mapElement);
    }

    return () => {
      clearTimeout(scrollTimer);
      observer.disconnect();
    };
  }, [scrollLocked]);

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

      <div id="contact-map">
        <ContactMap />
      </div>
      <ContactCTA />
    </div>
  );
};

export default Contact;
