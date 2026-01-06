import heroImage from '@/assets/hero-machinery.jpg';
import machineryImage from '@/assets/machinery-parts.jpg';

export type DemoCatalogueCategory = 'tractors' | 'harvesters' | 'processing' | 'implements' | 'facilities' | 'other';
export type DemoCondition = 'new' | 'used' | 'refurbished';
export type DemoAvailability = 'in_stock' | 'available_soon' | 'by_request';

export type DemoCatalogueItem = {
  id: string;
  title: string;
  slug: string;
  brand: string;
  category: DemoCatalogueCategory;
  condition: DemoCondition;
  availability: DemoAvailability;
  price_display: string;
  description: string;
  image: string;
  highlights: string[];
};

export type DemoProject = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  image: string;
};

export type DemoMediaPost = {
  id: string;
  title: string;
  slug: string;
  type: 'article' | 'video' | 'press';
  date: string;
  excerpt: string;
  image: string;
};

export const demoCatalogueItems: DemoCatalogueItem[] = [
  {
    id: 'c1',
    title: 'Famox Grain Corn Mobile Dryer',
    slug: 'famox-grain-corn-mobile-dryer',
    brand: 'Famox Agrotech',
    category: 'processing',
    condition: 'new',
    availability: 'by_request',
    price_display: 'Request Quote',
    description: 'Portable crop drying technology designed to dry harvest directly from the field.',
    image: machineryImage,
    highlights: ['Portable field drying', 'Designed for grain corn', 'Lead‑time by request'],
  },
  {
    id: 'c2',
    title: 'Grain Corn Desheller',
    slug: 'grain-corn-desheller',
    brand: 'Famox',
    category: 'processing',
    condition: 'new',
    availability: 'by_request',
    price_display: 'Request Quote',
    description: 'Downstream processing equipment for efficient corn deshelling as part of a mechanized workflow.',
    image: machineryImage,
    highlights: ['Downstream operations', 'High throughput', 'Support & setup available'],
  },
  {
    id: 'c3',
    title: 'Land Preparation Implements Set',
    slug: 'land-preparation-implements',
    brand: 'Famox',
    category: 'implements',
    condition: 'new',
    availability: 'in_stock',
    price_display: 'From RM 12,000',
    description: 'Implements for land preparation and soil conditioning for commercial-scale operations.',
    image: heroImage,
    highlights: ['Upstream operations', 'Soil prep', 'Compatible with common tractors'],
  },
  {
    id: 'c4',
    title: 'Precision Planter Package',
    slug: 'precision-planter-package',
    brand: 'Famox',
    category: 'implements',
    condition: 'new',
    availability: 'available_soon',
    price_display: 'Request Quote',
    description: 'Planting machinery package aligned to mechanized crop production workflows.',
    image: heroImage,
    highlights: ['Planting stage', 'Improved uniformity', 'Training available'],
  },
  {
    id: 'c5',
    title: 'Harvest Monitoring & Field Ops Toolkit',
    slug: 'harvest-monitoring-field-ops',
    brand: 'Famox',
    category: 'other',
    condition: 'new',
    availability: 'by_request',
    price_display: 'Request Quote',
    description: 'Operational toolkit for crop growth monitoring and harvesting coordination.',
    image: heroImage,
    highlights: ['Monitoring growth', 'Harvest planning', 'Ops support'],
  },
];

export const demoProjects: DemoProject[] = [
  {
    id: 'p1',
    title: 'Grain Corn Plantation (Kedah)',
    slug: 'grain-corn-plantation-kedah',
    summary: 'Pioneer commercial grain corn production project in Malaysia with mechanized operations.',
    problem: 'Malaysia relied heavily on imported grain corn; local commercial-scale production was limited.',
    solution: 'Launched a mechanized grain corn plantation project with upstream-to-downstream workflow and modern machinery adoption.',
    outcome: 'Recognized as a pioneer project and achieved strong yield performance per hectare with public-sector collaboration.',
    metrics: [
      { label: 'Launch', value: '2016' },
      { label: 'Recorded yield', value: '8.1 tonnes/hectare' },
      { label: 'Approach', value: 'Mechanized' },
    ],
    image: heroImage,
  },
  {
    id: 'p2',
    title: 'Integrated Famox Dairy Valley (Kedah)',
    slug: 'integrated-famox-dairy-valley-kedah',
    summary: 'Portfolio diversification project focused on developing an integrated dairy ecosystem in Kedah.',
    problem: 'Need to diversify agricultural portfolio and develop integrated dairy capability locally.',
    solution: 'Established a dedicated entity to build an integrated dairy valley and supporting operations.',
    outcome: 'Set the foundation for a diversified, integrated agriculture portfolio beyond plantation production.',
    metrics: [
      { label: 'Entity established', value: '2020' },
      { label: 'Focus', value: 'Integrated dairy' },
      { label: 'Region', value: 'Kedah' },
    ],
    image: machineryImage,
  },
];

export const demoMediaPosts: DemoMediaPost[] = [
  {
    id: 'm1',
    title: 'Pengering Mudah Alih (Mobile Dryer)',
    slug: 'pengering-mudah-alih',
    type: 'article',
    date: '2017-08-01',
    excerpt: 'Famox introduced a portable crop dryer technology designed to dry harvest directly from the field.',
    image: machineryImage,
  },
  {
    id: 'm2',
    title: "Young 'Agropreneur' Says Agriculture Where The Money Is",
    slug: 'young-agropreneur-says-agriculture-where-the-money-is',
    type: 'press',
    date: '2021-06-26',
    excerpt: 'Highlights Famox Agropreneur Incubation & Training Hub (FAITH) and youth-focused agriculture programs.',
    image: heroImage,
  },
];

export const demoSolutions = [
  {
    slug: 'machinery-equipment',
    title: 'Sales of Agricultural Equipment / Machineries',
    blurb: 'Adopting technology to enhance productivity and reduce cost across upstream and downstream operations.',
  },
  {
    slug: 'training-consultancy',
    title: 'Training & Consultancy',
    blurb: 'HRD Corp certified training provider; practical programs designed for modern agriculture operations.',
  },
  {
    slug: 'farm-setup',
    title: 'Setting up Farm / Poultry / Dairy Projects',
    blurb: 'End-to-end assistance to set up plantation, poultry, and dairy projects with periodic progress updates.',
  },
  {
    slug: 'incubation-programs',
    title: 'Famox Agropreneur Incubation & Training Hub (FAITH)',
    blurb: 'Creating opportunities and avenues for youth to take up agriculture as a career and entrepreneurship path.',
  },
];

export const demoSiteSettings = {
  companyName: 'Famox Group of Companies',
  whatsapp: '60125882911',
  email: 'famox.malaysia@gmail.com',
  phonePrimary: '012-588 2911',
  phoneSecondary: '011-1111 2911',
  addressLines: ['Lot 1331, Kg. Sungai Batu,', '08100 Merbok, Kedah,', 'Malaysia'],
  googleReviewUrl: 'https://www.google.com/search?q=Famox+Plantation+reviews',
};
