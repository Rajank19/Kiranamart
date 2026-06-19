import React, { useState } from 'react';
import { LogOut, Award, Share2, Clipboard, ArrowRight, User, ShoppingBag, MapPin, CreditCard, HelpCircle, Gift, ChevronRight } from 'lucide-react';
import { UserProfile } from '../types';

interface CustomerProfileProps {
  user: UserProfile;
  onGoToOrders: () => void;
  onLogout: () => void;
  onRoleSwitch?: () => void;
}

export const CustomerProfile: React.FC<CustomerProfileProps> = ({
  user,
  onGoToOrders,
  onLogout,
  onRoleSwitch,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-grow bg-gray-50 flex flex-col min-h-screen animate-fade-in pb-16">
      
      {/* Top Header App bar */}
      <header className="sticky top-0 w-full z-45 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3 shadow-sm">
        <h1 className="font-bold text-[#006e2f] text-base sm:text-lg">My Profile</h1>
        <button 
          onClick={onLogout}
          className="flex items-center gap-1 text-xs font-bold text-red-600 hover:bg-red-50 p-1.5 px-3 rounded-full transition-colors active:scale-95 cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" /> Logout
        </button>
      </header>

      {/* Main Container contents */}
      <main className="max-w-2xl mx-auto w-full px-4 pt-4 flex flex-col gap-4">
        
        {/* Profile Card details */}
        <section className="bg-white rounded-2xl border border-gray-150 p-4 sm:p-5 shadow-sm flex items-center gap-4 relative overflow-hidden">
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#006e2f]/20 bg-gray-50 flex-shrink-0">
            <img 
              src={user.avatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNlnL9v0u_OPAcni8dUCRoZ9SQMGl-jfLQM8qEfNFZ40zBaQh8W3ERDZgfq9PK2eRpYnzBHi24Sa8FcciJAOMxKDY9CnSCkObTf7vNQ6mH5mWMDzesCyZ__0fuNQABVTOD423fOKrnU1IF0weWBc6b83J22SbA8eOHbFmOrrC8X5LcusG3U51nq1hv3SzTy3D95yHvcCjNerXVCRdr_vl3x1dqluZASc4e9jthc5OQOXbYO-zR6hGFD5BcN7P9Hh0Vayulx1me0Ls'} 
              alt={user.name} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-grow">
            <h2 className="font-extrabold text-gray-900 text-base sm:text-lg leading-tight">
              {user.name}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{user.email}</p>
            <p className="text-gray-500 text-xs leading-none mt-1 font-medium">{user.phone}</p>
            
            {/* Loyalty tier badge */}
            <div className="flex items-center gap-1.5 mt-3.5 text-[#006e2f] bg-[#006e2f]/5 px-3 py-1 rounded-full w-fit">
              <Award className="w-4 h-4 text-[#006e2f]" />
              <span className="font-extrabold text-[10px] uppercase tracking-wider">
                {user.tier} Customer
              </span>
            </div>
          </div>

          {/* Role switcher indicator box helper */}
          {onRoleSwitch && (
            <div className="absolute right-3 top-3">
              <button 
                onClick={onRoleSwitch}
                className="bg-[#22c55e]/15 hover:bg-[#22c55e]/30 border border-[#006e2f]/10 text-[#004b1e] text-[10px] sm:text-xs font-bold py-1 px-3.5 rounded-full shadow-sm cursor-pointer active:scale-95"
              >
                Switch Role
              </button>
            </div>
          )}

        </section>

        {/* Refer Promo Card */}
        <section className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-2xl p-4 sm:p-5 shadow-sm relative overflow-hidden">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 bg-[#006e2f] rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            
            <div className="flex-grow">
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base leading-tight">
                Refer friends, get ₹100!
              </h3>
              <p className="text-gray-600 text-[11px] sm:text-xs mt-1 leading-snug">
                Share your personal code with neighbors to receive wallet cashbacks instantly on their first checkout.
              </p>
              
              <div className="flex items-center gap-2 mt-4">
                <span className="bg-white border-2 border-dashed border-[#006e2f] font-extrabold text-xs tracking-widest px-4 py-2 rounded-xl text-gray-800 uppercase select-all">
                  KIRANAM100
                </span>
                
                <button 
                  onClick={handleCopyCode}
                  className="bg-[#006e2f] hover:bg-[#004b1e] text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all active:scale-95 cursor-pointer h-9 shadow-sm"
                >
                  <Clipboard className="w-3.5 h-3.5" />
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PROFILE ACTION MENU CARDS LIST */}
        <section className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100">
          
          {/* Action 1 */}
          <div 
            onClick={onGoToOrders} 
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-gray-500 group-hover:text-[#006e2f]" />
              <span className="text-xs sm:text-sm font-bold text-gray-700">My Orders History</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Action 2 */}
          <div 
            onClick={() => alert(`Saved Shipping Address: Home (Gurgaon Sector 15) and Work (Tech Park 4, Whitefield, Bangalore).`)} 
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500 group-hover:text-[#006e2f]" />
              <span className="text-xs sm:text-sm font-bold text-gray-700">Saved Addresses</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Action 3 */}
          <div 
            onClick={() => alert(`Connected wallets and UPI IDs: phonepe@ybl, card ending in 4056.`)} 
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-gray-500 group-hover:text-[#006e2f]" />
              <span className="text-xs sm:text-sm font-bold text-gray-700">Manage Payment Details</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Action 4 */}
          <div 
            onClick={() => alert(`KiranaMart Helpdesk is available 24/7. Call us directly or drop a mail to support@kiranamart.com.`)} 
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-500 group-hover:text-[#006e2f]" />
              <span className="text-xs sm:text-sm font-bold text-gray-700">Help &amp; Customer Support</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>

        </section>

      </main>

    </div>
  );
};
