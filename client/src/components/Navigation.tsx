import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-foreground text-background py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+15055552360" className="flex items-center gap-2 hover-elevate px-2 py-1 rounded-md" data-testid="link-phone">
              <Phone className="w-4 h-4" />
              Call Us: +1 5055 2360
            </a>
            <a href="mailto:office@Bean.com" className="flex items-center gap-2 hover-elevate px-2 py-1 rounded-md" data-testid="link-email">
              <Mail className="w-4 h-4" />
              Email: office@Bean.com
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-background hover:text-background" data-testid="button-download">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background shadow-lg' : 'bg-background/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-heading font-bold text-foreground" data-testid="text-logo">
                Bean Kitchen
              </h1>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-home">
                Home
              </a>
              <a href="/portfolio" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-portfolio">
                Portfolio
              </a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-services">
                Services
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-about">
                About
              </a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-blog">
                Blog
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-contact">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" data-testid="button-search">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-cart">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Button variant="default" className="hidden lg:inline-flex" data-testid="button-cta">
                Visit Showroom
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background" data-testid="menu-mobile">
            <div className="px-4 py-6 space-y-4">
              <a href="/" className="block text-foreground hover:text-primary py-2" data-testid="link-mobile-home">
                Home
              </a>
              <a href="/portfolio" className="block text-foreground hover:text-primary py-2" data-testid="link-mobile-portfolio">
                Portfolio
              </a>
              <a href="/services" className="block text-foreground hover:text-primary py-2" data-testid="link-mobile-services">
                Services
              </a>
              <a href="/about" className="block text-foreground hover:text-primary py-2" data-testid="link-mobile-about">
                About
              </a>
              <a href="/blog" className="block text-foreground hover:text-primary py-2" data-testid="link-mobile-blog">
                Blog
              </a>
              <a href="/contact" className="block text-foreground hover:text-primary py-2" data-testid="link-mobile-contact">
                Contact
              </a>
              <Button variant="default" className="w-full mt-4" data-testid="button-mobile-cta">
                Visit Showroom
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
