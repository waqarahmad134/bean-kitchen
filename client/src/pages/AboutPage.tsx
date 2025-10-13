import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import StatsCounter from '@/components/StatsCounter';
import type { TeamMember } from '@shared/schema';

export default function AboutPage() {
  const { data: team, isLoading } = useQuery<TeamMember[]>({
    queryKey: ['/api/team'],
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4" data-testid="text-about-title">
            About Argu Kitchen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating award-winning luxury kitchens for over 25 years
          </p>
        </div>
      </div>

      <AboutSection />
      <StatsCounter />

      <div className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Our Team</h2>
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team?.map((member) => (
                <div key={member.id} className="text-center" data-testid={`card-team-${member.id}`}>
                  <div className="w-48 h-48 bg-muted-foreground/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-4xl font-heading">{member.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <TestimonialsCarousel />
      <Footer />
    </div>
  );
}
