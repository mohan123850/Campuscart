import React, { useState } from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { X, Send, MessageSquare, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export const ContactSellerModal: React.FC = () => {
  const {
    isContactModalOpen,
    closeContactSellerModal,
    activeProductForContact,
    sendMessage,
    currentUser,
    openAuthModal,
  } = useCampusCart();

  const [messageText, setMessageText] = useState(
    'Hi! I saw your listing on CampusCart and I’m interested. Is it still available for campus pickup?'
  );

  if (!isContactModalOpen || !activeProductForContact) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      openAuthModal('login');
      return;
    }
    if (!messageText.trim()) return;

    sendMessage(
      activeProductForContact.id,
      activeProductForContact.sellerId,
      messageText.trim()
    );
  };

  const handleChipClick = (chipText: string) => {
    setMessageText(chipText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={closeContactSellerModal}
          className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Message Student Seller
            </h3>
            <p className="text-xs text-slate-500">
              Direct campus exchange · No broker fees
            </p>
          </div>
        </div>

        {/* Product Preview Strip */}
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80 mb-4">
          <img
            src={activeProductForContact.images[0]}
            alt={activeProductForContact.title}
            className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200"
          />
          <div className="min-w-0 flex-1 text-xs">
            <h4 className="font-bold text-slate-900 truncate">
              {activeProductForContact.title}
            </h4>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="font-mono font-bold text-emerald-700 text-sm">
                ${activeProductForContact.price}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600 font-medium">
                Seller: {activeProductForContact.sellerName}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate mt-0.5">
              Pickup: {activeProductForContact.location}
            </p>
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="space-y-1.5 mb-3">
          <span className="text-[11px] font-semibold text-slate-500">Quick message prompts:</span>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => handleChipClick('Hi! Is this still available for campus pickup?')}
              className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 transition-colors"
            >
              Still available?
            </button>
            <button
              type="button"
              onClick={() =>
                handleChipClick(
                  `Could you do $${Math.max(5, activeProductForContact.price - 5)} if I pick it up today at your dorm?`
                )
              }
              className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 transition-colors"
            >
              Offer $5 discount?
            </button>
            <button
              type="button"
              onClick={() =>
                handleChipClick('Can we meet outside the campus student union tomorrow afternoon?')
              }
              className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 transition-colors"
            >
              Meet at Student Union?
            </button>
          </div>
        </div>

        {/* Message Input */}
        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Message to {activeProductForContact.sellerName.split(' ')[0]}
            </label>
            <textarea
              rows={3}
              required
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-[11px] text-emerald-900 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Campus Tip: Always meet in public campus zones (library lobby, dining halls, dorm security desks).</span>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send In-App Inquiry to Seller</span>
          </button>
        </form>
      </div>
    </div>
  );
};
