
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import CompanyValues from "@/components/about/CompanyValues";
import TeamSection from "@/components/about/TeamSection";
import CertificationsSection from "@/components/about/CertificationsSection";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero
        title="About Advance Sheet Metal"
        subtitle="Serving the Lower Mainland with professional HVAC sheet metal services since 1981. Family-owned, locally operated, and committed to excellence in commercial metalwork."
        backgroundImage="https://images.unsplash.com/photo-1738162837619-5d0b158abcec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CompanyStory />
      <CompanyValues />
      <TeamSection />
      <CertificationsSection />
      <AboutCTA />
    </div>
  );
};

export default About;
