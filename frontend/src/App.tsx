import { useEffect, useState } from 'react';
import { Home, Grid, ShoppingBasket, History, User } from 'lucide-react';
import { 
  Product, 
  CartItem, 
  Order, 
  UserProfile, 
  StoreApproval, 
  ActiveView 
} from './types';
import { 
  CATEGORIES, 
  PRODUCTS, 
  INITIAL_ORDERS, 
  INITIAL_STORES, 
  INITIAL_USER 
} from './data';

// Modular layouts imports
import { CustomerHeader } from './components/CustomerHeader';
import { CustomerHome } from './components/CustomerHome';
import { CustomerCategories } from './components/CustomerCategories';
import { CustomerProductListing } from './components/CustomerProductListing';
import { CustomerProductDetails } from './components/CustomerProductDetails';
import { CustomerCart } from './components/CustomerCart';
import { CustomerCheckout } from './components/CustomerCheckout';
import { CustomerOrderSuccess } from './components/CustomerOrderSuccess';
import { CustomerOrdersList } from './components/CustomerOrdersList';
import { CustomerProfile } from './components/CustomerProfile';
import { AuthLogin } from './components/AuthLogin';
import { AuthSignup } from './components/AuthSignup';
import { StoreOwnerDashboard } from './components/StoreOwnerDashboard';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserProfile>(INITIAL_USER);

const [userRole, setUserRole] =
  useState<'customer' | 'store' | 'admin' | null>(null);

const [sessionActive, setSessionActive] = useState(false);

  // Flow states
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  // Data lists (stateful so store creation inserts live SKUs instantly!)
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [stores, setStores] = useState<StoreApproval[]>(INITIAL_STORES);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Detailed view / routing parameters
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState('fruits');
  const [activeSubCategoryName, setActiveSubCategoryName] = useState('all');
  const [recentOrderId, setRecentOrderId] = useState('KM-390412');
  const [recentOrderAmount, setRecentOrderAmount] = useState(254);

  // Cart helper actions
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product: Product) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx > -1) {
        if (prev[idx].quantity <= 1) {
          return prev.filter((item) => item.product.id !== product.id);
        }
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity - 1 };
        return next;
      }
      return prev;
    });
  };

  const handleChangeQuantity = (product: Product, qty: number) => {
    setCart((prev) => {
      if (qty <= 0) {
        return prev.filter((item) => item.product.id !== product.id);
      }
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: qty };
        return next;
      }
      return [...prev, { product, quantity: qty }];
    });
  };

  // Switch to results listing page
  const handleSelectSubCategory = (subName: string, categoryId: string) => {
    setActiveCategoryId(categoryId);
    setActiveSubCategoryName(subName);
    setActiveView('listing');
  };

  // Directly check out individual product on "Buy Now" click
  const handleBuyNowDirect = (product: Product) => {
    // Empty current cart & insert product instantly
    setCart([{ product, quantity: 1 }]);
    setActiveView('checkout');
  };

  // Checkout process completed
  const handleOrderConfirmed = (grandTotal: number, couponDiscount: number) => {
    const nextId = 'KM-' + Math.floor(Math.random() * 900000 + 100000);
    const itemNamesSummary = cart.map((i) => `${i.product.name} (x${i.quantity})`).join(', ');

    const newOrder: Order = {
      id: nextId,
      date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Out for Delivery',
      statusDetails: 'Handpicked and dispatched',
      itemsCount: cart.reduce((sum, i) => sum + i.quantity, 0),
      itemNamesSummary: itemNamesSummary.length > 50 ? itemNamesSummary.substring(0, 47) + '...' : itemNamesSummary,
      totalAmount: grandTotal,
      items: cart.map(i => ({ productName: i.product.name, quantity: i.quantity, image: i.product.image })),
      orderedAtString: 'Ordered Today',
    };

    setOrders([newOrder, ...orders]);
    setRecentOrderId(nextId);
    setRecentOrderAmount(grandTotal);
    setCart([]); // Reset Cart
    setActiveView('order-success');
  };

  // Reordering history simulation
  const handleReorderHistory = (oldOrder: Order) => {
    alert(`Reloaded items from order ${oldOrder.id} inside your checkout basket!`);
    // Mock-load tomatoes and bananas to cart for rapid simulation
    const seedTomatoes = products.find((p) => p.id === 'p1') || products[0];
    const seedBananas = products.find((p) => p.id === 'p3') || products[1];
    setCart([
      { product: seedTomatoes, quantity: 1 },
      { product: seedBananas, quantity: 1 },
    ]);
    setActiveView('cart');
  };

  // Store owner SKU catalog additions
  const handleStoreAddProduct = (newProductSpecs: Omit<Product, 'id'>) => {
    const nextProduct: Product = {
      ...newProductSpecs,
      id: 'p' + (products.length + 1),
    };
    setProducts([nextProduct, ...products]);
    alert(`Item "${nextProduct.name}" successfully integrated inside online active listings!`);
  };

 const handleLoginSuccess = (
  role: 'customer' | 'storeOwner' | 'admin'
) => {
  setUserRole(
    role === 'storeOwner'
      ? 'store'
      : role
  );

  setSessionActive(true);
  setActiveView('home');
};

useEffect(() => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (token && user) {
    const parsedUser = JSON.parse(user);

    setCurrentUser({
      ...currentUser,
      name: parsedUser.name,
      email: parsedUser.email,
      role: parsedUser.role,
    });

    setSessionActive(true);

    setUserRole(
      parsedUser.role === "storeOwner"
        ? "store"
        : parsedUser.role
    );
  }
}, []);

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  setUserRole(null);
  setSessionActive(false);

  setCurrentUser(INITIAL_USER);
};

  // Render content according to active role session
  if (!sessionActive || userRole === null) {

  if (showSignup) {
    return (
      <AuthSignup
        onSignupSuccess={() => setShowSignup(false)}
        onBackToLogin={() => setShowSignup(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <AuthLogin
        onLoginSuccess={handleLoginSuccess}
        onGoToSignup={() => setShowSignup(true)}
      />
    </div>
  );
}

  // Dashboard Role: Store Owner
  if (userRole === 'store') {
    return (
      <StoreOwnerDashboard 
        products={products}
        onAddProduct={handleStoreAddProduct}
        onToggleStatus={(id) => alert(`SKU item status changed state successfully.`)}
        onLogout={handleLogout}
      />
    );
  }

  // Dashboard Role: Headquarters Admin
  if (userRole === 'admin') {
    return (
      <AdminDashboard 
        initialStores={stores}
        onLogout={handleLogout}
      />
    );
  }

  // STANDARD CUSTOMER BROWSER FRAMEWORK
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafc]">
      
      {/* 1. Header (Dynamic according to search/navigation profiles) */}
      <CustomerHeader 
        onSearch={(q) => {
          setSearchQuery(q);
          if (q.trim()) {
            // Drop specific category filters and open listing to view search elements
            setActiveCategoryId('');
            setActiveSubCategoryName('all');
            setActiveView('listing');
          } else {
             setActiveView('home');
          }
        }}
        searchQuery={searchQuery}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setActiveView('cart')}
        activeView={activeView}
        onProfileClick={() => setActiveView('profile')}
        onNavigateHome={() => {
          setSearchQuery('');
          setActiveView('home');
        }}
      />

      {/* 2. Main content router */}
      <main className="flex-grow flex flex-col">
        {activeView === 'home' && (
          <CustomerHome 
            products={products}
            categories={CATEGORIES}
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onCategorySelect={(catId) => {
              setActiveCategoryId(catId);
              setActiveSubCategoryName('all');
              setActiveView('categories');
            }}
            onProductSelect={(prod) => {
              setSelectedProduct(prod);
              setActiveView('details');
            }}
            onViewAllCategories={() => {
              setActiveCategoryId('fruits');
              setActiveSubCategoryName('all');
              setActiveView('categories');
            }}
          />
        )}

        {activeView === 'categories' && (
          <CustomerCategories 
            categories={CATEGORIES}
            initialActiveCategoryId={activeCategoryId}
            onSelectSubCategory={handleSelectSubCategory}
            onShopPromoDeals={() => {
              // Direct promotions results
              setActiveCategoryId('fruits');
              setActiveSubCategoryName('Fresh Fruits');
              setActiveView('listing');
            }}
          />
        )}

        {activeView === 'listing' && (
          <CustomerProductListing 
            products={products}
            activeCategoryId={activeCategoryId}
            activeSubCategoryName={activeSubCategoryName}
            searchQuery={searchQuery}
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onProductSelect={(p) => {
              setSelectedProduct(p);
              setActiveView('details');
            }}
            onBackToHome={() => {
              setSearchQuery('');
              setActiveView('home');
            }}
          />
        )}

        {activeView === 'details' && selectedProduct && (
          <CustomerProductDetails 
            product={selectedProduct}
            recommendations={products.filter((p) => p.category === selectedProduct.category && p.id !== selectedProduct.id)}
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onBack={() => {
              // Fallback routing
              if (activeCategoryId) {
                setActiveView('listing');
              } else {
                setActiveView('home');
              }
            }}
            onBuyNowDirect={handleBuyNowDirect}
          />
        )}

        {activeView === 'cart' && (
          <CustomerCart 
            cart={cart}
            suggestions={products}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onChangeQuantity={handleChangeQuantity}
            onNavigateToCheckOut={() => setActiveView('checkout')}
            onBackToHome={() => setActiveView('home')}
          />
        )}

        {activeView === 'checkout' && (
          <CustomerCheckout 
            cart={cart}
            onBack={() => setActiveView('cart')}
            onOrderCompleted={handleOrderConfirmed}
          />
        )}

        {activeView === 'order-success' && (
          <CustomerOrderSuccess 
            orderId={recentOrderId}
            totalPaid={recentOrderAmount}
            deliveryAddress="Jane Doe Home - sector 45 Gurgaon"
            onBackToShopping={() => {
              setSearchQuery('');
              setActiveView('home');
            }}
            onGoToMyOrders={() => setActiveView('orders-list')}
          />
        )}

        {activeView === 'orders-list' && (
          <CustomerOrdersList 
            orders={orders}
            onTrackOrder={(o) => {
              setRecentOrderId(o.id);
              setRecentOrderAmount(o.total);
              setActiveView('order-success');
            }}
            onReorder={handleReorderHistory}
            onBack={() => setActiveView('profile')}
          />
        )}

        {activeView === 'profile' && (
          <CustomerProfile 
            user={currentUser}
            onGoToOrders={() => setActiveView('orders-list')}
            onLogout={handleLogout}
            onRoleSwitch={() => alert('Logout to swap active system roles instantly!')}
          />
        )}
      </main>

      {/* 3. Mobile Sticky Navigation Bottom Tab Bar (Only displayed for Customer checkout browsing) */}
      <nav className="sticky bottom-0 w-full bg-white border-t border-gray-150 py-2.5 px-4 flex justify-around md:-hidden z-40 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] select-none">
        
        <button 
          onClick={() => {
            setSearchQuery('');
            setActiveView('home');
          }}
          className={`flex flex-col items-center gap-1 active:scale-95 transition-all cursor-pointer ${
            activeView === 'home' ? 'text-[#006e2f]' : 'text-gray-400'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        <button 
          onClick={() => {
            setActiveCategoryId('fruits');
            setActiveSubCategoryName('all');
            setActiveView('categories');
          }}
          className={`flex flex-col items-center gap-1 active:scale-95 transition-all cursor-pointer ${
            activeView === 'categories' ? 'text-[#006e2f]' : 'text-gray-400'
          }`}
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-bold">Categories</span>
        </button>

        <button 
          onClick={() => setActiveView('cart')}
          className={`flex flex-col items-center gap-1 active:scale-95 transition-all relative cursor-pointer ${
            activeView === 'cart' ? 'text-[#006e2f]' : 'text-gray-400'
          }`}
        >
          <ShoppingBasket className="w-5 h-5" />
          {cart.length > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-red-650 bg-red-600 text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
          <span className="text-[10px] font-bold">Cart</span>
        </button>

        <button 
          onClick={() => setActiveView('orders-list')}
          className={`flex flex-col items-center gap-1 active:scale-95 transition-all cursor-pointer ${
            activeView === 'orders-list' ? 'text-[#006e2f]' : 'text-gray-400'
          }`}
        >
          <History className="w-5 h-5" />
          <span className="text-[10px] font-bold">Orders</span>
        </button>

        <button 
          onClick={() => setActiveView('profile')}
          className={`flex flex-col items-center gap-1 active:scale-95 transition-all cursor-pointer ${
            activeView === 'profile' ? 'text-[#006e2f]' : 'text-gray-400'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] font-bold">Profile</span>
        </button>

      </nav>

    </div>
  );
}
