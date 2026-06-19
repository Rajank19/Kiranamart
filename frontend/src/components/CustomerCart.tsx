import React, { useState } from 'react';
import { ArrowLeft, Clock, ShoppingCart, Percent, ChevronRight, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CustomerCartProps {
  cart: CartItem[];
  suggestions: Product[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (product: Product) => void;
  onChangeQuantity: (product: Product, qty: number) => void;
  onNavigateToCheckOut: () => void;
  onBackToHome: () => void;
}

export const CustomerCart: React.FC<CustomerCartProps> = ({
  cart,
  suggestions,
  onAddToCart,
  onRemoveFromCart,
  onChangeQuantity,
  onNavigateToCheckOut,
  onBackToHome,
}) => {
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  // Calculations
  const itemTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = 0; // FREE
  const handlingCharge = itemTotal > 0 ? 2 : 0;
  
  // Coupon Discount
  const couponDiscount = couponApplied ? Math.round(itemTotal * 0.2) : 0; 
  const grandTotal = itemTotal > 0 ? itemTotal + handlingCharge - couponDiscount : 0;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'FRESH20' || couponCode.trim() === '') {
      setCouponApplied(true);
      setCouponCode('FRESH20');
    } else {
      alert('Try code: FRESH20 to get 20% discount!');
    }
  };

  return (
    <div className="flex-grow bg-gray-50 flex flex-col min-h-screen animate-fade-in pb-36">
      
      {/* Top Header Navigation bar */}
      <header className="sticky top-0 w-full z-45 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBackToHome}
            className="p-1 px-2 text-gray-500 hover:text-gray-900 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-bold text-[#006e2f] text-base sm:text-lg">Cart</h1>
        </div>
        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
        </span>
      </header>

      {/* Cart Container details */}
      <main className="max-w-3xl mx-auto w-full pt-4">
        
        {cart.length === 0 ? (
          // Empty State view
          <div className="py-24 px-4 text-center bg-white rounded-2xl border border-gray-150 mx-4 shadow-sm flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4 shadow-inner">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h2 className="font-bold text-gray-800 text-lg">Your cart is empty</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 mb-6 max-w-xs leading-normal">
              Looks like you haven't added anything to your cart yet. Let's find some fresh organic groceries for you!
            </p>
            <button 
              onClick={onBackToHome}
              className="bg-[#006e2f] hover:bg-[#004b1e] text-white px-8 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4 px-4">
            
            {/* Delivery Time Slot Banner bar */}
            <section className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl p-3.5 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-[#22c55e] text-white p-1 px-2 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 font-bold" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm">Delivery in 10-12 mins</p>
                  <p className="text-[11px] sm:text-xs text-gray-600">To Home: Sector 45, Gurgaon</p>
                </div>
              </div>
              <button 
                onClick={() => alert('Delivery address is pinned to Gurgaon Sector 45 for this simulation.')}
                className="text-[#006e2f] font-bold text-xs hover:underline"
              >
                Edit
              </button>
            </section>

            {/* Cart Items List Grid */}
            <section className="flex flex-col gap-3">
              {cart.map((item) => (
                <div 
                  key={item.product.id}
                  className="bg-white p-3 rounded-xl shadow-sm border border-gray-150 flex gap-3 items-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <p className="text-gray-400 text-[10px] sm:text-[11px] font-semibold leading-none mb-1">
                      {item.product.priceUnit}
                    </p>
                    <h3 className="font-bold text-gray-800 text-xs sm:text-sm truncate">
                      {item.product.name}
                    </h3>
                    <p className="font-bold text-xs sm:text-sm text-[#006e2f] mt-1">
                      ₹{item.product.price}
                    </p>
                  </div>

                  {/* Operational circle pill selectors */}
                  <div className="flex items-center bg-[#22c55e] text-white rounded-full p-1 shadow-sm gap-2">
                    <button 
                      onClick={() => onRemoveFromCart(item.product)}
                      className="w-7 h-7 flex items-center justify-center hover:bg-[#004b1e]/10 rounded-full text-[#004b1e] font-extrabold focus:outline-none"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-1 text-xs sm:text-sm font-extrabold text-[#004b1e]">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => onAddToCart(item.product)}
                      className="w-7 h-7 flex items-center justify-center hover:bg-[#004b1e]/10 rounded-full text-[#004b1e] font-extrabold focus:outline-none"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </section>

            {/* Suggestions layout Carousel */}
            <section className="pt-2">
              <h2 className="font-bold text-gray-800 text-sm sm:text-base mb-3">Before you checkout</h2>
              <div className="flex overflow-x-auto gap-3 pb-3 snap-x no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                {suggestions.slice(12, 15).map((sug) => (
                  <div 
                    key={sug.id}
                    className="min-w-[130px] sm:min-w-[160px] snap-start bg-white p-2.5 rounded-xl border border-gray-150 shadow-sm flex flex-col gap-1 relative group"
                  >
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-2 bg-gray-50 flex items-center justify-center p-2">
                      <img 
                        src={sug.image} 
                        alt={sug.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                      <button 
                        onClick={() => onAddToCart(sug)}
                        className="absolute bottom-1 right-1 w-7 h-7 bg-white text-[#006e2f] border border-gray-150 rounded-lg shadow-md flex items-center justify-center hover:bg-[#006e2f] hover:text-white transition-colors active:scale-90"
                      >
                        <Plus className="w-4 h-4 font-bold" />
                      </button>
                    </div>
                    <p className="font-bold text-[#191c1d] text-[11px] sm:text-xs truncate">{sug.name}</p>
                    <p className="text-gray-400 text-[10px] leading-none mb-1 font-medium">{sug.priceUnit}</p>
                    <p className="font-bold text-[#006e2f] text-xs sm:text-sm">₹{sug.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Promo coupons block */}
            <section className="bg-white border border-gray-150 rounded-xl p-3 px-4 shadow-sm flex items-center gap-3">
              <Percent className="w-5 h-5 text-[#006e2f]" />
              <div className="flex-grow">
                <p className="font-bold text-gray-800 text-xs sm:text-sm">Avail Offers &amp; Coupons</p>
                <p className="text-[10px] text-gray-500">Apply discount codes to save on purchases</p>
              </div>
              <div className="flex items-center gap-1.5">
                <input 
                  type="text" 
                  value={couponCode} 
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Code: FRESH20" 
                  disabled={couponApplied}
                  className="bg-gray-100 border border-gray-200 outline-none rounded p-1 text-xs font-bold text-center w-24 uppercase placeholder-gray-400 h-8"
                />
                <button 
                  onClick={handleApplyCoupon}
                  disabled={couponApplied}
                  className={`px-3 py-1 rounded font-bold text-xs h-8 ${
                    couponApplied 
                      ? 'bg-gray-100 text-gray-400' 
                      : 'bg-[#006e2f] text-white hover:bg-[#004b1e]'
                  }`}
                >
                  {couponApplied ? 'Applied' : 'Apply'}
                </button>
              </div>
            </section>

            {/* Bill Summary Calculations details */}
            <section className="pb-8">
              <h2 className="font-bold text-gray-800 text-sm sm:text-base mb-3">Bill Summary</h2>
              <div className="bg-white p-4 rounded-xl border border-gray-150 shadow-sm flex flex-col gap-2.5">
                
                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600">
                  <span>Item Total</span>
                  <span className="font-bold text-gray-800">₹{itemTotal}</span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-bold text-[#006e2f]">FREE</span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600">
                  <span>Handling Charge</span>
                  <span className="font-bold text-gray-800">₹{handlingCharge}</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between items-center text-xs sm:text-sm text-red-650 text-red-600 font-bold">
                    <span>Coupon Discount (FRESH20 - 20%)</span>
                    <span>-₹{couponDiscount}</span>
                  </div>
                )}

                <div className="h-[1px] bg-gray-150 my-1"></div>

                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-[#191c1d] text-sm sm:text-base">Total Bill</span>
                  <span className="font-extrabold text-[#006e2f] text-base sm:text-lg">₹{grandTotal}</span>
                </div>
              </div>
            </section>

          </div>
        )}

      </main>

      {/* Standard Checkout footer */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full z-40 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] border-t border-gray-150">
          <div className="max-w-3xl mx-auto p-4 flex items-center justify-between gap-4">
            
            <div className="flex flex-col">
              <span className="text-gray-400 line-through text-[11px] leading-none mb-1 font-medium">
                ₹{itemTotal + handlingCharge}
              </span>
              <span className="text-lg font-bold text-gray-900 leading-none">
                ₹{grandTotal}
              </span>
              <span className="text-[10px] text-[#006e2f] font-extrabold tracking-wider leading-none mt-1">
                VIEW DETAILED BILL
              </span>
            </div>

            <button 
              onClick={onNavigateToCheckOut}
              className="flex-grow bg-[#006e2f] hover:bg-[#004b1e] text-white h-12 rounded-xl flex items-center justify-between px-5 active:scale-[0.98] transition-all shadow-md group"
            >
              <span className="font-bold text-sm">Select Address &amp; Pay</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

          </div>
        </div>
      )}

    </div>
  );
};
