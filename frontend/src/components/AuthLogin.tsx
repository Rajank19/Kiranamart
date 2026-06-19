import { loginUser } from "../services/authService";
import React, { useState } from 'react';
import { User, Lock, ArrowRight, ShieldAlert } from 'lucide-react';
import { ActiveView } from '../types';

interface AuthLoginProps {
  onLoginSuccess: (role: 'customer' | 'store' | 'admin') => void;
  onGoToSignup: () => void;
}

export const AuthLogin: React.FC<AuthLoginProps> = ({
  onLoginSuccess,
  onGoToSignup,
}) => {
  const [email, setEmail] = useState('customer@kiranamart.com');
  const [password, setPassword] = useState('password123');
  const [selectedRole, setSelectedRole] = useState<'customer' | 'store' | 'admin'>('customer');
  const [errorMsg, setErrorMsg] = useState('');

  // Preset accounts list for developer/reviewer playground access
  const presetAccounts = {
    customer: { email: 'customer@kiranamart.com', name: 'Jane Doe' },
    store: { email: 'retailer@kiranamart.com', name: 'Ramesh Store' },
    admin: { email: 'admin@kiranamart.com', name: 'KiranaMart HQ' },
  };

  const handleRoleTabChange = (role: 'customer' | 'store' | 'admin') => {
    setSelectedRole(role);
    setEmail(presetAccounts[role].email);
  };

  const handleFormLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !password) {
    setErrorMsg("Please enter both email and password.");
    return;
  }

  try {
    const data = await loginUser(email, password);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    setErrorMsg("");

    onLoginSuccess(data.user.role);
  } catch (error: any) {
    setErrorMsg(
      error.response?.data?.message || "Login Failed"
    );
  }
};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 animate-fade-in font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-md">
        
        {/* Brand identity */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 bg-[#006e2f] rounded-2xl flex items-center justify-center text-white shadow-md mb-3">
            <span className="material-symbols-outlined font-extrabold text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_basket</span>
          </div>
          <h2 className="font-extrabold text-gray-900 text-xl tracking-tight leading-none">
            Welcome to KiranaMart
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 pb-1">
            Sign in to start your 10 min farm-to-table delivery journey!
          </p>
        </div>

        {/* Dynamic Simulator Role Cards switcher */}
        <div className="bg-gray-100 p-1.5 rounded-xl flex gap-1.5 mb-6">
          {(['customer', 'store', 'admin'] as const).map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => handleRoleTabChange(role)}
              className={`flex-1 py-2 font-bold text-[10px] sm:text-xs capitalize rounded-lg transition-all focus:outline-none cursor-pointer ${
                selectedRole === role 
                  ? 'bg-white shadow-sm text-[#006e2f]' 
                  : 'text-gray-500 hover:bg-white/40'
              }`}
            >
              {role === 'store' ? 'Store Owner' : role === 'admin' ? 'HQ Admin' : 'Customer'}
            </button>
          ))}
        </div>

        {/* Main form */}
        <form onSubmit={handleFormLogin} className="space-y-4">
          
          {errorMsg && (
            <div className="bg-red-50 text-red-600 border border-red-200 rounded-xl p-3 text-xs font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />{errorMsg}
            </div>
          )}

          <div>
            <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5 pl-1">
              Email Address
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-450 w-4 h-4" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full h-11 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006e2f] focus:bg-white focus:border-transparent text-sm text-gray-800 transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5 pl-1 flex justify-between">
              <span>Password</span>
              <span className="text-[10px] text-[#006e2f] lowercase normal-case cursor-pointer hover:underline">Forgot?</span>
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-450 w-4 h-4" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full h-11 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006e2f] focus:bg-white focus:border-transparent text-sm text-gray-800 transition-all font-medium"
              />
            </div>
          </div>

          {/* Preset details tip */}
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-150 flex flex-col gap-1 text-[11px] text-gray-550 leading-snug">
            <span className="font-bold text-gray-750 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">lightbulb_circle</span>
              Quick Demo tip:
            </span>
            <span>Password is preset. Change roles above to instantly check Customer, Store Owner, or Admin panels.</span>
          </div>

          <button 
            type="submit"
            className="w-full h-12 bg-[#006e2f] hover:bg-[#004b1e] text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md mt-6 cursor-pointer"
          >
            Sign In <ArrowRight className="w-4 h-4" />
          </button>

        </form>

        <div className="text-center mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
          New to KiranaMart?{' '}
          <button 
            onClick={onGoToSignup}
            type="button" 
            className="text-[#006e2f] font-bold hover:underline"
          >
            Create an account
          </button>
        </div>

      </div>
    </div>
  );
};
