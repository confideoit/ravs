import { useState } from "react";
import { Palette, Home, Building, Store, Sofa, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Interiors = () => {
  // track which feature is expanded (format: `${serviceIndex}-${featureIndex}`)
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const services = [
    {
      title: "Residential Interiors",
      icon: Home,
      description: "Transform your house into a dream home",
      features: [
        {
          name: "Living room design and furnishing",
          detail:
            "Our living room designs focus on creating cozy, elegant, and welcoming spaces. From sofa placement and lighting to color coordination and decor, we ensure your living area reflects your personality while maintaining comfort and style."
        },
        {
          name: "Bedroom interiors with custom wardrobes",
          detail:
            "We design tranquil bedrooms that combine functionality with aesthetics. Our custom wardrobes maximize storage, maintain symmetry, and match the theme of your interiors for a seamless finish."
        },
        {
          name: "Modular kitchen design",
          detail:
            "Our modular kitchens are designed for efficiency, with optimized layouts, durable materials, and modern aesthetics. We focus on accessibility, easy maintenance, and personalized finishes."
        },
        {
          name: "Bathroom renovation and fittings",
          detail:
            "We create luxurious yet practical bathrooms using modern fittings, waterproof materials, and elegant finishes that elevate daily routines into refreshing experiences."
        },
        {
          name: "Home office setup",
          detail:
            "We design ergonomic home office spaces that promote focus, comfort, and productivity — ideal for both work-from-home professionals and students."
        },
        {
          name: "Kids room design",
          detail:
            "Our kids’ rooms combine fun, color, and creativity with safety and functionality. We create spaces that grow with your child’s imagination."
        }
      ]
    },
    {
      title: "Commercial Interiors",
      icon: Building,
      description: "Professional spaces that inspire productivity",
      features: [
        {
          name: "Office space planning",
          detail:
            "We optimize your office layout for collaboration and efficiency, ensuring smart use of space with well-defined zones for work, meetings, and relaxation."
        },
        {
          name: "Reception and lobby design",
          detail:
            "Your reception is your first impression. We design elegant and professional lobbies that reflect your brand’s tone and enhance visitor experience."
        },
        {
          name: "Conference room setup",
          detail:
            "Our conference room designs integrate acoustics, lighting, and technology for seamless meetings and presentations."
        },
        {
          name: "Workstation design",
          detail:
            "We provide ergonomic workstation designs that enhance employee comfort, concentration, and efficiency."
        },
        {
          name: "Break room amenities",
          detail:
            "Break rooms that promote relaxation and team bonding with smart layouts and refreshing aesthetics."
        },
        {
          name: "Brand identity integration",
          detail:
            "We weave your brand identity into every design element — from colors to furniture and decor — for a unified, recognizable atmosphere."
        }
      ]
    },
    {
      title: "Retail Interiors",
      icon: Store,
      description: "Create engaging shopping experiences",
      features: [
        {
          name: "Store layout optimization",
          detail:
            "We plan store layouts that guide customer flow efficiently, maximize visibility of key products, and create a smooth shopping experience."
        },
        {
          name: "Display unit design",
          detail:
            "Our display units combine aesthetics and utility, crafted to highlight your merchandise and reinforce brand storytelling."
        },
        {
          name: "Lighting for product showcase",
          detail:
            "We use layered lighting techniques to accentuate your products and set the right mood for your target audience."
        },
        {
          name: "Customer flow planning",
          detail:
            "Strategic layout and signage ensure intuitive movement within your retail space, increasing engagement and sales."
        },
        {
          name: "Trial room design",
          detail:
            "Comfortable and private trial rooms that enhance customer experience and satisfaction."
        },
        {
          name: "Billing counter setup",
          detail:
            "We design efficient billing counters with proper ergonomics, storage, and accessibility for smooth transactions."
        }
      ]
    },
    {
      title: "Hospitality Interiors",
      icon: Sofa,
      description: "Comfortable and welcoming spaces",
      features: [
        {
          name: "Restaurant and cafe interiors",
          detail:
            "We craft inviting dining spaces that enhance guest comfort while maintaining operational efficiency and unique ambience."
        },
        {
          name: "Hotel room design",
          detail:
            "Elegant and comfortable hotel rooms designed with the right balance of aesthetics, durability, and guest experience in mind."
        },
        {
          name: "Lobby and reception areas",
          detail:
            "Warm, grand, and efficient lobby spaces designed to leave lasting first impressions."
        },
        {
          name: "Banquet hall setup",
          detail:
            "Flexible and visually impressive banquet spaces equipped with proper lighting, acoustics, and seating arrangements."
        },
        {
          name: "Guest room furnishing",
          detail:
            "Customized furnishings that ensure both comfort and easy maintenance while reflecting your property’s theme."
        },
        {
          name: "Themed decor solutions",
          detail:
            "We design unique, story-driven spaces with cohesive décor themes that elevate brand identity and customer appeal."
        }
      ]
    }
  ];

  const designProcess = [
    { step: "Consultation", description: "Understanding your vision, requirements, and budget" },
    { step: "Concept Design", description: "Creating mood boards and initial design concepts" },
    { step: "3D Visualization", description: "Realistic renders of your future space" },
    { step: "Material Selection", description: "Choosing quality materials within your budget" },
    { step: "Execution", description: "Professional installation with attention to detail" },
    { step: "Handover", description: "Final touches and quality assurance" }
  ];

  return (
<div className="min-h-screen flex flex-col pt-[120px] md:pt-[180px]">
      <Header />
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-secondary mb-4">Interior Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete interior design and execution services for all types of buildings (except high-rise)
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, sIdx) => {
            const Icon = service.icon;
            return (
              <Card key={sIdx} className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => {
                      const id = `${sIdx}-${fIdx}`;
                      const isOpen = expanded === id;
                      return (
                        <li key={fIdx} className="border-b border-gray-200 pb-2">
                          <button
                            className="flex items-center justify-between w-full text-left text-lg font-medium text-secondary hover:text-primary transition"
                            onClick={() => toggleExpand(id)}
                          >
                            <div className="flex items-center gap-2">
                              <Palette className="h-5 w-5 text-primary flex-shrink-0" />
                              {feature.name}
                            </div>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-primary" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-primary" />
                            )}
                          </button>
                          {isOpen && (
                            <p className="text-muted-foreground mt-2 text-sm leading-relaxed pl-7">
                              {feature.detail}
                            </p>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Design Process */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((phase, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">{phase.step}</h3>
                </div>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Note: We Do Not Handle High-Rise Buildings
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our interior services are specialized for residential homes, commercial spaces, retail stores, 
            and hospitality venues. For high-rise building interiors, we recommend specialized firms with 
            the necessary certifications and equipment.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Interiors;
