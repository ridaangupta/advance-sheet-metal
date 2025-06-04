import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Club Kitchen",
      address: "988 Expo Boulevard, Vancouver",
      image: "https://retailinsider.b-cdn.net/wp-content/uploads/2023/05/IMG_7135-scaled.jpg"
    },
    {
      title: "Panorama Office Building",
      address: "15330 54 Ave, Surrey",
      image: "https://metriccivil.ca/wp-content/uploads/2022/05/Prado.jpg"
    },
    {
      title: "Openroad Honda Burnaby",
      address: "5744 Byrne Road, Burnaby",
      image: "https://prod-web-cms-images.s3-us-west-2.amazonaws.com/649d1a6e-e689-4795-a9d6-e47f8555b221/HONBU1988_Lightened.jpg"
    },
    {
      title: "Openroad Porsche Richmond",
      address: "13171 Smallwood Place, Richmond",
      image: "https://canadianautodealer.ca/wp-content/uploads/2022/12/4-OpenRoad-and-Dilawri-open-flagship-Porsche-Centre-Richmond-1200.jpg"
    },
    {
      title: "E15",
      address: "322 East 15 Avenue, Vancouver",
      image: "https://vancouverpresales.com/wp-content/uploads/2021/05/1616442316-V2_E15_Streetscape_Full_blockC.jpeg"
    },
    {
      title: "Burnaby Alliance Church",
      address: "8585 Armstrong Ave., Burnaby",
      image: "https://dq5pwpg1q8ru0.cloudfront.net/2024/01/20/19/54/53/d6191c94-5e0b-494a-8ace-2890c48296f7/BAC2-splash.jpg"
    },
    {
      title: "Century City Tower",
      address: "13573 98A Avenue, Surrey",
      image: "https://bluecity.ca/wp-content/uploads/2022/11/locale-hero.jpg"
    },
    {
      title: "Transcold Distribution",
      address: "10895 Scott Road, Surrey",
      image: "https://media.licdn.com/dms/image/v2/D5610AQHPBJQ7F_8_Hw/image-shrink_800/B56ZWQrmiTHoAc-/0/1741889105055?e=2147483647&v=beta&t=zWnTbLwC7BPnyD41bfyUEz-gpFyJnIDMV4DrsN04hno"
    },
    {
      title: "Wayfair",
      address: "8011 Zylmans Way, Richmond",
      image: "https://omicronaec.com/wp-content/uploads/2024/04/23-08-02_Omicron_Richmond-Industrial_Wayfair_046-scaled.jpg"
    },
    {
      title: "Oakridge Park",
      address: "650 West 41ST, Vancouver",
      image: "https://oakridgepark.com/wp-content/uploads/2021/08/cultural-park.jpg"
    },
    {
      title: "Sobeys",
      address: "7664 80TH Ave, Delta",
      image: "https://www.vmcdn.ca/f/files/shared/feeds/cp/2024/06/3ded64b5-3793-41bf-aa82-ee57a143b714.jpg"
    },
    {
      title: "UBC Food and Beverage Innovation Centre",
      address: "2220 East Mall, Vancouver",
      image: "https://ubcproperties.com/wp-content/uploads/2023/08/exterior2_54020058795_o-1-1-scaled.jpg"
    },
    {
      title: "Snokomish Elementary School",
      address: "14778 58B Ave, Surrey",
      image: "https://media.surreyschools.ca/media/Default/medialib/snokomish-1920x1080.bde523181545.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              See examples of our quality workmanship across residential, commercial, and industrial HVAC projects throughout the Lower Mainland.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${project.image})` }}></div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-sm text-gray-500">{project.address}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Case Study
              </h2>
              <p className="text-xl text-gray-600">
                Deep dive into one of our most challenging and successful projects.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gray-200 bg-cover bg-center" 
                     style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop)` }}></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Delta Community Center HVAC Retrofit
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Complete HVAC system upgrade for a 30-year-old community center, 
                    replacing outdated equipment with modern, energy-efficient systems 
                    while maintaining operations throughout the project.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Aging infrastructure</li>
                        <li>• Minimal downtime required</li>
                        <li>• Budget constraints</li>
                        <li>• Complex scheduling</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 50% energy reduction</li>
                        <li>• Improved air quality</li>
                        <li>• Zero downtime</li>
                        <li>• On-time completion</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us bring the same level of expertise and quality to your HVAC project. 
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-gray-600 text-white hover:bg-gray-500 border-gray-600">
              <a href="tel:6045554822">Call Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
