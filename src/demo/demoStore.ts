import { demoSiteSettings } from './demoData';

export type DemoEnquiryStatus = 'New' | 'Contacted' | 'Quoted' | 'Won' | 'Lost';

export type DemoEnquiry = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  enquiryType: string;
  message: string;
  itemSlug?: string;
  status: DemoEnquiryStatus;
  notes?: string;
};

const LS_KEYS = {
  enquiries: 'famox_demo_enquiries_v1',
  settings: 'famox_demo_settings_v1',
  admin: 'famox_demo_admin_v1',
} as const;

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function isDemoMode(): boolean {
  // default ON for client demos unless explicitly turned off
  return (import.meta as any).env?.VITE_DEMO_MODE !== '0';
}

export function getDemoSettings(): Record<string, any> {
  const saved = safeParse<Record<string, any>>(localStorage.getItem(LS_KEYS.settings));
  return { ...demoSiteSettings, ...(saved || {}) };
}

export function saveDemoSettings(patch: Record<string, any>) {
  const current = getDemoSettings();
  const next = { ...current, ...patch };
  localStorage.setItem(LS_KEYS.settings, JSON.stringify(next));
  return next;
}

export function getDemoEnquiries(): DemoEnquiry[] {
  const saved = safeParse<DemoEnquiry[]>(localStorage.getItem(LS_KEYS.enquiries));
  if (saved && Array.isArray(saved)) return saved;

  // seed with a few realistic enquiries
  const seeded: DemoEnquiry[] = [
    {
      id: 'e1',
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
      name: 'Aiman Hakim',
      email: 'aiman@example.com',
      phone: '+60 12-345 6789',
      company: 'Kedah Agro Ventures',
      enquiryType: 'quote_request',
      message: 'Interested in the Famox Grain Corn Mobile Dryer. Please advise pricing, lead time, and installation/support.',
      itemSlug: 'famox-grain-corn-mobile-dryer',
      status: 'New',
      notes: '',
    },
    {
      id: 'e2',
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
      name: 'Siti Nur',
      email: 'siti.nur@example.com',
      phone: '+60 11-2222 3333',
      company: 'Northern Poultry Farm',
      enquiryType: 'farm_setup',
      message: 'We want guidance to set up a small-to-medium poultry project. Can you share scope and timeline?',
      status: 'Contacted',
      notes: 'Call scheduled for tomorrow 10am.',
    },
    {
      id: 'e3',
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 80).toISOString(),
      name: 'Tan Wei',
      email: 'tan.wei@example.com',
      phone: '+60 19-888 9999',
      company: 'AgroTech Procurement',
      enquiryType: 'general',
      message: 'Do you provide training for mechanized farming operations? Looking for HRD Corp claimable programs.',
      status: 'Quoted',
      notes: 'Sent brochure and preliminary quote.',
    },
  ];
  localStorage.setItem(LS_KEYS.enquiries, JSON.stringify(seeded));
  return seeded;
}

export function addDemoEnquiry(input: Omit<DemoEnquiry, 'id' | 'created_at' | 'status'>) {
  const enquiries = getDemoEnquiries();
  const next: DemoEnquiry = {
    id: `e_${Math.random().toString(36).slice(2, 10)}`,
    created_at: new Date().toISOString(),
    status: 'New',
    ...input,
  };
  const updated = [next, ...enquiries];
  localStorage.setItem(LS_KEYS.enquiries, JSON.stringify(updated));
  return next;
}

export function updateDemoEnquiry(id: string, patch: Partial<DemoEnquiry>) {
  const enquiries = getDemoEnquiries();
  const updated = enquiries.map((e) => (e.id === id ? { ...e, ...patch } : e));
  localStorage.setItem(LS_KEYS.enquiries, JSON.stringify(updated));
  return updated.find((e) => e.id === id) || null;
}

export function demoAdminIsAuthed(): boolean {
  const saved = safeParse<{ authed: boolean }>(localStorage.getItem(LS_KEYS.admin));
  return Boolean(saved?.authed);
}

export function demoAdminLogin(password: string): boolean {
  const expected = ((import.meta as any).env?.VITE_DEMO_ADMIN_PASSWORD as string) || 'famoxadmin123';
  if (password !== expected) return false;
  localStorage.setItem(LS_KEYS.admin, JSON.stringify({ authed: true }));
  return true;
}

export function demoAdminLogout() {
  localStorage.setItem(LS_KEYS.admin, JSON.stringify({ authed: false }));
}
