import React, { useState, useMemo } from 'react';
import { ArrowLeft, ChevronDown, SlidersHorizontal, Plus, Minus } from 'lucide-react';
import { Product, CartItem } from '../types';

interface CustomerProductListingProps {
  products: Product[];
  activeCategoryId: string;
  activeSubCategoryName: string; // 'all' or specific subcategory name like 'Fresh Vegetables'
  searchQuery: string;
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (product: Product) => void;
  onProductSelect: (product: Product) => void;
  onBackToHome: () => void;
}

type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'delivery';

export const CustomerProductListing: React.FC<CustomerProductListingProps> = ({
  products,
  activeCategoryId,
  activeSubCategoryName,
  searchQuery,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onProductSelect,
  onBackToHome,
}) => {
  const [activeSort, setActiveSort] = useState<SortOption>('relevance');

  // Helper to check existing quantities in cart
  const getProductQuantity = (productId: string) => {
    const item = cart.find(c => c.product.id === productId);
    return item ? item.quantity : 0;
  };

  // Filtered and sorted products collection
  const processedProducts = useMemo(() => {
    let result = [...products];

    // Filter by category if we are filtering
    if (activeCategoryId) {
      result = result.filter(p => p.category === activeCategoryId);
    }

    // Filter by subcategory if specified
    if (activeSubCategoryName && activeSubCategoryName !== 'all') {
      result = result.filter(p => p.subCategory === activeSubCategoryName);
    }

    // Filter by search query if non-empty
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p => 
          p.name.toLowerCase().includes(q) || 
          (p.description && p.description.toLowerCase().includes(q)) || 
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort order
    if (activeSort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'relevance') {
      // Prioritize organic or bestsellers
      result.sort((a, b) => {
        const scoreA = (a.isOrganic ? 2 : 0) + (a.isBestseller ? 1 : 0);
        const scoreB = (b.isOrganic ? 2 : 0) + (b.isBestseller ? 1 : 0);
        return scoreB - scoreA;
      });
    }

    return result;
  }, [products, activeCategoryId, activeSubCategoryName, searchQuery, activeSort]);

  return (
    <div className="flex-grow bg-gray-50 flex flex-col min-h-screen animate-fade-in pb-16">
      
      {/* Search Header Summary with Back to Home button */}
      <section className="px-4 py-3 bg-white border-b border-gray-150 flex items-center justify-between sticky top-[114px] z-30">
        <div className="flex items-center gap-2">
          <button 
            onClick={onBackToHome}
            className="p-1 px-2 text-gray-500 hover:text-gray-900 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="font-bold text-gray-800 text-sm leading-none">
              {searchQuery ? `Search: "${searchQuery}"` : activeSubCategoryName !== 'all' ? activeSubCategoryName : 'Products'}
            </h2>
            <p className="text-[10px] text-gray-550 mt-1 uppercase font-semibold tracking-wider">
              {processedProducts.length} Fresh Items Found
            </p>
          </div>
        </div>

        {/* Sort select actions */}
        <select 
          value={activeSort}
          onChange={(e) => setActiveSort(e.target.value as SortOption)}
          className="text-xs bg-gray-50 font-bold text-gray-700 border border-gray-200 outline-none rounded-lg px-2.5 py-1 focus:ring-1 focus:ring-[#006e2f]"
        >
          <option value="relevance">Sort: Relevance</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="delivery">Delivery speed</option>
        </select>
      </section>

      {/* Filter Chips row (mock interactions) */}
      <section className="px-4 py-3 bg-white shadow-sm flex gap-2 overflow-x-auto no-scrollbar border-b border-gray-100">
        <button 
          onClick={() => setActiveSort('relevance')}
          className={`whitespace-nowrap px-4 py-1.5 rounded-full font-bold text-xs transition-all active:scale-95 ${
            activeSort === 'relevance' 
              ? 'bg-[#006e2f] text-white shadow-sm' 
              : 'bg-gray-100 text-gray-600 border border-transparent'
          }`}
        >
          Relevance
        </button>

        <button 
          onClick={() => setActiveSort(activeSort === 'price-asc' ? 'price-desc' : 'price-asc')}
          className={`whitespace-nowrap px-4 py-1.5 rounded-full font-bold text-xs hover:bg-gray-50 transition-all active:scale-95 flex items-center gap-1 border ${
            activeSort.startsWith('price') 
              ? 'bg-[#006e2f] text-white border-transparent' 
              : 'bg-white border-gray-200 text-gray-650'
          }`}
        >
          Price {activeSort === 'price-asc' ? 'Low-High' : activeSort === 'price-desc' ? 'High-Low' : ''} <ChevronDown className="w-3.5 h-3.5" />
        </button>

        <button 
          onClick={() => setActiveSort('delivery')}
          className={`whitespace-nowrap px-4 py-1.5 rounded-full font-bold text-xs hover:bg-gray-50 transition-all active:scale-95 flex items-center gap-1 border ${
            activeSort === 'delivery' 
              ? 'bg-[#006e2f] text-white border-transparent' 
              : 'bg-white border-gray-200 text-gray-650'
          }`}
        >
          Delivery Time
        </button>

        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-650 font-bold text-xs hover:bg-gray-50 transition-all active:scale-95 flex items-center gap-1">
          <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
        </button>
      </section>

      {/* Main Grid display Area */}
      <section className="px-4 py-4 max-w-7xl mx-auto w-full">
        {processedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {processedProducts.map((product) => {
              const qty = getProductQuantity(product.id);
              return (
                <div 
                  key={product.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                >
                  {/* Image container with custom absolute labels */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      onClick={() => onProductSelect(product)}
                    />
                    
                    {/* Bestseller, Organic or Imported badges */}
                    {product.isOrganic && (
                      <span className="absolute top-2 left-2 bg-[#22c55e] text-white text-[8px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                        Organic
                      </span>
                    )}
                    {product.isBestseller && !product.isOrganic && (
                      <span className="absolute top-2 left-2 bg-[#006e2f] text-white text-[8px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                        Bestseller
                      </span>
                    )}
                    {product.isImported && (
                      <span className="absolute top-2 left-2 bg-slate-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                        Imported
                      </span>
                    )}
                  </div>

                  {/* Body elements */}
                  <div className="p-3 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-gray-500 font-semibold uppercase">
                        {product.priceUnit}
                      </span>
                      <h3 
                        onClick={() => onProductSelect(product)}
                        className="font-bold text-gray-800 text-xs sm:text-sm leading-snug mb-1 line-clamp-2 min-h-[35px] cursor-pointer hover:text-[#006e2f] transition-all"
                      >
                        {product.name}
                      </h3>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm sm:text-base font-extrabold text-gray-900 leading-none">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] text-gray-400 line-through mt-0.5 font-medium leading-none">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Add Button standard styles */}
                      {qty === 0 ? (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          className="w-8 h-8 flex items-center justify-center bg-[#006e2f] text-white rounded-lg transition-all duration-200 active:scale-90 hover:bg-[#004b1e] shadow-sm cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      ) : (
                        <div className="flex items-center bg-[#22c55e] text-[#004b1e] rounded-lg p-0.5 gap-2 border border-[#006e2f]/20">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveFromCart(product);
                            }}
                            className="text-[#004b1e] hover:bg-[#004b1e]/10 h-6 w-6 rounded flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-3 h-3 font-semibold" />
                          </button>
                          <span className="text-[#004b1e] font-bold text-xs">
                            {qty}
                          </span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToCart(product);
                            }}
                            className="text-[#004b1e] hover:bg-[#004b1e]/10 h-6 w-6 rounded flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-3 h-3 font-semibold" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-400 bg-white rounded-2xl border border-gray-150">
            <SlidersHorizontal className="w-12 h-12 block mx-auto text-gray-300 mb-3" />
            <p className="font-bold text-gray-700">No matching products found</p>
            <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">Try clearing your filters or typing another grocery keyword in the search bar above.</p>
            <button 
              onClick={() => onBackToHome()} 
              className="mt-4 bg-[#006e2f] text-white font-bold text-xs py-2 px-6 rounded-full"
            >
              Browse All Products
            </button>
          </div>
        )}
      </section>

    </div>
  );
};
