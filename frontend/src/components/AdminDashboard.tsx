import React, { useState } from 'react';
import { ShieldCheck, Users, Check, X, BellRing, Settings } from 'lucide-react';
import { StoreApproval } from '../types';

interface AdminDashboardProps {
  initialStores: StoreApproval[];
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  initialStores,
  onLogout,
}) => {
  const [stores, setStores] = useState<StoreApproval[]>(initialStores);
  const [activeTab, setActiveTab] = useState<'approvals' | 'logs'>('approvals');

  const handleUpdateStatus = (id: string, nextStatus: 'approved' | 'declined' | 'pending') => {
    setStores((prev) =>
      prev.map((store) => (store.id === id ? { ...store, status: nextStatus } : store))
    );
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'approved':
        return 'bg-emerald-100 text-emerald-800 border-emerald-250';
      case 'declined':
        return 'bg-red-100 text-red-800 border-red-250';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex-grow bg-gray-50 flex flex-col min-h-screen animate-fade-in font-sans pb-16">
      
      {/* Header */}
      <header className="bg-slate-900 text-white px-4 py-4 md:px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-black shadow-inner">
            <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
          </div>
          <div>
            <h1 className="font-extrabold text-[#22c55e] text-sm sm:text-base leading-none">KiranaMart Headquarters</h1>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">Operation Admin: Supervisor Node #01</p>
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="text-xs bg-slate-800 hover:bg-slate-700 font-bold border border-slate-700 py-1.5 px-3.5 rounded-lg active:scale-95 transition-all cursor-pointer"
        >
          Logout Admin Panel
        </button>
      </header>

      {/* Main Container contents */}
      <main className="max-w-5xl mx-auto w-full px-4 py-6 flex flex-col gap-6">
        
        {/* Statistics section */}
        <section className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          
          <div className="bg-white border rounded-2xl p-4 shadow-sm border-gray-150">
            <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Pending Store Requests</p>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
              {stores.filter(s => s.status === 'pending').length} Applicants
            </h3>
          </div>

          <div className="bg-white border rounded-2xl p-4 shadow-sm border-gray-150">
            <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Verified Outlets</p>
            <h3 className="text-xl sm:text-2xl font-black text-emerald-600 mt-1">
              {stores.filter(s => s.status === 'approved').length} Active
            </h3>
          </div>

          <div className="bg-white border rounded-2xl p-4 shadow-sm border-gray-150">
            <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Active Hub Towns</p>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">28 Locations</h3>
          </div>

          <div className="bg-white border rounded-2xl p-4 shadow-sm border-gray-150">
            <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Daily Fulfilled GMV</p>
            <h3 className="text-xl sm:text-2xl font-black text-[#006e2f] mt-1">₹4.82 Lakhs</h3>
          </div>

        </section>

        {/* Tab Selection */}
        <div className="flex border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('approvals')}
            className={`py-2 px-4 font-bold text-xs sm:text-sm border-b-2 active:scale-95 transition-all cursor-pointer ${
              activeTab === 'approvals' ? 'border-[#006e2f] text-[#006e2f]' : 'border-transparent text-gray-500'
            }`}
          >
            Store Verification Desk ({stores.length})
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`py-2 px-4 font-bold text-xs sm:text-sm border-b-2 active:scale-95 transition-all cursor-pointer ${
              activeTab === 'logs' ? 'border-[#006e2f] text-[#006e2f]' : 'border-transparent text-gray-500'
            }`}
          >
            Global Live Server Logs
          </button>
        </div>

        {/* Dynamic Display Area */}
        {activeTab === 'approvals' ? (
          <section className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm">
            
            {/* Desktop Table view */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-150">
                <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="px-5 py-3">Store Image</th>
                    <th className="px-5 py-3">Store Name</th>
                    <th className="px-5 py-3">Focus / Specialty</th>
                    <th className="px-5 py-3">Locality / Address</th>
                    <th className="px-5 py-3">Approval status</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150">
                  {stores.map((store) => (
                    <tr key={store.id} className="hover:bg-gray-50/50">
                      
                      {/* Image cell */}
                      <td className="px-5 py-3.5">
                        <div className="w-9 h-9 overflow-hidden rounded-lg border bg-gray-50 flex items-center justify-center p-1.5 flex-shrink-0">
                          <img src={store.image} alt={store.name} className="max-h-full max-w-full object-contain" />
                        </div>
                      </td>

                      <td className="px-5 py-3.5 font-bold text-gray-800">
                        {store.name}
                        <span className="block text-[10px] text-gray-400 font-medium">ID: {store.id}</span>
                      </td>

                      <td className="px-5 py-3.5">
                        <span className="block font-medium text-gray-700">{store.focus}</span>
                      </td>

                      <td className="px-5 py-3.5 text-xs text-gray-500 max-w-xs truncate">
                        {store.location}
                      </td>

                      <td className="px-5 py-3.5">
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border tracking-wide uppercase ${getStatusColor(store.status)}`}>
                          {store.status}
                        </span>
                      </td>

                      <td className="px-5 py-3.5 text-right">
                        {store.status === 'pending' ? (
                          <div className="flex gap-2 justify-end">
                            <button 
                              onClick={() => handleUpdateStatus(store.id, 'approved')}
                              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded p-1 px-2.5 font-bold text-[11px] inline-flex items-center gap-0.5 shadow-sm cursor-pointer active:scale-95"
                            >
                              <Check className="w-3.5 h-3.5" /> Verify
                            </button>
                            <button 
                              onClick={() => handleUpdateStatus(store.id, 'declined')}
                              className="bg-red-500 hover:bg-red-600 text-white rounded p-1 px-2.5 font-bold text-[11px] inline-flex items-center gap-0.5 shadow-sm cursor-pointer active:scale-95"
                            >
                              <X className="w-3 h-3" /> Decline
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => {
                              handleUpdateStatus(store.id, 'pending');
                            }}
                            className="text-xs text-gray-500 hover:underline"
                          >
                            Re-evaluate Status
                          </button>
                        )}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </section>
        ) : (
          // HQ Live Logs block
          <section className="bg-slate-950 font-mono text-xs text-emerald-400 p-5 rounded-2xl shadow-inner border border-slate-800 space-y-2 min-h-64 select-none">
            <p className="text-slate-500">// KiranaMart real-time HQ Telemetry feeds</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-emerald-500">[INFO]</span> Connected supervisor socket node #01. Monitoring 14 streams.
            </p>
            <p><span className="text-emerald-600">2026-06-16 10:04:12</span> [PROD_APP_VITES_ROUT] DISPATCH: Rahul Sharma holds thermal-box containing Order ID: #KM-592182.</p>
            <p><span className="text-emerald-600">2026-06-16 10:04:08</span> [AUTH_SYSTEM] SIGN_IN: User Jane Doe (customer@kiranamart.com) requested secure token generation.</p>
            <p><span className="text-emerald-600">2026-06-16 10:03:52</span> [STOCK_MANAGER/HQ] LOW_STOCK_ALERT: Bananas dropped below safe buffer capacity at Ramesh Daily Kirana.</p>
            <p><span className="text-amber-400">2026-06-16 10:03:11</span> [DB_CONNECTOR/SECURE_RULES] INTEGRATION: Verified secure rules structures aligned with Firestore specs.</p>
          </section>
        )}

      </main>

    </div>
  );
};
