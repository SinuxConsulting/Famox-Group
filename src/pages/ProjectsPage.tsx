import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import heroImage from '@/assets/hero-machinery.jpg';
import trainingImage from '@/assets/training-session.jpg';
import farmImage from '@/assets/farm-setup.jpg';

const projects = [
  {
    id: '1',
    title: 'Kedah Smart Dairy Farm Development',
    slug: 'kedah-smart-dairy',
    client: 'Ministry of Agriculture Malaysia',
    location: 'Merbok, Kedah',
    year: '2023',
    category: 'Farm Setup',
    problem: 'Traditional dairy farming methods resulted in low milk yields and high operational costs.',
    solution: 'Implemented automated feeding systems, climate-controlled housing, and modern milking equipment.',
    outcome: 'Achieved 40% increase in milk production and 30% reduction in labor costs.',
    metrics: [
      { label: 'Milk Production Increase', value: '40%' },
      { label: 'Labor Cost Reduction', value: '30%' },
      { label: 'Farm Capacity', value: '200 Heads' },
    ],
    image: farmImage,
    featured: true,
  },
  {
    id: '2',
    title: 'Commercial Corn Plantation Mechanization',
    slug: 'corn-plantation-perak',
    client: 'Private Agricultural Group',
    location: 'Taiping, Perak',
    year: '2022',
    category: 'Machinery Supply',
    problem: 'Manual harvesting limited the plantation\'s expansion potential and profitability.',
    solution: 'Supplied and implemented complete mechanization solution including tractors, harvesters, and processing equipment.',
    outcome: 'Successfully mechanized 500 hectares with 60% improvement in harvest efficiency.',
    metrics: [
      { label: 'Area Mechanized', value: '500 Ha' },
      { label: 'Efficiency Gain', value: '60%' },
      { label: 'ROI Timeline', value: '2 Years' },
    ],
    image: heroImage,
    featured: true,
  },
  {
    id: '3',
    title: 'MARDI Poultry Training Center',
    slug: 'poultry-training-center',
    client: 'MARDI (Malaysian Agricultural Research and Development Institute)',
    location: 'Serdang, Selangor',
    year: '2023',
    category: 'Training',
    problem: 'Lack of trained personnel for modern poultry farm operations across the country.',
    solution: 'Developed comprehensive training curriculum and established a hands-on training facility.',
    outcome: 'Trained 120 farmers and farm managers from across Peninsular Malaysia.',
    metrics: [
      { label: 'Farmers Trained', value: '120' },
      { label: 'Training Days', value: '45' },
      { label: 'States Covered', value: '8' },
    ],
    image: trainingImage,
    featured: false,
  },
  {
    id: '4',
    title: 'Integrated Rice Mill Modernization',
    slug: 'rice-mill-modernization',
    client: 'Pertubuhan Peladang',
    location: 'Sekinchan, Selangor',
    year: '2021',
    category: 'Processing Equipment',
    problem: 'Aging rice milling equipment resulted in high wastage and inconsistent quality.',
    solution: 'Complete upgrade of milling line with modern equipment and quality control systems.',
    outcome: 'Reduced rice breakage by 50% and increased throughput by 35%.',
    metrics: [
      { label: 'Breakage Reduction', value: '50%' },
      { label: 'Throughput Increase', value: '35%' },
      { label: 'Quality Grade', value: 'A+' },
    ],
    image: heroImage,
    featured: false,
  },
];

export default function ProjectsPage() {
  const { openModal } = useQuoteModal();

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Work</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Projects & Case Studies
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
              Explore how we've helped agricultural businesses across Malaysia transform their operations with modern machinery and expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-display font-bold mb-8">Featured Projects</h2>
          
          <div className="space-y-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {project.location}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-2">Client: {project.client}</p>

                  <div className="space-y-4 my-6">
                    <div>
                      <h4 className="font-semibold text-destructive mb-1">Challenge</h4>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Solution</h4>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Results</h4>
                      <p className="text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-4 rounded-xl bg-muted/50">
                        <div className="text-2xl font-display font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link to={`/projects/${project.slug}`}>
                      Read Full Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <h2 className="text-2xl font-display font-bold mb-8">More Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/projects/${project.slug}`} className="group card-feature block">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.outcome}</p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    Read Case Study <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's Build Your Success Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your agricultural operations? Contact us to discuss your project requirements.
          </p>
          <Button variant="hero" size="xl" onClick={() => openModal()}>
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
