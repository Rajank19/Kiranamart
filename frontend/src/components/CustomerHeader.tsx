import React from 'react';
import { MapPin, ShoppingCart, Search, Menu } from 'lucide-react';
import { ActiveView } from '../types';

interface CustomerHeaderProps {
  onSearch: (query: string) => void;
  cartCount: number;
  onCartClick: () => void;
  activeView: ActiveView;
  onMenuClick?: () => void;
  onProfileClick: () => void;
  onNavigateHome: () => void;
  searchQuery: string;
}

export const CustomerHeader: React.FC<CustomerHeaderProps> = ({
  onSearch,
  cartCount,
  onCartClick,
  activeView,
  onMenuClick,
  onProfileClick,
  onNavigateHome,
  searchQuery,
}) => {
  return (
    <header className="sticky top-0 w-full z-40 flex flex-col bg-white shadow-sm border-b border-gray-100 transition-all duration-200">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Brand & Location */}
        <div className="flex items-center gap-3 overflow-hidden">
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="p-1 px-2 -ml-1 text-gray-700 hover:bg-gray-100 rounded-full md:hidden"
              id="header-menu-btn"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <div 
            onClick={onNavigateHome} 
            className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
          >
            <div className="w-9 h-9 bg-[#006e2f] rounded-xl flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined font-bold text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_basket</span>
            </div>
            <h1 className="font-bold text-[#006e2f] text-xl tracking-tight hidden sm:block">KiranaMart</h1>
          </div>

          <div className="h-6 w-[1px] bg-gray-200 mx-1 hidden sm:block"></div>

          {/* Location Area */}
          <div className="flex items-center gap-1.5 text-left max-w-[200px] sm:max-w-xs md:max-w-md">
            <MapPin className="w-4 h-4 text-[#006e2f] flex-shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider leading-none">Deliver to</span>
              <span className="text-xs font-bold text-gray-800 truncate leading-tight">Home - 123 Alpine Heights, Sector 15</span>
            </div>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Cart Icon with Live Badge */}
          <button
            onClick={onCartClick}
            className="relative p-2.5 hover:bg-gray-50 rounded-full transition-all active:scale-95 text-[#006e2f] border border-gray-100 bg-gray-50/50"
            id="header-cart-icon"
          >
            <ShoppingCart className="w-5 h-5 font-semibold" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mini profile shortcut */}
          <button 
            onClick={onProfileClick}
            className="w-9 h-9 rounded-full overflow-hidden border border-gray-200 active:scale-95 transition-transform"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNlnL9v0u_OPAcni8dUCRoZ9SQMGl-jfLQM8qEfNFZ40zBaQh8W3ERDZgfq9PK2eRpYnzBHi24Sa8FcciJAOMxKDY9CnSCkObTf7vNQ6mH5mWMDzesCyZ__0fuNQABVTOD423fOKrnU1IF0weWBc6b83J22SbA8eOHbFmOrrC8X5LcusG3U51nq1hv3SzTy3D95yHvcCjNerXVCRdr_vl3x1dqluZASc4e9jthc5OQOXbYO-zR6hGFD5BcN7P9Hh0Vayulx1me0Ls" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Embedded Search Component */}
      <div className="px-4 pb-3 pt-1 md:px-6 max-w-3xl mx-auto w-full">
        <div className="relative shadow-sm hover:shadow transition-shadow rounded-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for 'Fresh Milk', 'Organic veggies' or 'Artisan Bread'..."
            className="w-full h-11 pl-11 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006e2f] focus:bg-white focus:border-transparent text-sm text-gray-800 transition-all placeholder-gray-400"
            id="header-search-bar"
          />
          {searchQuery && (
            <button 
              onClick={() => onSearch('')} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-800 transition-colors bg-gray-200/60 px-2 py-0.5 rounded-full"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
