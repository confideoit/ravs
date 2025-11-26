import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Compass,
  Palette,
  MapPin,
  ArrowRight,
  Shield,
  Users,
  HardHat,
  Leaf,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";

const Home = () => {
  const [showOptions, setShowOptions] = useState(false);

  const services = [
    {
      title: "Planning Services",
      description:
        "Comprehensive planning solutions from construction to plumbing, interior, elevator, and all necessary services.",
      icon: Compass,
      link: "/planners",
      color: "text-primary",
    },
    {
      title: "Construction",
      description:
        "Expert construction services using RCC Structure, Framed Structure, and Pre-Fabricated Structure methods.",
      icon: Building2,
      link: "/constructions",
      color: "text-primary",
    },
    {
      title: "Interiors",
      description:
        "Complete interior solutions for all types of buildings except high-rise structures.",
      icon: Palette,
      link: "/interiors",
      color: "text-primary",
    },
    {
      title: "Land Consulting",
      description:
        "Professional land consultancy services across AP, Telangana, Bangalore, and Chennai.",
      icon: MapPin,
      link: "/land-consulting",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">

      {/* FIXED HEADER OFFSET FOR ALL DEVICES */}
      <div className="pt-32 md:pt-40"></div>

      <Header />
      <Navigation />
      <HeroSlider />

      <main className="flex-1 container mx-auto px-4 py-10">

        {/* Our Commitments */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Commitments
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We develop rural and urban projects including houses, apartments,
              commercial buildings, hospitals, hospitality, warehouses, resorts,
              and more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-xl transition-transform hover:scale-105">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Uncompromising Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Materials, techniques, and quality work that lasts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:shadow-xl transition-transform hover:scale-105">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-500 mb-2" />
                <CardTitle>Client-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transparency, timely communication, customized solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 hover:shadow-xl transition-transform hover:scale-105">
              <CardHeader>
                <HardHat className="h-12 w-12 text-orange-500 mb-2" />
                <CardTitle>Safety & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strict safety standards for teams and clients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 hover:shadow-xl transition-transform hover:scale-105">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-500 mb-2" />
                <CardTitle>Sustainable Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eco-friendly methods with efficient execution.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Construction, planning, interiors & land consulting services with 8
            years of expertise across South India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card
                key={i}
                className="group hover:shadow-lg transition-transform hover:scale-105 border-2 hover:border-primary"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary transition">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <Link to={service.link}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-white">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Contact us today for a consultation.
          </p>

          <div className="flex flex-col items-center">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="flex items-center justify-center bg-orange-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-orange-600"
            >
              <i className="fas fa-phone"></i> Contact Us
            </button>

            {showOptions && (
              <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">

                <a
                  href="https://wa.me/918886513111"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full w-full sm:w-auto"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>

                <a
                  href="mailto:info@ravscorporate.com"
                  className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-full w-full sm:w-auto"
                >
                  <i className="fas fa-envelope"></i> Email
                </a>

                <a
                  href="tel:+918886513111"
                  className="flex items-center justify-center gap-2 bg-purple-500 text-white px-6 py-2 rounded-full w-full sm:w-auto"
                >
                  <i className="fas fa-phone"></i> Call
                </a>

                <a
                  href="sms:+918886513111"
                  className="flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-2 rounded-full w-full sm:w-auto"
                >
                  <i className="fas fa-comment-dots"></i> Message
                </a>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
