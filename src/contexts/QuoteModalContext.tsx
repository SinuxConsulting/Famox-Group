import React, { createContext, useContext, useState, useCallback } from 'react';
import { CatalogueItem } from '@/lib/types';

interface QuoteModalContextType {
  isOpen: boolean;
  selectedItem: CatalogueItem | null;
  openModal: (item?: CatalogueItem) => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CatalogueItem | null>(null);

  const openModal = useCallback((item?: CatalogueItem) => {
    setSelectedItem(item || null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Delay clearing item so animation completes
    setTimeout(() => setSelectedItem(null), 300);
  }, []);

  return (
    <QuoteModalContext.Provider value={{ isOpen, selectedItem, openModal, closeModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}
