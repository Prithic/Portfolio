import { 
  ExternalLink, 
  Github, 
  ChevronRight, 
  Database, 
  Cpu,
  Layers,
  Globe
} from 'lucide-react';

const projects = [
  {
    id: 'vector-search',
    title: 'VectorSearch Engine',
    category: 'Infrastructure',
    description: 'High-performance retrieval system built for large-scale unstructured data search. Optimized for low-latency similarity matching using HNSW algorithms.',
    tech: ['C++', 'Python', 'Redis', 'gRPC'],
    metrics: { latency: '< 50ms', throughput: '10k qps' },
    icon: Database
  },
  {
    id: 'autodeploy-pipeline',
    title: 'AutoDeploy Pipeline',
    category: 'DevOps',
    description: 'Automated CI/CD orchestration framework for machine learning models. Handles versioning, canary deployments, and automated rollbacks.',
    tech: ['Go', 'Kubernetes', 'Docker', 'Terraform'],
    metrics: { reliability: '99.9%', efficiency: '+40%' },
    icon: Cpu
  },
  {
    id: 'rag-orchestrator',
    title: 'RAG Orchestrator',
    category: 'AI Systems',
    description: 'Context-aware LLM application framework with advanced chunking and reranking capabilities. Integrated with major vector stores.',
    tech: ['TypeScript', 'LangChain', 'OpenAI', 'Pinecone'],
    metrics: { accuracy: '94%', citations: 'Verified' },
    icon: Layers
  },
  {
    id: 'dist-crawler',
    title: 'Distributed Crawler',
    category: 'Data Engineering',
    description: 'Scalable web data extraction system designed for high-throughput scraping and real-time processing of unstructured web content.',
    tech: ['Python', 'Kafka', 'PostgreSQL', 'Scrapy'],
    metrics: { scale: '1M+ pages/day', uptime: '99.8%' },
    icon: Globe
  }
];

export function ProjectView() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Projects</h1>
          <p className="text-slate-500 text-sm font-medium">Selected engineering case studies and technical implementations.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dashboard-panel p-8 rounded-xl group transition-all duration-300 hover:border-slate-700"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white transition-colors">
                <project.icon size={20} />
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-500 hover:text-white transition-colors">
                  <Github size={18} />
                </button>
                <button className="p-2 text-slate-500 hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 tracking-widest mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex gap-4">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-[9px] uppercase text-slate-600 font-bold tracking-tighter">{key}</span>
                      <span className="text-xs font-mono text-slate-300">{val}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-white transition-colors">
                  Case Study <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
