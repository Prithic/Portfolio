import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Settings } from 'lucide-react';
import { Sidebar } from './Sidebar';
import type { TabId } from './Sidebar';

interface DashboardLayoutProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  children: React.ReactNode;
}

export function DashboardLayout({ activeTab, setActiveTab, children }: DashboardLayoutProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getPageTitle = (tab: TabId) => {
    const titles: Record<TabId, string> = {
      overview: 'Overview',
      projects: 'Project Portfolio',
      skills: 'Technical Skills',
      mission: 'Strategic Mission',
      terminal: 'Command Line',
      activity: 'Activity Log'
    };
    return titles[tab];
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans selection:bg-white/10 overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Viewport */}
      <div className="flex-grow flex flex-col h-full bg-slate-950 relative">
        {/* Professional Header */}
        <header className="h-14 border-b border-slate-800/60 flex items-center justify-between px-8 bg-slate-950 z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
              <span>Main</span>
              <span className="text-slate-700">/</span>
              <span className="text-white">{getPageTitle(activeTab)}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500">
              <span>{currentTime.toLocaleDateString()}</span>
              <span className="text-slate-400">{currentTime.toLocaleTimeString()}</span>
            </div>
            
            <div className="h-3 w-px bg-slate-800" />
            
            <div className="flex items-center gap-2">
              <button className="p-1.5 text-slate-500 hover:text-white transition-colors" title="Notifications">
                <Bell size={16} />
              </button>
              <button className="p-1.5 text-slate-500 hover:text-white transition-colors" title="Settings">
                <Settings size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow relative overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
              className="flex-grow p-8 custom-scroll overflow-y-auto z-10"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
);
}
