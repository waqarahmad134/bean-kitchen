import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Portfolio } from '@/types/schema';

export default function PortfolioDetail() {
  const [, params] = useRoute('/portfolio/:slug');
  const { data: portfolio, isLoading } = useQuery<Portfolio>({
    queryKey: ['/api/portfolios', params?.slug],
    enabled: !!params?.slug,
  });

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!portfolio) {
    return <div className="min-h-screen flex items-center justify-center">Portfolio not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="relative h-[60vh]">
        <img
          src={portfolio.heroImage}
          alt={portfolio.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4" data-testid="text-portfolio-detail-title">
              {portfolio.title}
            </h1>
            {portfolio.headline && (
              <p className="text-2xl text-white/90 max-w-2xl">{portfolio.headline}</p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6">Project Details</h2>
            <p className="text-lg text-muted-foreground mb-8">{portfolio.description}</p>

            {portfolio.gallery && portfolio.gallery.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {portfolio.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${portfolio.title} - ${index + 1}`}
                    className="w-full h-64 object-cover rounded-md"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="bg-muted p-6 rounded-md space-y-6">
              <h3 className="text-xl font-heading font-semibold mb-4">Project Info</h3>
              
              {portfolio.client && (
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Client</p>
                    <p className="text-muted-foreground">{portfolio.client}</p>
                  </div>
                </div>
              )}

              {portfolio.location && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">{portfolio.location}</p>
                  </div>
                </div>
              )}

              {portfolio.completionDate && (
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Completion Date</p>
                    <p className="text-muted-foreground">{portfolio.completionDate}</p>
                  </div>
                </div>
              )}

              {portfolio.services && portfolio.services.length > 0 && (
                <div>
                  <p className="font-semibold mb-2">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Button className="w-full" data-testid="button-contact">
                Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
