import { useState } from "react";
import { Building, Clock, Layers, AlertTriangle, Shovel, Hammer, Zap, Box } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import rccImage from "@/assets/construction-rcc.jpg";
import framedImage from "@/assets/construction-framed.jpg";
import prefabImage from "@/assets/construction-prefab.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Constructions = () => {
  const [selectedMethod, setSelectedMethod] = useState("rcc");
  
  const constructionMethods = [
    {
      title: "RCC Structure",
      icon: Building,
      timeline: "Since 1920s",
      image: rccImage,
      description: "Reinforced Cement Concrete (RCC) construction has been the backbone of modern construction for over a century.",
      history: [
        "1920s: Introduction of RCC in India for major infrastructure projects",
        "1950s: Widespread adoption in residential and commercial buildings",
        "1980s: Advanced formwork and pre-stressed concrete techniques",
        "2000s: Integration of high-strength concrete and fiber reinforcement",
        "2020s: Smart concrete with self-healing properties and IoT sensors"
      ],
      advantages: [
        "Excellent compressive and tensile strength",
        "Fire resistant and durable",
        "Versatile for various architectural designs",
        "Long-lasting with minimal maintenance",
        "Cost-effective for large structures"
      ],
      applications: "Ideal for high-rise buildings, bridges, dams, and heavy-duty structures"
    },
    {
      title: "Framed Structure",
      icon: Layers,
      timeline: "Since 1960s",
      image: framedImage,
      description: "Framed structures revolutionized construction with their flexibility and efficiency in modern building design.",
      history: [
        "1960s: Steel frame construction gains popularity globally",
        "1970s: Introduction of column-beam framework systems",
        "1990s: Prefabricated frame components become common",
        "2010s: Lightweight steel framing for rapid construction",
        "2020s: Hybrid frame systems combining steel and concrete"
      ],
      advantages: [
        "Faster construction time",
        "Flexible floor plans and open spaces",
        "Earthquake resistant design",
        "Easy to modify and extend",
        "Reduced foundation costs"
      ],
      applications: "Perfect for commercial buildings, multi-story apartments, and office complexes"
    },
    {
      title: "Pre-Fabricated Structure",
      icon: Clock,
      timeline: "Since 2000s",
      image: prefabImage,
      description: "Pre-fabrication represents the future of construction with off-site manufacturing and rapid on-site assembly.",
      history: [
        "2000s: Modular construction gains traction in developed countries",
        "2005: Pre-cast concrete panels become mainstream",
        "2010: Introduction of 3D-printed building components",
        "2015: Smart prefab units with integrated systems",
        "2025: AI-driven customization and robotic assembly"
      ],
      advantages: [
        "Up to 50% faster construction",
        "Superior quality control in factory settings",
        "Reduced on-site waste and environmental impact",
        "Cost savings through bulk production",
        "Weather-independent construction"
      ],
      applications: "Best for residential projects, warehouses, temporary structures, and rapid deployment needs"
    }
  ];

  return (
<div className="min-h-screen flex flex-col pt-[120px] md:pt-[180px]">
      <Header />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-secondary mb-4">Construction Methods</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We employ cutting-edge construction techniques combining traditional wisdom with modern innovation
          </p>
        </div>

        {/* Construction Services Module */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Construction Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Shovel className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Excavation & Back Filling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional earth excavation, ground leveling, and back filling services with proper compaction techniques.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Hammer className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Dismantling Works</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Safe and efficient demolition and dismantling services with proper debris removal and site clearance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Building className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Fabrication & Erection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Steel and structural fabrication with expert erection and installation services for various building types.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Plumbing & Electrical</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete MEP (Mechanical, Electrical, Plumbing) services with modern fixtures and energy-efficient systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105 md:col-span-2">
              <CardHeader>
                <Box className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Building Outside Flooring Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <div>
                      <strong>VDF Flooring:</strong> Vacuum Dewatered Flooring for superior strength and durability
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <div>
                      <strong>Paver Brick Flooring:</strong> Aesthetic and durable outdoor paving solutions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-2 border-amber-500/50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-amber-700 dark:text-amber-500 mb-2">
                Important Service Note
              </h3>
              <p className="text-foreground text-lg">
                <strong>RAVS Corporate Services specializes in mid-rise construction projects.</strong> We do not undertake 
                high-rise building construction projects exceeding 15 floors. Our expertise lies in residential, 
                commercial, and industrial structures up to G+14 floors, ensuring focused quality and safety standards.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Image Display */}
        <div className="mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            {constructionMethods.map((method, index) => {
              const tabValue = index === 0 ? "rcc" : index === 1 ? "framed" : "prefab";
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    selectedMethod === tabValue ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img 
                    src={method.image} 
                    alt={method.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{method.title}</h3>
                      <p className="text-lg">{method.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Tabs defaultValue="rcc" className="w-full" onValueChange={setSelectedMethod}>
  <TabsList className="w-full mb-6 md:mb-8">
    <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap px-2 scrollbar-none">
      <TabsTrigger value="rcc" className="text-lg min-w-[140px]">RCC Structure</TabsTrigger>
      <TabsTrigger value="framed" className="text-lg min-w-[140px]">Framed Structure</TabsTrigger>
      <TabsTrigger value="prefab" className="text-lg min-w-[140px]">Pre-Fabricated</TabsTrigger>
    </div>
  </TabsList>

          {constructionMethods.map((method, index) => {
    const Icon = method.icon;
    const tabValue = index === 0 ? "rcc" : index === 1 ? "framed" : "prefab";
    return (
      <TabsContent key={index} value={tabValue} className="space-y-8">
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-primary text-primary-foreground rounded-lg">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl">{method.title}</CardTitle>
                        <CardDescription className="text-lg mt-2">{method.timeline}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-foreground">{method.description}</p>

                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-4">Evolution Timeline</h3>
                      <div className="space-y-3">
                        {method.history.map((item, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary/10 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-secondary mb-4">Key Advantages</h3>
                        <ul className="space-y-2">
                          {method.advantages.map((advantage, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <span className="text-primary">✓</span>
                              <span>{advantage}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-accent/10 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-secondary mb-4">Best Applications</h3>
                        <p className="text-foreground">{method.applications}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="mt-16 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Traditional Methods</h3>
              <ul className="space-y-2">
                <li>✓ Time-tested techniques</li>
                <li>✓ Skilled craftsmanship</li>
                <li>✓ Local material expertise</li>
                <li>✓ Cultural architectural elements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Modern Innovation</h3>
              <ul className="space-y-2">
                <li>✓ Advanced machinery and tools</li>
                <li>✓ BIM and 3D modeling</li>
                <li>✓ Sustainable materials</li>
                <li>✓ Smart building technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Constructions;
