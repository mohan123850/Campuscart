/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CampusCartProvider, useCampusCart } from './context/CampusCartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { ContactSellerModal } from './components/ContactSellerModal';
import { QuickViewModal } from './components/QuickViewModal';

// Pages
import { HomePage } from './pages/HomePage';
import { MarketplacePage } from './pages/MarketplacePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { SellItemPage } from './pages/SellItemPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';

import { CheckCircle2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentPage, toastMessage } = useCampusCart();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'marketplace':
        return <MarketplacePage />;
      case 'categories':
        return <CategoriesPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'product-details':
        return <ProductDetailsPage />;
      case 'sell':
        return <SellItemPage />;
      case 'dashboard':
        return <StudentDashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Viewport */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <AuthModal />
      <ContactSellerModal />
      <QuickViewModal />

      {/* Global Floating Toast */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-2.5 animate-in slide-in-from-bottom-3 duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </aside>
      )}
    </div>
  );
};

export default function App() {
  return (
    <CampusCartProvider>
      <AppContent />
    </CampusCartProvider>
  );
}
