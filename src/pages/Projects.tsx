
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
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/70" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-fade-in [animation-delay:0.2s]">
              See examples of our quality workmanship across residential, commercial, and industrial HVAC projects throughout the Lower Mainland.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in [animation-delay:0.2s]">
              From large commercial installations to specialized industrial projects, explore our portfolio of successful HVAC sheet metal solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="h-48 bg-gray-200 bg-cover bg-center transition-transform duration-300 hover:scale-105" 
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

      {/* Additional Hero Section */}
      <section className="py-20 bg-gray-50 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
              Quality That Speaks for Itself
            </h2>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:0.2s]">
              Every project represents our commitment to excellence in HVAC sheet metal fabrication and installation. 
              We take pride in delivering solutions that meet the highest standards of quality and performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            Let us bring the same level of expertise and quality to your HVAC project. 
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]">
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
