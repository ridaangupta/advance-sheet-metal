
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, Users, Map } from "lucide-react";

const Services = () => {
  const projects = [
    {
      name: "Club Kitchen",
      address: "988 Expo Boulevard, Vancouver",
      image: "https://retailinsider.b-cdn.net/wp-content/uploads/2023/05/IMG_7135-scaled.jpg"
    },
    {
      name: "Panorama Office Building",
      address: "15330 54 Ave, Surrey",
      image: "https://metriccivil.ca/wp-content/uploads/2022/05/Prado.jpg"
    },
    {
      name: "Openroad Honda Burnaby",
      address: "5744 Byrne Road, Burnaby",
      image: "https://prod-web-cms-images.s3-us-west-2.amazonaws.com/649d1a6e-e689-4795-a9d6-e47f8555b221/HONBU1988_Lightened.jpg"
    },
    {
      name: "Openroad Porsche Richmond",
      address: "13171 Smallwood Place, Richmond",
      image: "https://canadianautodealer.ca/wp-content/uploads/2022/12/4-OpenRoad-and-Dilawri-open-flagship-Porsche-Centre-Richmond-1200.jpg"
    },
    {
      name: "E15",
      address: "322 East 15 Avenue, Vancouver",
      image: "https://vancouverpresales.com/wp-content/uploads/2021/05/1616442316-V2_E15_Streetscape_Full_blockC.jpeg"
    },
    {
      name: "Burnaby Alliance Church",
      address: "8585 Armstrong Ave., Burnaby",
      image: "https://dq5pwpg1q8ru0.cloudfront.net/2024/01/20/19/54/53/d6191c94-5e0b-494a-8ace-2890c48296f7/BAC2-splash.jpg"
    },
    {
      name: "Tatalu Elementary School",
      address: "1970 165A Street, Surrey",
      image: "https://media.surreyschools.ca/media/Default/pgg/5/ta'talu-gallery-1.jpg"
    },
    {
      name: "Century City Tower",
      address: "13573 98A Avenue, Surrey",
      image: "https://bluecity.ca/wp-content/uploads/2022/11/locale-hero.jpg"
    },
    {
      name: "Transcold Distribution",
      address: "10895 Scott Road, Surrey",
      image: "https://media.licdn.com/dms/image/v2/D5610AQHPBJQ7F_8_Hw/image-shrink_800/B56ZWQrmiTHoAc-/0/1741889105055?e=2147483647&v=beta&t=zWnTbLwC7BPnyD41bfyUEz-gpFyJnIDMV4DrsN04hno"
    },
    {
      name: "Wayfair",
      address: "8011 Zylmans Way, Richmond",
      image: "https://omicronaec.com/wp-content/uploads/2024/04/23-08-02_Omicron_Richmond-Industrial_Wayfair_046-scaled.jpg"
    },
    {
      name: "Oakridge Park",
      address: "650 West 41ST, Vancouver",
      image: "https://oakridgepark.com/wp-content/uploads/2021/08/cultural-park.jpg"
    },
    {
      name: "Sobeys",
      address: "7664 80TH Ave, Delta",
      image: "https://www.vmcdn.ca/f/files/shared/feeds/cp/2024/06/3ded64b5-3793-41bf-aa82-ee57a143b714.jpg"
    },
    {
      name: "UBC Food and Beverage Innovation Centre",
      address: "2220 East Mall, Vancouver",
      image: "https://ubcproperties.com/wp-content/uploads/2023/08/exterior2_54020058795_o-1-1-scaled.jpg"
    },
    {
      name: "Snokomish Elementary School",
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
              HVAC Sheet Metal Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Specializing in custom ductwork fabrication and sheet metal solutions for residential, commercial, and industrial HVAC systems throughout the Lower Mainland.
            </p>
            <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900">
              <Link to="/contact">Request Service Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              View our completed HVAC sheet metal installations across the Lower Mainland. Each project showcases our commitment to quality craftsmanship and professional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${project.image})` }}></div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.address}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Get Quote for Similar Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Service */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sheet Metal Expertise
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Our specialized team provides expert sheet metal fabrication and ductwork solutions for your project. 
              We're committed to delivering precision metalwork and customer satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Custom Fabrication</h3>
                <p className="text-gray-600">Precision sheet metal work in our shop</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Installers</h3>
                <p className="text-gray-600">Skilled technicians with metalwork expertise</p>
              </div>
              <div className="text-center">
                <Map className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Service</h3>
                <p className="text-gray-600">Serving all of Lower Mainland</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900">
              <a href="tel:6045404955">Call for Service</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Advance Sheet Metal?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">40+ Years Experience</h3>
                    <p className="text-gray-600">Decades of experience serving the Lower Mainland community.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                    <p className="text-gray-600">All work guaranteed and completed to the highest standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">Upfront pricing with no hidden fees or surprises.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Delta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Richmond</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Surrey</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Vancouver</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Burnaby</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>New Westminster</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Langley</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-gray-800" />
                  <span>Coquitlam</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-gray-800 hover:bg-gray-900">
                <Link to="/contact">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
