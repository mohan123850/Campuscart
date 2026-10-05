export type ProductCategory =
  | 'Books & Study Materials'
  | 'Electronics'
  | 'Hostel Essentials'
  | 'Fashion'
  | 'Furniture'
  | 'Sports'
  | 'Stationery'
  | 'Lab & Medical Gear'
  | 'Bikes & Mobility'
  | 'Musical Instruments'
  | 'Gaming & Consoles'
  | 'Kitchen & Dorm Cooking'
  | 'Art & Architecture'
  | 'Other';

export type ProductCondition = 'Like New' | 'Gently Used' | 'Well Loved' | 'Fair';

export type PageId =
  | 'home'
  | 'marketplace'
  | 'categories'
  | 'product-details'
  | 'sell'
  | 'dashboard';

export interface User {
  id: string;
  name: string;
  email: string;
  college: string;
  location: string;
  avatar: string;
  joinedDate: string;
  phone?: string;
  bio?: string;
}

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  condition: ProductCondition;
  description: string;
  images: string[];
  college: string;
  location: string;
  sellerId: string;
  sellerName: string;
  sellerAvatar?: string;
  sellerRating?: number;
  contactPreference?: string;
  createdAt: string;
  views?: number;
  featured?: boolean;
  status?: 'active' | 'sold';
}

export interface ChatMessage {
  id: string;
  productId: string;
  productTitle: string;
  senderId: string;
  senderName: string;
  receiverId: string;
  message: string;
  timestamp: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
