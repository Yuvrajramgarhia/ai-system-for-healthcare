import { Activity, Bell, Calendar, ChevronRight, FileText, Search, AlertTriangle } from 'lucide-react';

const DoctorDashboard = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dr. Smith's Dashboard</h1>
          <p className="text-muted">You have 8 appointments scheduled for today.</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input type="text" className="input-field pl-10 w-full" placeholder="Search patient..." />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Sidebar: Patient List & Schedule */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-4">
            <h2 className="font-bold mb-4 flex items-center gap-2"><Calendar size={18} /> Today's Queue</h2>
            <div className="space-y-3">
              {[
                { name: 'Sarah Jenkins', time: '09:00 AM', status: 'Waiting' },
                { name: 'Michael Ross', time: '09:30 AM', status: 'In Progress', active: true },
                { name: 'Emma Watson', time: '10:00 AM', status: 'Scheduled' },
                { name: 'David Miller', time: '10:45 AM', status: 'Scheduled' },
              ].map((p, i) => (
                <div key={i} className={`p-3 rounded-lg border cursor-pointer transition-all ${p.active ? 'bg-[var(--primary-blue-light)] border-[var(--primary-blue)]' : 'bg-white/50 border-[var(--border-color)] hover:border-[var(--primary-blue)]'}`}>
                  <p className="font-semibold text-sm">{p.name}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-muted">{p.time}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${p.status === 'Waiting' ? 'bg-orange-100 text-orange-700' : p.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content: Patient Profile & AI Insights */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Active Patient Header */}
          <div className="glass-card p-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--soft-green)] flex items-center justify-center text-white text-xl font-bold">
                MR
              </div>
              <div>
                <h2 className="text-2xl font-bold">Michael Ross</h2>
                <p className="text-muted text-sm">34 yrs • Male • Blood: O+ • ID: #PT-8842</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-outline text-sm py-1.5"><FileText size={16} /> History</button>
              <button className="btn btn-primary text-sm py-1.5">Write Prescription</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Diagnosis Support */}
            <div className="glass-card p-6 border-t-4 border-[var(--accent-purple)]">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Activity size={20} className="text-[var(--accent-purple)]" /> 
                AI Diagnosis Copilot
              </h3>
              
              <div className="bg-[#F3E8FF] rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-[#7E22CE] mb-2">Based on latest symptoms and history:</p>
                <p className="font-bold text-[#581C87] text-lg">Potential: Type 2 Diabetes onset</p>
                <div className="mt-2 text-sm text-[#7E22CE]/80">
                  <p>• Elevated fasting glucose (115 mg/dL)</p>
                  <p>• BMI increase of 5% in 6 months</p>
                  <p>• Family history present</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted">Recommended Actions:</p>
                <button className="w-full text-left p-3 rounded-lg border border-[var(--border-color)] hover:border-[var(--primary-blue)] text-sm flex justify-between items-center">
                  Order HbA1c Test <ChevronRight size={16} />
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-[var(--border-color)] hover:border-[var(--primary-blue)] text-sm flex justify-between items-center">
                  Dietary Consultation <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Risk Alerts & Vitals */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Bell size={20} className="text-[var(--alert-red)]" /> 
                Risk Alerts
              </h3>
              
              <div className="bg-[#FEE2E2] border border-[#FCA5A5] rounded-lg p-4 flex gap-3 items-start mb-6">
                <AlertTriangle size={20} className="text-[#B91C1C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#991B1B] text-sm">High Blood Pressure Detected</p>
                  <p className="text-xs text-[#B91C1C] mt-1">Last reading 145/90 via synced smartwatch 2 hours ago.</p>
                </div>
              </div>

              <h3 className="font-bold text-sm text-muted mb-3">Latest Extracted Lab Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-2">
                  <span className="text-sm">Cholesterol (LDL)</span>
                  <span className="font-semibold text-sm text-[var(--alert-red)]">160 mg/dL ↑</span>
                </div>
                <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-2">
                  <span className="text-sm">Hemoglobin</span>
                  <span className="font-semibold text-sm text-[var(--soft-green-dark)]">14.5 g/dL ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorDashboard;
