
import { 
  LayoutDashboard, 
  Terminal as TerminalIcon, 
  Briefcase, 
  Cpu, 
  Target, 
  Activity,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export type TabId = 'overview' | 'projects' | 'skills' | 'mission' | 'terminal' | 'activity';

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'skills', label: 'Tech Stack', icon: Cpu },
  { id: 'mission', label: 'Mission', icon: Target },
  { id: 'terminal', label: 'AI Console', icon: TerminalIcon },
  { id: 'activity', label: 'System Logs', icon: Activity },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-60 h-screen bg-slate-950 border-r border-slate-800/60 flex flex-col z-50">
      {/* Profile Header */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
            <span className="text-slate-950 font-bold text-sm">P</span>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-sm font-semibold text-white truncate">Prithic P</h2>
            <p className="text-[10px] text-slate-500 font-medium truncate">Systems Engineer</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-grow px-3 py-4 space-y-0.5 overflow-y-auto custom-scroll">
        <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest px-3 mb-4">Navigation</p>
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as TabId)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-150 group relative ${
                isActive 
                  ? 'bg-white/5 text-white' 
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-400 transition-colors'} />
              <span className="text-[13px] font-medium">{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute left-0 w-0.5 h-3 bg-white rounded-r-full"
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800/40">
        <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600 font-medium">
          <span>{new Date().getFullYear()}</span>
          <span>•</span>
          <span>Portfolio</span>
        </div>
      </div>
    </aside>
);
}
