import React from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import {
  Search,
  MessageSquare,
  Handshake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PlusCircle,
  Sparkles,
  MapPin,
  Clock,
  HeartHandshake,
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const { navigateTo } = useCampusCart();

  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Find useful products from students around your campus.',
      icon: Search,
      tips: [
        'Filter by your specific college or department',
        'Sort by walking distance & lowest price',
        'Save favorites to monitor price changes',
      ],
    },
    {
      number: '02',
      title: 'Connect',
      description: 'Message the seller and discuss the item.',
      icon: MessageSquare,
      tips: [
        'Fast in-app messaging without sharing personal phone numbers',
        'Discuss course codes, textbook editions, or condition',
        'Agree on a public campus meeting spot',
      ],
    },
    {
      number: '03',
      title: 'Meet & Exchange',
      description: 'Arrange a convenient campus pickup.',
      icon: Handshake,
      tips: [
        'Meet at the student union, dining hall, or library quad',
        'Inspect textbooks and test electronics in person',
        'Pay with UPI or cash upon satisfactory inspection',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Simpler. Smarter. Local.</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            How CampusCart Works
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            CampusCart is designed specifically for college students to buy and sell course books, dorm items, and gadgets right within their campus.
          </p>
        </div>

        {/* 3 Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-500/50 transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-4xl font-black text-emerald-600/30">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h2 className="font-display font-extrabold text-2xl text-slate-900">
                      {step.title}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Campus Benefits
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Campus Safety Manifesto */}
        <div className="bg-gradient-to-br from-emerald-900 to-slate-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Student Community</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                Keeping Transactions Local & Student-Focused
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                No shipping delays, no hidden platform commissions, and no dealing with strangers from across town. Everything stays within your university quad and hostel community.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <button
                onClick={() => navigateTo('marketplace')}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Browse Products →</span>
              </button>
              <button
                onClick={() => navigateTo('sell')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 border border-white/20"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Sell an Item</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
