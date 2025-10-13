import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white" data-testid="section-cta">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <Download className="w-16 h-16" />
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2" data-testid="text-cta-title">
                Download catalogues for Free.
              </h3>
              <p className="text-white/90" data-testid="text-cta-description">
                It is a long established fact that reader will be distracted by the readable content of page or.
              </p>
            </div>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="whitespace-nowrap"
            data-testid="button-register"
          >
            Register
          </Button>
        </div>
      </div>
    </section>
  );
}
