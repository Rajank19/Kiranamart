export interface Product {
  id: string;
  name: string;
  category: string; // e.g. "fruits", "dairy", "snacks", "drinks", "household", "meat", "cleaning"
  subCategory?: string; // e.g. "Seasonal Fruits", "Fresh Vegetables", "Leafy Greens"
  price: number; // in Indian Rupees (₹) or dollars ($). We'll support both currencies
  priceUnit: string; // e.g. "500g", "1kg", "6 units", "1000 ml", "400 g", "500 g", "1 Unit"
  originalPrice?: number;
  image: string;
  description?: string;
  brand?: string;
  isBestseller?: boolean;
  isOrganic?: boolean;
  isImported?: boolean;
  discountBadge?: string; // e.g. "20% OFF", "15% OFF"
  nutritionalInfo?: {
    energy?: string;
    protein?: string;
    fiber?: string;
    potassium?: string;
    [key: string]: string | undefined;
  };
}

export interface Category {
  id: string; // fruits, dairy, snacks, drinks, household, meat, cleaning
  name: string;
  icon: string; // material symbols icon name
}

export interface SubCategory {
  name: string;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Out for Delivery' | 'Delivered' | 'Cancelled';
  statusDetails: string;
  itemsCount: number;
  itemNamesSummary: string;
  totalAmount: number;
  items: { productName: string; quantity: number; image: string }[];
  orderedAtString: string;
}

export interface StoreApproval {
  id: string;
  name: string;
  location: string;
  focus: string;
  image: string;
  status: 'pending' | 'approved' | 'declined';
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  membership: string;
  referralCode: string;
}

// All views that we support based on the screenshots
export type ActiveView =
  | 'login'
  | 'signup'
  | 'home'
  | 'categories'
  | 'products-sub'
  | 'product-details'
  | 'cart'
  | 'checkout'
  | 'order-success'
  | 'orders-list'
  | 'profile'
  | 'owner-dashboard'
  | 'owner-add-product'
  | 'admin-dashboard';
