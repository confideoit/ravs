import { MapPin, TrendingUp, CheckCircle, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import landImage from "@/assets/land-consulting.jpg";
import relianceLogo from "@/assets/logos/reliance-logo.png";
import tataLogo from "@/assets/logos/tata-logo.png";
import bigbazaarLogo from "@/assets/logos/bigbazaar-logo.png";
import dmartLogo from "@/assets/logos/dmart-logo.png";
import spencersLogo from "@/assets/logos/spencers-logo.png";
import moreLogo from "@/assets/logos/more-logo.png";
import heritageLogo from "@/assets/logos/heritage-logo.png";
import vishalLogo from "@/assets/logos/vishal-logo.png";

const LandConsulting = () => {

  const locations = [
    { name: "Andhra Pradesh", icon: "📍" },
    { name: "Telangana", icon: "📍" },
    { name: "Bangalore", icon: "📍" },
    { name: "Chennai", icon: "📍" }
  ];

  const clientLogos = [
    { name: "Reliance", logo: relianceLogo },
    { name: "Tata", logo: tataLogo },
    { name: "Big Bazaar", logo: bigbazaarLogo },
    { name: "DMart", logo: dmartLogo },
    { name: "Spencer's", logo: spencersLogo },
    { name: "More", logo: moreLogo },
    { name: "Heritage", logo: heritageLogo },
    { name: "Vishal Mega Mart", logo: vishalLogo },
  ];

  const services = [
    {
      title: "Site Identification",
      description: "Finding the perfect location based on your business requirements",
      icon: MapPin
    },
    {
      title: "Due Diligence",
      description: "Comprehensive legal and technical verification of properties",
      icon: CheckCircle
    },
    {
      title: "Market Analysis",
      description: "Detailed market research and feasibility studies",
      icon: TrendingUp
    },
    {
      title: "Negotiation Support",
      description: "Expert assistance in price negotiation and deal closure",
      icon: Building2
    }
  ];

  return (
<div className="min-h-screen flex flex-col pt-[120px] md:pt-[180px]">
      <Header />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-secondary mb-4">Land Consulting Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional land consultancy across Andhra Pradesh, Telangana, Bangalore, and Chennai
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden max-w-5xl mx-auto">
            <img 
              src={landImage} 
              alt="Land Consulting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Expert Land Consulting</h3>
                <p className="text-lg">Comprehensive property solutions across South India</p>
              </div>
            </div>
          </div>
        </div>


        {/* Scrolling Company Logos */}
        <div className="mb-16 overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center text-secondary mb-6">
            Trusted by Leading Brands
          </h2>
          <div className="relative">
            <div className="flex animate-scroll gap-12 whitespace-nowrap">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center min-w-[140px] h-[140px] w-[140px] bg-card rounded-full shadow-lg border-4 border-primary/20 p-4 flex-shrink-0"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-[90px] max-w-[90px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl">Service Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <span className="text-3xl">{location.icon}</span>
                    <span className="font-semibold text-lg">{location.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent">
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose RAVS?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Extensive network across South India</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Experience with major retail brands</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>End-to-end consultancy services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Quick turnaround time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Transparent and ethical practices</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Requirement Analysis" },
              { step: "2", title: "Site Search" },
              { step: "3", title: "Property Evaluation" },
              { step: "4", title: "Documentation" },
              { step: "5", title: "Deal Closure" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  {phase.step}
                </div>
                <p className="font-semibold">{phase.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LandConsulting;
