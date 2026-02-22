import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
    const text = "Prithic P".split("");

    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const letterVars = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring" as const, damping: 12, stiffness: 200 } }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />

            {/* Floating Geometry */}
            <motion.div
                className="absolute top-[20%] right-[15%] w-32 h-32 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                animate={{
                    y: [0, -40, 0],
                    rotate: [0, 45, 90],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute bottom-[20%] left-[10%] w-24 h-24 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm"
                animate={{
                    y: [0, 50, 0],
                    x: [0, 30, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium tracking-wide mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            NVIDIA & AMD Developer Program Member
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 perspective-1000">
                        Hi, I'm <br className="hidden md:block" />
                        <motion.span
                            variants={containerVars}
                            initial="hidden"
                            animate="show"
                            className="inline-flex text-gradient"
                        >
                            {text.map((char, i) => (
                                <motion.span key={i} variants={letterVars} className="inline-block">
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-light leading-relaxed"
                    >
                        BTech AI & ML student dedicated to building high-impact technology.
                        Focused on core CS fundamentals, deep learning, and consistent execution over shortcuts.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-colors w-full sm:w-auto overflow-hidden relative group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl font-medium transition-all w-full sm:w-auto group backdrop-blur-md"
                        >
                            Download Resume
                            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
