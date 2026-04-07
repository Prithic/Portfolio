import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Code2, 
  Globe, 
  Layers, 
  Terminal,
  Cpu,
  Database,
  History
} from 'lucide-react';

export function OverviewView() {
  const stats = [
    { label: 'Core Projects', value: '12+', icon: Layers, color: 'text-slate-400' },
    { label: 'Tech Stack', value: '24', icon: Cpu, color: 'text-slate-400' },
    { label: 'Architecture', value: 'Dist.', icon: Database, color: 'text-slate-400' },
    { label: 'Status', value: 'Available', icon: Globe, color: 'text-slate-400' },
  ];

  return (
    <div className="space-y-8 pb-12 overflow-x-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
            Overview
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            AI Systems Engineer focused on high-performance architecture and deep learning.
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="dashboard-card p-5 rounded-lg"
          >
            <div className="flex items-center justify-between mb-3 text-slate-500 font-medium tracking-tight">
              <span className="text-[10px] uppercase">{stat.label}</span>
              <stat.icon size={14} className="opacity-40" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile/Experience Summary */}
        <div className="lg:col-span-2 dashboard-panel p-8 rounded-xl">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-slate-800 text-white">
                <BarChart3 size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">Profile Summary</h3>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              I specialize in developing scalable AI infrastructures and low-latency systems. 
              My expertise covers the full lifecycle of distributed applications, from 
              conceptualizing system architecture to production-grade deployment across 
              heterogeneous environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-950/40 border border-slate-800/40 rounded-lg">
                <h4 className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-2">
                  <Code2 size={12} className="text-slate-500" />
                  Engineering Logic
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">Built high-performance RAG pipelines and vector database integrations.</p>
              </div>
              <div className="p-4 bg-slate-950/40 border border-slate-800/40 rounded-lg">
                <h4 className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-2">
                  <Terminal size={12} className="text-slate-500" />
                  Automation Systems
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">Implemented CI/CD workflows for large-scale ML model orchestration.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="dashboard-card p-6 rounded-xl flex flex-col">
          <div className="flex items-center justify-between mb-6">
             <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
               <History size={14} className="text-slate-500" />
               Recent Activity
             </h4>
          </div>
          
          <div className="space-y-4 flex-grow text-[11px]">
             {[
               { date: 'Just now', action: 'Deployed Vector Search', status: 'prod' },
               { date: '2h ago', action: 'Updated RAG Pipeline', status: 'main' },
               { date: '1d ago', action: 'System Audit Complete', status: 'stable' },
               { date: '2d ago', action: 'Auth Module Refactor', status: 'main' },
               { date: '3d ago', action: 'API v2.4 Integration', status: 'stable' },
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-between border-b border-slate-800/40 pb-2.5 last:border-0">
                  <div className="flex flex-col">
                    <span className="text-white font-medium">{item.action}</span>
                    <span className="text-slate-500 text-[9px]">{item.date}</span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[9px] font-mono">
                    {item.status}
                  </span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
