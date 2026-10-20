import { BarChart3, Users, BedDouble, TrendingUp, AlertOctagon, Activity } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hospital Command Center</h1>
        <p className="text-muted">Real-time overview of hospital operations and AI predictions.</p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Patients', value: '1,248', change: '+12%', icon: Users, color: 'blue' },
          { title: 'Bed Occupancy', value: '84%', change: '-2%', icon: BedDouble, color: 'purple' },
          { title: 'Revenue (Today)', value: '$24.5k', change: '+8%', icon: TrendingUp, color: 'green' },
          { title: 'AI Resolved Cases', value: '456', change: '+24%', icon: Activity, color: 'yellow' },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-6 flex items-center justify-between">
            <div>
              <p className="text-muted text-sm font-medium mb-1">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className={`text-xs font-semibold mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} vs yesterday
              </p>
            </div>
            <div className={`p-3 rounded-xl bg-${stat.color}-100 text-${stat.color}-600 bg-opacity-50`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Predictive Analytics (Main Chart Area Placeholder) */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold flex items-center gap-2"><BarChart3 size={20} /> AI Outbreak Prediction</h2>
            <select className="input-field py-1 text-sm w-auto">
              <option>Next 7 Days</option>
              <option>Next 30 Days</option>
            </select>
          </div>
          
          <div className="h-64 flex flex-col justify-end gap-2 items-center w-full border-b border-l border-[var(--border-color)] px-4 pb-2 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue-light)]/50 to-transparent z-0"></div>
            <div className="w-full flex justify-between items-end h-full relative z-10 px-2 gap-4">
              {[40, 60, 45, 80, 110, 90, 130].map((h, i) => (
                <div key={i} className="w-full bg-gradient-to-t from-[var(--primary-blue)] to-[var(--primary-blue-light)] rounded-t-sm transition-all duration-500 hover:opacity-80" style={{ height: `${h}px` }}></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between w-full px-8 mt-2 text-xs text-muted">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
          <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-lg text-sm flex gap-2">
            <Activity size={16} className="mt-0.5" />
            <p><strong>AI Insight:</strong> 15% predicted increase in respiratory cases towards the weekend due to weather changes. Consider increasing pulmonology staff.</p>
          </div>
        </div>

        {/* Alerts & Operations */}
        <div className="space-y-6">
          <div className="glass-card p-6 border-t-4 border-[var(--alert-red)]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><AlertOctagon size={20} className="text-[var(--alert-red)]"/> Urgent Operations Alerts</h2>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                <p className="font-semibold text-sm text-red-800">ICU Capacity Critical</p>
                <p className="text-xs text-red-600 mt-1">Only 2 beds available in Ward A.</p>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <p className="font-semibold text-sm text-orange-800">Staff Shortage Predicted</p>
                <p className="text-xs text-orange-600 mt-1">ER night shift is understaffed by 2 nurses.</p>
                <button className="mt-2 text-xs font-bold text-orange-700 bg-orange-200 px-2 py-1 rounded">Auto-Schedule Backup</button>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-lg font-bold mb-4">Resource Allocation</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ventilators</span>
                  <span className="font-semibold">45 / 50</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[var(--primary-blue)] h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ambulances Deployed</span>
                  <span className="font-semibold">8 / 12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[var(--soft-green)] h-2 rounded-full" style={{ width: '66%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
