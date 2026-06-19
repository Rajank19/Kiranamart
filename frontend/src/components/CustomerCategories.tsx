import React, { useState } from 'react';
import { ChevronRight, ShoppingBag } from 'lucide-react';
import { Category, SubCategory } from '../types';
import { SUB_CATEGORIES } from '../data';

interface CustomerCategoriesProps {
  categories: Category[];
  initialActiveCategoryId: string;
  onSelectSubCategory: (subCategoryName: string, categoryId: string) => void;
  onShopPromoDeals: () => void;
}

export const CustomerCategories: React.FC<CustomerCategoriesProps> = ({
  categories,
  initialActiveCategoryId,
  onSelectSubCategory,
  onShopPromoDeals,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(initialActiveCategoryId || 'fruits');

  const activeCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];

  // Filtering subcategories matching active category ID
  const activeSubCategories = SUB_CATEGORIES.filter((sub) => sub.category === activeCategoryId);

  return (
    <div className="flex-1 flex overflow-hidden min-h-[calc(100vh-170px)] md:min-h-[calc(100vh-140px)] animate-fade-in bg-white">
      
      {/* Left Column: Vertical Category Menu */}
      <aside className="w-24 sm:w-28 bg-gray-50 border-r border-gray-150 flex flex-col overflow-y-auto">
        <nav className="flex flex-col py-2">
          {categories.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`relative flex flex-col items-center justify-center py-4 px-1 group transition-all duration-155 border-b border-gray-100 ${
                  isActive 
                    ? 'bg-[#006e2f]/5 text-[#006e2f]' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {/* Active Indicator bar */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#006e2f] rounded-r-full"></div>
                )}
                
                {/* Icon wrapper */}
                <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-1 group-active:scale-90 transition-transform ${
                  isActive ? 'bg-[#22c55e]/20 text-[#006e2f]' : 'bg-gray-100 text-gray-500'
                }`}>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                    {category.icon}
                  </span>
                </div>
                
                <span className={`text-[10px] sm:text-xs font-bold text-center leading-tight tracking-tight ${
                  isActive ? 'text-[#006e2f]' : 'text-gray-600'
                }`}>
                  {category.name}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Right Column: Subcategory Grid & Banner */}
      <section className="flex-1 bg-white overflow-y-auto p-4 pb-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-800 text-base sm:text-lg">
            Fresh {activeCategory.name}
          </h2>
          <button 
            onClick={() => onSelectSubCategory('all', activeCategoryId)}
            className="text-[#006e2f] hover:text-[#004b1e] font-bold text-xs sm:text-sm"
          >
            View All
          </button>
        </div>

        {/* Sub-category list grid or generic fallback if no elements */}
        {activeSubCategories.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {activeSubCategories.map((sub) => (
              <div
                key={sub.name}
                onClick={() => onSelectSubCategory(sub.name, activeCategoryId)}
                className="bg-white rounded-xl p-2 border border-gray-150 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md cursor-pointer group"
              >
                <div className="w-full aspect-square bg-gray-50 rounded-lg mb-2 overflow-hidden relative">
                  <img 
                    src={sub.image} 
                    alt={sub.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-800 leading-tight">
                  {sub.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-gray-400">
            <span className="material-symbols-outlined text-4xl block mb-2">shopping_bag</span>
            <p className="text-xs">No subcategories declared yet. Click view all to see the full list.</p>
          </div>
        )}

        {/* Category Deals Card banner */}
        <div className="w-full bg-[#22c55e]/15 rounded-2xl p-4 sm:p-5 flex items-center justify-between border border-[#22c55e]/20 overflow-hidden relative">
          <div className="z-10">
            <p className="text-[#006e2f] font-bold text-[11px] uppercase tracking-wider mb-1">
              Up to 20% Off
            </p>
            <h3 className="font-extrabold text-gray-800 text-sm sm:text-base md:text-lg leading-tight">
              Weekend Farm<br />Fresh Sale
            </h3>
            <button 
              onClick={onShopPromoDeals}
              className="mt-3 bg-[#006e2f] text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-sm cursor-pointer hover:bg-[#004b1e] active:scale-95 transition-all"
            >
              Shop Now
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-25 transform rotate-12 text-[#006e2f]">
            <ShoppingBag className="w-24 h-24 stroke-[1.2]" />
          </div>
        </div>
      </section>

    </div>
  );
};
