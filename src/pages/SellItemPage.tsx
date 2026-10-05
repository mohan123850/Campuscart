import React, { useState } from 'react';
import { useCampusCart } from '../context/CampusCartContext';
import { PRODUCT_CATEGORIES, POPULAR_COLLEGES, ASSET_IMAGES } from '../data/mockData';
import { ProductCategory, ProductCondition } from '../types';
import {
  Upload,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  Image as ImageIcon,
} from 'lucide-react';

export const SellItemPage: React.FC = () => {
  const { addProduct, currentUser, openAuthModal, navigateTo } = useCampusCart();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProductCategory>('Books & Study Materials');
  const [price, setPrice] = useState('25');
  const [originalPrice, setOriginalPrice] = useState('75');
  const [condition, setCondition] = useState<ProductCondition>('Like New');
  const [description, setDescription] = useState('');
  const [campus, setCampus] = useState(currentUser?.college || POPULAR_COLLEGES[1]);
  const [location, setLocation] = useState(currentUser?.location || 'North Hall Dorm / Student Union');
  const [contactInfo, setContactInfo] = useState(currentUser?.email || 'alex.rivera@statetech.edu');
  const [images, setImages] = useState<string[]>([ASSET_IMAGES.textbooks]);

  const [createdProductId, setCreatedProductId] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImages((prev) => [...prev, reader.result as string]);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const addPresetImage = (img: string) => {
    if (!images.includes(img)) {
      setImages((prev) => [...prev, img]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      openAuthModal('login');
      return;
    }
    if (!title.trim() || !price || images.length === 0) {
      alert('Please provide a title, asking price, and at least one photo.');
      return;
    }

    const newId = addProduct({
      title: title.trim(),
      category,
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      condition,
      description: description.trim() || 'Good student condition, ready for quick campus pickup.',
      images,
      college: campus,
      location: location.trim(),
      sellerId: currentUser.id,
      sellerName: currentUser.name,
      sellerAvatar: currentUser.avatar,
      sellerRating: 5.0,
      contactPreference: contactInfo.trim(),
    });

    setCreatedProductId(newId);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 lg:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!createdProductId ? (
          <div className="space-y-8">
            {/* Page Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Listing Fees · Student Community</span>
              </div>
              <h1 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
                List an Item on CampusCart
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Pass down used textbooks, calculators, tech accessories, and dorm essentials to students nearby
              </p>
            </div>

            {/* Listing Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6 text-xs"
            >
              {/* Product Photos */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Upload Product Images <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">At least 1 photo recommended</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 group"
                    >
                      <img src={img} alt={`Upload ${idx}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="absolute top-1.5 right-1.5 p-1 bg-slate-900/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-600"
                        title="Remove photo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}

                  {/* Upload Trigger */}
                  <label className="aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-200 hover:border-emerald-500 flex flex-col items-center justify-center p-3 cursor-pointer text-center hover:bg-emerald-50/20 transition-all">
                    <Upload className="w-5 h-5 text-slate-400 mb-1" />
                    <span className="text-xs font-bold text-slate-700">Add Photo</span>
                    <span className="text-[10px] text-slate-400">JPG, PNG</span>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>

                {/* Quick Demo Image Shortcuts */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-500 block">
                    📸 Quick photo presets (Click to attach sample photos for testing):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => addPresetImage(ASSET_IMAGES.textbooks)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg text-slate-700 font-medium"
                    >
                      + Textbooks
                    </button>
                    <button
                      type="button"
                      onClick={() => addPresetImage(ASSET_IMAGES.calculator)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg text-slate-700 font-medium"
                    >
                      + Calculator
                    </button>
                    <button
                      type="button"
                      onClick={() => addPresetImage(ASSET_IMAGES.laptopStand)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg text-slate-700 font-medium"
                    >
                      + Laptop Stand
                    </button>
                    <button
                      type="button"
                      onClick={() => addPresetImage(ASSET_IMAGES.studyDesk)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg text-slate-700 font-medium"
                    >
                      + Study Desk
                    </button>
                    <button
                      type="button"
                      onClick={() => addPresetImage(ASSET_IMAGES.beanbag)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg text-slate-700 font-medium"
                    >
                      + Bean Bag
                    </button>
                  </div>
                </div>
              </div>

              {/* Title & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Product Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Calculus: Early Transcendentals (9th Edition)"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price & Condition */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Your Asking Price ($) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      required
                      min="1"
                      max="999"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="25"
                      className="w-full pl-8 pr-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Original Retail Price ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      min="1"
                      max="2000"
                      value={originalPrice}
                      onChange={(e) => setOriginalPrice(e.target.value)}
                      placeholder="75"
                      className="w-full pl-8 pr-3 py-2 text-xs font-mono rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Condition <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Like New">Like New (Mint / Spotless)</option>
                    <option value="Gently Used">Gently Used (Minor cosmetic)</option>
                    <option value="Well Loved">Well Loved (Fully functional)</option>
                    <option value="Fair">Fair (Has noticeable wear)</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Product Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mention why you're selling, course code (if textbook), condition notes, and best campus pickup times..."
                  className="w-full p-3.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Campus, Location & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    College / Campus <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={campus}
                    onChange={(e) => setCampus(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    {POPULAR_COLLEGES.filter((c) => c !== 'All Campuses').map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Campus Pickup Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. North Hall Dorm / Engineering Quad"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Seller Contact Info
                  </label>
                  <input
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="e.g. CampusCart Chat or student email"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Free to list · 100% Student-to-Student</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>List Item</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-5 max-w-lg mx-auto shadow-sm animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-display font-black text-2xl text-slate-900">
                Your Item is Live on CampusCart!
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 leading-relaxed">
                Students on your campus can now discover your listing and message you directly for in-person campus pickup.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => navigateTo('product-details', createdProductId)}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors"
              >
                View Your Listing
              </button>
              <button
                onClick={() => {
                  setCreatedProductId(null);
                  setTitle('');
                  setPrice('20');
                }}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
              >
                List Another Item
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
