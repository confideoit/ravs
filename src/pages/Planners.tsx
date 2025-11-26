import React, { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import planningImage from "@/assets/planning-interior.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// --------------------------------------------------------
// UPDATED 10 GRIDS – EXACTLY AS YOU REQUESTED
// --------------------------------------------------------
const services = [
  {
    category: "Dismantling Works",
    items: [
      "Structural dismantling",
      "Safe material removal",
      "Debris segregation",
      "Load-bearing assessment",
      "Site clearance",
    ],
    description:
      "Complete dismantling of existing structures with strict safety, debris removal, and site preparation.",
  },
  {
    category: "Excavation",
    items: [
      "Earth cutting & removal",
      "Soil leveling",
      "Trench excavation",
      "Rock breaking",
      "Site preparation",
    ],
    description:
      "Excavation services including earth removal, trenching, land leveling, and rock cutting.",
  },
  {
    category: "Foundation Works",
    items: [
      "PCC work",
      "Footing preparation",
      "Rebar placement",
      "Formwork setting",
      "Concrete curing",
    ],
    description:
      "Complete foundation works including PCC, reinforcement, formwork, and high-quality curing.",
  },
  {
    category: "Cellar & Basement Works",
    items: [
      "Basement excavation",
      "Retaining walls",
      "Shuttering works",
      "Waterproofing",
      "RCC structural works",
    ],
    description:
      "Construction of strong basement and cellar structures with waterproofing and RCC design.",
  },
  {
    category: "Backfilling Works",
    items: [
      "Approved soil filling",
      "Compaction",
      "Moisture control",
      "Layered filling",
      "Surface leveling",
    ],
    description:
      "Backfilling with approved materials, proper compaction, and moisture-level control.",
  },
  {
    category: "Column & Slab Works",
    items: [
      "RCC column casting",
      "Slab shuttering",
      "Rebar alignment",
      "Concrete pumping",
      "Structural curing",
    ],
    description:
      "Column and slab casting with precise reinforcement, shuttering, and curing practices.",
  },
  {
    category: "Brickwork & Plastering Finishing Works",
    items: [
      "Brick masonry",
      "Internal plastering",
      "External plastering",
      "Surface finishing",
      "Leveling works",
    ],
    description:
      "Brick masonry, internal & external plastering, and complete surface finishing solutions.",
  },
  {
    category: "MEP Works",
    items: [
      "Electrical routing",
      "Plumbing lines",
      "HVAC ducting",
      "Fire safety lines",
      "System commissioning",
    ],
    description:
      "Mechanical, Electrical, and Plumbing installation, routing, and safety system integration.",
  },
  {
    category: "Tiles & Granite Works",
    items: [
      "Tile laying",
      "Granite cutting",
      "Floor leveling",
      "Grouting works",
      "Wall cladding",
    ],
    description:
      "Tiles and granite installation with expert leveling, cutting, and finishing.",
  },
  {
    category: "Other Finishing Works",
    items: [
      "Painting works",
      "False ceiling",
      "Waterproofing",
      "Joinery works",
      "Interior finishing",
    ],
    description:
      "Painting, waterproofing, joinery, false ceiling, and complete interior finishing works.",
  },
];

// Map category → description
const detailMap: Record<string, string> = {};
services.forEach((s) => {
  detailMap[s.category] = s.description;
});

const Planners: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openItem = (category: string) => {
    setSelectedItem({
      title: category,
      service: "Construction & Planning Services",
      description: detailMap[category],
    });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "";
  };

  return (
<div className="min-h-screen flex flex-col pt-[120px] md:pt-[180px]">
      <Header />
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-secondary mb-4">
            Planning Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end planning and execution services with accuracy and quality.
          </p>
        </div>

        {/* Banner Carousel */}
        <div className="mb-16">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <img
                    src={planningImage}
                    alt="Planning Services"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">
                        Professional Planning & Construction
                      </h3>
                      <p className="text-lg">
                        Structured planning to execution — handled with
                        excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* 2 Grids Per Row — 10 Total Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.category}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 cursor-pointer"
              onClick={() => openItem(service.category)}
            >
              {/* Title */}
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                {service.category}
              </h2>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Popup Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal} />

          <div className="relative max-w-2xl w-full mx-4 bg-white rounded-lg shadow-xl p-6 z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-secondary">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedItem.service}
                </p>
              </div>

              <button
                onClick={closeModal}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X />
              </button>
            </div>

            <p className="text-base leading-relaxed">
              {selectedItem.description}
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planners;
