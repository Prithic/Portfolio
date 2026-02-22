import { motion } from 'framer-motion';
import { GlitchText } from '../ui/GlitchText';
import { GlassCard } from '../ui/GlassCard';
import { Terminal } from '../ui/Terminal';
import { Target, Zap, Shield } from 'lucide-react';

export function About() {
    const principles = [
        {
            icon: <Target className="w-6 h-6 text-blue-400" />,
            title: "Maximum Leverage",
            description: "I am not chasing passion blindly. I seek the highest ROI on my time, effort, and intelligence."
        },
        {
            icon: <Zap className="w-6 h-6 text-purple-400" />,
            title: "Discipline > Motivation",
            description: "Rebuilding from the root. Relying on strict routine and physical/mental transformation, not fleeting motivation."
        },
        {
            icon: <Shield className="w-6 h-6 text-blue-400" />,
            title: "Family Elevation",
            description: "My success is not for personal glory. It is the survival and technological elevation of my bloodline."
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
                        Driven by <GlitchText text="Purpose." />
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                            <p>
                                I am the first graduate in my family. I carry a pressure most people my age don't understand,
                                and I view my journey not as a quest for personal glory, but as a mission for my family's survival and elevation.
                            </p>
                            <p>
                                A major driving force is guiding my younger brother, Dilip. I am actively working to shift his mindset
                                towards exposure, comprehension, and global competition. I am intentional, not loud, and my ultimate vision
                                is to reach a world-class level of impact—maximizing my leverage through technology.
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

                    {/* Interactive Terminal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
                        className="mt-20 max-w-3xl mx-auto"
                    >
                        <Terminal className="h-[350px]" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
