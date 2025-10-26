import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import VideoSection from '@/components/VideoSection';
import InteractiveTabs from '@/components/InteractiveTabs';
import CTASection from '@/components/CTASection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import StatsCounter from '@/components/StatsCounter';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import BlogSection from '@/components/BlogSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import PortfolioList from './PortfolioList';
import HPortfolio from './HPortfolio';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      {/* <ProcessTimeline /> */}
      <VideoSection />
      {/* <InteractiveTabs /> */}
      <CTASection />
      <TestimonialsCarousel />
      <StatsCounter />
      {/* <PortfolioCarousel /> */}
      {/* <BlogSection /> */}
      <HPortfolio/>
      <FinalCTA />
      <Footer />
    </div>
  );
}
