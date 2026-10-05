import React, { useState } from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import {
  X,
  Heart,
  MessageSquare,
  MapPin,
  Star,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    closeQuickView,
    openContactSellerModal,
    navigateTo,
    isFavorite,
    toggleFavorite,
  } = useCampusCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!quickViewProduct) return null;

  const favorited = isFavorite(quickViewProduct.id);

  const handleContactSeller = () => {
    const product = quickViewProduct;
    closeQuickView();
    openContactSellerModal(product);
  };

  const handleViewFullDetails = () => {
    const id = quickViewProduct.id;
    closeQuickView();
    navigateTo('product-details', id);
  };

  return (
    <div
      onClick={closeQuickView}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150"
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors z-10"
          aria-label="Close Quick View"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {/* Left Column: Image & Thumbnails */}
          <div className="space-y-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                alt={quickViewProduct.title}
                className="w-full h-full object-cover"
              />

              {/* Condition Badge */}
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/95 text-slate-800 backdrop-blur-xs shadow-2xs">
                  {quickViewProduct.condition}
                </span>
              </div>

              {/* Status Badge if sold */}
              {quickViewProduct.status === 'sold' && (
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center">
                  <span className="font-display font-bold text-white text-xs uppercase px-3 py-1 rounded-md bg-slate-900/90 tracking-wider">
                    Sold Out
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {quickViewProduct.images.length > 1 && (
              <div className="flex items-center gap-2">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-2xs'
                        : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Campus Safe Tip */}
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Campus in-person exchange · Zero shipping fees</span>
            </div>
          </div>

          {/* Right Column: Key Details & Quick Actions */}
          <div className="space-y-4 text-xs">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {quickViewProduct.category}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-[11px] text-slate-500">Quick View</span>
              </div>

              <h2 className="font-display font-bold text-lg text-slate-900 leading-snug">
                {quickViewProduct.title}
              </h2>

              {/* Price & Savings */}
              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-display font-extrabold text-2xl text-slate-900 font-mono tabular-nums">
                  ${quickViewProduct.price}
                </span>
                {quickViewProduct.originalPrice &&
                  quickViewProduct.originalPrice > quickViewProduct.price && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400 line-through font-mono">
                        ${quickViewProduct.originalPrice}
                      </span>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-mono">
                        Save ${quickViewProduct.originalPrice - quickViewProduct.price}
                      </span>
                    </div>
                  )}
              </div>
            </div>

            {/* Campus & Pickup Location */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{quickViewProduct.college}</span>
              </div>
              <p className="text-[11px] text-slate-500 pl-5 truncate">
                Pickup: {quickViewProduct.location}
              </p>
            </div>

            {/* Description Excerpt */}
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Description</h4>
              <p className="text-slate-600 leading-relaxed line-clamp-3">
                {quickViewProduct.description}
              </p>
            </div>

            {/* Seller Info */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <img
                  src={quickViewProduct.sellerAvatar}
                  alt={quickViewProduct.sellerName}
                  className="w-7 h-7 rounded-full object-cover ring-1 ring-emerald-500/30"
                />
                <div>
                  <span className="font-bold text-slate-800 block leading-tight">
                    {quickViewProduct.sellerName}
                  </span>
                  {quickViewProduct.sellerRating && (
                    <span className="flex items-center text-amber-500 text-[10px] font-semibold">
                      <Star className="w-2.5 h-2.5 fill-amber-400" />
                      <span className="ml-0.5 font-mono">{quickViewProduct.sellerRating} rating</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Favorite Button */}
              <button
                type="button"
                onClick={() => toggleFavorite(quickViewProduct.id)}
                className={`p-2 rounded-xl border transition-colors ${
                  favorited
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-rose-500 hover:bg-slate-50'
                }`}
                title={favorited ? 'Remove from saved' : 'Save item'}
              >
                <Heart className={`w-4 h-4 ${favorited ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={handleContactSeller}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact Seller</span>
              </button>

              <button
                type="button"
                onClick={handleViewFullDetails}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Full Page Details</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
