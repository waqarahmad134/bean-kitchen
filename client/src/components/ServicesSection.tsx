import { useState } from "react";
import { Wrench, Monitor, Palette } from "lucide-react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Button } from "@/components/ui/button";

// --- Images ---
import serviceImage1 from "@assets/portfolio/design_blue_prints.jpg";
import serviceImage2 from "@assets/portfolio/design_blue_prints1.jpg";
import serviceImage3 from "@assets/portfolio/design_blue_prints2.jpg";
import d3_1 from "@/assets/portfolio/3d_1.jpg";
import d3_2 from "@/assets/portfolio/3d_2.jpg";

import cabinetImg1 from "@assets/portfolio/custom_cabin_1.jpg";
import cabinetImg from "@assets/portfolio/custom_cabin_2.jpg";
import cabinetImg2 from "@assets/portfolio/custom_cabin_3.jpg";
import cabinetImg3 from "@assets/portfolio/custom_cabin_4.jpg";
import cabinetImg4 from "@assets/portfolio/custom_cabin_5.jpg";

import modernkitchen from "@/assets/portfolio/modern_kitchen.jpg"
import standardkitchen from "@/assets/portfolio/standard_kitchen.jpg"
import outdoorkitchen from "@/assets/portfolio/outdoor_kitchen.jpg"

export default function ServicesSection() {
  // --- Define all services dynamically ---
  const services = [
    {
      title: "Design Blue Prints",
      icon: <Wrench className="w-8 h-8 mb-3 text-primary" />,
      images: [serviceImage1, serviceImage2, serviceImage3],
      cover: serviceImage1,
    },
    {
      title: "3D Visualization",
      icon: <Monitor className="w-8 h-8 mb-3 text-primary" />,
      images: [d3_1, d3_2],
      cover: d3_1,
    },
    {
      title: "Custom Cabinetry",
      icon: <Palette className="w-8 h-8 mb-3 text-primary" />,
      images: [cabinetImg , cabinetImg1 ,cabinetImg2 , cabinetImg3 ,cabinetImg4],
      cover: cabinetImg,
    },
    {
      title: "Standard Kitchen",
      icon: <Palette className="w-8 h-8 mb-3 text-primary" />,
      images: [],
      cover: standardkitchen,
    },
    {
      title: "Modern Kitchen",
      icon: <Palette className="w-8 h-8 mb-3 text-primary" />,
      images: [],
      cover: modernkitchen,
    },
    {
      title: "Outdoor Kitchen",
      icon: <Palette className="w-8 h-8 mb-3 text-primary" />,
      images: [],
      cover: outdoorkitchen,
    },
  ];

  // --- Shared Lightbox State ---
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const currentService = services[currentServiceIndex];

  return (
    <section className="py-16 md:py-24 bg-muted" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm text-primary tracking-[0.3em] uppercase mb-4 font-accent">
            What We Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transform Your Home.
          </h2>
          <h3 className="text-2xl md:text-3xl text-foreground/80 mb-6">
            Custom Built Cabinets.
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-md hover-elevate cursor-pointer"
              onClick={() => {
                setCurrentServiceIndex(index);
                setPhotoIndex(0);
                setLightboxOpen(true);
              }}
            >
              <img
                src={service.cover}
                alt={service.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  {service.icon}
                  <h4 className="text-2xl font-heading font-semibold">
                    {service.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Viewer */}
        {lightboxOpen && currentService && (
          <Lightbox
            mainSrc={currentService.images[photoIndex]}
            nextSrc={
              currentService.images[
                (photoIndex + 1) % currentService.images.length
              ]
            }
            prevSrc={
              currentService.images[
                (photoIndex + currentService.images.length - 1) %
                  currentService.images.length
              ]
            }
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + currentService.images.length - 1) %
                  currentService.images.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % currentService.images.length)
            }
            animationDuration={400}
          />
        )}
      </div>
    </section>
  );
}
