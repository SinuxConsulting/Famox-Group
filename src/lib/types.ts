// Core Types for Famox Application

// Navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Catalogue
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  created_at: string;
}

export interface CatalogueItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category_id: string;
  category?: Category;
  brand?: string;
  model?: string;
  condition: 'new' | 'used' | 'refurbished';
  availability: 'in_stock' | 'available_soon' | 'on_order' | 'sold';
  price_display?: string;
  specs?: Record<string, string>;
  features?: string[];
  spec_sheet_url?: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  images?: CatalogueImage[];
}

export interface CatalogueImage {
  id: string;
  catalogue_item_id: string;
  url: string;
  alt_text?: string;
  is_primary: boolean;
  display_order: number;
}

// Enquiries
export type EnquiryStatus = 'new' | 'contacted' | 'quoted' | 'won' | 'lost';

export type EnquiryType = 
  | 'general' 
  | 'quote_request' 
  | 'catalogue_enquiry' 
  | 'training' 
  | 'farm_setup' 
  | 'partnership';

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  enquiry_type: EnquiryType;
  message: string;
  catalogue_item_id?: string;
  catalogue_item?: CatalogueItem;
  attachment_url?: string;
  status: EnquiryStatus;
  internal_notes?: string;
  created_at: string;
  updated_at: string;
}

// Media
export type MediaType = 'article' | 'video' | 'press';

export interface MediaPost {
  id: string;
  title: string;
  slug: string;
  type: MediaType;
  content?: string;
  excerpt?: string;
  featured_image_url?: string;
  video_url?: string;
  external_link?: string;
  seo_title?: string;
  seo_description?: string;
  og_image_url?: string;
  is_published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

// Projects / Case Studies
export interface Project {
  id: string;
  title: string;
  slug: string;
  client?: string;
  location?: string;
  year?: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics?: { label: string; value: string }[];
  featured_image_url?: string;
  gallery_urls?: string[];
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

// Site Settings
export interface SiteSettings {
  id: string;
  company_name: string;
  tagline?: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  business_hours?: string;
  google_review_embed?: string;
  google_review_link?: string;
  google_rating?: number;
  google_review_count?: number;
  admin_emails: string[];
  social_facebook?: string;
  social_instagram?: string;
  social_linkedin?: string;
  social_youtube?: string;
}

// Admin User Profile
export interface AdminProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
}

// Dashboard KPIs
export interface DashboardStats {
  enquiriesToday: number;
  enquiriesThisWeek: number;
  activeListings: number;
  publishedMedia: number;
  newEnquiries: number;
}
