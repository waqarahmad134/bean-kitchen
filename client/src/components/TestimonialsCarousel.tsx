import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Emma Tehlovic',
    role: 'Director – Customer Operations',
    company: 'awnhe.com',
    quote: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    initials: 'ET',
  },
  {
    name: 'Monica Nzeogwu',
    role: 'Project Manager',
    company: 'Industry: Jewellery',
    quote: 'I would like to take this opportunity to say that the quality of service offered by Argu has been highly impressive.',
    initials: 'MN',
  },
  {
    name: 'Federico Petrucci',
    role: 'Founder and Chairman',
    company: 'Communications Manager',
    quote: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex. Duis autem vel eum iriure dolor.',
    initials: 'FP',
  },
  {
    name: 'Pero Jacobs',
    role: 'Art Teacher',
    company: 'Industry: Design',
    quote: 'I would like to take this opportunity to say that every aspect of your service has been perfect. Thank you so much!',
    initials: 'PJ',
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-muted" data-testid="section-testimonials">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4" data-testid={`testimonial-${index}`}>
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                    <p className="text-xl md:text-2xl text-foreground/80 mb-8 italic max-w-3xl mx-auto" data-testid={`text-quote-${index}`}>
                      "{testimonial.quote}"
                    </p>
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarFallback className="bg-primary text-white text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="text-lg font-semibold" data-testid={`text-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground" data-testid={`text-role-${index}`}>
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-company-${index}`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-background p-3 rounded-md hover-elevate border"
            data-testid="button-prev-testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-background p-3 rounded-md hover-elevate border"
            data-testid="button-next-testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8" data-testid="dots-testimonials">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? 'bg-primary w-12' : 'bg-border'
              }`}
              data-testid={`dot-testimonial-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
