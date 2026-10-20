import { ArrowRight, Activity, Shield, Clock, Brain, Stethoscope, Video, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="container animate-fade-in">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-[var(--primary-blue)]/20">
          <span className="badge badge-blue">New</span>
          <span className="text-sm font-medium">Introducing AI Symptom Checker 2.0</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Healthcare of the Future, <br className="hidden md:block" />
          Powered by <span className="text-gradient">AI</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
          Experience seamless medical care with our 24/7 Virtual AI Assistant, smart health tracking, and instant appointment booking.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/auth" className="btn btn-primary w-full sm:w-auto text-lg px-8 py-4">
            Get Started <ArrowRight size={20} />
          </Link>
          <Link to="/auth" className="btn btn-secondary w-full sm:w-auto text-lg px-8 py-4">
            For Doctors
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Care at Your Fingertips</h2>
          <p className="text-muted max-w-xl mx-auto">Our advanced AI models are trained on millions of medical records to provide accurate insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-card p-8">
            <div className="w-14 h-14 rounded-2xl bg-[var(--primary-blue-light)] text-[var(--primary-blue)] flex items-center justify-center mb-6">
              <Brain size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Symptom Checker</h3>
            <p className="text-muted mb-6">Enter your symptoms and get instant predictive disease categories with urgency scores.</p>
            <Link to="/auth" className="inline-flex items-center gap-1 font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-blue-dark)] transition-colors">
              Try it now <ChevronRight size={16} />
            </Link>
          </div>

          {/* Feature 2 */}
          <div className="glass-card p-8 delay-100">
            <div className="w-14 h-14 rounded-2xl bg-[var(--soft-green-light)] text-[var(--soft-green-dark)] flex items-center justify-center mb-6">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Health Profile</h3>
            <p className="text-muted mb-6">Upload reports and let AI extract vital values. Track your trends on a personalized dashboard.</p>
            <Link to="/auth" className="inline-flex items-center gap-1 font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-blue-dark)] transition-colors">
              View demo <ChevronRight size={16} />
            </Link>
          </div>

          {/* Feature 3 */}
          <div className="glass-card p-8 delay-200">
            <div className="w-14 h-14 rounded-2xl bg-[#FEE2E2] text-[#B91C1C] flex items-center justify-center mb-6">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Emergency Mode</h3>
            <p className="text-muted mb-6">One-tap SOS. Alert family and nearest hospitals with live location and AI first-aid guidance.</p>
            <Link to="/auth" className="inline-flex items-center gap-1 font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-blue-dark)] transition-colors">
              Learn more <ChevronRight size={16} />
            </Link>
          </div>

          {/* Feature 4 */}
          <div className="glass-card p-8">
            <div className="w-14 h-14 rounded-2xl bg-[#F3E8FF] text-[#7E22CE] flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Virtual Assistant</h3>
            <p className="text-muted mb-6">Voice and text-enabled AI assistant for medicine reminders and mental health tracking.</p>
          </div>

          {/* Feature 5 */}
          <div className="glass-card p-8 delay-100">
            <div className="w-14 h-14 rounded-2xl bg-[#FFEDD5] text-[#C2410C] flex items-center justify-center mb-6">
              <Video size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Virtual Consultations</h3>
            <p className="text-muted mb-6">Book appointments and consult with top doctors via secure high-quality video calls.</p>
          </div>

          {/* Feature 6 */}
          <div className="glass-card p-8 delay-200">
            <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center mb-6">
              <Stethoscope size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Doctor's AI Copilot</h3>
            <p className="text-muted mb-6">Predictive risk alerts, diagnosis support, and automated prescription generation.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mt-12 mb-8">
        <div className="glass-panel p-12 text-center bg-gradient-to-br from-[var(--primary-blue)]/5 to-[var(--soft-green)]/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-blue)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--soft-green)]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to take control of your health?</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8 relative z-10">
            Join thousands of users who have transformed their healthcare experience with MediNova AI.
          </p>
          <Link to="/auth" className="btn btn-primary text-lg px-8 py-4 relative z-10">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
