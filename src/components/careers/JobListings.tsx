
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";

const JobListings = () => {
  const jobs = [
    {
      title: "Sheet Metal Fabricator",
      type: "Full-time",
      experience: "2+ years",
      salary: "$28-35/hour",
      location: "Delta, BC",
      description: "Skilled fabricator for custom ductwork and sheet metal components. Experience with blueprints and precision work required.",
      requirements: ["2+ years fabrication experience", "Blueprint reading", "Precision measuring", "Safety certification preferred"]
    },
    {
      title: "HVAC Installer",
      type: "Full-time", 
      experience: "3+ years",
      salary: "$30-38/hour",
      location: "Lower Mainland",
      description: "Install residential and commercial HVAC systems throughout Metro Vancouver. Valid driver's license required.",
      requirements: ["3+ years HVAC installation", "Valid BC driver's license", "Physical fitness", "Customer service skills"]
    },
    {
      title: "Apprentice Position",
      type: "Full-time",
      experience: "Entry level",
      salary: "$20-25/hour",
      location: "Delta, BC", 
      description: "Learn the trade with experienced professionals. Perfect opportunity to start your career in sheet metal work.",
      requirements: ["High school diploma", "Strong work ethic", "Willingness to learn", "Basic math skills"]
    },
    {
      title: "Site Supervisor",
      type: "Full-time",
      experience: "5+ years",
      salary: "$40-48/hour",
      location: "Lower Mainland",
      description: "Lead installation teams on commercial and industrial projects. Strong leadership and project management skills required.",
      requirements: ["5+ years supervisory experience", "Project management skills", "Safety certification", "Valid driver's license"]
    }
  ];

  return (
    <section id="current-openings" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Openings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of skilled professionals and build your career in the sheet metal industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {job.salary}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gray-800 rounded-full mr-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
