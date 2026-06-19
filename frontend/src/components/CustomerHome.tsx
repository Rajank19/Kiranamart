import React, { useRef } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight, ArrowRightLeft, Sparkles, Truck, ShieldCheck, Plus, Minus } from 'lucide-react';
import { Product, Category, CartItem } from '../types';

interface CustomerHomeProps {
  products: Product[];
  categories: Category[];
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (product: Product) => void;
  onCategorySelect: (categoryId: string) => void;
  onProductSelect: (product: Product) => void;
  onViewAllCategories: () => void;
}

export const CustomerHome: React.FC<CustomerHomeProps> = ({
  products,
  categories,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onCategorySelect,
  onProductSelect,
  onViewAllCategories,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter out bestsellers from list
  const bestsellers = products.filter(p => p.isBestseller === true || p.id === 'p1' || p.id === 'p3' || p.id === 'p9' || p.id === 'p10');

  // Helper to check existing quantities in cart
  const getProductQuantity = (productId: string) => {
    const item = cart.find(c => c.product.id === productId);
    return item ? item.quantity : 0;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Preset categories with direct icon mappings for Quick Categories grid
  const homeCategoryShortcuts = [
    { id: 'dairy', name: 'Milk', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ0dO22LabjPZOKhvPCaVfo1-1EENgi0skZddV7Z5qR_0_iuGDcNqXRnyde1GcoWHTtdIpg5sKzCZzjJtIs4YnhNuhMJArjwocuNJCw1CjJTTS9s9gWtG9DJClnO_FM-JWFGCLQ6tGBZvk-LHz-8_0HT8kQrFAn7x0C6klrhoZ_YEWCIoKAtvLFPPK3ywBb9ysJwJgg-L2fKE-Gt1csD0a76SnBxfEMfH-wyMoI3VzgI_yaKG2W0QiXVWF-BNUUVfa0DRJhXmtXiM' },
    { id: 'fruits', name: 'Fruits', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhcUxL-26f2zj_GtDqGVhElbT9R884jwARhxzRN5DkNEetPJq_mA9rO_aYiosxTiPvAAyA4gg3OTTa-0eVLbzL0OUk1lgwuXUMNomQCakZQlMUGVEL7pCaVt4vloI8INdj7nHRYi8V_0t2aglH1XHfA4TmRLt7AEfV_hZZi8d62h6Z1C3vTYyJAoEx5hVMUQnYqvysMYBePzgF2vbTM7E_xh7cbLc9CoDBgkBCbO-dhSXYOl1DNg2eeBM1YgZ8FYHAiOy1p9QRLp0' },
    { id: 'snacks', name: 'Snacks', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhIXEcbf6AYfl3pEB1_zsHj8AnBKTK7-WKMruaTnPlH9u5OiNdnlGygJC9eM7ur7nUxxEWrElwxZOeASs8owbMAKZBxfScABnq4k7OlEwmG_6HUAfIGKYWNcS53ElaHObiE-PxAfwUrZYzpaE3gHKIBs_PyjFGFvlyqZMtLES1ie5_6Bc4yEsrxjGll4i4HnGs5FTWGfWUU6kgkdBpeIlzUnhQNU2Lo_H1glNpQ5b5ZDu-uK6_jTQ3Iga_WOj-Njz3gzemPjZ3E0U' },
    { id: 'cleaning', name: 'Cleaning', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChg9aK9DpDma1vW4LvhJAactUrSu2miOWvyX0I4rvyjUWbgrLPJoDMn0gW4ZcX7ZHVIhPe8EuuhuDLl-fIWbKghNRofYdvtTCj4rxbmt1-357n1WE6Lh1036B5aS5p6MjYouw957h_o5g6l9qjuy02ygm2Q3umrM7DK_QEoJpNif-AMAZ3i1etf87XNIe2kMcwS4OFKUGwsm4fQPRoXiVICQ26YtR5NTq3JeRhX3nc4OwtA6kteUUFaA6YUpFg9THiIcrdXE0mZ4E' }
  ];

  return (
    <div className="flex flex-col gap-6 py-4 animate-fade-in">
      
      {/* Hero Banner Section */}
      <div className="px-4">
        <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-md group border border-gray-100">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2ActrwcwL6fOVEKcBbe3d0OYDP_HFDpVrpuoeKUrZ63hpZg1K2T9stu-4J9YOp3P_Y1IX5tTzkEXL-V03GPmKmRHAMwsCvG3QaOy-kWBOVkhWMKyu_QeoiVEGnW2MJXZxvGgUuk-JI7oxvQeVLmzNuNMjg4h9QLGW9OzNREwaSsvToeaSke7rbaJHd2LgAa2cwoCFcTQk5PwAQYxcNcm3wz_nPAYM7LvrI-mBbXYMdN4qJeu4f0EREM5bE3hEvaAIyPnwqB90UFo" 
            alt="Organic Vegetables banner" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-6 md:px-10 text-white">
            <span className="bg-[#22c55e] text-white font-bold px-3 py-1 rounded-full w-fit mb-2.5 text-[10px] tracking-widest uppercase">
              NEW USER OFFER
            </span>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl max-w-[280px] sm:max-w-[340px] leading-tight">
              10 Minute Fast Delivery
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 mt-2 font-medium opacity-90">
              Get fresh groceries at your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-800 text-lg sm:text-xl">Shop by Category</h2>
          <button 
            onClick={onViewAllCategories}
            className="text-[#006e2f] hover:text-[#004b1e] font-semibold text-sm flex items-center gap-1 active:scale-95 transition-transform"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {homeCategoryShortcuts.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => onCategorySelect(cat.id)}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-full aspect-square bg-gray-50 border border-gray-100 hover:border-gray-200 rounded-2xl p-2.5 sm:p-5 flex items-center justify-center transition-all group-hover:shadow-md group-hover:bg-white">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-semibold text-xs sm:text-sm text-gray-700 text-center">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bestsellers Section */}
      <div className="bg-gray-100/60 py-6 border-y border-gray-100">
        <div className="px-4 flex items-center justify-between mb-4">
          <div>
            <h2 className="font-bold text-gray-800 text-lg sm:text-xl">Bestsellers</h2>
            <p className="text-xs text-gray-500 mt-0.5">Most loved products ordered by our customers</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm active:scale-90 hover:bg-gray-50 transition-all text-gray-600"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm active:scale-90 hover:bg-gray-50 transition-all text-gray-600"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Card Wrapper */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-4 px-4 scroll-smooth"
        >
          {bestsellers.map((product) => {
            const quantity = getProductQuantity(product.id);
            return (
              <div 
                key={product.id}
                className="flex-shrink-0 w-[155px] sm:w-[185px] bg-white rounded-2xl p-2.5 border border-gray-250/60 shadow-sm flex flex-col gap-2 relative hover:shadow-md transition-shadow group cursor-pointer"
              >
                {/* Sale / Bestseller Badge */}
                <span className="absolute top-2 left-2 bg-[#6bff8f] text-[#002109] text-[9px] font-extrabold px-2 py-0.5 rounded-full z-10 tracking-wide uppercase">
                  {product.discountBadge ? product.discountBadge : 'BESTSELLER'}
                </span>

                {/* Clickable Card Body (Details View) */}
                <div 
                  onClick={() => onProductSelect(product)}
                  className="h-28 sm:h-36 w-full flex items-center justify-center overflow-hidden mb-1"
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <span className="text-gray-500 text-[10px] sm:text-[11px] font-medium leading-none mb-1">
                    {product.priceUnit}
                  </span>
                  <h3 
                    onClick={() => onProductSelect(product)}
                    className="font-bold text-gray-800 text-xs sm:text-sm line-clamp-2 min-h-[32px] sm:min-h-[40px] leading-tight hover:text-[#006e2f]"
                  >
                    {product.name}
                  </h3>
                  
                  {/* Bottom details with responsive buy button */}
                  <div className="mt-2.5 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-base font-extrabold text-gray-900 leading-none">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] text-gray-450 line-through mt-0.5 font-medium">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Cart operations */}
                    {quantity === 0 ? (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                        className="bg-[#006e2f] hover:bg-[#004b1e] text-white p-2 rounded-xl flex items-center justify-center shadow-sm active:scale-90 transition-transform"
                      >
                        <Plus className="w-4 h-4 font-bold" />
                      </button>
                    ) : (
                      <div className="flex items-center bg-[#22c55e] text-[#004b1e] rounded-xl p-0.5 gap-2.5 border border-[#006e2f]/20">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveFromCart(product);
                          }}
                          className="text-[#004b1e] hover:bg-[#004b1e]/10 h-6 w-6 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5 font-extrabold" />
                        </button>
                        <span className="text-[#004b1e] font-bold text-xs sm:text-sm">
                          {quantity}
                        </span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          className="text-[#004b1e] hover:bg-[#004b1e]/10 h-6 w-6 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5 font-extrabold" />
                        </button>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Freshness Promise Banner */}
      <div className="px-4 pb-4">
        <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-2xl p-5 flex flex-col md:flex-row gap-5">
          <div className="flex items-start gap-3.5 flex-1">
            <div className="w-11 h-11 rounded-full bg-[#22c55e] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-[14px]">Super Fast Delivery</h4>
              <p className="text-gray-500 text-xs mt-1 leading-snug">
                Orders handpicked and delivered within 10-15 minutes instantly.
              </p>
            </div>
          </div>
          
          <div className="h-[1px] w-full bg-gray-200 md:h-12 md:w-[1px] my-1 md:my-0 md:self-center"></div>

          <div className="flex items-start gap-3.5 flex-1">
            <div className="w-11 h-11 rounded-full bg-[#22c55e] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-[14px]">Freshness Guaranteed</h4>
              <p className="text-gray-500 text-xs mt-1 leading-snug">
                Sourced directly from nearby local farms in pristine conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
