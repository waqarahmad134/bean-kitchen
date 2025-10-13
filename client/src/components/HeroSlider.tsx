import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@assets/generated_images/Modern_luxury_kitchen_hero_57a35960.png';
import heroImage2 from '@assets/generated_images/Classic_white_kitchen_design_e9c601fe.png';
import heroImage3 from '@assets/generated_images/Minimalist_black_kitchen_showcase_e57b8d05.png';

const slides = [
  {
    image: heroImage1,
    badge: 'Award 2019',
    title: ['Award winning kitchen', 'renovations company.'],
    subtitle: 'Argu WordPress theme for interior design and kitchen websites. Perfect choice to show off your luxury furniture products.',
  },
  {
    image: heroImage2,
    badge: 'Eco Friendly',
    title: ['Transform your', 'dream kitchen today.'],
    subtitle: 'Custom cabinets are built from scratch according to the homeowner\'s specific design and requests.',
  },
  {
    image: heroImage3,
    badge: 'Best Brand',
    title: ['Luxury kitchen design', 'for modern living.'],
    subtitle: 'We provide a comprehensive cabinetry design & installation service for your perfect space.',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden" data-testid="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          data-testid={`slide-${index}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-3xl">
                <p className="text-xs md:text-sm text-white/90 tracking-[0.3em] uppercase mb-4 font-accent" data-testid="text-welcome">
                  Welcome to
                </p>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6" data-testid={`text-title-${index}`}>
                  {slide.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl" data-testid={`text-subtitle-${index}`}>
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="default" className="text-base" data-testid="button-showroom">
                    Visit Showroom
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    data-testid="button-launch"
                  >
                    Launch
                  </Button>
                </div>
                {slide.badge && (
                  <div className="mt-12 inline-block" data-testid={`badge-${index}`}>
                    <div className="border-2 border-primary/50 rounded-full p-6 inline-flex flex-col items-center">
                      <div className="text-xs text-primary tracking-widest uppercase mb-1">Best Brand</div>
                      <div className="text-white font-bold">{slide.badge}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm p-3 rounded-md hover-elevate border border-white/20"
        data-testid="button-prev"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm p-3 rounded-md hover-elevate border border-white/20"
        data-testid="button-next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3" data-testid="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary w-12' : 'bg-white/50'
            }`}
            data-testid={`dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
