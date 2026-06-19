import React, { useState, useEffect } from "react";
import api from "../services/api";
import { addAddress } from "../services/addressService";

import {
  ArrowLeft,
  MapPin,
  Clock,
  CreditCard,
  Shield,
  QrCode,
  CheckCircle,
  Circle,
  ArrowRight,
} from "lucide-react";

import { CartItem } from "../types";
interface CustomerCheckoutProps {
  cart: CartItem[];
  onOrderCompleted: (totalPaid: number, couponDiscount: number) => void;
  onBack: () => void;
}

export const CustomerCheckout: React.FC<CustomerCheckoutProps> = ({
  cart,
  onOrderCompleted,
  onBack,
}) => {
  const [selectedAddress, setSelectedAddress] = useState<'home' | 'work'>('home');
  const [selectedDate, setSelectedDate] = useState<'today' | 'tomorrow' | 'sat'>('today');
  const [selectedSlot, setSelectedSlot] = useState<'morning' | 'afternoon'>('morning');
  const [selectedPayment, setSelectedPayment] = useState<'upi' | 'card' | 'cod'>('upi');
  const [addresses, setAddresses] = useState<any[]>([]);
  

  // Calculation variables
  const itemCount = cart.reduce((acc, c) => acc + c.quantity, 0);
  const subtotal = cart.reduce((acc, c) => acc + c.product.price * c.quantity, 0);
  const deliveryCharge = 0; // FREE
  const handlingFee = subtotal > 0 ? 5 : 0;
  const couponDiscount = Math.round(subtotal * 0.2); // FRESH20 applied automatically here
  const totalPayable = subtotal + handlingFee - couponDiscount;

  const handlePlaceOrder = () => {
    onOrderCompleted(totalPayable, couponDiscount);
  };

  return (
    <div className="flex-grow bg-gray-50 flex flex-col min-h-screen animate-fade-in pb-32">
      
      {/* Upper header navigation */}
      <header className="sticky top-0 w-full z-45 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-1 px-2 text-gray-500 hover:text-gray-900 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-bold text-[#006e2f] text-base sm:text-lg">Checkout</h1>
        </div>
        <div className="text-xs font-bold text-gray-500 animate-pulse bg-gray-150 p-1 px-2.5 rounded-full">
          Step 3 of 3
        </div>
      </header>

      {/* Main Core Form Block */}
      <main className="max-w-4xl mx-auto px-4 py-6 w-full lg:grid lg:grid-cols-12 lg:gap-6">
        
        {/* Left Form elements column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Section: Delivery Address Selector Card */}
          <section>
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="font-bold text-gray-800 text-sm sm:text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#006e2f]" /> Delivery Address
              </h2>
              <button
  onClick={async () => {
    const address = prompt("Enter Address");

    if (!address) return;

    try {
      await addAddress({
        label: "Home",
        fullAddress: address,
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560067",
      });

      alert("Address Saved Successfully");
    } catch (error) {
      alert("Failed To Save Address");
    }
  }}
  className="text-[#006e2f] font-bold text-xs hover:underline"
>
  Add New
</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              
              {/* Home address Card */}
              <div 
                onClick={() => setSelectedAddress('home')}
                className={`p-4 rounded-2xl bg-white border-2 transition-all cursor-pointer shadow-sm relative ${
                  selectedAddress === 'home' 
                    ? 'border-[#006e2f] bg-[#006e2f]/5 shadow-md scale-102' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-2.5">
                  <span className="bg-[#22c55e]/20 text-[#004b1e] px-2 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wider">
                    Home
                  </span>
                  {selectedAddress === 'home' ? (
                    <CheckCircle className="w-5 h-5 text-[#006e2f] fill-[#006e2f]/10" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-sm mb-1">Jane Doe</p>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-snug">
                  42nd Alpine Heights, Sector 15<br />
                  Near Central Park, Bangalore - 560102
                </p>
              </div>

              {/* Work address Card */}
              <div 
                onClick={() => setSelectedAddress('work')}
                className={`p-4 rounded-2xl bg-white border-2 transition-all cursor-pointer shadow-sm relative ${
                  selectedAddress === 'work' 
                    ? 'border-[#006e2f] bg-[#006e2f]/5 shadow-md scale-102' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-2.5">
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wider">
                    Work
                  </span>
                  {selectedAddress === 'work' ? (
                    <CheckCircle className="w-5 h-5 text-[#006e2f] fill-[#006e2f]/10" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-sm mb-1">Jane Doe</p>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-snug">
                  Tech Park IV, Tower B, 5th Floor<br />
                  Whitefield, Bangalore - 560066
                </p>
              </div>

            </div>
          </section>

          {/* Section: Delivery Scheduling Slots */}
          <section>
            <h2 className="font-bold text-gray-800 text-sm sm:text-base flex items-center gap-2 mb-3 px-1">
              <Clock className="w-4 h-4 text-[#006e2f]" /> Delivery Slot
            </h2>
            <div className="bg-white border border-gray-150 rounded-2xl p-4 shadow-sm flex flex-col gap-4">
              
              {/* Floating Date Tabs */}
              <div className="flex gap-2.5 border-b border-gray-100 pb-3.5 overflow-x-auto no-scrollbar">
                
                <button 
                  onClick={() => setSelectedDate('today')}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-center min-w-[85px] border cursor-pointer ${
                    selectedDate === 'today' 
                      ? 'bg-[#006e2f] text-white border-transparent' 
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="block font-bold text-[9px] uppercase tracking-wide">Today</span>
                  <span className="block font-bold text-base sm:text-lg">24</span>
                </button>

                <button 
                  onClick={() => setSelectedDate('tomorrow')}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-center min-w-[85px] border cursor-pointer ${
                    selectedDate === 'tomorrow' 
                      ? 'bg-[#006e2f] text-white border-transparent' 
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="block font-bold text-[9px] uppercase tracking-wide">Tomorrow</span>
                  <span className="block font-bold text-base sm:text-lg">25</span>
                </button>

                <button 
                  onClick={() => setSelectedDate('sat')}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-center min-w-[85px] border cursor-pointer ${
                    selectedDate === 'sat' 
                      ? 'bg-[#006e2f] text-white border-transparent' 
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="block font-bold text-[9px] uppercase tracking-wide">Sat</span>
                  <span className="block font-bold text-base sm:text-lg">26</span>
                </button>

              </div>

              {/* Express Radio Lists */}
              <div className="flex flex-col gap-3">
                <label className="flex items-center justify-between p-3 border border-gray-150 rounded-xl cursor-pointer hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="slot-option"
                      checked={selectedSlot === 'morning'}
                      onChange={() => setSelectedSlot('morning')}
                      className="text-[#006e2f] focus:ring-[#006e2f] h-4.5 w-4.5"
                    />
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-gray-800">Morning Express</p>
                      <p className="text-[10px] sm:text-xs text-gray-500">07:00 AM - 10:00 AM</p>
                    </div>
                  </div>
                  <span className="text-[#006e2f] font-bold text-xs">FREE</span>
                </label>

                <label className="flex items-center justify-between p-3 border border-gray-150 rounded-xl cursor-pointer hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="slot-option"
                      checked={selectedSlot === 'afternoon'}
                      onChange={() => setSelectedSlot('afternoon')}
                      className="text-[#006e2f] focus:ring-[#006e2f] h-4.5 w-4.5"
                    />
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-gray-800">Afternoon Saver</p>
                      <p className="text-[10px] sm:text-xs text-gray-500">01:00 PM - 04:00 PM</p>
                    </div>
                  </div>
                  <span className="text-[#006e2f] font-bold text-xs">FREE</span>
                </label>
              </div>

            </div>
          </section>

          {/* Section: Payment Method Selection */}
          <section>
            <h2 className="font-bold text-gray-800 text-sm sm:text-base flex items-center gap-2 mb-3 px-1">
              <CreditCard className="w-4 h-4 text-[#006e2f]" /> Payment Options
            </h2>
            <div className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-150">
              
              {/* UPI */}
              <div 
                onClick={() => setSelectedPayment('upi')}
                className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50/50 transition-colors ${
                  selectedPayment === 'upi' ? 'bg-[#006e2f]/5' : ''
                }`}
              >
                <div className="w-11 h-11 bg-gray-100 flex items-center justify-center rounded-xl text-gray-600">
                  <QrCode className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-xs sm:text-sm text-gray-800">Unified Payments Interface (UPI)</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Pay via Google Pay, PhonePe, or BHIM</p>
                </div>
                {selectedPayment === 'upi' ? (
                  <CheckCircle className="w-5 h-5 text-[#006e2f]" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300" />
                )}
              </div>

              {/* Cards */}
              <div 
                onClick={() => setSelectedPayment('card')}
                className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50/50 transition-colors ${
                  selectedPayment === 'card' ? 'bg-[#006e2f]/5' : ''
                }`}
              >
                <div className="w-11 h-11 bg-gray-100 flex items-center justify-center rounded-xl text-gray-600">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-xs sm:text-sm text-gray-800">Credit / Debit Card</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Visa, Mastercard, RuPay, Amex</p>
                </div>
                {selectedPayment === 'card' ? (
                  <CheckCircle className="w-5 h-5 text-[#006e2f]" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300" />
                )}
              </div>

              {/* COD */}
              <div 
                onClick={() => setSelectedPayment('cod')}
                className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50/50 transition-colors ${
                  selectedPayment === 'cod' ? 'bg-[#006e2f]/5' : ''
                }`}
              >
                <div className="w-11 h-11 bg-gray-100 flex items-center justify-center rounded-xl text-gray-600">
                  <span className="material-symbols-outlined text-xl">payments</span>
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-xs sm:text-sm text-gray-800">Cash on Delivery</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Pay directly at your doorstep</p>
                </div>
                {selectedPayment === 'cod' ? (
                  <CheckCircle className="w-5 h-5 text-[#006e2f]" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300" />
                )}
              </div>

            </div>
          </section>

        </div>

        {/* Right Sticky Order Summary Box column */}
        <div className="lg:col-span-4 mt-6 lg:mt-0">
          <div className="sticky top-24 bg-white border border-gray-150 p-5 rounded-2xl shadow-sm flex flex-col gap-4">
            <h3 className="font-bold text-gray-800 text-sm sm:text-base border-b border-gray-100 pb-2">
              Order Summary
            </h3>
            
            <div className="flex flex-col gap-2.5 border-b border-gray-100 pb-4">
              
              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
                <span>Subtotal ({itemCount} items)</span>
                <span className="font-bold text-gray-800">₹{subtotal}.00</span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
                <span>Delivery Charges</span>
                <span className="font-bold text-[#006e2f]">FREE</span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
                <span>Handling Fee</span>
                <span className="font-bold text-gray-800">₹{handlingFee}.00</span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm text-[#006e2f] font-bold">
                <span>Coupon (FRESH20)</span>
                <span>-₹{couponDiscount}.00</span>
              </div>

            </div>

            <div className="flex justify-between items-center py-1">
              <span className="font-bold text-[#191c1d] sm:text-base">Total Payable</span>
              <span className="font-extrabold text-[#006e2f] text-lg sm:text-xl">₹{totalPayable}.00</span>
            </div>

            <div className="bg-[#22c55e]/10 p-3 rounded-xl flex items-start gap-2.5 relative border border-[#22c55e]/25">
              <Shield className="w-5 h-5 text-[#006e2f] flex-shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-xs text-[#004b1e] leading-snug">
                Safe &amp; Secure Payments with KiranaMart Encryption.
              </p>
            </div>

            {/* Desktop only trigger pay */}
            <button 
              onClick={handlePlaceOrder}
              className="hidden lg:block w-full bg-[#006e2f] hover:bg-[#004b1e] text-white py-3 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95"
            >
              Pay ₹{totalPayable}.00
            </button>
          </div>

          <div className="flex justify-center gap-3.5 py-4 opacity-50">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwgeDDK68LZGroPjeeFxzvQ_FY6OIQvhS2VyKmFEgwcsFD8VL9olxUyp2G0HBMhOSjSyFCUhdLn0S3aLcP3W5KjUj6Ou7r8uOzrFaV7CwjtsMdqXLYIYoEfRU2a_5VCrWRfbOAPgMPpVcG4t8--x_Z0egrQdEwiLj-iJ_XFN8peGtj0JqKx2MnkYfJ43nG2CXsPnJnMeeYcogBrwl5-X-YSxzr6yk5Xtaq5UTWmHw_aCiHxYbyPIJR0-VX-A8sng4XPaK49ItFx-0" alt="Visa" className="h-[18px] object-contain select-none" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXFaT9M7VFTci7h9gnKRHysG7aC0lDkZoKb2QqkiHT-cxivOBM3SvAc8dZuNypu_yrWCrjno3eV2dTPJlKum6PgwsFO_xTurcVUnV1GYS40c1TubDQRM_x7a1qoLEpnNuatlMSXp4OKL0oZWxeut_ECK3nn2_jENkxA2c9TZfz-k1LMQsELfA4h3ODnoi9-Ee6JgDfREGVc2OxFElK9zZATSR2fuog-LfTpSl9J2TF569s3CaNfHxdqPSTEUuEdMzLaJxMfic1j30" alt="Paypal" className="h-[18px] object-contain select-none" />
          </div>
        </div>

      </main>

      {/* Sticky footer Place Order overlay for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-40 border-t border-gray-150">
        <button 
          onClick={handlePlaceOrder}
          className="w-full bg-[#006e2f] hover:bg-[#004b1e] text-white py-3 px-5 rounded-xl font-bold flex items-center justify-between transition-all active:scale-95 shadow-md group"
        >
          <div className="text-left">
            <span className="block text-[9px] uppercase font-bold text-gray-300">Total payable</span>
            <span className="block text-sm sm:text-base font-extrabold leading-none mt-0.5">₹{totalPayable}.00</span>
          </div>
          <div className="flex items-center gap-1">
            Place Order
            <span className="material-symbols-outlined text-white text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
          </div>
        </button>
      </div>

    </div>
  );
};
