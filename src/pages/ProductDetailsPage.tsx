import React, { useState } from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { ProductCard } from '../components/ProductCard';
import {
  Heart,
  MessageSquare,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Share2,
  Calendar,
  User,
  ShoppingBag,
} from 'lucide-react';

export const ProductDetailsPage: React.FC = () => {
  const {
    selectedProduct,
    products,
    navigateTo,
    toggleFavorite,
    isFavorite,
    openContactSellerModal,
    showToast,
  } = useCampusCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-slate-50">
        <div className="text-center space-y-4">
          <p className="text-slate-600 font-medium">Product not found or has been removed.</p>
          <button
            onClick={() => navigateTo('marketplace')}
            className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const favorited = isFavorite(selectedProduct.id);

  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== selectedProduct.id &&
        (p.category === selectedProduct.category || p.college === selectedProduct.college)
    )
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('CampusCart link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb / Back */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateTo('marketplace')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all campus products</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-2xs text-xs font-semibold inline-flex items-center gap-1.5"
            title="Share item link"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>

        {/* 2-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image Gallery & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs">
              <img
                src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />

              {selectedProduct.status === 'sold' && (
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center">
                  <span className="font-display font-extrabold text-white text-lg tracking-wider uppercase bg-slate-950/90 px-6 py-2 rounded-xl border border-white/20">
                    Sold to Student
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail switcher if multiple images */}
            {selectedProduct.images.length > 1 && (
              <div className="flex items-center gap-3">
                {selectedProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-xs scale-102'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Product Story / Detailed Description */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <h2 className="font-display font-bold text-lg text-slate-900">
                Product Description & Condition
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block font-semibold text-[10px] uppercase">
                    Condition
                  </span>
                  <span className="text-emerald-700 font-bold">{selectedProduct.condition}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block font-semibold text-[10px] uppercase">
                    Category
                  </span>
                  <span className="text-slate-800 font-bold">{selectedProduct.category}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block font-semibold text-[10px] uppercase">
                    Pickup Spot
                  </span>
                  <span className="text-slate-800 font-bold truncate block">
                    {selectedProduct.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Purchase & Contact Box */}
          <div className="lg:col-span-5 space-y-6 sticky top-20">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
              {/* Category & Date */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <span className="text-emerald-700 font-bold">{selectedProduct.category}</span>
                <span>·</span>
                <span>Posted {new Date(selectedProduct.createdAt).toLocaleDateString()}</span>
              </div>

              {/* Title & Price */}
              <div>
                <h1 className="font-display font-extrabold text-2xl text-slate-950 leading-tight">
                  {selectedProduct.title}
                </h1>

                <div className="flex items-baseline gap-3 mt-3">
                  <span className="font-display font-black text-3xl sm:text-4xl text-slate-900 font-mono tabular-nums">
                    ₹{selectedProduct.price.toLocaleString('en-IN')}
                  </span>
                  {selectedProduct.originalPrice &&
                    selectedProduct.originalPrice > selectedProduct.price && (
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-400 line-through font-mono tabular-nums">
                          ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded font-mono">
                          Save ₹{(selectedProduct.originalPrice - selectedProduct.price).toLocaleString('en-IN')} (
                          {Math.round(
                            ((selectedProduct.originalPrice - selectedProduct.price) /
                              selectedProduct.originalPrice) *
                              100
                          )}
                          % off)
                        </span>
                      </div>
                    )}
                </div>
              </div>

              {/* Campus Location & Distance */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{selectedProduct.college}</span>
                </div>
                <p className="text-[11px] text-slate-500 pl-6">Pickup: {selectedProduct.location}</p>
                {selectedProduct.distance && (
                  <p className="text-[11px] text-emerald-700 font-semibold pl-6">
                    📍 {selectedProduct.distance}
                  </p>
                )}
              </div>

              {/* Primary Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => openContactSellerModal(selectedProduct)}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold rounded-2xl text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Buy / Arrange Pickup</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openContactSellerModal(selectedProduct)}
                    className="py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 border border-emerald-200"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Message Seller</span>
                  </button>

                  <button
                    onClick={() => toggleFavorite(selectedProduct.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border ${
                      favorited
                        ? 'bg-rose-50 border-rose-200 text-rose-600'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${favorited ? 'fill-rose-500 text-rose-500' : ''}`}
                    />
                    <span>{favorited ? 'Saved' : 'Save Item'}</span>
                  </button>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-2xl text-xs text-emerald-800 flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CampusCart keeps transactions local and student-focused.</span>
              </div>

              {/* Seller Identity Card */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedProduct.sellerAvatar}
                    alt={selectedProduct.sellerName}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/20"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm text-slate-900 truncate">
                        {selectedProduct.sellerName}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-500 truncate">{selectedProduct.college}</p>
                    {selectedProduct.sellerRating && (
                      <div className="flex items-center gap-1 text-[11px] text-amber-500 font-semibold mt-0.5">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span className="text-slate-700 font-mono">{selectedProduct.sellerRating}</span>
                        <span className="text-slate-400">verified student rating</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Safe Exchange Card */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Campus Safe Exchange Tips</span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Meet in daylight at the student union, dining hall, or library.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Inspect textbook condition and test electronics before paying.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Items on Campus */}
        {relatedProducts.length > 0 && (
          <div className="pt-8 border-t border-slate-200">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-4">
              More Items on Your Campus
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
