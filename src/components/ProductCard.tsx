import React from 'react';
import { Product } from '../types';
import { useCampusCart } from '../context/CampusCartContext';
import { Heart, MapPin, Star, Eye, CheckCircle2, Navigation } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { navigateTo, isFavorite, toggleFavorite, openQuickView } = useCampusCart();
  const favorited = isFavorite(product.id);

  const handleCardClick = () => {
    navigateTo('product-details', product.id);
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-500/50 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden relative"
    >
      <div>
        {/* Image Frame */}
        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          />

          {/* Condition Badge */}
          <div className="absolute top-2.5 left-2.5">
            <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white/95 text-slate-800 backdrop-blur-xs shadow-2xs">
              {product.condition}
            </span>
          </div>

          {/* Favorite Heart Button */}
          <button
            onClick={handleHeartClick}
            aria-label={favorited ? 'Remove from favorites' : 'Save to favorites'}
            className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-xs transition-colors shadow-2xs ${
              favorited
                ? 'bg-rose-50 text-rose-600'
                : 'bg-white/90 text-slate-500 hover:text-rose-500 hover:bg-white'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${favorited ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>

          {/* Centered Image Hover Quick View Button */}
          <button
            type="button"
            onClick={handleQuickViewClick}
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 py-1.5 bg-white/95 hover:bg-emerald-600 hover:text-white text-slate-800 rounded-xl text-xs font-bold shadow-md backdrop-blur-xs flex items-center gap-1.5 transition-all opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 duration-150"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          {/* Sold Overlay */}
          {product.status === 'sold' && (
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center">
              <span className="font-display font-bold text-white text-xs uppercase px-3 py-1 rounded-md bg-slate-900/90 tracking-wider">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          {/* Category */}
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="font-display font-bold text-sm text-slate-900 line-clamp-2 leading-snug group-hover:text-emerald-700 transition-colors">
            {product.title}
          </h3>

          {/* Location & Distance */}
          <div className="space-y-1 text-[11px] text-slate-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{product.college}</span>
            </div>
            {product.distance && (
              <div className="flex items-center gap-1 text-emerald-700 font-medium">
                <Navigation className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">{product.distance}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer: Price (INR ₹), Quick View action & Seller Verification */}
      <div className="px-4 pb-4 pt-2 border-t border-slate-100 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-extrabold text-lg text-slate-900 font-mono tabular-nums">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[11px] text-slate-400 line-through font-mono">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Dedicated Quick View Button in Footer */}
          <button
            type="button"
            onClick={handleQuickViewClick}
            className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white rounded-lg flex items-center gap-1 transition-colors"
          >
            <Eye className="w-3 h-3" />
            <span>Quick View</span>
          </button>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-50">
          <div className="flex items-center gap-1 min-w-0">
            <span className="truncate max-w-[100px] text-slate-700 font-medium">
              {product.sellerName}
            </span>
            {product.sellerVerified !== false && (
              <span title="Verified Student" className="text-emerald-600 inline-flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100 text-emerald-600" />
              </span>
            )}
          </div>

          {product.sellerRating && (
            <span className="flex items-center text-amber-500 font-semibold shrink-0">
              <Star className="w-3 h-3 fill-amber-400" />
              <span className="text-[10px] text-slate-600 font-mono ml-0.5">{product.sellerRating}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
