import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import QuoteModal from '@/components/QuoteModal';
import { QuoteModalProvider } from '@/contexts/QuoteModalContext';

export default function PublicLayout() {
  return (
    <QuoteModalProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
}
