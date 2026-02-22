import { motion } from 'framer-motion';
import { GlitchText } from '../ui/GlitchText';
import { GlassCard } from '../ui/GlassCard';
import { Code2, Cpu } from 'lucide-react';

const experiences = [
    {
        role: "Nation-Level Impact Initiatives",
        company: "Vision 2050 & Community",
        period: "Ongoing",
        icon: <Cpu className="w-8 h-8 text-green-500" />,
        color: "from-green-500/20 to-transparent",
        description: "Actively participating in India 2050 vision discussions. Initiating real-world impact projects, starting with the purification of rivers in Tirupur."
    },
    {
        role: "Strategic Global Profiling",
        company: "MEXT & International Olympiads",
        period: "Ongoing",
        icon: <Code2 className="w-8 h-8 text-blue-500" />,
        color: "from-blue-500/20 to-transparent",
        description: "Executing a rigorous profile-building operation for fully-funded global migration routes (e.g., MEXT Japan), integrating hackathons, Olympiads, and high-ROI certifications."
    },
    {
        role: "Developer Program Member",
        company: "NVIDIA & AMD",
        period: "January 2026 - Present",
        icon: <Code2 className="w-8 h-8 text-red-500" />,
        color: "from-red-500/20 to-transparent",
        description: "Engaging with cutting-edge AI technologies, high-performance computing, and leveraging deep learning resources to build intelligent applications."
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Professional <GlitchText text="Experience" />
                        </h2>
                        <p className="text-slate-400">Programs and communities where I actively contribute.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.2, type: "spring", stiffness: 100, damping: 20 }}
                                whileHover={{ y: -10 }}
                                className="h-full"
                            >
                                <GlassCard className={`h-full relative overflow-hidden group`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                                {exp.icon}
                                            </div>
                                            <span className="text-xs font-medium px-3 py-1 rounded-full border border-slate-700 text-slate-300">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-lg text-blue-400 mb-4">{exp.company}</h4>

                                        <p className="text-slate-400 leading-relaxed mt-auto">
                                            {exp.description}
                                        </p>
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
