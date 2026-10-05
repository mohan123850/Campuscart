import React from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { PRODUCT_CATEGORIES } from '../data/mockData';
import { ProductCategory } from '../types';
import {
  BookOpen,
  Laptop,
  Home,
  Shirt,
  Armchair,
  Trophy,
  PenTool,
  Package,
  ArrowRight,
  Sparkles,
  Stethoscope,
  Bike,
  Music,
  Gamepad2,
  UtensilsCrossed,
  Palette,
} from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const { navigateTo, setSelectedCategory, products } = useCampusCart();

  const getCategoryIcon = (categoryName: ProductCategory) => {
    switch (categoryName) {
      case 'Books & Study Materials':
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
      case 'Electronics':
        return <Laptop className="w-6 h-6 text-emerald-600" />;
      case 'Hostel Essentials':
        return <Home className="w-6 h-6 text-emerald-600" />;
      case 'Fashion':
        return <Shirt className="w-6 h-6 text-emerald-600" />;
      case 'Furniture':
        return <Armchair className="w-6 h-6 text-emerald-600" />;
      case 'Sports':
        return <Trophy className="w-6 h-6 text-emerald-600" />;
      case 'Stationery':
        return <PenTool className="w-6 h-6 text-emerald-600" />;
      case 'Lab & Medical Gear':
        return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      case 'Bikes & Mobility':
        return <Bike className="w-6 h-6 text-emerald-600" />;
      case 'Musical Instruments':
        return <Music className="w-6 h-6 text-emerald-600" />;
      case 'Gaming & Consoles':
        return <Gamepad2 className="w-6 h-6 text-emerald-600" />;
      case 'Kitchen & Dorm Cooking':
        return <UtensilsCrossed className="w-6 h-6 text-emerald-600" />;
      case 'Art & Architecture':
        return <Palette className="w-6 h-6 text-emerald-600" />;
      default:
        return <Package className="w-6 h-6 text-emerald-600" />;
    }
  };

  const handleSelect = (categoryName: ProductCategory) => {
    setSelectedCategory(categoryName);
    navigateTo('marketplace');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Campus Taxonomy</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Browse All Product Categories
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            From calculus textbooks to dorm furniture and scientific calculators, find everything students need for campus life.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => {
            const countInCatalog = products.filter((p) => p.category === cat.name).length;

            return (
              <div
                key={cat.name}
                onClick={() => handleSelect(cat.name)}
                className="group bg-white p-6 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-500/60 transition-all cursor-pointer flex flex-col justify-between space-y-4 hover:-translate-y-0.5"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
                    {getCategoryIcon(cat.name)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 font-semibold">
                    {countInCatalog} active items
                  </span>
                  <span className="text-emerald-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Shop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
