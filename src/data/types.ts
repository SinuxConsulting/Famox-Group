export type EnquiryStatus = 'New' | 'Contacted' | 'Quoted' | 'Won' | 'Lost';

export type EnquiryCreateInput = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  enquiryType: string;
  message: string;
  itemSlug?: string;
};

export type Enquiry = {
  id: string;
  created_at: string;
  status: EnquiryStatus;
  notes?: string;
} & EnquiryCreateInput;

export type CatalogueCategory = string;
export type CatalogueCondition = 'new' | 'used' | 'refurbished';
export type CatalogueAvailability = 'in_stock' | 'available_soon' | 'by_request';

export type CatalogueItem = {
  id: string;
  title: string;
  slug: string;
  brand: string;
  category: CatalogueCategory;
  condition: CatalogueCondition;
  availability: CatalogueAvailability;
  price_display: string;
  description: string;
  image: string;
  highlights: string[];
};

export type Project = {
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

export type MediaType = 'article' | 'video' | 'press';

export type MediaPost = {
  id: string;
  title: string;
  slug: string;
  type: MediaType;
  date: string;
  excerpt: string;
  image: string;
};

export type Solution = {
  slug: string;
  title: string;
  blurb: string;
};

export type SiteSettings = {
  companyName: string;
  whatsapp: string;
  email: string;
  phonePrimary: string;
  phoneSecondary?: string;
  addressLines: string[];
  googleReviewUrl?: string;
};

export type DataProvider = {
  settings: {
    get(): Promise<SiteSettings>;
    update(patch: Partial<SiteSettings>): Promise<SiteSettings>;
  };
  catalogue: {
    list(): Promise<CatalogueItem[]>;
    getBySlug(slug: string): Promise<CatalogueItem | null>;
  };
  projects: {
    list(): Promise<Project[]>;
    getBySlug(slug: string): Promise<Project | null>;
  };
  media: {
    list(): Promise<MediaPost[]>;
    getBySlug(slug: string): Promise<MediaPost | null>;
  };
  solutions: {
    list(): Promise<Solution[]>;
    getBySlug(slug: string): Promise<Solution | null>;
  };
  enquiries: {
    list(): Promise<Enquiry[]>;
    getById(id: string): Promise<Enquiry | null>;
    create(input: EnquiryCreateInput): Promise<Enquiry>;
    update(id: string, patch: Partial<Pick<Enquiry, 'status' | 'notes'>>): Promise<Enquiry | null>;
  };
};
