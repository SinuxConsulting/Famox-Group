import type { DataProvider } from './types';
import { demoProvider } from './demoProvider';

// Demo-first build: no Supabase/Resend required.
// Later: swap this export to a Supabase-backed provider without rewriting pages.
export const data: DataProvider = demoProvider;

export * from './types';
