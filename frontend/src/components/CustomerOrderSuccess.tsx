import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle, Phone, Star, MapPin, Truck, ExternalLink, Calendar } from 'lucide-react';

interface CustomerOrderSuccessProps {
  orderId: string;
  totalPaid: number;
  deliveryAddress: string;
  onBackToShopping: () => void;
  onGoToMyOrders: () => void;
}

export const CustomerOrderSuccess: React.FC<CustomerOrderSuccessProps> = ({
  orderId,
  totalPaid,
  deliveryAddress,
  onBackToShopping,
  onGoToMyOrders,
}) => {
  const [scooterProgress, setScooterProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(2); // Step 2 = Out for delivery

  // Scooter movement loop emulation
  useEffect(() => {
    const timer = setInterval(() => {
      setScooterProgress((prev) => {
        if (prev >= 100) {
          setActiveStep(3); // Delivered
          return 100;
        }
        return prev + 5;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-grow bg-gray-50 flex flex-col min-h-screen animate-fade-in pb-16">
      
      {/* SUCCESS CONFIRMATION TOP SECTION */}
      <section className="bg-white border-b border-gray-150 py-8 px-4 text-center flex flex-col items-center">
        
        {/* Animated Green Ring Banner logo */}
        <div className="w-20 h-20 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/40 flex items-center justify-center text-[#22c55e] mb-4 shadow-sm animate-pulse">
          <CheckCircle className="w-12 h-12 stroke-[1.5]" />
        </div>

        <h1 className="font-extrabold text-gray-900 text-xl sm:text-2xl tracking-tight leading-snug">
          Order Placed Successfully!
        </h1>
        
        <p className="text-gray-500 text-xs sm:text-sm mt-1.5 max-w-sm">
          Thank you for choosing KiranaMart. We've received your order and are dispatching it instantly.
        </p>

        {/* Invoice Metadata badges */}
        <div className="mt-5 flex gap-2 w-full max-w-sm justify-center flex-wrap">
          <span className="bg-gray-100 text-gray-700 px-3.5 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wide border border-gray-200">
            ID: {orderId}
          </span>
          <span className="bg-[#22c55e]/15 text-[#004b1e] px-3.5 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wide border border-[#006e2f]/10">
            Paid: ₹{totalPaid}.00
          </span>
        </div>

      </section>

      {/* DYNAMIC MAP TRACKING REPRESENTATION SECTION */}
      <section className="max-w-2xl mx-auto w-full px-4 pt-6">
        <h2 className="font-bold text-gray-800 text-sm sm:text-base mb-3 flex items-center gap-2">
          <MapPin className="text-[#006e2f] w-4.5 h-4.5" /> Fast Delivery Tracking Map
        </h2>

        {/* Mock Map Layout Container with standard road system visuals */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-sm h-48 md:h-56 flex items-center justify-center">
          
          {/* Decorative Map routes */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {/* Route path line drawing */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-1.5 bg-gray-200 rounded-full -translate-y-1/2">
            <div 
              style={{ width: `${scooterProgress}%` }} 
              className="h-full bg-gradient-to-r from-emerald-500 to-[#006e2f] rounded-full transition-all duration-1000"
            ></div>
          </div>

          {/* Map Node: KiranaMart Warehouse */}
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-10 h-10 bg-[#006e2f] rounded-full text-white flex items-center justify-center shadow-lg border-2 border-white select-none">
              <span className="material-symbols-outlined text-lg">storefront</span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-gray-700 mt-2">KiranaMart Store</span>
          </div>

          {/* Map Node: Live Scooter Avatar moving */}
          <div 
            style={{ left: `${10 + (scooterProgress * 0.75)}%` }} 
            className="absolute top-1/2 -translate-y-1/2 -mt-3.5 transition-all duration-1000 z-10 flex flex-col items-center"
          >
            <div className="w-8 h-8 bg-amber-500 rounded-full text-white flex items-center justify-center shadow-md animate-bounce border border-white">
              <Truck className="w-4 h-4" />
            </div>
          </div>

          {/* Map Node: Destination address (Home) */}
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center shadow-lg border-2 border-white select-none animate-pulse">
              <span className="material-symbols-outlined text-lg">home</span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-gray-700 mt-2">Your Address</span>
          </div>

          {/* Bottom text overlays */}
          <div className="absolute bottom-3 left-3 bg-gray-900/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold py-1 px-3 rounded-full flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            ETA: {scooterProgress >= 100 ? 'Rider Arrived' : `${Math.max(1, 12 - Math.round(scooterProgress / 9))} Mins`}
          </div>

          <div className="absolute top-3 right-3 bg-gray-100 px-3 py-1 rounded-full text-[10px] text-gray-550 border font-extrabold uppercase">
            {scooterProgress}% Dispatched
          </div>

        </div>
      </section>

      {/* COURIER DETAILS COMPONENT (RAHUL) */}
      <section className="max-w-2xl mx-auto w-full px-4 pt-4">
        <div className="bg-white border border-gray-150 p-4 rounded-2xl shadow-sm flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#006e2f]/10 bg-yellow-100/40 relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTXbY3uB3zXjIsw_7CndE6YtqPq9Z89WzZp7V4IuUe78iW7S8zH1U_MvR_OPAcni8dUCRoZ4fOkx4Sa8FcciJAOMxKDY9CnSCkObTf7vNQ6mH5mWMDzesCyZ__0fuNQABVTOD423fOKrnU1IF0weWBc6b83J22SbA8eOHbFmOrrC8X5LcusG3U51nq1hv3SzTy3D95yHvcCjNerXVCRdr_vl3x1dqluZASc4e9jthc5OQOXbYO-zR6h" 
                alt="Rider Rahul" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] text-[#006e2f] uppercase font-extrabold tracking-wider leading-none mb-1">
                Valued Delivery Partner
              </p>
              <h3 className="font-bold text-gray-800 text-sm">Rahul G. Sharma</h3>
              <div className="flex items-center gap-1 mt-1 text-[11px] sm:text-xs text-gray-550 font-medium">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 font-semibold" />
                <span>4.9 ★ Sourced from 2,800+ top ratings</span>
              </div>
            </div>
          </div>

          <a 
            href="tel:+919876543210"
            className="w-10 h-10 rounded-full bg-[#006e2f]/10 border border-[#006e2f]/20 flex items-center justify-center text-[#006e2f] hover:bg-[#004b1e] hover:text-white transition-colors cursor-pointer"
          >
            <Phone className="w-4.5 h-4.5" />
          </a>

        </div>
      </section>

      {/* ACTIVE TRACKING MILESTONES PROGRESS list */}
      <section className="max-w-2xl mx-auto w-full px-4 pt-4">
        <div className="bg-white border border-gray-150 p-4 rounded-2xl shadow-sm">
          <h3 className="font-bold text-gray-900 text-xs sm:text-sm border-b border-gray-100 pb-2.5 mb-4 uppercase tracking-wider">
            Preparation Journey
          </h3>

          <div className="flex flex-col gap-6 relative pl-6">
            
            {/* Visual vertical track indicator line */}
            <div className="absolute left-[7px] top-[7px] bottom-[7px] w-[2px] bg-gray-100"></div>

            {/* Mile 1 */}
            <div className="relative flex items-start gap-4">
              <div className="absolute -left-[23px] w-4.5 h-4.5 rounded-full bg-[#22c55e] flex items-center justify-center text-white z-10">
                <span className="text-[10px] font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">Order Accepted by KiranaMart</h4>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-1">Our store partner confirmed the items and prepared billing schedules.</p>
              </div>
            </div>

            {/* Mile 2 */}
            <div className="relative flex items-start gap-4">
              <div className="absolute -left-[23px] w-4.5 h-4.5 rounded-full bg-[#22c55e] flex items-center justify-center text-white z-10">
                <span className="text-[10px] font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">Handpicked with hygiene check</h4>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-1">Farm fresh items are examined, weighed, and sanitized inside organic-safe packs.</p>
              </div>
            </div>

            {/* Mile 3 */}
            <div className="relative flex items-start gap-4">
              <div className={`absolute -left-[23px] w-4.5 h-4.5 rounded-full flex items-center justify-center text-white z-10 transition-all ${
                scooterProgress >= 100 ? 'bg-[#22c55e]' : 'bg-amber-500 animate-pulse'
              }`}>
                <span className="text-[10px] font-bold">{scooterProgress >= 100 ? '✓' : '●'}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">Out for delivery with Rahul</h4>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-1">Rahul holds the thermo-box containing your organic orders, driving on route path.</p>
              </div>
            </div>

            {/* Mile 4 */}
            <div className="relative flex items-start gap-4">
              <div className={`absolute -left-[23px] w-4.5 h-4.5 rounded-full flex items-center justify-center text-white z-10 transition-all ${
                scooterProgress >= 100 ? 'bg-[#22c55e]' : 'bg-gray-200 text-gray-550'
              }`}>
                <span className="text-[10px] font-bold">✓</span>
              </div>
              <div>
                <h4 className={`font-bold text-xs sm:text-sm leading-tight ${scooterProgress >= 100 ? 'text-gray-800' : 'text-gray-400'}`}>
                  Delivered at Doorstep
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-1">Secure contactless delivery completed successfully.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER MULTIPLE ACTIONS (Return to shop or My Orders list) */}
      <section className="max-w-2xl mx-auto w-full px-4 pt-6 flex flex-col sm:flex-row gap-3">
        <button 
          onClick={onBackToShopping}
          className="flex-1 bg-white border border-[#006e2f] text-[#006e2f] hover:bg-gray-100 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all focus:outline-none"
        >
          Back to Shopping
        </button>
        <button 
          onClick={onGoToMyOrders}
          className="flex-1 bg-[#006e2f] hover:bg-[#004b1e] text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm focus:outline-none"
        >
          View All Orders
        </button>
      </section>

    </div>
  );
};
