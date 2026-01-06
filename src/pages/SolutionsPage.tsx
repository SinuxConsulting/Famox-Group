import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Tractor, GraduationCap, Building2, Sprout, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import heroImage from '@/assets/hero-machinery.jpg';
import trainingImage from '@/assets/training-session.jpg';
import farmImage from '@/assets/farm-setup.jpg';
import machineryImage from '@/assets/machinery-parts.jpg';

const solutions = [
  {
    icon: Tractor,
    title: 'Machinery & Equipment Sales',
    slug: 'machinery-sales',
    description: 'Access premium agricultural machinery from world-leading brands. We offer new, used, and refurbished equipment with full after-sales support.',
    features: [
      'Wide range of tractors, harvesters, and implements',
      'Authorized dealer for major international brands',
      'Flexible financing options available',
      'Full maintenance and parts support',
    ],
    image: machineryImage,
  },
  {
    icon: GraduationCap,
    title: 'Training & Consultancy',
    slug: 'training',
    description: 'HRDCorp certified training programs designed to enhance agricultural productivity. Over 250 individuals trained since our establishment.',
    features: [
      'HRDCorp certified training provider',
      'Hands-on practical sessions',
      'Customized corporate training programs',
      'Agricultural consultancy services',
    ],
    image: trainingImage,
  },
  {
    icon: Building2,
    title: 'Farm Setup & Implementation',
    slug: 'farm-setup',
    description: 'End-to-end farm development services from planning to execution. Specialists in corn plantation, poultry, and dairy farm setups.',
    features: [
      'Feasibility studies and planning',
      'Complete infrastructure development',
      'Equipment procurement and installation',
      'Operational training and handover',
    ],
    image: farmImage,
  },
  {
    icon: Sprout,
    title: 'FAITH Incubation Program',
    slug: 'faith',
    description: 'Famox Agropreneur Incubation & Training Hub (FAITH) - empowering the next generation of agricultural entrepreneurs.',
    features: [
      'Comprehensive entrepreneurship training',
      'Business development support',
      'Access to funding opportunities',
      'Mentorship from industry experts',
    ],
    image: trainingImage,
  },
];

export default function SolutionsPage() {
  const { openModal } = useQuoteModal();

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Solutions</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Complete Agricultural Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
              From equipment procurement to farm development and training, we provide comprehensive support for your agricultural ventures in Malaysia.
            </p>
            <Button variant="hero" size="xl" onClick={() => openModal()}>
              Discuss Your Project <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-wide space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <solution.icon className="h-7 w-7" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  {solution.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link to={`/solutions/${solution.slug}`}>
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" onClick={() => openModal()}>
                    Get Quote
                  </Button>
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-secondary/20 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your requirements and discover how Famox can help you achieve your agricultural goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => openModal()}>
              Request a Quote
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
