import React, { useState } from 'react';
import { Plus, Package, TrendingUp, DollarSign, Edit, AlertCircle, ShoppingCart, ToggleLeft, ToggleRight, ListPlus } from 'lucide-react';
import { Product } from '../types';

interface StoreOwnerDashboardProps {
  products: Product[];
  onAddProduct: (product: Omit<Product, 'id'>) => void;
  onToggleStatus: (productId: string) => void;
  onLogout: () => void;
}

export const StoreOwnerDashboard: React.FC<StoreOwnerDashboardProps> = ({
  products,
  onAddProduct,
  onToggleStatus,
  onLogout,
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('fruits');
  const [subCategory, setSubCategory] = useState('Fresh Vegetables');
  const [price, setPrice] = useState('');
  const [priceUnit, setPriceUnit] = useState('500 g');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleFormAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) {
      alert('Provide full specifications before submitting.');
      return;
    }
    onAddProduct({
      name,
      category,
      subCategory,
      price: Number(price),
      priceUnit,
      image: image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFXbY3uB3zXjIsw_7CndE6YtqPq9Z89WzZp7V4IuUe78iW7S8zH1U_MvR_OPAcni8dUCRoZ4fOkx4Sa8FcciJAOMxKDY9CnSCkObTf7vNQ6mH5mWMDzesCyZ__0fuNQABVTOD423fOKrnU1IF0weWBc6b83J22SbA8eOHbFmOrrC8X5LcusG3U51nq1hv3SzTy3D95yHvcCjNerXVCRdr_vl3x1dqluZASc4e9jthc5OQOXbYO-zR6h',
      description,
      isOrganic: name.toLowerCase().includes('organic'),
      isBestseller: false,
    });
    // Clear
    setName('');
    setPrice('');
    setPriceUnit('500 g');
    setDescription('');
    setImage('');
    setShowAddForm(false);
  };

  // Mock sales numbers
  const earningsTotal = 14220;
  const ordersCompleted = 48;
  const activeCount = products.length;

  return (
    <div className="flex-grow bg-gray-50 flex flex-col min-h-screen animate-fade-in font-sans pb-16">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-150 px-4 py-4 md:px-6 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-emerald-650 bg-[#006e2f] text-white flex items-center justify-center rounded-xl font-bold">
            <span className="material-symbols-outlined text-xl">store</span>
          </div>
          <div>
            <h1 className="font-extrabold text-gray-900 text-sm sm:text-base leading-none">Ramesh Daily Kirana</h1>
            <p className="text-[10px] text-[#006e2f] uppercase tracking-wider font-bold mt-1">Store ID: #KM-DEL902</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-[#006e2f] text-white hover:bg-[#004b1e] text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4 font-extrabold" /> Add Item
          </button>
          <button 
            onClick={onLogout}
            className="text-xs font-bold text-red-650 text-red-600 hover:bg-red-50 p-2 rounded-xl"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Container contents */}
      <main className="max-w-5xl mx-auto w-full px-4 py-6 flex flex-col gap-6">
        
        {/* Sales Bento metrics */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <div className="bg-white border border-gray-150 p-4 rounded-2xl shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Daily Earnings</p>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">₹{earningsTotal}.00</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#22c55e]/15 text-[#006e2f] flex items-center justify-center">
              <DollarSign className="w-5 h-5 font-bold" />
            </div>
          </div>

          <div className="bg-white border border-gray-150 p-4 rounded-2xl shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Orders Filled</p>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">{ordersCompleted} Today</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white border border-gray-150 p-4 rounded-2xl shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Active Stock Catalog</p>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">{activeCount} SKUs</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
          </div>

        </section>

        {/* Low Stock alarming alert bar */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="flex-grow">
            <h4 className="font-bold text-gray-800 text-xs sm:text-sm">Low Stock Alert</h4>
            <p className="text-[11px] sm:text-xs text-gray-500 leading-snug mt-1">
              "Organic Bananas" has reached under 3 kg. Restock soon to prevent order cancels from fast delivery slots.
            </p>
          </div>
          <button 
            onClick={() => alert('Restocked bananas successfully to 25 Units.')}
            className="bg-amber-600 text-white font-bold text-xs py-1.5 px-3.5 rounded-lg shrink-0 transition-transform active:scale-95 hover:bg-amber-700"
          >
            Refill Stock
          </button>
        </section>

        {/* Products Grid catalog management */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold text-gray-800 text-sm sm:text-base">SKU Catalog Management</h2>
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Scroll list to Toggle Status</span>
          </div>

          <div className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-150">
            {products.map((p) => {
              // Mock active state
              const isSuspended = p.id === 'p123'; // just simulated for toggles
              return (
                <div 
                  key={p.id}
                  className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-gray-50/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg border bg-gray-50 p-1.5 flex items-center justify-center flex-shrink-0">
                      <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">{p.name}</h4>
                      <p className="text-[10px] text-gray-400 mt-1 font-semibold uppercase">{p.category} • Pack: {p.priceUnit}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 border-t pt-3 sm:border-0 sm:pt-0">
                    <div className="flex flex-col sm:items-end">
                      <span className="font-extrabold text-gray-900 text-sm">₹{p.price}.00</span>
                      <span className="text-[10px] text-emerald-650 text-[#006e2f] uppercase tracking-wider font-extrabold mt-0.5">In Stock</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => alert(`Edit specifications modal opened for SKU ${p.id}.`)}
                        className="p-1 px-2 border border-gray-200 hover:border-gray-300 text-gray-650 rounded-lg text-xs"
                      >
                        Edit
                      </button>

                      {/* Toggle Active status */}
                      <button 
                        onClick={() => {
                          onToggleStatus(p.id);
                          alert(`Switched offline/online server availability status for item: "${p.name}".`);
                        }}
                        className="text-[#006e2f] transition-all active:scale-95 cursor-pointer"
                        title="Toggle active dispatch availability online"
                      >
                        <span className="material-symbols-outlined text-2xl">toggle_on</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Modal addition Form representation */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 flex flex-col animate-slide-up max-h-[90vh]">
            
            <header className="p-4 border-b border-gray-150 flex items-center justify-between bg-gray-50">
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base flex items-center gap-1.5">
                <ListPlus className="w-5 h-5 text-[#006e2f]" /> Dispatch New SKU Item
              </h3>
              <button 
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-gray-800 font-bold"
              >
                ✕
              </button>
            </header>

            <form onSubmit={handleFormAdd} className="p-5 flex-grow overflow-y-auto space-y-4">
              
              <div>
                <label className="block text-gray-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">Item Title / Brand</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Organic Granny Smith Apple"
                  required
                  className="w-full h-10 border border-gray-250 rounded-xl px-3 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#006e2f]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                
                <div>
                  <label className="block text-gray-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-10 border border-gray-250 rounded-xl px-2.5 text-xs sm:text-sm bg-white"
                  >
                    <option value="fruits">Fruits &amp; Veg</option>
                    <option value="dairy">Dairy Products</option>
                    <option value="snacks">Snacks &amp; Munchies</option>
                    <option value="cleaning">Household Supplies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 font-semibold">Sub-Category</label>
                  <input 
                    type="text" 
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    placeholder="e.g. Fresh Vegetables"
                    className="w-full h-10 border border-gray-250 rounded-xl px-3 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#006e2f]"
                  />
                </div>

              </div>

              <div className="grid grid-cols-2 gap-3">
                
                <div>
                  <label className="block text-gray-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">Price (INR)</label>
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 78"
                    required
                    className="w-full h-10 border border-gray-250 rounded-xl px-3 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#006e2f]"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">Pack Size / Unit</label>
                  <input 
                    type="text" 
                    value={priceUnit}
                    onChange={(e) => setPriceUnit(e.target.value)}
                    placeholder="e.g. 1 kg"
                    required
                    className="w-full h-10 border border-gray-250 rounded-xl px-3 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#006e2f]"
                  />
                </div>

              </div>

              <div>
                <label className="block text-gray-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">Product Description</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Summarize product properties, nutrition details..."
                  rows={2}
                  className="w-full border border-gray-250 rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#006e2f]"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">Product Hotlink Image URL</label>
                <input 
                  type="url" 
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full h-10 border border-gray-250 rounded-xl px-3 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#006e2f]"
                />
              </div>

              <div className="flex gap-2.5 pt-4">
                <button 
                  type="button" 
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 border py-3 rounded-xl font-bold text-xs hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-[#006e2f] hover:bg-[#004b1e] text-white py-3 rounded-xl font-bold text-xs"
                >
                  Submit SKU Item
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
