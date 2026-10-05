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
    'my-listings' | 'saved' | 'interested' | 'messages' | 'profile'
  >('my-listings');

  if (!currentUser) {
    return null;
  }

  // Filter student listings
  const myListings = products.filter((p) => p.sellerId === currentUser.id);
  const activeListings = myListings.filter((p) => p.status !== 'sold');
  const soldListings = myListings.filter((p) => p.status === 'sold');
  const savedProducts = products.filter((p) => favorites.includes(p.id));
  const mySentMessages = messages.filter((m) => m.senderId === currentUser.id);
  const myReceivedMessages = messages.filter((m) => m.receiverId === currentUser.id);

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Profile Summary Banner */}
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
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="font-display font-extrabold text-2xl text-slate-900">
                    {currentUser.name}
                  </h1>
                  <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Verified Student
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{currentUser.college}</span>
                  </span>
                  <span>·</span>
                  <span>{currentUser.location}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Joined {currentUser.joinedDate}</span>
                  </span>
                </div>

                {currentUser.bio && (
                  <p className="text-xs text-slate-600 max-w-xl italic pt-1">
                    "{currentUser.bio}"
                  </p>
                )}
              </div>
            </div>

            {/* Quick Action */}
            <div className="shrink-0">
              <button
                onClick={() => navigateTo('sell')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs shadow-xs transition-colors flex items-center gap-1.5"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Post New Listing</span>
              </button>
            </div>
          </div>

          {/* 3 Key Simple Statistics */}
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
                Items Sold
              </span>
              <p className="font-display font-extrabold text-2xl text-emerald-600 font-mono mt-0.5 tabular-nums">
                {soldListings.length}
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
            onClick={() => setActiveTab('interested')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'interested'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            Items I’m Interested In ({mySentMessages.length})
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

        {/* Tab Content: 1. My Listings */}
        {activeTab === 'my-listings' && (
          <div className="space-y-4">
            {myListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {myListings.map((p) => (
                  <div key={p.id} className="space-y-2">
                    <ProductCard product={p} />
                    {/* Management Action Bar */}
                    <div className="flex items-center gap-1.5 text-xs">
                      {p.status !== 'sold' && (
                        <button
                          type="button"
                          onClick={() => markProductSold(p.id)}
                          className="flex-1 py-1.5 px-2 bg-white hover:bg-emerald-50 text-emerald-700 font-semibold rounded-xl border border-slate-200 hover:border-emerald-300 flex items-center justify-center gap-1 shadow-2xs"
                        >
                          <CheckCheck className="w-3.5 h-3.5" />
                          <span>Mark Sold</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => deleteProduct(p.id)}
                        className="p-1.5 bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-xl border border-slate-200 hover:border-rose-200 shadow-2xs"
                        title="Delete listing"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
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

        {/* Tab Content: 2. Saved Items */}
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

        {/* Tab Content: 3. Items I'm Interested In */}
        {activeTab === 'interested' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900">
              Inquiries Sent to Sellers
            </h3>
            {mySentMessages.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {mySentMessages.map((msg) => (
                  <div key={msg.id} className="py-3.5 first:pt-0 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{msg.productTitle}</span>
                      <span className="text-[11px] text-slate-400">{msg.timestamp}</span>
                    </div>
                    <p className="text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      "{msg.message}"
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">
                You haven't messaged any sellers yet. When you click "Contact Seller" on an item, it will show up here.
              </p>
            )}
          </div>
        )}

        {/* Tab Content: 4. Messages */}
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

        {/* Tab Content: 5. Profile */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 max-w-xl text-xs">
            <h3 className="font-display font-bold text-lg text-slate-900">
              Student Profile Details
            </h3>

            <div className="space-y-3">
              <div>
                <span className="text-slate-400 block font-semibold">Full Name</span>
                <span className="font-bold text-slate-800 text-sm">{currentUser.name}</span>
              </div>
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
        )}
      </div>
    </div>
  );
};
