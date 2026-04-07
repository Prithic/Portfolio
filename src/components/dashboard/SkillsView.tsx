import { motion } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Terminal as TerminalIcon, 
  Server,
  Zap,
  CheckCircle2
} from 'lucide-react';

const skillCategories = [
  {
    title: "Intelligence & Systems",
    icon: Brain,
    color: "text-blue-400",
    skills: [
      { name: "TensorFlow", level: 85, status: "Optimized" },
      { name: "PyTorch", level: 78, status: "Syncing" },
      { name: "Scikit-Learn", level: 92, status: "Stable" },
      { name: "FastAPI", level: 88, status: "Low Latency" },
      { name: "LangChain", level: 75, status: "Integrating" }
    ]
  },
  {
    title: "Core Engineering",
    icon: Code2,
    color: "text-purple-400",
    skills: [
      { name: "Python", level: 95, status: "Mastered" },
      { name: "TypeScript", level: 90, status: "Production" },
      { name: "C++", level: 72, status: "Low Level" },
      { name: "SQL", level: 88, status: "Optimal" },
      { name: "Java", level: 80, status: "Legacy" }
    ]
  },
  {
     title: "Web Architecture",
     icon: TerminalIcon,
     color: "text-green-400",
     skills: [
       { name: "React / Next.js", level: 94, status: "Advanced" },
       { name: "Tailwind CSS", level: 98, status: "Peak" },
       { name: "Node.js", level: 85, status: "Backend" },
       { name: "Redux / Zustand", level: 82, status: "State" }
     ]
  },
  {
    title: "Systems & Infrastructure",
    icon: Server,
    color: "text-yellow-400",
    skills: [
      { name: "Docker", level: 82, status: "Containerized" },
      { name: "AWS / Google Cloud", level: 75, status: "Scaling" },
      { name: "Linux Systems", level: 88, status: "Shell Access" },
      { name: "CI/CD Actions", level: 80, status: "Automated" }
    ]
  }
];

export function SkillsView() {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Technical Expertise</h1>
        <p className="text-slate-500 text-sm font-medium">Quantified competency across core engineering domains.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="dashboard-panel p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400">
                <category.icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-[11px] font-medium">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-slate-500 font-mono">{skill.level}</span>
                  </div>
                  <div className="h-1 bg-slate-100/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-500 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
