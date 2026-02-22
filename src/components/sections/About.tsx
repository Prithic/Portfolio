import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Target, Zap, Shield } from 'lucide-react';

export function About() {
    const principles = [
        {
            icon: <Target className="w-6 h-6 text-blue-400" />,
            title: "Depth over Noise",
            description: "Focusing on core principles and deep understanding rather than superficial trends."
        },
        {
            icon: <Zap className="w-6 h-6 text-purple-400" />,
            title: "Discipline over Motivation",
            description: "Relying on consistent action and structured routine to drive long-term progress."
        },
        {
            icon: <Shield className="w-6 h-6 text-blue-400" />,
            title: "Compounding Growth",
            description: "Valuing continuous learning and incremental improvements that yield massive results over time."
        }
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                        Driven by <span className="text-gradient">Purpose.</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                            <p>
                                As a First-Generation College Student, I am driven by a deep sense of responsibility
                                to uplift my family and contribute meaningfully to society. This shapes my discipline,
                                long-term thinking, and commitment to consistent execution.
                            </p>
                            <p>
                                My ultimate goal is to build a high-impact career in technology, achieve financial
                                stability, and contribute to national-level initiatives through public service.
                            </p>
                        </div>

                        <GlassCard className="relative p-8">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
                            <h3 className="text-xl font-semibold text-white mb-6 relative z-10">Core Philosophy</h3>
                            <div className="space-y-6 relative z-10">
                                {principles.map((principle, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">{principle.icon}</div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">{principle.title}</h4>
                                            <p className="text-slate-400 text-sm">{principle.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
