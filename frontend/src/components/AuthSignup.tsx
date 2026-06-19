import { registerUser } from "../services/authService";
import React, { useState } from 'react';
import { User, Mail, Lock, Phone, ArrowLeft, ArrowRight } from 'lucide-react';

interface AuthSignupProps {
  onSignupSuccess: (role: 'customer' | 'store') => void;
  onBackToLogin: () => void;
}

export const AuthSignup: React.FC<AuthSignupProps> = ({
  onSignupSuccess,
  onBackToLogin,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'customer' | 'store'>('customer');

  const handleRegisterSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    await registerUser(
      fullName,
      email,
      password
    );

    alert("Registration Successful");

    onBackToLogin();
  } catch (error: any) {
    alert(
      error.response?.data?.message ||
      "Registration Failed"
    );
  }
};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 animate-fade-in font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-md">
        
        {/* Title */}
        <div className="flex flex-col mb-5">
          <button 
            type="button" 
            onClick={onBackToLogin}
            className="flex items-center gap-1 text-gray-400 hover:text-gray-800 text-xs font-bold w-fit mb-3 focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Login
          </button>
          <h2 className="font-extrabold text-gray-900 text-xl tracking-tight leading-none">
            Create account
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Get high-fidelity fresh groceries in 10 minutes flat!
          </p>
        </div>

        {/* Role declaration buttons */}
        <div className="flex bg-gray-100 p-1 rounded-xl gap-2 mb-4">
          <button 
            type="button"
            onClick={() => setRole('customer')}
            className={`flex-1 py-1.5 font-bold text-xs rounded-lg transition-all focus:outline-none cursor-pointer ${
              role === 'customer' ? 'bg-white shadow-sm text-[#006e2f]' : 'text-gray-500'
            }`}
          >
            Register as Customer
          </button>
          <button 
            type="button"
            onClick={() => setRole('store')}
            className={`flex-1 py-1.5 font-bold text-xs rounded-lg transition-all focus:outline-none cursor-pointer ${
              role === 'store' ? 'bg-white shadow-sm text-[#006e2f]' : 'text-gray-500'
            }`}
          >
            Register as Store Owner
          </button>
        </div>

        {/* Form elements */}
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          
          <div>
            <label className="block text-gray-600 text-[11px] font-bold uppercase tracking-wider mb-1 pl-1">
              Full Name / Store Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-405 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={role === 'store' ? "e.g., Aggarwal Daily Store" : "e.g., Jennifer Aniston"}
                required
                className="w-full h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006e2f] focus:bg-white text-xs sm:text-sm transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-[11px] font-bold uppercase tracking-wider mb-1 pl-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jenny.doe@example.com"
                required
                className="w-full h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006e2f] focus:bg-white text-xs sm:text-sm transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-[11px] font-bold uppercase tracking-wider mb-1 pl-1">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 99999 55555"
                required
                className="w-full h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006e2f] focus:bg-white text-xs sm:text-sm transition-all"
              />
            </div>
          </div>

          {role === 'store' && (
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[10px] sm:text-xs text-amber-800 leading-snug">
              <span className="font-bold block mb-0.5">Approval Procedure:</span>
              Registering a Store Partner requires Verification from KiranaMart Headquarters (Admin panel) before active stock-listings display online.
            </div>
          )}

          <div>
            <label className="block text-gray-600 text-[11px] font-bold uppercase tracking-wider mb-1 pl-1">
              Set Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                required
                minLength={6}
                className="w-full h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006e2f] focus:bg-white text-xs sm:text-sm transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full h-11 bg-[#006e2f] hover:bg-[#004b1e] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md mt-6 cursor-pointer"
          >
            Create Account <ArrowRight className="w-4 h-4" />
          </button>

        </form>

        <div className="text-center mt-5 pt-3 border-t border-gray-100 text-xs text-gray-500">
          Already registered?{' '}
          <button 
            onClick={onBackToLogin}
            type="button" 
            className="text-[#006e2f] font-bold hover:underline focus:outline-none"
          >
            Sign In here
          </button>
        </div>

      </div>
    </div>
  );
};
