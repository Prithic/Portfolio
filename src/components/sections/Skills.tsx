import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
    { category: 'Core CS', items: ['Data Structures', 'Algorithms', 'Mathematics', 'Object-Oriented Programming'] },
    { category: 'AI & ML', items: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'PyTorch/TensorFlow Basics'] },
    { category: 'Tools & DevOps', items: ['Git', 'Linux', 'VS Code', 'Jupyter Notebooks'] }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Technical <span className="text-gradient">Arsenal</span>
                        </h2>
                        <p className="text-slate-400">Core competencies and continuous focus areas.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skillGroup, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, type: "spring", stiffness: 120, damping: 20 }}
                                whileHover={{ y: -5 }}
                            >
                                <GlassCard className="h-full">
                                    <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
                                        {skillGroup.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {skillGroup.items.map((item, itemIdx) => (
                                            <span
                                                key={itemIdx}
                                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white transition-all duration-300 cursor-default"
                                            >
                                                {item}
                                            </span>
                                        ))}
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
