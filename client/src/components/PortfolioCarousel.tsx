import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@assets/generated_images/Modern_luxury_kitchen_hero_57a35960.png';
import heroImage2 from '@assets/generated_images/Classic_white_kitchen_design_e9c601fe.png';
import heroImage3 from '@assets/generated_images/Minimalist_black_kitchen_showcase_e57b8d05.png';
import heroImage4 from '@assets/generated_images/Walnut_luxury_kitchen_interior_583d3f1e.png';

const projects = [
  { id: 1, title: 'Andy Kitchen', category: 'Top sellers', image: heroImage1 },
  { id: 2, title: 'Aqua Space Kitchen', category: 'Top sellers', image: heroImage2 },
  { id: 3, title: 'Library Kitchen', category: 'Top sellers', image: heroImage3 },
  { id: 4, title: 'Detroit Kitchen', category: 'Top sellers', image: heroImage4 },
  { id: 5, title: 'Pelican Kitchen', category: 'Top sellers', image: heroImage1 },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm text-primary tracking-[0.3em] uppercase mb-4 font-accent" data-testid="text-portfolio-label">
            Projects
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8" data-testid="text-portfolio-title">
            Explore our Award-Winning designs.
          </h2>
          <Button variant="default" size="lg" data-testid="button-more-designs">
            More Designs
          </Button>
        </div>

        <div className="relative mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleProjects().map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="group relative overflow-hidden rounded-md hover-elevate"
                data-testid={`project-${idx}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs tracking-widest uppercase mb-2 text-primary" data-testid={`text-category-${idx}`}>
                      {project.category}
                    </p>
                    <h4 className="text-2xl font-heading font-semibold" data-testid={`text-title-${idx}`}>
                      {project.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border p-3 rounded-md hover-elevate"
            data-testid="button-prev-portfolio"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border p-3 rounded-md hover-elevate"
            data-testid="button-next-portfolio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8" data-testid="dots-portfolio">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-12' : 'bg-border'
              }`}
              data-testid={`dot-portfolio-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
