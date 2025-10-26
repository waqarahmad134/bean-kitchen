import { useEffect, useState } from 'react';

export default function StatsCounter() {
  const [yearsCount, setYearsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [designsCount, setDesignsCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const yearsTarget = 7;
    const customersTarget = 1879;
    const designsTarget = 350;

    const animateCount = (setter: (value: number) => void, target: number) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    setTimeout(() => {
      animateCount(setYearsCount, yearsTarget);
      animateCount(setCustomersCount, customersTarget);
      animateCount(setDesignsCount, designsTarget);
    }, 100);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-foreground text-background" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div data-testid="stat-years">
            <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-3" data-testid="text-years-count">
              {yearsCount}
            </div>
            <p className="text-lg text-background/80" data-testid="text-years-label">
              Years experience
            </p>
          </div>
          <div data-testid="stat-customers">
            <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-3" data-testid="text-customers-count">
              {customersCount}
            </div>
            <p className="text-lg text-background/80" data-testid="text-customers-label">
              Happy customers
            </p>
          </div>
          <div data-testid="stat-designs">
            <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-3" data-testid="text-designs-count">
              {designsCount}+
            </div>
            <p className="text-lg text-background/80" data-testid="text-designs-label">
              New designs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
