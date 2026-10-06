import React, { useState } from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { ProductCard } from '../components/ProductCard';
import {
  Package,
  Heart,
  MessageSquare,
  User as UserIcon,
  CheckCircle2,
  Trash2,
  CheckCheck,
  PlusCircle,
  Clock,
  Sparkles,
  MapPin,
  Calendar,
  Send,
  Star,
  Check,
} from 'lucide-react';

export const StudentDashboardPage: React.FC = () => {
  const {
    currentUser,
    products,
    favorites,
    messages,
    navigateTo,
    markProductSold,
    deleteProduct,
  } = useCampusCart();

  const [activeTab, setActiveTab] = useState<
    'my-listings' | 'saved' | 'messages' | 'items-sold' | 'profile'
  >('my-listings');

  if (!currentUser) {
    return null;
  }

  // Filter student listings
  const myListings = products.filter((p) => p.sellerId === currentUser.id);
  const activeListings = myListings.filter((p) => p.status !== 'sold');
  const soldListings = myListings.filter((p) => p.status === 'sold');
  const savedProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Welcome Header & Profile Summary */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="relative">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover ring-4 ring-emerald-50 shadow-sm"
                />
                <div
                  className="absolute -bottom-1 -right-1 p-1 bg-emerald-600 text-white rounded-full ring-2 ring-white"
                  title="Verified Student Account"
                >
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                  CampusCart Student Portal
                </span>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                    Welcome back, {currentUser.name}
                  </h1>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{currentUser.college}</span>
                  </span>
                  <span>·</span>
                  <span>{currentUser.location}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    <Check className="w-3 h-3" />
                    <span>Verified Student</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="shrink-0">
              <button
                onClick={() => navigateTo('sell')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs shadow-xs transition-colors flex items-center gap-1.5"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Sell an Item</span>
              </button>
            </div>
          </div>

          {/* Statistics Bar */}
          <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                Active Listings
              </span>
              <p className="font-display font-extrabold text-2xl text-slate-900 font-mono mt-0.5 tabular-nums">
                {activeListings.length}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                Saved Items
              </span>
              <p className="font-display font-extrabold text-2xl text-rose-500 font-mono mt-0.5 tabular-nums">
                {favorites.length}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                Items Sold
              </span>
              <p className="font-display font-extrabold text-2xl text-emerald-600 font-mono mt-0.5 tabular-nums">
                {soldListings.length}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('my-listings')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'my-listings'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            My Listings ({myListings.length})
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'saved'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            Saved Items ({savedProducts.length})
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'messages'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            Messages ({messages.length})
          </button>

          <button
            onClick={() => setActiveTab('items-sold')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'items-sold'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            Items Sold ({soldListings.length})
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'profile'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            Profile
          </button>
        </div>

        {/* Tab 1: My Listings with Recent Listings Summary */}
        {activeTab === 'my-listings' && (
          <div className="space-y-6">
            {/* Recent Listings Table / Card Strip */}
            {myListings.length > 0 ? (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs overflow-hidden">
                  <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="font-display font-bold text-base text-slate-900">
                      Recent Listings Overview
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      {myListings.length} total items
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100 text-xs">
                    {myListings.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200"
                          />
                          <div className="min-w-0">
                            <h4
                              onClick={() => navigateTo('product-details', item.id)}
                              className="font-bold text-slate-900 truncate hover:text-emerald-700 cursor-pointer"
                            >
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              {item.category} · {item.condition}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                          <span className="font-display font-extrabold text-base text-slate-900 font-mono">
                            ₹{item.price.toLocaleString('en-IN')}
                          </span>

                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              item.status === 'sold'
                                ? 'bg-slate-100 text-slate-600'
                                : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            }`}
                          >
                            {item.status === 'sold' ? 'Sold' : 'Active'}
                          </span>

                          <div className="flex items-center gap-1.5">
                            {item.status !== 'sold' && (
                              <button
                                type="button"
                                onClick={() => markProductSold(item.id)}
                                className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold rounded-lg transition-colors text-[11px]"
                              >
                                Mark Sold
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => deleteProduct(item.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                              title="Delete listing"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grid View */}
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-4">
                    Listings Cards
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {myListings.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
                <Package className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-800 text-base">You haven't listed any items</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Have textbooks, calculators, backpacks, or room items you no longer use? List them free in 2 minutes.
                </p>
                <button
                  onClick={() => navigateTo('sell')}
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold"
                >
                  Create Your First Listing
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Saved Items */}
        {activeTab === 'saved' && (
          <div className="space-y-4">
            {savedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {savedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
                <Heart className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-800 text-base">No saved products yet</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Click the heart icon on any product in the marketplace to keep track of it here.
                </p>
                <button
                  onClick={() => navigateTo('marketplace')}
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold"
                >
                  Browse Campus Marketplace
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Messages */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900">
              Campus Chat Inbox
            </h3>
            {messages.length > 0 ? (
              <div className="space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{m.senderName}</span>
                        <span className="text-slate-400">regarding</span>
                        <span className="font-semibold text-emerald-700">{m.productTitle}</span>
                      </div>
                      <span className="text-[11px] text-slate-400">{m.timestamp}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-100">
                      {m.message}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">No messages in your inbox.</p>
            )}
          </div>
        )}

        {/* Tab 4: Items Sold */}
        {activeTab === 'items-sold' && (
          <div className="space-y-4">
            {soldListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {soldListings.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
                <CheckCheck className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-800 text-base">No items sold yet</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  When you complete an in-person exchange, click "Mark Sold" on your listing to track it here.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tab 5: Profile Section */}
        {activeTab === 'profile' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 max-w-2xl text-xs">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Student Profile Information
              </h3>

              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{currentUser.name}</h4>
                  <p className="text-slate-500 text-xs">{currentUser.college}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Student (.edu)</span>
                  </span>
                </div>
              </div>

              {/* Stats: Listings, Sold, Rating */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Listings</span>
                  <span className="font-bold text-base text-slate-900 font-mono">{myListings.length}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Sold</span>
                  <span className="font-bold text-base text-emerald-700 font-mono">{soldListings.length}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Rating</span>
                  <span className="font-bold text-base text-amber-500 font-mono flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>5.0</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-slate-400 block font-semibold">Student Email</span>
                  <span className="font-bold text-slate-800 text-sm font-mono">{currentUser.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Campus / College</span>
                  <span className="font-bold text-slate-800 text-sm">{currentUser.college}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Primary Dorm / Hostel Location</span>
                  <span className="font-bold text-slate-800 text-sm">{currentUser.location}</span>
                </div>
                {currentUser.bio && (
                  <div>
                    <span className="text-slate-400 block font-semibold">About You</span>
                    <p className="text-slate-700 mt-0.5 leading-relaxed">{currentUser.bio}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Active Listings on Profile */}
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
                Active Listings by {currentUser.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {activeListings.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
