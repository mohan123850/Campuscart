import React from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { PageId, ProductCategory } from '../types';
import { ShoppingBag, ShieldCheck, Heart, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useCampusCart();

  const handleCategoryNav = (cat: ProductCategory) => {
    navigateTo('marketplace', undefined, cat);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                Campus<span className="text-emerald-400">Cart</span>
              </span>
            </div>
            <p className="text-slate-300 max-w-sm leading-relaxed text-sm font-semibold">
              “Your Campus. Your Marketplace.”
            </p>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              CampusCart makes it easy for students to buy and sell affordable products within their campus community.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Student-to-Student Community</span>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleCategoryNav('Books & Study Materials')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Books & Study Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Electronics')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Electronics & Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Hostel Essentials')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Hostel Essentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Furniture')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Dorm & Room Furniture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Sports')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sports & Fitness
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigateTo('marketplace')} className="hover:text-white transition-colors">
                  Marketplace
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('sell')} className="hover:text-white transition-colors">
                  Sell an Item
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('categories')} className="hover:text-white transition-colors">
                  Categories
                </button>
              </li>
            </ul>
          </div>

          {/* Safety & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Trust & Community
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Meet in well-lit public campus areas</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Inspect items prior to payment</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Zero listing fees for students</span>
              </li>
              <li className="pt-2 text-slate-500">
                Support: <span className="text-slate-300">help@campuscart.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 CampusCart. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => navigateTo('marketplace')} className="hover:text-slate-300">
              About
            </button>
            <button onClick={() => navigateTo('marketplace')} className="hover:text-slate-300">
              Contact
            </button>
            <button onClick={() => navigateTo('marketplace')} className="hover:text-slate-300">
              Privacy Policy
            </button>
            <button onClick={() => navigateTo('marketplace')} className="hover:text-slate-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
