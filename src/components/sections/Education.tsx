import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { GraduationCap, BookOpen } from 'lucide-react';

const educations = [
    {
        degree: "Bachelor of Technology - BTech",
        field: "Artificial Intelligence & Machine Learning",
        institution: "Sri Shakthi Institute of Engineering and Technology",
        period: "2025 - 2029",
        icon: <GraduationCap className="w-6 h-6 text-blue-400" />
    },
    {
        degree: "Higher Secondary Certificate",
        field: "Computer Science and Mathematics",
        institution: "Kongu Vellalar Matriculation Higher Secondary School",
        period: "2012 - 2025",
        icon: <BookOpen className="w-6 h-6 text-purple-400" />
    }
];

export function Education() {
    return (
        <section id="education" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                        Educational <span className="text-gradient">Journey</span>
                    </h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                        {educations.map((edu, idx) => (
                            <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>

                                {/* Timeline dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-colors duration-300 group-hover:border-blue-400">
                                    {edu.icon}
                                </div>

                                {/* Card */}
                                <motion.div
                                    className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)]"
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <GlassCard className="p-6">
                                        <span className="text-sm font-medium text-blue-400 mb-2 block">{edu.period}</span>
                                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                        <h4 className="text-slate-300 font-medium mb-3">{edu.field}</h4>
                                        <p className="text-slate-400 text-sm">
                                            {edu.institution}
                                        </p>
                                    </GlassCard>
                                </motion.div>

                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
