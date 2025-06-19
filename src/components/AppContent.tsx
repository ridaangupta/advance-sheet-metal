
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ContactFormPopup from "./ContactFormPopup";
import { usePopupTimer } from "../hooks/usePopupTimer";
import Index from "../pages/Index";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppContent = () => {
  const { showPopup, closePopup } = usePopupTimer(7);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ContactFormPopup isOpen={showPopup} onClose={closePopup} />
    </div>
  );
};

export default AppContent;
