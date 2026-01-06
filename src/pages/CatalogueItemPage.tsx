import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Download, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { useQuery } from '@tanstack/react-query';
import { data } from '@/data';

export default function CatalogueItemPage() {
  const { slug } = useParams();
  const { openModal } = useQuoteModal();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: item, isLoading } = useQuery({
    queryKey: ['catalogue', slug],
    queryFn: () => (slug ? data.catalogue.getBySlug(slug) : Promise.resolve(null)),
  });

  if (isLoading) {
    return <div className="pt-24"><div className="container-wide text-muted-foreground">Loading…</div></div>;
  }
  if (!item) {
    return (
      <div className="pt-24">
        <div className="container-wide">
          <div className="py-8">
            <div className="text-muted-foreground">Item not found.</div>
            <Link to="/catalogue" className="inline-flex mt-4"><Button variant="outline">Back to Catalogue</Button></Link>
          </div>
        </div>
      </div>
    );
  }

  const images = [item.image, item.image, item.image];
  const features = item.highlights;
  const specs: Record<string, string> = {
    Brand: item.brand,
    Category: item.category,
    Condition: item.condition,
    Availability: item.availability,
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-24">
      <div className="container-wide">
        {/* Breadcrumb */}
        <div className="py-4">
          <Link 
            to="/catalogue" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Catalogue
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img 
                src={images[currentImageIndex]} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium text-muted-foreground">{item.brand}</span>
              <Badge variant={item.condition === 'new' ? 'default' : 'secondary'}>
                {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                {item.availability === 'in_stock'
                  ? 'In Stock'
                  : item.availability === 'available_soon'
                    ? 'Available Soon'
                    : 'By Request'}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {item.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              {item.description}
            </p>

            <div className="text-3xl font-display font-bold text-primary mb-8">
              {item.price_display}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="hero" 
                size="xl" 
                className="flex-1"
                onClick={() => openModal()}
              >
                Request Quote for This Machine
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="https://wa.me/60125882911" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center gap-6 p-4 rounded-xl bg-muted/50 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+60125882911" className="font-medium hover:text-primary transition-colors">
                  012-588 2911
                </a>
              </div>
              <span className="text-muted-foreground">Available Mon-Sat, 9am-6pm</span>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-display font-bold text-lg mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Spec Sheet */}
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4" />
              Download Spec Sheet (PDF)
            </Button>
          </motion.div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="specs" className="pb-16">
          <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0">
            <TabsTrigger 
              value="specs"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger 
              value="warranty"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
            >
              Warranty & Support
            </TabsTrigger>
            <TabsTrigger 
              value="financing"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
            >
              Financing Options
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="pt-8">
            <div className="max-w-2xl">
              <h3 className="font-display font-bold text-xl mb-6">Technical Specifications</h3>
              <table className="w-full">
                <tbody>
                  {Object.entries(specs).map(([key, value], index) => (
                    <tr key={key} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                      <td className="py-3 px-4 font-medium">{key}</td>
                      <td className="py-3 px-4 text-muted-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="warranty" className="pt-8">
            <div className="max-w-2xl">
              <h3 className="font-display font-bold text-xl mb-4">Warranty Coverage</h3>
              <p className="text-muted-foreground mb-6">
                All new machinery comes with manufacturer warranty. Extended warranty options available.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                  <span>2-year manufacturer warranty on new equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Genuine parts and service support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                  <span>On-site service available throughout Peninsular Malaysia</span>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="financing" className="pt-8">
            <div className="max-w-2xl">
              <h3 className="font-display font-bold text-xl mb-4">Flexible Financing Options</h3>
              <p className="text-muted-foreground mb-6">
                We work with leading financial institutions to provide competitive financing solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Hire purchase with flexible terms up to 7 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Leasing options for commercial operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Government grant assistance (where applicable)</span>
                </li>
              </ul>
              <Button className="mt-6" onClick={() => openModal()}>
                Discuss Financing Options
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
