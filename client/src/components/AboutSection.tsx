import { Users, Leaf, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/portfolio/about_us.jpg';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs md:text-sm text-primary tracking-[0.3em] uppercase mb-4 font-accent" data-testid="text-section-label">
              About Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
              Bean design Studio.
            </h2>
            <h3 className="text-xl md:text-2xl text-foreground/80 mb-6" data-testid="text-about-subtitle">
              We provide a comprehensive cabinetry design & installation service for your perfect space.
            </h3>
            <p className="text-muted-foreground mb-8" data-testid="text-about-description">
              Custom cabinets are built from scratch according to the homeowner's specific design and requests.
            </p>
            <Button variant="default" size="lg" data-testid="button-about">
              About Us
            </Button>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Design consultation"
              className="rounded-md w-full h-[420px]"
              data-testid="img-about"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center" data-testid="feature-workers">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-heading font-semibold mb-3" data-testid="text-feature-title-1">
              Friendly & skilled workers
            </h4>
            <p className="text-muted-foreground" data-testid="text-feature-desc-1">
              Nunc a egestas lacus. Lorem ipsum dolor sit amet larmus & gravida.
            </p>
          </div>
          <div className="text-center" data-testid="feature-eco">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-heading font-semibold mb-3" data-testid="text-feature-title-2">
              Eco friendly kitchen
            </h4>
            <p className="text-muted-foreground" data-testid="text-feature-desc-2">
              Nullam vitae ex finibus, consectetur enim eget, blandit elit & amet dolor.
            </p>
          </div>
          <div className="text-center" data-testid="feature-estimate">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-heading font-semibold mb-3" data-testid="text-feature-title-3">
              Get a personal estimate
            </h4>
            <p className="text-muted-foreground" data-testid="text-feature-desc-3">
              Integer malesuada sodales nisi, rutrum gravida metus elit dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
