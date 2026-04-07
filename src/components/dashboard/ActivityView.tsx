import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Shield, Zap, Server, Database, Lock, Globe, HardDrive } from 'lucide-react';

interface LogEntry {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'system';
  message: string;
  source: string;
}

export function ActivityView() {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const sources = ['Production', 'Staging', 'API_Auth', 'Cluster_Main', 'Storage_S3'];
  const messages = [
    'Handshake established with load balancer',
    'Updated Vector Search indexing service',
    'PostgreSQL replication lag: 12ms',
    'SSL certificate renewal complete',
    'Optimized gRPC throughput for node v12',
    'Database migration 042 applied',
    'Automated cleanup routine: Success',
    'Model serving endpoint updated'
  ];

  useEffect(() => {
    // Initial logs
    const initialLogs: LogEntry[] = Array.from({ length: 12 }).map((_, i) => ({
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(Date.now() - i * 50000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      type: i % 5 === 0 ? 'success' : 'info',
      message: messages[Math.floor(Math.random() * messages.length)],
      source: sources[Math.floor(Math.random() * sources.length)]
    }));
    setLogs(initialLogs);

    // Dynamic log generator
    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        type: Math.random() > 0.8 ? 'success' : 'info',
        message: messages[Math.floor(Math.random() * messages.length)],
        source: sources[Math.floor(Math.random() * sources.length)]
      };
      setLogs(prev => [newLog, ...prev.slice(0, 14)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 pb-12 h-full flex flex-col overflow-x-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">System Logs</h1>
          <p className="text-slate-500 text-sm font-medium">Real-time operational monitoring for production and staging environments.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 border border-slate-800 rounded-lg bg-slate-900/40 flex items-center gap-4">
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active nodes</span>
                <span className="text-xs font-bold text-white">42 / 42 ONLINE</span>
             </div>
             <Activity size={14} className="text-slate-600" />
          </div>
        </div>
      </div>

      <div className="flex-grow dashboard-panel rounded-xl overflow-hidden flex flex-col relative">
         {/* Log Table Header */}
         <div className="flex items-center px-8 py-4 bg-slate-900/60 border-b border-slate-800/60 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <span className="w-24">TIMESTAMP</span>
            <span className="w-32">SOURCE</span>
            <span className="flex-grow">MESSAGE</span>
            <span className="w-20 text-right">STATUS</span>
         </div>

         {/* Log Entries */}
         <div className="flex-grow overflow-y-auto custom-scroll p-4 space-y-1">
            <AnimatePresence initial={false}>
              {logs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center px-4 py-3 rounded hover:bg-white/5 group transition-colors text-[11px] font-medium"
                >
                  <span className="w-24 text-slate-600">{log.timestamp}</span>
                  <span className="w-32 text-slate-400">[{log.source.toUpperCase()}]</span>
                  <span className="flex-grow text-slate-300">{log.message}</span>
                  <span className="w-20 text-right">
                     <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${log.type === 'success' ? 'bg-slate-800 text-slate-400' : 'bg-slate-800/40 text-slate-500'}`}>
                        {log.type === 'success' ? 'READY' : 'INFO'}
                     </span>
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
         </div>
      </div>

      {/* System Status Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
           { label: 'Cluster Healthy', icon: Server, color: 'text-slate-500' },
           { label: 'Cloud Secured', icon: Lock, color: 'text-slate-500' },
           { label: 'Compute Peak', icon: Zap, color: 'text-slate-500' },
           { label: 'Global Edge', icon: Globe, color: 'text-slate-500' }
         ].map((stat, i) => (
           <div key={i} className="dashboard-card p-5 rounded-lg flex items-center gap-4">
              <stat.icon size={16} className={stat.color} />
              <p className="text-[11px] font-bold text-white uppercase tracking-tight">{stat.label}</p>
           </div>
         ))}
      </div>
    </div>
  );
}

const BrainCircuit = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4.5V4" />
    <path d="M12 20v-.5" />
    <path d="M16 8V6" />
    <path d="M16 18v-2" />
    <path d="M20 12h.5" />
    <path d="M3.5 12H4" />
    <path d="M8 8V6" />
    <path d="M8 18v-2" />
    <path d="M4.5 16.5 5 16" />
    <path d="M4.5 7.5 5 8" />
    <path d="M19.5 16.5 19 16" />
    <path d="M19.5 7.5 19 8" />
    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  </svg>
);
