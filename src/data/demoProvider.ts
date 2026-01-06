import type { DataProvider, SiteSettings, Enquiry, EnquiryCreateInput } from './types';
import { demoCatalogueItems, demoProjects, demoMediaPosts, demoSolutions } from '@/demo/demoData';
import {
  getDemoSettings,
  saveDemoSettings,
  getDemoEnquiries,
  addDemoEnquiry,
  updateDemoEnquiry,
} from '@/demo/demoStore';

export const demoProvider: DataProvider = {
  settings: {
    async get(): Promise<SiteSettings> {
      return getDemoSettings() as SiteSettings;
    },
    async update(patch: Partial<SiteSettings>): Promise<SiteSettings> {
      return saveDemoSettings(patch as any) as SiteSettings;
    },
  },
  catalogue: {
    async list() {
      return demoCatalogueItems as any;
    },
    async getBySlug(slug: string) {
      return (demoCatalogueItems.find((i) => i.slug === slug) as any) || null;
    },
  },
  projects: {
    async list() {
      return demoProjects as any;
    },
    async getBySlug(slug: string) {
      return (demoProjects.find((p) => p.slug === slug) as any) || null;
    },
  },
  media: {
    async list() {
      return demoMediaPosts as any;
    },
    async getBySlug(slug: string) {
      return (demoMediaPosts.find((m) => m.slug === slug) as any) || null;
    },
  },
  solutions: {
    async list() {
      return demoSolutions as any;
    },
    async getBySlug(slug: string) {
      return (demoSolutions.find((s) => s.slug === slug) as any) || null;
    },
  },
  enquiries: {
    async list(): Promise<Enquiry[]> {
      return getDemoEnquiries() as any;
    },
    async getById(id: string): Promise<Enquiry | null> {
      return ((getDemoEnquiries() as any).find((e: Enquiry) => e.id === id) as Enquiry) || null;
    },
    async create(input: EnquiryCreateInput): Promise<Enquiry> {
      return addDemoEnquiry(input as any) as any;
    },
    async update(id: string, patch: Partial<Pick<Enquiry, 'status' | 'notes'>>) {
      return updateDemoEnquiry(id, patch as any) as any;
    },
  },
};
