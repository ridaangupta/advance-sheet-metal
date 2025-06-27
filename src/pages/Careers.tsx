
import CareersHero from "@/components/careers/CareersHero";
import JobListings from "@/components/careers/JobListings";
import BenefitsSection from "@/components/careers/BenefitsSection";
import ApplicationForm from "@/components/careers/ApplicationForm";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <CareersHero />
      <BenefitsSection />
      <JobListings />
      <ApplicationForm />
    </div>
  );
};

export default Careers;
