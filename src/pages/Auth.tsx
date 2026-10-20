import React, { useState } from 'react';
import { User, Stethoscope, Lock, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [role, setRole] = useState<'patient' | 'doctor' | 'admin'>('patient');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate based on role
    if (role === 'patient') navigate('/patient-dashboard');
    if (role === 'doctor') navigate('/doctor-dashboard');
    if (role === 'admin') navigate('/admin-dashboard');
  };

  return (
    <div className="container max-w-6xl mx-auto py-12 flex items-center justify-center min-h-[80vh] animate-fade-in">
      <div className="glass-panel w-full max-w-4xl grid md:grid-cols-2 overflow-hidden shadow-2xl p-0 relative border-[rgba(255,255,255,0.8)]">
        
        {/* Left Side - Info */}
        <div className="bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] p-12 text-white flex flex-col justify-between hidden md:flex relative overflow-hidden">
          {/* Background Decorative */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Welcome to MediNova AI</h2>
            <p className="text-white/80 mb-8">Access your AI-powered healthcare ecosystem.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Patient Portal</h4>
                  <p className="text-sm text-white/70">Manage health records & appointments</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Doctor Portal</h4>
                  <p className="text-sm text-white/70">AI diagnosis support & patient timelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 bg-white/50 backdrop-blur-md">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p className="text-muted">Please enter your details to continue.</p>
          </div>

          {/* Role Selection */}
          <div className="flex bg-[var(--primary-blue-light)] p-1 rounded-xl mb-8">
            <button
              onClick={() => setRole('patient')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                role === 'patient' ? 'bg-white text-[var(--primary-blue)] shadow-sm' : 'text-muted hover:text-[var(--primary-blue)]'
              }`}
            >
              Patient
            </button>
            <button
              onClick={() => setRole('doctor')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1 ${
                role === 'doctor' ? 'bg-white text-[var(--primary-blue)] shadow-sm' : 'text-muted hover:text-[var(--primary-blue)]'
              }`}
            >
              Doctor
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1 ${
                role === 'admin' ? 'bg-white text-[var(--primary-blue)] shadow-sm' : 'text-muted hover:text-[var(--primary-blue)]'
              }`}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-group">
                <label>Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                  <input type="text" className="input-field pl-10" placeholder="John Doe" required />
                </div>
              </div>
            )}

            <div className="input-group">
              <label>Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                <input type="email" className="input-field pl-10" placeholder="hello@example.com" required />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                <input type="password" className="input-field pl-10" placeholder="••••••••" required />
              </div>
            </div>

            {isLogin && (
              <div className="text-right mb-6">
                <a href="#" className="text-sm font-medium text-[var(--primary-blue)]">Forgot Password?</a>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-full py-3 mt-4">
              {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <span className="text-muted">{isLogin ? "Don't have an account?" : "Already have an account?"}</span>{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-[var(--primary-blue)] hover:underline"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
