
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  position: string;
  category: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Allan Delong",
      position: "Site Supervisor",
      category: "Site Supervisors"
    },
    {
      name: "Hector Giordano",
      position: "Site Supervisor",
      category: "Site Supervisors"
    },
    {
      name: "Stephen Seifried",
      position: "Site Supervisor",
      category: "Site Supervisors"
    },
    {
      name: "Aaron Rodgers",
      position: "Site Supervisor",
      category: "Site Supervisors"
    },
    {
      name: "Karl Delong",
      position: "Upcoming Talent",
      category: "Upcoming Talent"
    },
    {
      name: "Eugene Leo Naldoza",
      position: "Upcoming Talent",
      category: "Upcoming Talent"
    },
    {
      name: "Kin Ho Wong",
      position: "Upcoming Talent",
      category: "Upcoming Talent"
    },
    {
      name: "Robert Delong",
      position: "Shop Team",
      category: "Shop"
    },
    {
      name: "Timothy Hopkins",
      position: "Shop Team",
      category: "Shop"
    },
    {
      name: "Graham Kruse",
      position: "Shop Team",
      category: "Shop"
    }
  ];

  // Group team members by category
  const groupedTeam = teamMembers.reduce((acc, member) => {
    if (!acc[member.category]) {
      acc[member.category] = [];
    }
    acc[member.category].push(member);
    return acc;
  }, {} as Record<string, TeamMember[]>);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in [animation-delay:0.2s]">
            Our experienced professionals are dedicated to providing you with 
            the highest quality HVAC sheet metal services and exceptional customer experience.
          </p>
        </div>

        {Object.entries(groupedTeam).map(([category, members], categoryIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in" style={{ animationDelay: `${0.1 * categoryIndex}s` }}>{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {members.map((member, index) => (
                <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * (categoryIndex * 4 + index + 2)}s` }}>
                  <div className="h-32 bg-gray-200 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-2xl text-white font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-gray-800 font-medium">{member.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
