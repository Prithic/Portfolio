import { motion } from 'framer-motion';
import { GlitchText } from '../ui/GlitchText';
import { GlassCard } from '../ui/GlassCard';

const skills = [
    {
        category: 'Core Programming',
        items: [
            { name: 'Python', level: 95 },
            { name: 'Java', level: 85 },
            { name: 'App Development', level: 75 },
            { name: 'TypeScript / React', level: 80 }
        ]
    },
    {
        category: 'Emerging Tech & AI',
        items: [
            { name: 'Machine Learning', level: 85 },
            { name: 'Cybersecurity / Hacking', level: 75 },
            { name: 'Space Science Concepts', level: 80 },
            { name: 'Advanced Tech Integrations', level: 85 }
        ]
    },
    {
        category: 'Physical Mastery',
        items: [
            { name: 'Calisthenics (Strength)', level: 90 },
            { name: 'Posture & Mechanics', level: 85 },
            { name: 'Reflex Optimization', level: 80 },
            { name: 'Peak Athletic Performance', level: 85 }
        ]
    },
    {
        category: 'Mental Architecture',
        items: [
            { name: 'Discipline & Consistency', level: 95 },
            { name: 'Mentalism', level: 80 },
            { name: 'High-Pressure Management', level: 90 },
            { name: 'Strategic Profiling (ROI)', level: 95 }
        ]
    }
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
                            Technical <GlitchText text="Arsenal" />
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

                                    <div className="space-y-5">
                                        {skillGroup.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="group">
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-slate-300 font-medium group-hover:text-blue-400 transition-colors">
                                                        {item.name}
                                                    </span>
                                                    <span className="text-slate-500 font-mono text-xs group-hover:text-purple-400 transition-colors">
                                                        {item.level}%
                                                    </span>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-950/50 rounded-full overflow-hidden relative border border-white/5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, delay: 0.3 + (itemIdx * 0.1), ease: "easeOut" }}
                                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-500 rounded-full overflow-hidden"
                                                    >
                                                        {/* Inner cyber pulse effect */}
                                                        <motion.div
                                                            animate={{ x: ["-100%", "200%"] }}
                                                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                                            className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div >
        </section >
    );
}
