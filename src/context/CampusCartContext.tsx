import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  ProductCategory,
  ProductCondition,
  User,
  PageId,
  ChatMessage,
} from '../types';
import {
  INITIAL_PRODUCTS,
  INITIAL_USERS,
} from '../data/mockData';

interface CampusCartContextType {
  currentPage: PageId;
  navigateTo: (page: PageId, productId?: string, category?: ProductCategory) => void;
  products: Product[];
  selectedProductId: string | null;
  selectedProduct: Product | undefined;
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;

  // Search & Filters
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: ProductCategory | 'All';
  setSelectedCategory: (cat: ProductCategory | 'All') => void;
  selectedCampus: string;
  setSelectedCampus: (campus: string) => void;
  sortOption: 'newest' | 'price-asc' | 'price-desc';
  setSortOption: (sort: 'newest' | 'price-asc' | 'price-desc') => void;
  selectedCondition: ProductCondition | 'All';
  setSelectedCondition: (cond: ProductCondition | 'All') => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
  resetFilters: () => void;

  // User & Auth
  currentUser: User | null;
  users: User[];
  isAuthModalOpen: boolean;
  authMode: 'login' | 'signup';
  openAuthModal: (mode?: 'login' | 'signup') => void;
  closeAuthModal: () => void;
  loginUser: (email: string, password?: string) => boolean;
  signupUser: (name: string, email: string, college: string, password?: string) => boolean;
  logoutUser: () => void;

  // Products CRUD
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'views' | 'status'>) => string;
  deleteProduct: (id: string) => void;
  markProductSold: (id: string) => void;

  // Messages & Inquiries
  messages: ChatMessage[];
  sendMessage: (productId: string, receiverId: string, message: string) => void;

  // Modals & Feedback
  isContactModalOpen: boolean;
  activeProductForContact: Product | null;
  openContactSellerModal: (product: Product) => void;
  closeContactSellerModal: () => void;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CampusCartContext = createContext<CampusCartContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PRODUCTS: 'campuscart_products_v3',
  FAVORITES: 'campuscart_favorites_v3',
  USERS: 'campuscart_users_v3',
  CURRENT_USER_ID: 'campuscart_current_user_v3',
  MESSAGES: 'campuscart_messages_v3',
};

export const CampusCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const loadStorage = <T,>(key: string, fallback: T): T => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  };

  const [products, setProducts] = useState<Product[]>(() => {
    const stored = loadStorage<Product[] | null>(STORAGE_KEYS.PRODUCTS, null);
    if (!stored || stored.length < INITIAL_PRODUCTS.length) {
      if (stored && stored.length > 0) {
        const userCreated = stored.filter((item) => !INITIAL_PRODUCTS.some((init) => init.id === item.id));
        return [...userCreated, ...INITIAL_PRODUCTS];
      }
      return INITIAL_PRODUCTS;
    }
    return stored;
  });

  const [favorites, setFavorites] = useState<string[]>(() =>
    loadStorage(STORAGE_KEYS.FAVORITES, ['prod-1', 'prod-2', 'prod-3'])
  );

  const [users, setUsers] = useState<User[]>(() =>
    loadStorage(STORAGE_KEYS.USERS, INITIAL_USERS)
  );

  const [currentUserId, setCurrentUserId] = useState<string>(() =>
    loadStorage(STORAGE_KEYS.CURRENT_USER_ID, 'user-1')
  );

  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    loadStorage(STORAGE_KEYS.MESSAGES, [
      {
        id: 'msg-1',
        productId: 'prod-1',
        productTitle: 'University Engineering & Calculus Textbooks',
        senderId: 'user-2',
        senderName: 'Priya Sharma',
        receiverId: 'user-1',
        message: 'Hey Alex! Is the Calculus 9th edition textbook still available for pickup at North Hall?',
        timestamp: 'Today, 11:20 AM',
      },
      {
        id: 'msg-2',
        productId: 'prod-1',
        productTitle: 'University Engineering & Calculus Textbooks',
        senderId: 'user-1',
        senderName: 'Alex Rivera',
        receiverId: 'user-2',
        message: 'Hey Priya! Yes, I have it with me in my backpack right now. Can meet outside the Engineering Quad at 2 PM!',
        timestamp: 'Today, 11:32 AM',
      },
    ])
  );

  const currentUser = users.find((u) => u.id === currentUserId) || users[0] || null;

  // Navigation
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>('prod-1');

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [selectedCampus, setSelectedCampus] = useState('All Campuses');
  const [sortOption, setSortOption] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');
  const [selectedCondition, setSelectedCondition] = useState<ProductCondition | 'All'>('All');
  const [maxPrice, setMaxPrice] = useState<number>(3000);

  // Modals & Feedback
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeProductForContact, setActiveProductForContact] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  // Sync to storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER_ID, JSON.stringify(currentUserId));
  }, [currentUserId]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }, [messages]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const navigateTo = (page: PageId, productId?: string, category?: ProductCategory) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    if (category) {
      setSelectedCategory(category);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedCampus('All Campuses');
    setSortOption('newest');
    setSelectedCondition('All');
    setMaxPrice(3000);
    showToast('Filters reset to show all campus products.');
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from saved items');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your CampusCart favorites!');
        return [...prev, productId];
      }
    });
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  const openAuthModal = (mode: 'login' | 'signup' = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const loginUser = (email: string) => {
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      setCurrentUserId(existing.id);
      showToast(`Welcome back, ${existing.name}!`);
    } else {
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: email.split('@')[0] || 'Student Member',
        email,
        college: 'State Tech University',
        location: 'Campus Residence Hall',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        joinedDate: 'October 2026',
      };
      setUsers((prev) => [newUser, ...prev]);
      setCurrentUserId(newUser.id);
      showToast(`Welcome to CampusCart, ${newUser.name}!`);
    }
    setIsAuthModalOpen(false);
    return true;
  };

  const signupUser = (name: string, email: string, college: string) => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      college: college.trim() || 'State Tech University',
      location: 'Campus Dormitory',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      joinedDate: 'October 2026',
    };
    setUsers((prev) => [newUser, ...prev]);
    setCurrentUserId(newUser.id);
    showToast(`Account created! Welcome, ${newUser.name}.`);
    setIsAuthModalOpen(false);
    return true;
  };

  const logoutUser = () => {
    setCurrentUserId('user-1');
    showToast('Logged out. Switched to demo student profile.');
  };

  const addProduct = (
    productData: Omit<Product, 'id' | 'createdAt' | 'views' | 'status'>
  ): string => {
    const newId = `prod-${Date.now()}`;
    const newProduct: Product = {
      ...productData,
      id: newId,
      createdAt: new Date().toISOString(),
      views: 1,
      status: 'active',
    };
    setProducts((prev) => [newProduct, ...prev]);
    showToast('🎉 Your product is live on CampusCart!');
    return newId;
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setFavorites((prev) => prev.filter((favId) => favId !== id));
    showToast('Product removed from marketplace.');
  };

  const markProductSold = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: 'sold' as const } : p))
    );
    showToast('Item marked as Sold! Great student exchange.');
  };

  const sendMessage = (productId: string, receiverId: string, messageText: string) => {
    if (!currentUser) return;
    const targetProduct = products.find((p) => p.id === productId);

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      productId,
      productTitle: targetProduct?.title || 'Campus Item',
      senderId: currentUser.id,
      senderName: currentUser.name,
      receiverId,
      message: messageText,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, newMsg]);
    showToast('Message sent to seller! They will be notified.');
    setIsContactModalOpen(false);
  };

  const openContactSellerModal = (product: Product) => {
    setActiveProductForContact(product);
    setIsContactModalOpen(true);
  };

  const closeContactSellerModal = () => {
    setActiveProductForContact(null);
    setIsContactModalOpen(false);
  };

  return (
    <CampusCartContext.Provider
      value={{
        currentPage,
        navigateTo,
        products,
        selectedProductId,
        selectedProduct,
        favorites,
        toggleFavorite,
        isFavorite,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedCampus,
        setSelectedCampus,
        sortOption,
        setSortOption,
        selectedCondition,
        setSelectedCondition,
        maxPrice,
        setMaxPrice,
        resetFilters,
        currentUser,
        users,
        isAuthModalOpen,
        authMode,
        openAuthModal,
        closeAuthModal,
        loginUser,
        signupUser,
        logoutUser,
        addProduct,
        deleteProduct,
        markProductSold,
        messages,
        sendMessage,
        isContactModalOpen,
        activeProductForContact,
        openContactSellerModal,
        closeContactSellerModal,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CampusCartContext.Provider>
  );
};

export const useCampusCart = () => {
  const context = useContext(CampusCartContext);
  if (!context) {
    throw new Error('useCampusCart must be used within a CampusCartProvider');
  }
  return context;
};
