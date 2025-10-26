import { Button } from '@/components/ui/button';
import ctaImage from '@assets/generated_images/Minimalist_black_kitchen_showcase_e57b8d05.png';

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden" data-testid="section-final-cta">
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="Kitchen background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6" data-testid="text-final-cta-title">
          We can build you the kitchen of your dreams
        </h2>
        <p className="text-2xl md:text-3xl mb-8 text-white/90" data-testid="text-final-cta-subtitle">
          You dream It, we design It.
        </p>
        <Button
          size="lg"
          variant="default"
          className="text-lg px-8"
          data-testid="button-schedule"
          onClick={() => window.location.href = 'sms:+13053008643'}
        >
          Schedule a chat
        </Button>

      </div>
    </section>
  );
}
