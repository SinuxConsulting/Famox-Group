import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const footerLinks = {
  solutions: [
    { label: 'Machinery & Equipment', href: '/solutions/machinery-sales' },
    { label: 'Training & Consultancy', href: '/solutions/training' },
    { label: 'Farm Setup', href: '/solutions/farm-setup' },
    { label: 'FAITH Program', href: '/solutions/faith' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Media & News', href: '/media' },
    { label: 'Contact', href: '/contact' },
  ],
  catalogue: [
    { label: 'Browse All', href: '/catalogue' },
    { label: 'Tractors', href: '/catalogue?category=tractors' },
    { label: 'Harvesters', href: '/catalogue?category=harvesters' },
    { label: 'Processing', href: '/catalogue?category=processing' },
  ],
};

export default function Footer() {
  const { openModal } = useQuoteModal();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Ready to Transform Your Agricultural Operations?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team for expert advice, equipment quotes, or to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => openModal()}
              >
                Request a Quote
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                asChild
              >
                <Link to="/catalogue">Browse Catalogue</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center font-display font-bold text-xl">
                F
              </div>
              <div>
                <div className="font-display font-bold text-xl">FAMOX</div>
                <div className="text-sm text-primary-foreground/60">Group of Companies</div>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Malaysia's trusted partner for agricultural machinery, training, and farm development solutions since 2010.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a 
                href="https://maps.google.com/?q=Lot+1331,+Kg.+Sungai+Batu,+08100+Merbok,+Kedah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Lot 1331, Kg. Sungai Batu, 08100 Merbok, Kedah, Malaysia</span>
              </a>
              <a 
                href="tel:+60125882911"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>012-588 2911 / 011-1111 2911</span>
              </a>
              <a 
                href="mailto:famox.malaysia@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>famox.malaysia@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Clock className="h-4 w-4" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/60125882911" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center hover:bg-green-500/30 transition-colors text-green-400"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Catalogue</h4>
            <ul className="space-y-3">
              {footerLinks.catalogue.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Famox Group of Companies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
