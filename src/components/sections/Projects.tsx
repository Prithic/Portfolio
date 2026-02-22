import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "CivicShield AI",
        description: "An advanced civic dashboard utilizing machine learning for predictive analysis on water quality and disease trends. Features interactive mapping and an AI persona for reporting.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["React", "Python", "Machine Learning", "Map API"],
        github: "#",
        live: "#"
    },
    {
        title: "Proximity Data Visualization",
        description: "An interactive radial graph component visualizing data based on distance rings. Features fluid animations to reveal contamination spread dynamically.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["TypeScript", "Framer Motion", "Data Viz"],
        github: "#",
        live: "#"
    },
    {
        title: "Mediapipe Gesture Controller",
        description: "A Python-based application translating hand gestures into system commands. Ported precise mappings to control media players using pinch and open-hand interactions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["Python", "Mediapipe", "Computer Vision"],
        github: "#",
        live: "#"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            A selection of recent work highlighting problem-solving, AI integration, and fluid frontend development.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.15, type: "spring", stiffness: 100, damping: 20 }}
                                className="h-full"
                            >
                                <GlassCard className="h-full flex flex-col p-0 overflow-hidden group">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, tagIdx) => (
                                                <span key={tagIdx} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                                            <a href={project.live} className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                            <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                                <Github size={16} /> Source
                                            </a>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
