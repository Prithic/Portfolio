import { useState } from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import type { TabId } from './components/layout/Sidebar';
import { OverviewView } from './components/dashboard/OverviewView';
import { ProjectView } from './components/dashboard/ProjectView';
import { SkillsView } from './components/dashboard/SkillsView';
import { MissionView } from './components/dashboard/MissionView';
import { AITerminal } from './components/dashboard/AITerminal';
import { ActivityView } from './components/dashboard/ActivityView';
import { CursorGlow } from './components/ui/CursorGlow';
import { FluidBackground } from './components/ui/FluidBackground';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewView />;
      case 'projects':
        return <ProjectView />;
      case 'skills':
        return <SkillsView />;
      case 'mission':
        return <MissionView />;
      case 'terminal':
        return <AITerminal onNavigate={(tab) => setActiveTab(tab as TabId)} />;
      case 'activity':
        return <ActivityView />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-slate-800 selection:text-white">
      <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderContent()}
      </DashboardLayout>
    </div>
  );
}

export default App;
