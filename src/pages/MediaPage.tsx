import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ExternalLink, FileText, Video, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import heroImage from '@/assets/hero-machinery.jpg';
import trainingImage from '@/assets/training-session.jpg';
import farmImage from '@/assets/farm-setup.jpg';

const mediaItems = {
  articles: [
    {
      id: '1',
      title: 'Famox Expands Training Programs Across Peninsula Malaysia',
      slug: 'famox-expands-training',
      excerpt: 'New partnerships with MARDI bring certified agricultural training programs to more farmers across the nation.',
      date: '2024-01-15',
      image: trainingImage,
      readTime: '5 min read',
    },
    {
      id: '2',
      title: 'The Future of Smart Farming in Malaysia',
      slug: 'future-smart-farming',
      excerpt: 'How technology and mechanization are transforming Malaysian agriculture for the next generation.',
      date: '2023-12-20',
      image: heroImage,
      readTime: '8 min read',
    },
    {
      id: '3',
      title: 'Choosing the Right Tractor for Your Farm',
      slug: 'choosing-right-tractor',
      excerpt: 'A comprehensive guide to selecting agricultural machinery that fits your operation size and needs.',
      date: '2023-11-10',
      image: heroImage,
      readTime: '6 min read',
    },
  ],
  videos: [
    {
      id: '1',
      title: 'Smart Dairy Farm: Behind the Scenes',
      slug: 'smart-dairy-behind-scenes',
      excerpt: 'Take an exclusive tour of our latest dairy farm project featuring automated feeding and milking systems.',
      date: '2024-01-05',
      image: farmImage,
      duration: '12:45',
    },
    {
      id: '2',
      title: 'FAITH Program Graduate Success Stories',
      slug: 'faith-success-stories',
      excerpt: 'Hear from young agropreneurs who transformed their lives through our incubation program.',
      date: '2023-11-28',
      image: trainingImage,
      duration: '8:30',
    },
  ],
  press: [
    {
      id: '1',
      title: 'Berita Harian: Famox Leads Agritech Revolution in Northern Malaysia',
      slug: 'berita-harian-agritech',
      source: 'Berita Harian',
      date: '2024-01-10',
      image: heroImage,
      externalUrl: 'https://example.com',
    },
    {
      id: '2',
      title: 'The Star: Agricultural Training Pioneer Wins Industry Award',
      slug: 'star-industry-award',
      source: 'The Star',
      date: '2023-12-05',
      image: trainingImage,
      externalUrl: 'https://example.com',
    },
    {
      id: '3',
      title: 'NST: Ministry Partners with Famox for Rural Development',
      slug: 'nst-rural-development',
      source: 'New Straits Times',
      date: '2023-10-20',
      image: farmImage,
      externalUrl: 'https://example.com',
    },
  ],
};

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('all');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-MY', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Media Hub</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-4">
              News, Articles & Updates
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Stay updated with the latest news, insights, and highlights from Famox and the Malaysian agricultural industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8 bg-muted/50 p-1 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg px-6">
                All
              </TabsTrigger>
              <TabsTrigger value="articles" className="rounded-lg px-6">
                <FileText className="h-4 w-4 mr-2" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="videos" className="rounded-lg px-6">
                <Video className="h-4 w-4 mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="press" className="rounded-lg px-6">
                <Newspaper className="h-4 w-4 mr-2" />
                Press
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              {/* Featured Article */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <Link 
                  to={`/media/${mediaItems.articles[0].slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-2 gap-8 card-feature"
                >
                  <div className="aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden">
                    <img 
                      src={mediaItems.articles[0].image}
                      alt={mediaItems.articles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
                      Featured Article
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                      {mediaItems.articles[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {mediaItems.articles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span>{formatDate(mediaItems.articles[0].date)}</span>
                      <span>•</span>
                      <span>{mediaItems.articles[0].readTime}</span>
                    </div>
                    <span className="text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Articles */}
                {mediaItems.articles.slice(1).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/media/${item.slug}`} className="group card-feature block h-full">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="text-xs font-medium text-secondary uppercase tracking-wider">Article</span>
                      <h3 className="font-display font-bold text-lg mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {item.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {formatDate(item.date)} • {item.readTime}
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* Videos */}
                {mediaItems.videos.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 2) * 0.1 }}
                  >
                    <Link to={`/media/${item.slug}`} className="group card-feature block h-full">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="h-6 w-6 ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-charcoal/80 text-primary-foreground text-xs px-2 py-1 rounded">
                          {item.duration}
                        </div>
                      </div>
                      <span className="text-xs font-medium text-secondary uppercase tracking-wider">Video</span>
                      <h3 className="font-display font-bold text-lg mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.excerpt}
                      </p>
                    </Link>
                  </motion.div>
                ))}

                {/* Press */}
                {mediaItems.press.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 4) * 0.1 }}
                  >
                    <a 
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group card-feature block h-full"
                    >
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-secondary uppercase tracking-wider">Press</span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="text-xs text-muted-foreground">
                        {item.source} • {formatDate(item.date)}
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaItems.articles.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/media/${item.slug}`} className="group card-feature block h-full">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="text-xs font-medium text-secondary uppercase tracking-wider">Article</span>
                      <h3 className="font-display font-bold text-lg mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {item.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {formatDate(item.date)} • {item.readTime}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaItems.videos.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/media/${item.slug}`} className="group card-feature block h-full">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="h-6 w-6 ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-charcoal/80 text-primary-foreground text-xs px-2 py-1 rounded">
                          {item.duration}
                        </div>
                      </div>
                      <span className="text-xs font-medium text-secondary uppercase tracking-wider">Video</span>
                      <h3 className="font-display font-bold text-lg mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.excerpt}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="press">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaItems.press.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group card-feature block h-full"
                    >
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-secondary uppercase tracking-wider">Press</span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="text-xs text-muted-foreground">
                        {item.source} • {formatDate(item.date)}
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
