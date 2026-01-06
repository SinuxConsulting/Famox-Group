import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { useQuery } from '@tanstack/react-query';
import { data } from '@/data';

const conditions = [
  { value: 'all', label: 'All Conditions' },
  { value: 'new', label: 'New' },
  { value: 'used', label: 'Used' },
  { value: 'refurbished', label: 'Refurbished' },
];

export default function CataloguePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { openModal } = useQuoteModal();

  const { data: items = [] } = useQuery({
    queryKey: ['catalogue'],
    queryFn: () => data.catalogue.list(),
  });
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [brand, setBrand] = useState(searchParams.get('brand') || 'all');
  const [condition, setCondition] = useState(searchParams.get('condition') || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((i) => i.category))).sort();
    return [{ value: 'all', label: 'All Categories' }, ...unique.map((c) => ({ value: c, label: c }))];
  }, [items]);

  const brands = useMemo(() => {
    const unique = Array.from(new Set(items.map((i) => i.brand))).sort();
    return [{ value: 'all', label: 'All Brands' }, ...unique.map((b) => ({ value: b.toLowerCase().replace(/\s+/g, '-'), label: b }))];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'all' || item.category === category;
      const matchesBrand = brand === 'all' || item.brand.toLowerCase().replace(/\s+/g, '-') === brand;
      const matchesCondition = condition === 'all' || item.condition === condition;
      
      return matchesSearch && matchesCategory && matchesBrand && matchesCondition;
    });
  }, [items, searchQuery, category, brand, condition]);

  const clearFilters = () => {
    setSearchQuery('');
    setCategory('all');
    setBrand('all');
    setCondition('all');
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || category !== 'all' || brand !== 'all' || condition !== 'all';

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Browse Our Inventory</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-4">
              Machinery Catalogue
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Explore our comprehensive range of agricultural machinery and equipment. Find the perfect solution for your farming needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card border-b border-border sticky top-16 z-30">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search machinery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-3">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((b) => (
                    <SelectItem key={b.value} value={b.value}>
                      {b.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex gap-1 ml-auto">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredItems.length}</span> items
            </p>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">No items match your filters</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link to={`/catalogue/${item.slug}`} className="machinery-card group block h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-muted-foreground">{item.brand}</span>
                        <Badge variant={
                          item.condition === 'new' ? 'default' :
                          item.condition === 'refurbished' ? 'secondary' : 'outline'
                        } className="text-xs">
                          {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
                        </Badge>
                      </div>
                      <h3 className="font-display font-bold text-lg mb-1 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                        {item.description}
                      </p>
                      <div className="font-semibold text-primary">{item.price_display}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link 
                    to={`/catalogue/${item.slug}`} 
                    className="group flex gap-6 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all bg-card"
                  >
                    <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">{item.brand}</span>
                        <Badge variant={
                          item.condition === 'new' ? 'default' :
                          item.condition === 'refurbished' ? 'secondary' : 'outline'
                        }>
                          {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
                        </Badge>
                        {item.availability === 'in_stock' && (
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                            In Stock
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-2">{item.description}</p>
                      <div className="font-semibold text-primary text-lg">{item.price_display}</div>
                    </div>
                    <div className="flex items-center">
                      <Button variant="outline">View Details</Button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
