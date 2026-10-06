import React, { useMemo, useState } from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { ProductCard } from '../components/ProductCard';
import { PRODUCT_CATEGORIES, POPULAR_COLLEGES } from '../data/mockData';
import { ProductCategory, ProductCondition } from '../types';
import {
  Search,
  Filter,
  SlidersHorizontal,
  RotateCcw,
  MapPin,
  X,
  PackageOpen,
  DollarSign,
  Sparkles,
} from 'lucide-react';

export const MarketplacePage: React.FC = () => {
  const {
    products,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedCampus,
    setSelectedCampus,
    sortOption,
    setSortOption,
    selectedCondition,
    setSelectedCondition,
    maxPrice,
    setMaxPrice,
    resetFilters,
  } = useCampusCart();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  // Reset pagination when search or filters change
  React.useEffect(() => {
    setVisibleCount(24);
  }, [searchQuery, selectedCategory, selectedCampus, selectedCondition, maxPrice, sortOption]);

  const CONDITIONS: (ProductCondition | 'All')[] = [
    'All',
    'Like New',
    'Gently Used',
    'Well Loved',
    'Fair',
  ];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchCategory = item.category.toLowerCase().includes(query);
        const matchLocation = item.location.toLowerCase().includes(query);
        const matchSeller = item.sellerName.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchCategory && !matchLocation && !matchSeller) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // 3. Campus Filter
      if (selectedCampus !== 'All Campuses' && item.college !== selectedCampus) {
        return false;
      }

      // 4. Condition Filter
      if (selectedCondition !== 'All' && item.condition !== selectedCondition) {
        return false;
      }

      // 5. Max Price Filter
      if (item.price > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [
    products,
    searchQuery,
    selectedCategory,
    selectedCampus,
    selectedCondition,
    maxPrice,
    sortOption,
  ]);

  const activeFilterCount =
    (searchQuery.trim() ? 1 : 0) +
    (selectedCategory !== 'All' ? 1 : 0) +
    (selectedCampus !== 'All Campuses' ? 1 : 0) +
    (selectedCondition !== 'All' ? 1 : 0) +
    (maxPrice < 3000 ? 1 : 0);

  return (
    <div className="min-h-screen bg-slate-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header Title & Controls */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Find what you need. Close to home.
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Discover affordable products from students around your campus.
              </p>
            </div>

            {/* Mobile Filter Sheet Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shadow-2xs"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-mono flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar + Sort */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for books, electronics, furniture..."
                className="w-full pl-9 pr-9 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Sort:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                className="px-3 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
              >
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Quick Scrollbar Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-colors font-medium ${
                selectedCategory === 'All'
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Categories
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-colors font-medium ${
                  selectedCategory === cat.name
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main 2-Column Grid: Left Sidebar Filters + Right Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6 sticky top-20">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-emerald-600" />
                <h3 className="font-display font-bold text-sm text-slate-900">Filters</h3>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-[11px] font-semibold text-rose-600 hover:underline"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* Campus Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Select Your Campus
              </label>
              <select
                value={selectedCampus}
                onChange={(e) => setSelectedCampus(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                {POPULAR_COLLEGES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Max Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700">Max Budget</label>
                <span className="font-mono text-xs font-bold text-emerald-700 tabular-nums">
                  ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>₹200</span>
                <span>₹2,500</span>
                <span>₹5,000</span>
              </div>
            </div>

            {/* Condition Radios */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Item Condition</label>
              <div className="space-y-1.5">
                {CONDITIONS.map((cond) => (
                  <label
                    key={cond}
                    className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
                  >
                    <input
                      type="radio"
                      name="condition"
                      checked={selectedCondition === cond}
                      onChange={() => setSelectedCondition(cond)}
                      className="text-emerald-600 focus:ring-emerald-500 h-3.5 w-3.5"
                    />
                    <span>{cond}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Safety Reminder */}
            <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 text-[11px] text-emerald-900 space-y-1">
              <p className="font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Campus Safety Tip:
              </p>
              <p className="text-emerald-800 leading-normal">
                Always meet at the campus library, student center, or dorm lobby. Test gadgets and inspect textbooks before paying.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <p>
                Showing <strong className="text-slate-800 font-mono">{filteredProducts.length}</strong> items
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {selectedCampus !== 'All Campuses' && ` at ${selectedCampus}`}
              </p>
              {activeFilterCount > 0 && (
                <button onClick={resetFilters} className="text-emerald-700 hover:underline font-bold">
                  Clear all filters
                </button>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredProducts.slice(0, visibleCount).map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>

                {/* Pagination / Load More Bar */}
                {visibleCount < filteredProducts.length && (
                  <div className="pt-4 pb-8 text-center space-y-2.5 border-t border-slate-200/80">
                    <p className="text-xs text-slate-500 font-medium">
                      Showing{' '}
                      <span className="font-mono font-bold text-slate-900">
                        {Math.min(visibleCount, filteredProducts.length)}
                      </span>{' '}
                      of{' '}
                      <span className="font-mono font-bold text-slate-900">
                        {filteredProducts.length}
                      </span>{' '}
                      campus listings
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setVisibleCount((prev) => Math.min(prev + 24, filteredProducts.length))
                        }
                        className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-sm transition-all"
                      >
                        Load More (
                        {Math.min(24, filteredProducts.length - visibleCount)} more)
                      </button>
                      <button
                        type="button"
                        onClick={() => setVisibleCount(filteredProducts.length)}
                        className="px-4 py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold shadow-2xs transition-colors"
                      >
                        Show All ({filteredProducts.length})
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Empty state */
              <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center">
                  <PackageOpen className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    No matching products found
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                    Try searching with another keyword (e.g. "calculator", "books", "table"), loosening your budget range, or selecting "All Campuses".
                  </p>
                </div>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs lg:hidden">
          <div className="w-full max-w-xs bg-white h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-display font-bold text-base text-slate-900">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Campus */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Campus</label>
                <select
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white"
                >
                  {POPULAR_COLLEGES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-700">Max Budget</span>
                  <span className="font-mono font-bold text-emerald-700">₹{maxPrice.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Condition */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Condition</label>
                <div className="space-y-2">
                  {CONDITIONS.map((cond) => (
                    <label key={cond} className="flex items-center gap-2 text-xs text-slate-700">
                      <input
                        type="radio"
                        name="m-cond"
                        checked={selectedCondition === cond}
                        onChange={() => setSelectedCondition(cond)}
                        className="text-emerald-600"
                      />
                      <span>{cond}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex gap-2">
              <button
                onClick={resetFilters}
                className="w-1/2 py-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-xl"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-1/2 py-2 text-xs font-bold bg-emerald-600 text-white rounded-xl"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
