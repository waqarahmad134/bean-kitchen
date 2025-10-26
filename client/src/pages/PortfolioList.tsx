import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Portfolio } from '@/types/schema';

export default function PortfolioList() {
  const { data: portfolios, isLoading } = useQuery<Portfolio[]>({
    queryKey: ['/api/portfolios'],
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold text-center mb-4" data-testid="text-portfolio-title">
            Our Portfolio
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore our award-winning luxury kitchen designs
          </p>

          {isLoading ? (
            <div className="text-center" data-testid="loading-portfolios">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolios?.map((portfolio) => (
                <Link key={portfolio.id} href={`#`}>
                  <div className="group relative overflow-hidden rounded-md hover-elevate" data-testid={`card-portfolio-${portfolio.id}`}>
                    <img
                      src={portfolio.heroImage}
                      alt={portfolio.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <div className="text-white">
                        {portfolio.style && (
                          <p className="text-xs tracking-widest uppercase mb-2 text-primary">
                            {portfolio.style}
                          </p>
                        )}
                        <h3 className="text-2xl font-heading font-semibold">{portfolio.title}</h3>
                        {portfolio.headline && (
                          <p className="text-sm mt-2 text-white/80">{portfolio.headline}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
