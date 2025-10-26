import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-heading font-bold mb-4" data-testid="text-footer-logo">
              Bean Kitchen
            </h3>
            <p className="text-background/80 mb-6" data-testid="text-footer-about">
              Bean theme for interior design and kitchen websites. Perfect choice to show off your luxury furniture products.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <h4 className="text-xl font-heading font-semibold mb-6" data-testid="text-footer-quick-title">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors" data-testid="link-about">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors" data-testid="link-services">Services</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors" data-testid="link-portfolio">Portfolio</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors" data-testid="link-contact">Contact</a></li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-xl font-heading font-semibold mb-6" data-testid="text-footer-services-title">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors" data-testid="link-remodeling">Remodeling</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors" data-testid="link-appliances">Appliances</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors" data-testid="link-design">Design</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors" data-testid="link-installation">Installation</a></li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-xl font-heading font-semibold mb-6" data-testid="text-footer-newsletter-title">
              Newsletter
            </h4>
            <p className="text-background/80 mb-4" data-testid="text-footer-newsletter-desc">
              Subscribe to our newsletter for updates and offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                data-testid="input-newsletter"
              />
              <Button variant="default" size="icon" data-testid="button-subscribe">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p data-testid="text-copyright">
            © 2025 Bean Kitchen Theme.
          </p>
        </div>
      </div>
    </footer>
  );
}
