import React, { useState } from 'react';
import { ArrowLeft, Clock, RefreshCw, ChevronRight, FileText, ShoppingBag, Eye } from 'lucide-react';
import { Order, Product } from '../types';

interface CustomerOrdersListProps {
  orders: Order[];
  onTrackOrder: (order: Order) => void;
  onReorder: (order: Order) => void;
  onBack: () => void;
}

type OrderTabFilter = 'all' | 'ongoing' | 'delivered' | 'cancelled';

export const CustomerOrdersList: React.FC<CustomerOrdersListProps> = ({
  orders,
  onTrackOrder,
  onReorder,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<OrderTabFilter>('all');

  const filteredOrders = orders.filter((order) => {
    if (activeTab === 'all') return true;
    return order.status.toLowerCase() === activeTab;
  });

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'bg-amber-100/75 text-amber-800 border-amber-200';
      case 'delivered':
        return 'bg-emerald-100/75 text-emerald-800 border-emerald-250';
      case 'cancelled':
        return 'bg-red-100/75 text-red-800 border-red-200';
      default:
        return 'bg-gray-105 text-gray-700';
    }
  };

  return (
    <div className="flex-grow bg-gray-50 flex flex-col min-h-screen animate-fade-in pb-16">
      
      {/* Upper appbar */}
      <header className="sticky top-0 w-full z-45 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-1 px-2 text-gray-500 hover:text-gray-900 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-bold text-[#006e2f] text-base sm:text-lg">My Orders</h1>
        </div>
        <span className="text-xs font-bold text-gray-500 bg-gray-100 p-1 px-3 rounded-full">
          {orders.length} Total
        </span>
      </header>

      {/* Segment filter tabs */}
      <section className="bg-white border-b border-gray-150 px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar">
        {(['all', 'ongoing', 'delivered', 'cancelled'] as OrderTabFilter[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full font-bold text-xs capitalize transition-all active:scale-95 cursor-pointer ${
              activeTab === tab 
                ? 'bg-[#006e2f] text-white shadow-sm' 
                : 'bg-gray-100 text-gray-650 hover:bg-gray-200/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </section>

      {/* Orders Grid/List items block */}
      <main className="max-w-2xl mx-auto w-full px-4 pt-4 flex flex-col gap-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div 
              key={order.id}
              className="bg-white rounded-2xl border border-gray-150 p-4 shadow-sm flex flex-col gap-3 relative hover:shadow-md transition-shadow"
            >
              
              {/* Order status header block */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                <div className="flex flex-col">
                  <span className="font-extrabold text-xs text-gray-800">
                    Order ID: {order.id}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 mt-1 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {order.date}
                  </span>
                </div>
                
                <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border tracking-wide uppercase ${getStatusStyle(order.status)}`}>
                  {order.status}
                </span>
              </div>

              {/* Order items text lists details */}
              <div className="py-1">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-none">Items summary</span>
                <p className="font-semibold text-gray-700 text-xs sm:text-sm mt-1.5 leading-snug">
                  {order.itemNamesSummary}
                </p>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">Total Payable Amount</span>
                  <span className="font-extrabold text-sm sm:text-base text-[#006e2f]">₹{order.totalAmount}.00</span>
                </div>
              </div>

              {/* Context-aware Button Actions */}
              <div className="flex gap-2.5 pt-2 border-t border-gray-100">
                
                {order.status.toLowerCase() === 'ongoing' ? (
                  <>
                    <button 
                      onClick={() => onTrackOrder(order)}
                      className="flex-1 bg-[#006e2f] hover:bg-[#004b1e] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
                    >
                      <Eye className="w-4 h-4" /> Track Order
                    </button>
                    <button 
                      onClick={() => alert(`Cancel request sent for order ${order.id}. Admin will authorize the approval shortly.`)}
                      className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-650 py-2.5 px-4 rounded-xl font-bold text-xs active:scale-90 transition-all"
                    >
                      Cancel Order
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => onReorder(order)}
                      className="flex-1 bg-white hover:bg-gray-50 border border-[#006e2f] text-[#006e2f] py-2.5 px-4 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Reorder Basket
                    </button>
                    <button 
                      onClick={() => alert(`Your invoice PDF receipt for Order ${order.id} was generated successfully.`)}
                      className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 active:scale-90 transition-all"
                    >
                      <FileText className="w-3.5 h-3.5" /> Download Bill
                    </button>
                  </>
                )}

              </div>

            </div>
          ))
        ) : (
          <div className="py-24 text-center text-gray-400 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col items-center">
            <ShoppingBag className="w-12 h-12 block mx-auto text-gray-300 mb-2.5" />
            <h3 className="font-bold text-gray-750">No orders found</h3>
            <p className="text-xs text-gray-500 mt-1">Looks like you don't have any matching orders in this filter category.</p>
          </div>
        )}
      </main>

    </div>
  );
};
