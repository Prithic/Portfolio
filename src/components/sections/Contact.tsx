import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Let's <span className="text-gradient">Connect</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Whether you have an opportunity or just want to chat about AI/ML, I'm always open to connecting.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {/* Contact Info Side */}
                        <div className="md:col-span-2 space-y-6">
                            <motion.a
                                href="mailto:hello@example.com"
                                className="block"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <GlassCard className="p-6 flex items-center gap-4 group cursor-pointer">
                                    <div className="p-4 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-300 text-sm font-medium mb-1">Email Me</h4>
                                        <span className="text-white font-medium group-hover:text-blue-300 transition-colors">hello@example.com</span>
                                    </div>
                                </GlassCard>
                            </motion.a>

                            <GlassCard className="p-8">
                                <h4 className="text-white font-bold text-xl mb-4">Current Focus</h4>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex gap-3">
                                        <span className="text-blue-500 mt-1">▹</span> Learning advanced deep learning architectures
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-500 mt-1">▹</span> Participating in NVIDIA/AMD Developer communities
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-500 mt-1">▹</span> Seeking internships / collaborations
                                    </li>
                                </ul>
                            </GlassCard>
                        </div>

                        {/* Interactive Form Side */}
                        <motion.div
                            className="md:col-span-3"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
                        >
                            <GlassCard className="p-8 h-full">
                                <form className="space-y-6 flex flex-col h-full" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-light"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-light"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="space-y-2 flex-grow">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                            Message <MessageSquare size={14} className="text-slate-500" />
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full h-full min-h-[120px] bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none font-light"
                                            placeholder="What's on your mind?"
                                        ></textarea>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-auto group"
                                    >
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </motion.button>
                                </form>
                            </GlassCard>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
