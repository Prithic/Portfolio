import { motion } from 'framer-motion';
import { 
  Target, 
  Mountain, 
  Flag, 
  Globe2, 
  Workflow,
  Compass,
  FileText
} from 'lucide-react';

export function MissionView() {
  const objectives = [
     {
       id: "obj-01",
       title: "Engineering Excellence",
       description: "Developing scalable, high-performance systems with a focus on long-term maintainability and technical robustness.",
       status: "Critical",
       impact: "High",
       icon: Mountain
     },
     {
       id: "obj-02",
       title: "Strategic AI Impact",
       description: "Architecting AI-driven solutions that address real-world challenges in data infrastructure and automated reasoning.",
       status: "Active",
       impact: "Strategic",
       icon: Target
     },
     {
       id: "obj-03",
       title: "Operational Mastery",
       description: "Maintaining peak efficiency through disciplined engineering practices and modern DevOps automation for continuous delivery.",
       status: "Continuous",
       impact: "Ongoing",
       icon: Flag
     }
  ];

  return (
    <div className="space-y-12 pb-12 overflow-x-hidden">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Mission & Principles</h1>
        <p className="text-slate-500 text-sm font-medium">Core drivers and technical philosophy behind my engineering practice.</p>
      </div>

      {/* Mission Statement Card */}
      <div className="dashboard-panel p-10 rounded-xl relative overflow-hidden border-slate-800">
         <div className="relative z-10 max-w-4xl space-y-6">
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-3 py-1 bg-slate-900 border border-slate-800 rounded">Mission Statement</span>
            <h3 className="text-4xl font-bold text-white tracking-tight leading-tight">
              Scaling Impact through <span className="text-slate-400">Robust Engineering</span>.
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed font-normal max-w-2xl">
              "I focus on delivering high-leverage results through disciplined architectures. 
              My goal is to establish a new standard for modern engineering by building systems 
              that solve foundational problems with precision and scalability."
            </p>
         </div>
      </div>

      {/* Strategic Objectives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {objectives.map((obj) => (
          <div
            key={obj.id}
            className="dashboard-card p-8 rounded-xl border border-slate-800/60 flex flex-col group"
          >
            <div className="p-3 rounded bg-slate-900 border border-slate-800 text-slate-500 group-hover:text-white transition-colors w-fit mb-6">
               <obj.icon size={24} />
            </div>
            
            <div className="flex items-center justify-between mb-4">
               <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{obj.id}</span>
               <span className="text-[9px] font-bold text-slate-500 px-2 py-0.5 bg-slate-800 rounded uppercase">{obj.status}</span>
            </div>
            
            <h4 className="text-lg font-bold text-white mb-3 tracking-tight">{obj.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">{obj.description}</p>
            
            <div className="mt-auto pt-6 border-t border-slate-800/40 flex items-center justify-between">
               <span className="text-[10px] font-bold text-slate-600 uppercase">Impact</span>
               <span className="text-xs font-bold text-slate-400">{obj.impact}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Principles Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="dashboard-card p-8 rounded-xl border-slate-800 flex items-start gap-6">
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-500 shrink-0">
               <Workflow size={20} />
            </div>
            <div className="space-y-2">
               <h5 className="text-xs font-bold text-white uppercase tracking-widest">Precision Architecture</h5>
               <p className="text-xs text-slate-500 leading-relaxed">Focus on measurable success and ROI in technical decision-making. Every module must provide significant value relative to its development complexity.</p>
            </div>
         </div>
         <div className="dashboard-card p-8 rounded-xl border-slate-800 flex items-start gap-6">
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-500 shrink-0">
               <Compass size={20} />
            </div>
            <div className="space-y-2">
               <h5 className="text-xs font-bold text-white uppercase tracking-widest">Ethical Ambition</h5>
               <p className="text-xs text-slate-500 leading-relaxed">Building for long-term legacy and foundational impact. Using technical leadership to steer complex projects toward sustainable and positive outcomes.</p>
            </div>
         </div>
      </div>
    </div>
  );
}
