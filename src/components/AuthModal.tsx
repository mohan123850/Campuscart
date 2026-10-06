import React, { useState } from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { POPULAR_COLLEGES } from '../data/mockData';
import { X, ShoppingBag, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authMode, openAuthModal, loginUser, signupUser, users } =
    useCampusCart();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [college, setCollege] = useState(POPULAR_COLLEGES[1]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'login') {
      if (!email.trim()) return;
      loginUser(email.trim(), password);
    } else {
      if (!name.trim() || !email.trim()) return;
      signupUser(name.trim(), email.trim(), college, password);
    }
  };

  const handleQuickDemoLogin = (userEmail: string) => {
    loginUser(userEmail, 'demo123');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-2">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <h2 className="font-display font-extrabold text-2xl text-slate-900">
            Welcome to CampusCart.
          </h2>
          <p className="text-xs text-emerald-700 font-semibold">
            CampusCart is built for students, by students.
          </p>
        </div>

        {/* Quick Demo Switcher for fast evaluation */}
        <div className="mb-5 p-3 bg-slate-50 rounded-2xl border border-slate-200/70 text-xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            ⚡ Quick Demo Accounts (1-Click Login):
          </span>
          <div className="grid grid-cols-3 gap-1.5">
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('alex.rivera@statetech.edu')}
              className="px-2 py-1.5 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-xl border border-slate-200 text-center font-medium truncate transition-colors shadow-2xs"
            >
              Alex (State Tech)
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('priya.sharma@metroeng.edu')}
              className="px-2 py-1.5 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-xl border border-slate-200 text-center font-medium truncate transition-colors shadow-2xs"
            >
              Priya (Metro Sci)
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('m.williams@citycentral.edu')}
              className="px-2 py-1.5 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-xl border border-slate-200 text-center font-medium truncate transition-colors shadow-2xs"
            >
              Marcus (Central)
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {authMode === 'signup' && (
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jordan Smith"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          )}

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Student Email (.edu or college email)
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@college.edu"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {authMode === 'signup' && (
            <div>
              <label className="block font-semibold text-slate-700 mb-1">College / Campus</label>
              <select
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                {POPULAR_COLLEGES.filter((c) => c !== 'All Campuses').map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 mt-2"
          >
            <span>{authMode === 'login' ? 'Log In' : 'Create Account'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Toggle between login and signup */}
        <div className="mt-5 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
          {authMode === 'login' ? (
            <p>
              New to CampusCart?{' '}
              <button
                type="button"
                onClick={() => openAuthModal('signup')}
                className="font-bold text-emerald-700 hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have a campus account?{' '}
              <button
                type="button"
                onClick={() => openAuthModal('login')}
                className="font-bold text-emerald-700 hover:underline"
              >
                Log In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
