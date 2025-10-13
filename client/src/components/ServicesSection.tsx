import { Wrench, Monitor, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import serviceImage1 from '@assets/generated_images/Walnut_luxury_kitchen_interior_583d3f1e.png';

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm text-primary tracking-[0.3em] uppercase mb-4 font-accent" data-testid="text-services-label">
            What We Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Transform Your Home.
          </h2>
          <h3 className="text-2xl md:text-3xl text-foreground/80 mb-6" data-testid="text-services-subtitle">
            Custom Built cabinets.
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-services-description">
            It is a long established fact that reader will be distracted by the readable content of page when looking at its layout or not & do.
          </p>
          <Button variant="default" size="lg" data-testid="button-services">
            More Services
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="group relative overflow-hidden rounded-md hover-elevate" data-testid="card-service-1">
            <img
              src={serviceImage1}
              alt="Remodeling"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <Wrench className="w-8 h-8 mb-3 text-primary" />
                <h4 className="text-2xl font-heading font-semibold" data-testid="text-service-title-1">
                  Remodeling
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-md hover-elevate" data-testid="card-service-2">
            <img
              src={serviceImage1}
              alt="Appliances"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <Monitor className="w-8 h-8 mb-3 text-primary" />
                <h4 className="text-2xl font-heading font-semibold" data-testid="text-service-title-2">
                  Appliances
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-md hover-elevate" data-testid="card-service-3">
            <img
              src={serviceImage1}
              alt="Design"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <Palette className="w-8 h-8 mb-3 text-primary" />
                <h4 className="text-2xl font-heading font-semibold" data-testid="text-service-title-3">
                  Design
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
