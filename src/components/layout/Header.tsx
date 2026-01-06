import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { cn } from '@/lib/utils';

const navigation = [
  { label: 'Home', href: '/' },
  { 
    label: 'Solutions', 
    href: '/solutions',
    children: [
      { label: 'Machinery & Equipment Sales', href: '/solutions/machinery-sales' },
      { label: 'Training & Consultancy', href: '/solutions/training' },
      { label: 'Farm Setup & Implementation', href: '/solutions/farm-setup' },
      { label: 'FAITH Incubation Program', href: '/solutions/faith' },
    ]
  },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Projects', href: '/projects' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { openModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-card/95 backdrop-blur-lg shadow-lg py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl transition-colors',
              isScrolled ? 'bg-primary text-primary-foreground' : 'bg-primary-foreground text-primary'
            )}>
              F
            </div>
            <div className={cn(
              'font-display font-bold text-xl transition-colors hidden sm:block',
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            )}>
              FAMOX
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div 
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-1 transition-colors',
                    isScrolled 
                      ? isActive(item.href) 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary hover:bg-muted'
                      : isActive(item.href)
                        ? 'text-secondary bg-primary-foreground/10'
                        : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-64"
                    >
                      <div className="bg-card rounded-xl shadow-xl border border-border/50 overflow-hidden py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={cn(
                              'block px-4 py-3 text-sm transition-colors',
                              isActive(child.href)
                                ? 'text-primary bg-primary/5 font-medium'
                                : 'text-foreground hover:text-primary hover:bg-muted'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:+60125882911" 
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors',
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
              )}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">012-588 2911</span>
            </a>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => openModal()}
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            )}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container-wide py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg font-medium transition-colors',
                      isActive(item.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:bg-muted'
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            'block px-4 py-2 text-sm rounded-lg transition-colors',
                            isActive(child.href)
                              ? 'text-primary bg-primary/5'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-3">
                <a 
                  href="tel:+60125882911"
                  className="flex items-center gap-2 px-4 py-2 text-muted-foreground"
                >
                  <Phone className="h-4 w-4" />
                  012-588 2911
                </a>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => openModal()}
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
