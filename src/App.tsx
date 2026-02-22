import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { CursorGlow } from './components/ui/CursorGlow';
import { FluidBackground } from './components/ui/FluidBackground';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <CursorGlow />
      <FluidBackground />

      {/* Navigation (Simple) */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-white tracking-tighter">
            Prithic<span className="text-blue-500">.</span>
          </span>
          <div className="hidden lg:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>
          <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10">
            Contact Me
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-slate-950 relative z-10">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all text-slate-400">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all text-slate-400">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all text-slate-400">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Prithic P. Designed and built with discipline and purpose.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
