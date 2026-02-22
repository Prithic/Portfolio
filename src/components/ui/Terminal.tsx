import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface CommandLog {
    id: string;
    type: 'input' | 'output' | 'error';
    content: string | React.ReactNode;
}

export function Terminal({ className }: { className?: string }) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandLog[]>([
        { id: '1', type: 'output', content: 'Connection established. Welcome to Prithic_OS v1.0.4' },
        { id: '2', type: 'output', content: 'Type "help" to see available commands.' }
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase();

        if (!trimmed) return;

        const newLog: CommandLog = { id: Date.now().toString(), type: 'input', content: `visitor@prithic:~> ${trimmed}` };

        let outputLog: CommandLog | null = null;

        switch (trimmed) {
            case 'help':
                outputLog = {
                    id: (Date.now() + 1).toString(),
                    type: 'output',
                    content: (
                        <div className="text-slate-300">
                            <p>Available commands:</p>
                            <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                                <li><span className="text-blue-400">whoami</span> - Display identity information</li>
                                <li><span className="text-blue-400">projects</span> - List priority target files</li>
                                <li><span className="text-blue-400">skills</span> - Dump technical capabilities</li>
                                <li><span className="text-blue-400">contact</span> - Initiate secure connection</li>
                                <li><span className="text-blue-400">clear</span> - Wipe terminal output</li>
                            </ul>
                        </div>
                    )
                };
                break;
            case 'whoami':
                outputLog = {
                    id: (Date.now() + 1).toString(),
                    type: 'output',
                    content: 'I am Prithic P, a BTech AI & ML student, dedicated to building high-impact technology and currently a Developer Program Member at NVIDIA and AMD.'
                };
                break;
            case 'projects':
                outputLog = {
                    id: (Date.now() + 1).toString(),
                    type: 'output',
                    content: 'Accessing filesystem... \n- [CivicShield AI]: Predictive civic dashboard\n- [Proximity Data Viz]: Interactive radial charts\n- [Mediapipe Controller]: Hand gesture system'
                };
                break;
            case 'skills':
                outputLog = {
                    id: (Date.now() + 1).toString(),
                    type: 'output',
                    content: 'Initializing skill matrix...\n[Python, Java, TypeScript, AI/ML, PyTorch, React, Framer Motion]'
                };
                break;
            case 'contact':
                outputLog = {
                    id: (Date.now() + 1).toString(),
                    type: 'output',
                    content: 'Routing to terminal mail server... Please send transmissions to hello@example.com'
                };
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            default:
                outputLog = {
                    id: (Date.now() + 1).toString(),
                    type: 'error',
                    content: `Command not found: ${trimmed}. Type "help" for a list of commands.`
                };
        }

        setHistory(prev => [...prev, newLog, outputLog!]);
        setInput('');
    };

    return (
        <GlassCard className={`overflow-hidden flex flex-col ${className}`} hoverEffect={false}>
            {/* Terminal Header */}
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-3 border-b border-white/10 -mt-6 -mx-6 mb-4">
                <TerminalIcon size={16} className="text-slate-400" />
                <span className="text-xs font-mono text-slate-400">root@prithic-os ~ terminal</span>
                <div className="ml-auto flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
            </div>

            {/* Terminal Body */}
            <div
                className="flex-grow overflow-y-auto font-mono text-sm space-y-2 pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent custom-scroll"
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((log) => (
                    <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`${log.type === 'error' ? 'text-red-400' : log.type === 'input' ? 'text-blue-300' : 'text-slate-300'} whitespace-pre-wrap leading-relaxed`}
                    >
                        {log.content}
                    </motion.div>
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Terminal Input */}
            <form
                onSubmit={(e) => { e.preventDefault(); handleCommand(input); }}
                className="flex items-center gap-2 font-mono text-sm border-t border-white/10 -mx-6 -mb-6 px-4 py-3 bg-slate-900/50"
            >
                <span className="text-green-400 shrink-0">visitor@prithic:~&gt;</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-transparent border-none outline-none text-white w-full shadow-none focus:ring-0 p-0"
                    autoComplete="off"
                    spellCheck="false"
                    autoFocus
                />
            </form>
        </GlassCard>
    );
}
