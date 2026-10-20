import { Outlet, Link } from 'react-router-dom';
import { Activity, Menu } from 'lucide-react';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="glass-panel sticky top-4 mx-4 md:mx-8 z-50 px-6 py-4 flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="btn-icon" style={{ background: 'var(--primary-blue-light)', color: 'var(--primary-blue)' }}>
            <Activity size={24} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl tracking-tight">
            Medi<span className="text-gradient">Nova AI</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-primary-blue">Home</Link>
          <a href="#features" className="font-medium text-muted hover:text-primary-blue transition-colors">Features</a>
          <a href="#about" className="font-medium text-muted hover:text-primary-blue transition-colors">About</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/auth" className="btn btn-outline">Log in</Link>
          <Link to="/auth" className="btn btn-primary">Sign up</Link>
        </div>

        <button className="md:hidden btn-icon btn-outline border-none">
          <Menu size={24} />
        </button>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-12 py-8 text-center text-muted text-sm border-t border-[var(--border-color)]">
        <div className="container">
          <p>© {new Date().getFullYear()} MediNova AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
