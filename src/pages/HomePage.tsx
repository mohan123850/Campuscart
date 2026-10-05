import React from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { ASSET_IMAGES, PRODUCT_CATEGORIES } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory } from '../types';
import {
  ArrowRight,
  Sparkles,
  Search,
  PlusCircle,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Laptop,
  Home,
  Shirt,
  Armchair,
  Trophy,
  PenTool,
  Package,
  Flame,
  Clock,
  Compass,
  Stethoscope,
  Bike,
  Music,
  Gamepad2,
  UtensilsCrossed,
  Palette,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo, products, setSelectedCategory } = useCampusCart();

  const featuredProducts = products.filter((p) => p.status !== 'sold').slice(0, 12);

  const getCategoryIcon = (categoryName: ProductCategory) => {
    switch (categoryName) {
      case 'Books & Study Materials':
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'Electronics':
        return <Laptop className="w-5 h-5 text-emerald-600" />;
      case 'Hostel Essentials':
        return <Home className="w-5 h-5 text-emerald-600" />;
      case 'Fashion':
        return <Shirt className="w-5 h-5 text-emerald-600" />;
      case 'Furniture':
        return <Armchair className="w-5 h-5 text-emerald-600" />;
      case 'Sports':
        return <Trophy className="w-5 h-5 text-emerald-600" />;
      case 'Stationery':
        return <PenTool className="w-5 h-5 text-emerald-600" />;
      case 'Lab & Medical Gear':
        return <Stethoscope className="w-5 h-5 text-emerald-600" />;
      case 'Bikes & Mobility':
        return <Bike className="w-5 h-5 text-emerald-600" />;
      case 'Musical Instruments':
        return <Music className="w-5 h-5 text-emerald-600" />;
      case 'Gaming & Consoles':
        return <Gamepad2 className="w-5 h-5 text-emerald-600" />;
      case 'Kitchen & Dorm Cooking':
        return <UtensilsCrossed className="w-5 h-5 text-emerald-600" />;
      case 'Art & Architecture':
        return <Palette className="w-5 h-5 text-emerald-600" />;
      default:
        return <Package className="w-5 h-5 text-emerald-600" />;
    }
  };

  const handleCategoryClick = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    navigateTo('marketplace');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white py-12 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Hero Copy & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your Campus. Your Marketplace.</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.1]">
                Buy. Sell. Connect.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600">
                  — Right on Campus.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                CampusCart makes it easy for students to buy and sell affordable products within their campus community.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigateTo('marketplace')}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold rounded-xl text-sm shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigateTo('sell')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl text-sm border border-slate-200 shadow-2xs transition-colors flex items-center gap-2"
                >
                  <PlusCircle className="w-4 h-4 text-emerald-600" />
                  <span>Sell an Item</span>
                </button>
              </div>

              {/* Student Trust Checklist */}
              <div className="flex flex-wrap items-center gap-5 pt-3 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified student peers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Walking-distance campus pickup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero middleman commission</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-100">
                <img
                  src={ASSET_IMAGES.hero}
                  alt="Students on university campus quad"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                      State Tech & Metro Campus Commons
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">
                      Peer-to-Peer Student Exchange
                    </h3>
                    <p className="text-xs text-slate-200">
                      Save up to 70% on textbooks, scientific calculators, dorm chairs, and study gear.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Savings Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  $48
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Average Student Savings</p>
                  <p className="text-[11px] text-slate-500">Compared to retail and bookstore prices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Categories Grid */}
      <section className="py-14 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-extrabold text-2xl text-slate-950">
                Explore by Category
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Everything you need for college life, exams, and hostel living
              </p>
            </div>
            <button
              onClick={() => navigateTo('categories')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>View all categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className="group p-3.5 rounded-2xl border border-slate-200/80 hover:border-emerald-500 bg-slate-50/50 hover:bg-white transition-all text-center flex flex-col items-center justify-center gap-2 hover:-translate-y-0.5 shadow-2xs hover:shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-emerald-50 flex items-center justify-center border border-slate-200/60 transition-colors">
                  {getCategoryIcon(cat.name)}
                </div>
                <span className="text-xs font-semibold text-slate-700 group-hover:text-emerald-800 truncate w-full">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Campus Products */}
      <section className="py-14 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mb-1">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>Live Listings on Campus</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
                Popular Near You
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Verified college student items available for pickup today
              </p>
            </div>

            <button
              onClick={() => navigateTo('marketplace')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-700 shadow-2xs transition-colors"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. How CampusCart Works (3 Simple Steps) */}
      <section className="py-16 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
              How CampusCart Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Designed specifically for fast student trades between classes and semester move-ins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-left">
              <span className="font-mono text-3xl font-black text-emerald-600/30 block mb-2">
                01
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                1. Discover Items on Your Campus
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filter by your university, dorm block, or library quad. Find engineering textbooks, calculators, and furniture right nearby.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-left">
              <span className="font-mono text-3xl font-black text-emerald-600/30 block mb-2">
                02
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                2. Chat Directly with the Student
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send an in-app message, negotiate student pricing, and agree on a convenient campus meeting spot.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-left">
              <span className="font-mono text-3xl font-black text-emerald-600/30 block mb-2">
                03
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                3. Meet in Public & Exchange
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meet at the student union, library lobby, or dorm entrance. Inspect the item, pay in person, and carry it home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sell Item Banner */}
      <section className="py-14 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Move-Out & Semester Transitions</span>
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Have Used Textbooks or Dorm Gear to Pass On?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Turn your finished course books, electronics, or dorm essentials into cash. Help a freshman settle in and clear space in your room in 2 minutes.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => navigateTo('sell')}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-sm flex items-center gap-2"
              >
                <span>List Your Item Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
