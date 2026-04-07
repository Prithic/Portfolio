import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Cpu, ChevronRight } from 'lucide-react';

interface CommandLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string | React.ReactNode;
}

interface AITerminalProps {
  onNavigate?: (tab: string) => void;
}

export function AITerminal({ onNavigate }: AITerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    { id: '1', type: 'system', content: 'Terminal initialized. Type "help" for available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newLog: CommandLog = { id: Date.now().toString(), type: 'input', content: `guest@portfolio:~$ ${trimmed}` };
    let outputLog: CommandLog | null = null;

    if (trimmed.startsWith('goto ')) {
      const target = trimmed.split(' ')[1];
      const validTabs = ['overview', 'projects', 'skills', 'mission', 'activity'];
      if (validTabs.includes(target)) {
        if (onNavigate) onNavigate(target);
        outputLog = { id: (Date.now() + 1).toString(), type: 'system', content: `Navigating to ${target}...` };
      } else {
        outputLog = { id: (Date.now() + 1).toString(), type: 'error', content: `Target "${target}" not found.` };
      }
    } else {
      switch (trimmed) {
        case 'help':
          outputLog = {
            id: (Date.now() + 1).toString(),
            type: 'output',
            content: (
              <div className="space-y-1 text-slate-400">
                <p className="text-white font-bold mb-1">Available Commands:</p>
                <p><span className="text-blue-400 mr-4">about</span> - Biography and background</p>
                <p><span className="text-blue-400 mr-4">projects</span> - View engineering portfolio</p>
                <p><span className="text-blue-400 mr-4">goto [tab]</span> - Navigate (overview, projects, skills, mission, activity)</p>
                <p><span className="text-blue-400 mr-4">clear</span> - Clear terminal history</p>
                <p><span className="text-blue-400 mr-4">help</span> - Show this help menu</p>
              </div>
            )
          };
          break;
        case 'about':
          outputLog = {
            id: (Date.now() + 1).toString(),
            type: 'output',
            content: 'Prithic: AI Systems Engineer specializing in scalable RAG architectures and automated reasoning systems.'
          };
          break;
        case 'projects':
          outputLog = {
            id: (Date.now() + 1).toString(),
            type: 'output',
            content: 'Active: ApexGuardian (Security), ScholarSync (RAG), CivicShield (Urban AI). Type "goto projects" for details.'
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
    }

    setHistory(prev => [...prev, newLog, outputLog!]);
    setInput('');
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-slate-900 px-4 py-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-slate-500" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Shell v1.0.4</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        className="flex-grow p-6 overflow-y-auto font-mono text-sm space-y-3 custom-scroll"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((log) => (
          <div
            key={log.id}
            className={`${
              log.type === 'error' ? 'text-red-400' : 
              log.type === 'input' ? 'text-white' : 
              log.type === 'system' ? 'text-slate-500 italic' :
              'text-slate-300'
            } whitespace-pre-wrap leading-relaxed`}
          >
            {log.content}
          </div>
        ))}
        <div ref={bottomRef} className="h-4" />
      </div>

      {/* Terminal Input */}
      <form
        onSubmit={(e) => { e.preventDefault(); handleCommand(input); }}
        className="px-6 py-4 bg-slate-900/50 border-t border-slate-800 flex items-center gap-2"
      >
        <span className="text-blue-500 font-bold font-mono text-xs">guest@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-transparent border-none outline-none text-white font-mono text-sm p-0 focus:ring-0"
          spellCheck={false}
          autoComplete="off"
          autoFocus
        />
        <ChevronRight size={14} className="text-slate-700" />
      </form>
    </div>
  );
}
