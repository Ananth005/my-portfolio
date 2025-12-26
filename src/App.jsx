import React, { useEffect } from 'react';
import { Github, Terminal, Cpu, ChevronRight, Zap, Linkedin, Mail } from 'lucide-react';
import { 
  SiAngular, 
  SiNextdotjs, 
  SiEmberdotjs, 
  SiFlutter, 
  SiWordpress, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiN8N, 
  SiPuppeteer, 
  SiGit, 
  SiTailwindcss, 
  SiRedux,
  SiOpenai,
  SiAnthropic,
  SiGoogle,
  SiPerplexity,
  SiX,
  SiBootstrap,
  SiSass,
  SiReact,
  SiGithubcopilot
} from 'react-icons/si';
import SpotlightCard from './components/SpotlightCard';
import Reveal from './components/Reveal';

const skills = [
  // Core Frameworks (your priority)
  { name: 'Angular', icon: SiAngular },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Ember.js', icon: SiEmberdotjs },
  { name: 'WordPress', icon: SiWordpress },
  { name: 'Flutter', icon: SiFlutter },
  
  // Modern JS Frameworks
  { name: 'React', icon: SiReact },
  
  // Languages
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  
  // Styling (priority order: modern → legacy)
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'SCSS', icon: SiSass },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'HTML / CSS', icon: SiHtml5 },
  
  // State & Automation
  { name: 'State Management', icon: SiRedux },
  { name: 'n8n', icon: SiN8N },
  { name: 'Puppeteer', icon: SiPuppeteer },
  
  // Tools
  { name: 'Git', icon: SiGit },
];


import AuroraBackground from './components/AuroraBackground';

import ShinyText from './components/ShinyText';
import TiltedCard from './components/TiltedCard';
import DecryptedText from './components/DecryptedText';
import { Windsurf, Cursor, DeepSeek, Grok } from '@lobehub/icons';
import WorkModules from './components/WorkModules';

function App() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ananth10420@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Smooth scroll handler
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen text-gray-100 bg-bg-dark font-inter overflow-x-hidden selection:bg-blue-500/30">
      <div className="noise"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer">
          ANANTH<span className="text-blue-500">.</span>
        </div>
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Stack</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden md:pt-48 md:pb-24 md:px-8 lg:pt-48 lg:pb-32 lg:px-16 min-h-[100dvh]">
        <div className="absolute inset-0 z-0">
          <AuroraBackground />
          <div className="absolute inset-0 blueprint-bg opacity-[0.03] pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full h-full pt-20 md:pt-0">
          
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9] break-words">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                Hi, I'm Ananth. <br className="hidden sm:block" /> Frontend Engineer & Technical Consultant.
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl">
              3 years building production frontends across <span className="text-white border-b border-blue-500/30 ml-2">Angular, Next.js, Ember.js, and Flutter.</span> I specialize in enterprise systems, workflow automation, and actually shipping features that users need. 
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                download="Ananth_Resume.pdf"
                className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform active:scale-95 inline-block cta-pulse"
              >
                Professional Profile
              </a>
              <a 
                href="#contact" 
                className="group relative px-6 sm:px-8 py-4 bg-transparent border border-white font-bold rounded-2xl hover:bg-white/10  transition-all duration-500 text-sm sm:text-base flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                <span className="relative z-10">Get In Touch</span>
                <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Bento Grid */}
      <WorkModules />

      {/* Technical Arsenal */}
      <section id="skills" className="px-6 py-20 max-w-7xl mx-auto mb-6 md:mb-12 lg:mb-32 border-t border-white/5">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-4">
                Technical Arsenal <div className="h-px w-32 bg-white/5 hidden md:block"></div>
            </h2>
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 w-fit">
                <span className="text-base md:text-lg">🏆</span>
                <span className="golden-badge text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-yellow-500/80">Innovative Employee Award Q4 2024</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 w-fit">
                <span className="text-base md:text-lg">🎖️</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-blue-400/80">Nominated: Most Flexible Employee Q4 2024</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
              {skills.map(({ name, icon: Icon }) => (
                  <div key={name} className="cursor-default px-4 py-3 md:px-6 md:py-4 rounded-3xl glass-panel text-sm font-bold hover:bg-white hover:text-black transition-all flex items-center gap-3 group">
                      <Icon className="text-lg text-gray-400 group-hover:text-black transition-colors" />
                      <span>{name}</span>
                  </div>
              ))}
          </div>
        </Reveal>
      </section>

      {/* Intelligence Layer */}
      <section className="px-6 mb-6 md:mb-12 lg:mb-32">
        <Reveal>
          <div className="max-w-7xl mx-auto">
            <SpotlightCard className="p-6 md:p-10 glass-panel border border-white/5 relative bg-[#030712]/50">
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-blue-500"></div>
                    <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em]">Neural Engineering</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-4 uppercase leading-tight">Cognitive Workflow & Velocity</h3>
                  <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                    Orchestrating a multi-model intelligence stack to compress development lifecycles and 
                    <span className="text-white font-bold"> ensure high-fidelity autonomic execution</span>.
                  </p>
                </div>
                
                {/* Categorized Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Category 1: Reasoning & Logic */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-white/50 mb-6">
                      <Cpu size={20} className="text-blue-500" />
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Reasoning & Logic</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'ChatGPT', icon: SiOpenai },
                        { name: 'Gemini', icon: SiGoogle },
                        { name: 'Grok', icon: Grok },
                        { name: 'Claude', icon: SiAnthropic },
                        { name: 'Perplexity', icon: SiPerplexity },
                        { name: 'DeepSeek', icon: DeepSeek } // Using Cpu as fallback if SiDeepseek missing
                      ].map(tool => (
                        <div key={tool.name} className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all group/tool">
                          <tool.icon size={14} className="text-gray-500 group-hover/tool:text-blue-400 transition-colors" />
                          <span className="text-[11px] font-bold text-gray-400 group-hover/tool:text-white transition-colors">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2: Autonomic Development */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-white/50 mb-6">
                      <Terminal size={20} className="text-emerald-500" />
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Autonomic Development</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'Antigravity', icon: SiGoogle },
                        { name: 'Cursor', icon: Cursor }, // Placeholder for Cursor
                        { name: 'Windsurf', icon: Windsurf },   // Placeholder for Windsurf
                        { name: 'GitHub Copilot', icon: SiGithubcopilot }
                      ].map(tool => (
                        <div key={tool.name} className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all group/tool">
                          <tool.icon size={14} className={`${tool.customColor || 'text-gray-500'} group-hover/tool:text-emerald-400 transition-colors`} />
                          <span className="text-[11px] font-bold text-gray-400 group-hover/tool:text-white transition-colors">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Background Grid */}
              <div className="insight-grid absolute inset-0 opacity-10 pointer-events-none"></div>
            </SpotlightCard>
          </div>
        </Reveal>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className="relative px-6 py-10 md:py-32 overflow-hidden">
        {/* Structural Background */}
        <div className="absolute inset-0 blueprint-bg opacity-[0.02] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Column: CTA */}
            <div>
              <Reveal>
                <h4 className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-6">Establish Connection</h4>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.85] mb-12 uppercase tracking-tighter">
                  Let's Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">The Future.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://www.linkedin.com/in/ananth-p-039b31254" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-6 glass-panel border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between min-h-[100px] md:min-h-[160px]"
                  >
                    <Linkedin size={24} className="text-gray-500 group-hover:text-blue-500 transition-colors" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Professional</p>
                      <p className="font-bold text-lg group-hover:text-white transition-colors">LinkedIn</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/Ananth005" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-6 glass-panel border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-between min-h-[100px] md:min-h-[160px]"
                  >
                    <Github size={24} className="text-gray-500 group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Source Code</p>
                      <p className="font-bold text-lg group-hover:text-white transition-colors">GitHub</p>
                    </div>
                  </a>

                  <button 
                    onClick={copyEmail}
                    className="col-span-1 sm:col-span-2 group p-6 glass-panel border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
                        <Mail size={24} className="text-gray-500 group-hover:text-emerald-500 transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Direct Inquiries</p>
                        <p className="font-bold text-lg group-hover:text-white transition-colors">ananth10420@gmail.com</p>
                      </div>
                    </div>
                    {copied ? (
                      <span className="px-4 py-2 bg-emerald-500/10 text-emerald-500 text-[10px] font-black rounded-full uppercase tracking-widest animate-pulse">Copied!</span>
                    ) : (
                      <span className="hidden md:block text-gray-600 text-[10px] font-black uppercase tracking-widest group-hover:text-emerald-500 group-hover:translate-x-1 transition-all">Click to Copy</span>
                    )}
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Status & Time */}
            <div className="lg:pt-24 flex flex-col items-center lg:items-end text-center lg:text-right">
              <Reveal delay={0.3}>
                <div className="p-8 glass-panel border border-white/5 rounded-[2.5rem] mb-6 md:mb-12 max-w-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center lg:justify-end gap-3 mb-6">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <p className="text-xs font-black uppercase tracking-widest text-emerald-500">Available for 2026</p>
                    </div>
                    <p className="text-xl font-medium text-gray-200 leading-snug mb-8">
                      Open for high-impact roles and innovative frontend collaborations.
                    </p>
                    
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="space-y-4">
                  <div className="text-2xl font-black tracking-tighter">
                    ANANTH<span className="text-blue-500">.</span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em]">
                    Frontend Engineer & Technical Consultant
                  </p>
                  <div className="pt-8 flex flex-col items-center lg:items-end gap-2">
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Designed with absolute precision.</p>
                    <p className="text-[9px] text-gray-700 font-medium">© 2026 ALL RIGHTS RESERVED.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
