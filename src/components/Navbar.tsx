import React, { useState } from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { PageId } from '../types';
import { POPULAR_COLLEGES } from '../data/mockData';
import {
  ShoppingBag,
  Search,
  PlusCircle,
  User,
  Heart,
  Menu,
  X,
  MapPin,
  LogOut,
  ArrowRight,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    currentUser,
    openAuthModal,
    logoutUser,
    favorites,
    searchQuery,
    setSearchQuery,
    selectedCampus,
    setSelectedCampus,
  } = useCampusCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Marketplace', page: 'marketplace' },
    { label: 'Categories', page: 'categories' },
    { label: 'How It Works', page: 'how-it-works' },
  ];

  const handleNav = (page: PageId) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateTo('marketplace');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Logo & Campus Selector */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-slate-900">
              Campus<span className="text-emerald-600">Cart</span>
            </span>
          </button>

          {/* Quick Campus Filter Pill in Top Bar */}
          <div className="hidden xl:flex items-center gap-1.5 pl-3 border-l border-slate-200 text-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <select
              value={selectedCampus}
              onChange={(e) => setSelectedCampus(e.target.value)}
              className="text-xs text-slate-600 bg-transparent focus:outline-none font-medium max-w-[170px] truncate cursor-pointer"
            >
              {POPULAR_COLLEGES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Global Search Bar (Mid-screen) */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-sm relative"
        >
          <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search books, calculator, table..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-emerald-500 focus:outline-none transition-colors"
          />
        </form>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`transition-colors whitespace-nowrap hover:text-emerald-700 ${
                currentPage === link.page
                  ? 'text-emerald-700 border-b-2 border-emerald-600 py-5 font-bold'
                  : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Right side Actions (Saved, Sell CTA, Login/Sign Up) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Saved Items Shortcut */}
          <button
            onClick={() => handleNav('dashboard')}
            className="relative p-2 rounded-xl text-slate-600 hover:text-rose-600 hover:bg-slate-100 transition-colors"
            title="Saved Items"
            aria-label="View saved items"
          >
            <Heart className="w-4 h-4" />
            {favorites.length > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[9px] font-mono font-bold flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </button>

          {/* Sell Button CTA */}
          <button
            onClick={() => handleNav('sell')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Sell an Item</span>
          </button>

          {/* User Account / Auth Buttons */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-6 h-6 rounded-full object-cover ring-1 ring-emerald-500"
                />
                <span className="hidden sm:inline text-xs font-semibold text-slate-700 max-w-[80px] truncate">
                  {currentUser.name.split(' ')[0]}
                </span>
              </button>

              {userDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 z-50 text-xs"
                  onMouseLeave={() => setUserDropdownOpen(false)}
                >
                  <div className="px-3 py-2 border-b border-slate-100">
                    <p className="font-bold text-slate-900 truncate">{currentUser.name}</p>
                    <p className="text-[11px] text-slate-400 truncate">{currentUser.college}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleNav('dashboard');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-slate-50 text-slate-700 font-medium"
                  >
                    My Student Dashboard
                  </button>
                  <button
                    onClick={() => {
                      handleNav('sell');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-slate-50 text-slate-700 font-medium"
                  >
                    Post an Item
                  </button>
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <button
                      onClick={() => {
                        logoutUser();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-rose-600 hover:bg-rose-50 flex items-center gap-1.5 font-medium"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => openAuthModal('login')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="px-3 py-1.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors shadow-2xs"
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-3 space-y-2">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, calculator, table..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-100 rounded-xl border border-slate-200"
            />
          </form>

          {/* Mobile Campus Selector */}
          <div className="p-2 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <select
              value={selectedCampus}
              onChange={(e) => setSelectedCampus(e.target.value)}
              className="w-full bg-transparent text-slate-700 font-medium focus:outline-none"
            >
              {POPULAR_COLLEGES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`block w-full text-left py-2 px-3 rounded-xl text-xs font-semibold ${
                  currentPage === link.page
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => handleNav('sell')}
              className="w-full py-2 text-xs font-bold bg-emerald-600 text-white rounded-xl text-center"
            >
              Sell an Item
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
