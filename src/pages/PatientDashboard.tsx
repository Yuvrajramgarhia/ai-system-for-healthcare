import React, { useState } from 'react';
import { Plus, Clock, AlertTriangle, Calendar, MessageSquare, Bot, ArrowRight, Brain } from 'lucide-react';

const PatientDashboard = () => {
  const [symptom, setSymptom] = useState('');
  const [aiResult, setAiResult] = useState<{category: string, urgency: string, dept: string} | null>(null);

  const checkSymptoms = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptom) return;
    
    // Mock AI Response
    setTimeout(() => {
      setAiResult({
        category: 'Viral Infection / Seasonal Flu',
        urgency: 'Low',
        dept: 'General Medicine'
      });
    }, 1000);
  };

  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Hello, Sarah</h1>
          <p className="text-muted">Here is your health summary for today.</p>
        </div>
        <button className="btn btn-primary">
          <AlertTriangle size={18} /> Emergency SOS
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Main) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* AI Symptom Checker */}
          <div className="glass-card p-6 border-l-4 border-[var(--primary-blue)] relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-[var(--primary-blue)]/5 rounded-bl-full"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[var(--primary-blue-light)] text-[var(--primary-blue)]">
                <Brain size={24} />
              </div>
              <h2 className="text-xl font-bold">AI Symptom Checker</h2>
            </div>
            
            <form onSubmit={checkSymptoms} className="mb-4 relative z-10">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  className="input-field flex-1" 
                  placeholder="E.g., I have a headache, mild fever, and dry cough..." 
                />
                <button type="submit" className="btn btn-primary px-6">Check</button>
              </div>
            </form>

            {aiResult && (
              <div className="bg-white/60 p-4 rounded-xl border border-[var(--border-color)] animate-fade-in flex flex-col md:flex-row gap-4 justify-between items-center">
                <div>
                  <p className="text-sm text-muted">AI Prediction</p>
                  <p className="font-semibold text-lg">{aiResult.category}</p>
                </div>
                <div className="flex gap-3">
                  <span className={`badge ${aiResult.urgency === 'Low' ? 'badge-green' : 'badge-red'}`}>
                    Urgency: {aiResult.urgency}
                  </span>
                  <span className="badge badge-blue">
                    {aiResult.dept}
                  </span>
                </div>
                <button className="btn btn-outline text-sm py-1">Book Consult</button>
              </div>
            )}
          </div>

          {/* Vitals Overview */}
          <div>
            <h2 className="text-xl font-bold mb-4">Current Vitals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Heart Rate', value: '72 bpm', status: 'Normal', color: 'blue' },
                { label: 'Blood Pressure', value: '118/75', status: 'Optimal', color: 'green' },
                { label: 'Weight', value: '64 kg', status: 'Normal', color: 'purple' },
                { label: 'Sleep Score', value: '85', status: 'Good', color: 'yellow' },
              ].map((vital, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <p className="text-muted text-sm mb-1">{vital.label}</p>
                  <p className="text-2xl font-bold mb-2">{vital.value}</p>
                  <span className="text-xs font-semibold text-[var(--soft-green-dark)]">{vital.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upload & Smart Profile */}
          <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Smart Health Records</h2>
              <button className="btn btn-outline py-1.5 text-sm"><Plus size={16} /> Upload Report</button>
            </div>
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-white/40 rounded-lg transition-colors border border-transparent hover:border-[var(--border-color)]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--primary-blue-light)] text-[var(--primary-blue)] rounded text-sm">PDF</div>
                    <div>
                      <p className="font-semibold text-sm">Complete Blood Count</p>
                      <p className="text-xs text-muted">Uploaded Oct {12 + i}, 2023</p>
                    </div>
                  </div>
                  <span className="badge badge-green text-xs">AI Extracted</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-8">
          
          {/* Virtual AI Assistant Widget */}
          <div className="glass-card p-6 bg-gradient-to-b from-[var(--primary-blue)] to-[var(--primary-blue-dark)] text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Dr. Nova</h3>
                <p className="text-white/70 text-sm">24/7 AI Assistant</p>
              </div>
            </div>
            <p className="text-sm text-white/90 mb-4 line-clamp-2">"Hi Sarah, it's time for your Vitamin D supplement. How are you feeling today?"</p>
            <button className="w-full py-2 bg-white text-[var(--primary-blue)] rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-gray-50 transition-colors">
              <MessageSquare size={18} /> Open Chat
            </button>
          </div>

          {/* Upcoming Appointments */}
          <div className="glass-card p-6">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Calendar size={20} /> Appointments</h2>
            <div className="border border-[var(--border-color)] rounded-xl p-4 bg-white/50">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold">Dr. Emily Chen</p>
                  <p className="text-xs text-muted">Cardiologist</p>
                </div>
                <span className="badge badge-blue">Video</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted mt-4">
                <Clock size={14} /> Tomorrow, 10:00 AM
              </div>
            </div>
            <button className="w-full mt-4 text-sm font-medium text-[var(--primary-blue)] flex justify-center items-center gap-1">
              Book New <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
