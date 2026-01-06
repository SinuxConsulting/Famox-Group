import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, ChevronRight, Tractor, GraduationCap, Building2, Sprout, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import heroImage from '@/assets/hero-machinery.jpg';
import trainingImage from '@/assets/training-session.jpg';
import farmImage from '@/assets/farm-setup.jpg';
import machineryImage from '@/assets/machinery-parts.jpg';

// Mock data for featured items
const featuredMachines = [
  {
    id: '1',
    title: 'John Deere 6120M Tractor',
    slug: 'john-deere-6120m',
    brand: 'John Deere',
    condition: 'new',
    price_display: 'From RM 280,000',
    image: heroImage,
    category: 'Tractors',
  },
  {
    id: '2',
    title: 'Kubota DC-70G Harvester',
    slug: 'kubota-dc-70g',
    brand: 'Kubota',
    condition: 'new',
    price_display: 'Request Quote',
    image: machineryImage,
    category: 'Harvesters',
  },
  {
    id: '3',
    title: 'Yanmar YT359 Compact Tractor',
    slug: 'yanmar-yt359',
    brand: 'Yanmar',
    condition: 'used',
    price_display: 'RM 85,000',
    image: heroImage,
    category: 'Tractors',
  },
  {
    id: '4',
    title: 'Rice Milling Machine RMP-500',
    slug: 'rice-milling-rmp500',
    brand: 'Famox',
    condition: 'new',
    price_display: 'From RM 45,000',
    image: machineryImage,
    category: 'Processing',
  },
];

const solutions = [
  {
    icon: Tractor,
    title: 'Machinery & Equipment Sales',
    description: 'Premium agricultural machinery from leading global brands. New, used, and refurbished options available.',
    href: '/solutions/machinery-sales',
    image: machineryImage,
  },
  {
    icon: GraduationCap,
    title: 'Training & Consultancy',
    description: 'HRDCorp certified training programs. Over 250 individuals trained in modern agricultural practices.',
    href: '/solutions/training',
    image: trainingImage,
  },
  {
    icon: Building2,
    title: 'Farm Setup & Implementation',
    description: 'End-to-end farm development from planning to execution. Corn, poultry, and dairy farm specialists.',
    href: '/solutions/farm-setup',
    image: farmImage,
  },
  {
    icon: Sprout,
    title: 'FAITH Incubation Program',
    description: 'Empowering the next generation of agropreneurs with hands-on training and business development.',
    href: '/solutions/faith',
    image: trainingImage,
  },
];

const projects = [
  {
    id: '1',
    title: 'Kedah Smart Dairy Farm',
    client: 'Ministry of Agriculture',
    location: 'Merbok, Kedah',
    outcome: '40% increase in milk production',
    image: farmImage,
    slug: 'kedah-smart-dairy',
  },
  {
    id: '2',
    title: 'Commercial Corn Plantation',
    client: 'Private Agricultural Group',
    location: 'Perak',
    outcome: '500 hectares mechanized',
    image: heroImage,
    slug: 'corn-plantation-perak',
  },
  {
    id: '3',
    title: 'Poultry Training Center',
    client: 'MARDI',
    location: 'Serdang, Selangor',
    outcome: '120 farmers trained',
    image: trainingImage,
    slug: 'poultry-training-center',
  },
];

const stats = [
  { value: '14+', label: 'Years Experience' },
  { value: '250+', label: 'Farmers Trained' },
  { value: '50+', label: 'Projects Completed' },
  { value: '100+', label: 'Machines Sold' },
];

export default function HomePage() {
  const { openModal } = useQuoteModal();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Agricultural machinery in Malaysian rice field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10 pt-24 pb-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="trust-badge mb-6">
                <Star className="h-4 w-4 text-secondary fill-secondary" />
                <span>4.8/5 on Google Reviews</span>
                <span className="text-muted-foreground">• 50+ Reviews</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight"
            >
              Powering Malaysian Agriculture with{' '}
              <span className="text-gradient">Modern Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
            >
              From premium agricultural machinery to expert training and complete farm setup services — 
              Famox is your trusted partner for agricultural success in Malaysia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => openModal()}
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                asChild
              >
                <Link to="/catalogue">
                  Browse Catalogue
                </Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-primary-foreground/10"
            >
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-display font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight className="h-5 w-5 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
              Comprehensive Agricultural Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From equipment procurement to farm development, we provide end-to-end support for your agricultural ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={solution.href}
                  className="group block card-feature overflow-hidden h-full"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-2/3 flex flex-col justify-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <solution.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {solution.description}
                      </p>
                      <span className="text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip - Google Reviews */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-6 w-6 ${star <= 4 ? 'text-secondary fill-secondary' : 'text-secondary fill-secondary/80'}`} 
                  />
                ))}
              </div>
              <div>
                <div className="font-display font-bold text-lg">4.8 out of 5</div>
                <div className="text-sm text-muted-foreground">Based on 50+ Google Reviews</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <a href="https://g.page/r/famox" target="_blank" rel="noopener noreferrer">
                  View on Google
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="https://g.page/r/famox/review" target="_blank" rel="noopener noreferrer">
                  Write a Review
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Machinery */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Featured Equipment</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
                Explore Our Machinery
              </h2>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link to="/catalogue">
                View Full Catalogue <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMachines.map((machine, index) => (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/catalogue/${machine.slug}`} className="machinery-card group block h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={machine.image} 
                      alt={machine.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-muted-foreground">{machine.brand}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        machine.condition === 'new' 
                          ? 'bg-green-500/10 text-green-600' 
                          : 'bg-amber-500/10 text-amber-600'
                      }`}>
                        {machine.condition.charAt(0).toUpperCase() + machine.condition.slice(1)}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {machine.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{machine.category}</p>
                    <div className="font-semibold text-primary">{machine.price_display}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
                Featured Projects
              </h2>
            </div>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={`/projects/${project.slug}`}
                  className="group block rounded-xl overflow-hidden bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary-foreground/60 mb-2">
                      {project.client} • {project.location}
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-secondary">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">{project.outcome}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">In The Media</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">
              News & Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/media/article-1" className="group card-feature">
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                <img 
                  src={trainingImage}
                  alt="Training article"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-xs font-medium text-secondary uppercase tracking-wider">Article</span>
              <h3 className="font-display font-bold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">
                Famox Expands Training Programs Across Peninsula
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                New partnerships with MARDI bring certified agricultural training to more farmers...
              </p>
            </Link>

            <Link to="/media/video-1" className="group card-feature">
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted relative">
                <img 
                  src={farmImage}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 ml-1" />
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-secondary uppercase tracking-wider">Video</span>
              <h3 className="font-display font-bold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">
                Smart Dairy Farm: Behind the Scenes
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Take a tour of our latest dairy farm project featuring automated systems...
              </p>
            </Link>

            <Link to="/media/press-1" className="group card-feature">
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                <img 
                  src={heroImage}
                  alt="Press mention"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-xs font-medium text-secondary uppercase tracking-wider">Press</span>
              <h3 className="font-display font-bold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">
                Berita Harian: Famox Leads Agritech Revolution
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Featured in national media for contributions to agricultural modernization...
              </p>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/media">
                View All Media <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">
              What Our Clients Say
            </h2>
          </div>

          {/* Google Reviews Embed Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="flex items-center justify-center gap-4 mb-8">
                <img 
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png" 
                  alt="Google"
                  className="h-6"
                />
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-secondary fill-secondary" />
                  ))}
                </div>
                <span className="font-bold text-lg">4.8</span>
              </div>

              {/* Sample Reviews */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-muted/50">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Excellent service and quality machinery. The team at Famox helped us set up our entire poultry operation from scratch. Highly recommended!"
                  </p>
                  <div className="font-medium">Ahmad R.</div>
                  <div className="text-sm text-muted-foreground">Farm Owner, Perak</div>
                </div>

                <div className="p-6 rounded-xl bg-muted/50">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The training program was comprehensive and practical. Our productivity increased significantly after implementing what we learned."
                  </p>
                  <div className="font-medium">Siti M.</div>
                  <div className="text-sm text-muted-foreground">Agricultural Entrepreneur, Kedah</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button variant="outline" asChild>
                  <a href="https://g.page/r/famox" target="_blank" rel="noopener noreferrer">
                    Read More on Google
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="https://g.page/r/famox/review" target="_blank" rel="noopener noreferrer">
                    Write a Review
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
