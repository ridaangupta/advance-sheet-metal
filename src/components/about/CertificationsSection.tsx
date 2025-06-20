
const CertificationsSection = () => {
  const certifications = [
    "WorkSafeBC Certified",
    "Red Seal Certified Technicians",
    "Gas Fitter Class A License",
    "HVAC Excellence Certified",
    "TSSA Licensed",
    "Better Business Bureau Member"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
            Licensed & Certified
          </h2>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in [animation-delay:0.2s]">
            Our team maintains the highest industry certifications and follows all safety protocols 
            to ensure quality work and peace of mind for our customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border animate-fade-in" style={{ animationDelay: `${0.1 * (index + 3)}s` }}>
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
