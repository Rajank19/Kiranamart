import React, { useState } from 'react';
import { ArrowLeft, Share2, Heart, ShieldCheck, ChevronDown, ChevronUp, Info, ShoppingCart, Plus, Minus, Zap } from 'lucide-react';
import { Product, CartItem } from '../types';

interface CustomerProductDetailsProps {
  product: Product;
  recommendations: Product[];
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onBack: () => void;
  onBuyNowDirect: (product: Product) => void;
}

export const CustomerProductDetails: React.FC<CustomerProductDetailsProps> = ({
  product,
  recommendations,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onSelectProduct,
  onBack,
  onBuyNowDirect,
}) => {
  const [descOpen, setDescOpen] = useState(true);
  const [nutritionOpen, setNutritionalOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // Helper to discover existing quantities in cart
  const getProductQuantity = (productId: string) => {
    const item = cart.find(c => c.product.id === productId);
    return item ? item.quantity : 0;
  };

  const qty = getProductQuantity(product.id);

  const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div className="flex-grow bg-gray-50 flex flex-col min-h-screen animate-fade-in pb-32">
      
      {/* Top Header App bar */}
      <header className="sticky top-0 w-full z-40 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors active:scale-95 text-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-bold text-gray-800 text-base sm:text-lg max-w-[180px] sm:max-w-xs truncate leading-none">
            {product.name}
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95 text-gray-600 transition-colors">
            <Share2 className="w-4.5 h-4.5" />
          </button>
          <button 
            onClick={() => setIsFavorited(!isFavorited)}
            className={`w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95 transition-colors ${
              isFavorited ? 'text-red-500 fill-red-500' : 'text-gray-600'
            }`}
          >
            <Heart className="w-4.5 h-4.5" />
          </button>
        </div>
      </header>

      {/* Detail Core block Grid */}
      <main className="max-w-4xl mx-auto w-full px-4 pt-4 flex flex-col md:grid md:grid-cols-2 gap-6">
        
        {/* Carousel Image Panel section */}
        <section className="flex flex-col">
          <div className="relative aspect-square rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm flex items-center justify-center p-6">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain"
            />
            
            {/* Overlay Banners */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isOrganic && (
                <span className="bg-[#006e2f] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Organic
                </span>
              )}
              {product.discountBadge ? (
                <span className="bg-red-650 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {product.discountBadge}
                </span>
              ) : discountAmount > 0 ? (
                <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  DISCOUNT
                </span>
              ) : null}
            </div>
          </div>

          {/* Carousel dots indicators */}
          <div className="flex justify-center mt-3 gap-2 py-1">
            <span 
              onClick={() => setCarouselIndex(0)}
              className={`h-2 rounded-full transition-all cursor-pointer ${carouselIndex === 0 ? 'w-6 bg-[#006e2f]' : 'w-2 bg-gray-300'}`}
            ></span>
            <span 
              onClick={() => setCarouselIndex(1)}
              className={`h-2 rounded-full transition-all cursor-pointer ${carouselIndex === 1 ? 'w-6 bg-[#006e2f]' : 'w-2 bg-gray-300'}`}
            ></span>
            <span 
              onClick={() => setCarouselIndex(2)}
              className={`h-2 rounded-full transition-all cursor-pointer ${carouselIndex === 2 ? 'w-6 bg-[#006e2f]' : 'w-2 bg-gray-300'}`}
            ></span>
          </div>
        </section>

        {/* Product specs section */}
        <section className="flex flex-col gap-4">
          <div>
            <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest leading-none block mb-1">
              Fresh Produce
            </span>
            <h2 className="font-extrabold text-[#191c1d] text-xl sm:text-2xl leading-tight">
              {product.name}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 font-medium">
              Pack Size: {product.priceUnit}
            </p>
          </div>

          {/* Pricing Panel */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl text-[#006e2f]">
                ₹{product.price}.00
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through font-medium">
                  ₹{product.originalPrice}.00
                </span>
              )}
            </div>
            {discountAmount > 0 && (
              <div className="bg-[#22c55e]/15 border border-[#22c55e] px-4 py-1.5 rounded-lg shadow-sm">
                <span className="text-[#004b1e] font-extrabold text-xs">
                  Save ₹{discountAmount}
                </span>
              </div>
            )}
          </div>

          {/* Delivery Promise Card */}
          <div className="p-3.5 bg-white border border-gray-150 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006e2f] text-xl">local_shipping</span>
              <span className="text-xs font-bold text-gray-700">Delivery in 10-15 mins</span>
            </div>
            <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>

          {/* Collapsible details list */}
          <div className="space-y-2 mt-2">
            
            {/* Tab: Product Description */}
            <div className="bg-white border border-gray-150 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setDescOpen(!descOpen)}
                className="w-full flex justify-between items-center p-4 cursor-pointer font-bold text-xs sm:text-sm text-gray-800 focus:outline-none"
              >
                <span>Product Description</span>
                {descOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
              </button>
              {descOpen && (
                <div className="p-4 pt-0 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-50 bg-gray-50/50">
                  {product.description || 'Naturally sourced, high-quality, and clean fresh products gathered from nearby locales. Free of chemicals, maintaining authentic nutrition and fiber standard.'}
                </div>
              )}
            </div>

            {/* Tab: Nutritional Information */}
            <div className="bg-white border border-gray-150 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setNutritionalOpen(!nutritionOpen)}
                className="w-full flex justify-between items-center p-4 cursor-pointer font-bold text-xs sm:text-sm text-gray-800 focus:outline-none"
              >
                <span>Nutritional Info (per 100g)</span>
                {nutritionOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
              </button>
              {nutritionOpen && (
                <div className="p-4 pt-0 text-xs sm:text-sm border-t border-gray-50 bg-gray-50/50">
                  <div className="grid grid-cols-2 gap-3 text-gray-600">
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Energy</span>
                      <span className="font-bold text-gray-800">{product.nutritionalInfo?.energy || '89 kcal'}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Protein</span>
                      <span className="font-bold text-gray-800">{product.nutritionalInfo?.protein || '1.1 g'}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Dietary Fiber</span>
                      <span className="font-bold text-gray-800">{product.nutritionalInfo?.fiber || '2.6 g'}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Potassium</span>
                      <span className="font-bold text-gray-800">{product.nutritionalInfo?.potassium || '358 mg'}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* "You Might Also Like" Recommendation Segment view */}
      <section className="mt-8 px-4 max-w-4xl mx-auto w-full">
        <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-4">You might also like</h3>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {recommendations.slice(0, 5).map((recProduct) => (
            <div 
              key={recProduct.id}
              className="min-w-[135px] sm:min-w-[165px] bg-white border border-gray-200 rounded-xl p-2 md:p-3 shadow-sm flex flex-col gap-1.5 hover:shadow-md transition-shadow group flex-shrink-0 cursor-pointer"
            >
              {/* Image box */}
              <div 
                onClick={() => onSelectProduct(recProduct)}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center p-2"
              >
                <img 
                  src={recProduct.image} 
                  alt={recProduct.name} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" 
                />
              </div>

              {/* Specs */}
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-wide leading-none">
                  {recProduct.priceUnit}
                </span>
                <h4 
                  onClick={() => onSelectProduct(recProduct)}
                  className="font-bold text-gray-800 text-xs truncate hover:text-[#006e2f]"
                >
                  {recProduct.name}
                </h4>
                <div className="flex justify-between items-center mt-1">
                  <span className="font-bold text-xs sm:text-sm text-gray-900 leading-none">
                    ₹{recProduct.price}
                  </span>
                  
                  {/* Cart addition trigger */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(recProduct);
                    }}
                    className="w-7 h-7 rounded-full bg-[#006e2f] hover:bg-[#004b1e] text-white flex items-center justify-center active:scale-95 transition-transform"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action bottom banner for Desktop/Mobile integration */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] border-t border-gray-150 z-40">
        <div className="max-w-4xl mx-auto flex gap-3">
          
          {/* Price detail block */}
          <div className="hidden sm:flex flex-col justify-center px-4 border-r border-gray-200 pr-6 mr-2">
            <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest leading-none mb-1">
              Active Price
            </span>
            <span className="font-bold text-lg text-[#006e2f] leading-none">
              ₹{product.price}.00
            </span>
          </div>

          {/* Add to Cart controller */}
          {qty === 0 ? (
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 h-12 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <ShoppingCart className="w-4.5 h-4.5" /> Add to Cart
            </button>
          ) : (
            <div className="flex-1 h-12 bg-[#22c55e]/20 border border-[#006e2f]/20 rounded-xl flex items-center justify-between px-6">
              <button 
                onClick={() => onRemoveFromCart(product)}
                className="text-[#004b1e] hover:bg-[#004b1e]/15 h-8 w-8 rounded-lg flex items-center justify-center active:scale-90 transition-transform"
              >
                <Minus className="w-4 h-4 font-bold" />
              </button>
              <span className="text-[#004b1e] font-extrabold text-sm sm:text-base">
                {qty} in Cart
              </span>
              <button 
                onClick={() => onAddToCart(product)}
                className="text-[#004b1e] hover:bg-[#004b1e]/15 h-8 w-8 rounded-lg flex items-center justify-center active:scale-90 transition-transform"
              >
                <Plus className="w-4 h-4 font-bold" />
              </button>
            </div>
          )}

          {/* Buy Now shortcut handler */}
          <button 
            onClick={() => onBuyNowDirect(product)}
            className="flex-1 h-12 bg-[#006e2f] hover:bg-[#004b1e] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#006e2f]/20 active:scale-95 transition-all"
          >
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300" /> Buy Now
          </button>

        </div>
      </div>

    </div>
  );
};
