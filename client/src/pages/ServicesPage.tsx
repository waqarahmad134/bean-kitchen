import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessTimeline from '@/components/ProcessTimeline';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import type { Service } from '@/types/schema';

export default function ServicesPage() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="py-10 bg-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4" data-testid="text-services-title">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your kitchen with our comprehensive design and renovation services
          </p>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service) => (
                <div key={service.id} className="bg-card p-8 rounded-md hover-elevate" data-testid={`card-service-${service.id}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.summary}</p>
                  <Button variant="outline">Learn More</Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
