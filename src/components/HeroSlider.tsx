import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSlider = () => {
  const [api, setApi] = useState<any>();
  
  const slides = [
    {
      title: "RCC Frame Construction Excellence",
      description: "Building mid-rise commercial and residential structures with precision and quality",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071"
    },
    {
      title: "Pre-Engineered Buildings (PEB)",
      description: "Modern, efficient warehouse and industrial construction solutions",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
    },
    {
      title: "Commercial Interiors",
      description: "Transform retail spaces and offices with our expert interior solutions",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
    },
    {
      title: "Land Development & Consulting",
      description: "Professional consultancy services across South India",
      image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=2070"
    },
  ];

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent flex items-end">
                  <div className="container mx-auto px-4 pb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default HeroSlider;
