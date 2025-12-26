import React from 'react';
import { ChevronRight, Terminal, Cpu, Zap, Github } from 'lucide-react';
import { SiAngular, SiEmberdotjs, SiWordpress, SiNextdotjs, SiGoogle } from 'react-icons/si';
import Reveal from './Reveal';
import TiltedCard from './TiltedCard';
import SpotlightCard from './SpotlightCard';

const WorkModules = () => {
  const [activeCard, setActiveCard] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setActiveCard(null);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCard = (id) => {
    if (isMobile) {
      setActiveCard(activeCard === id ? null : id);
    }
  };

  // Scroll-to-reveal logic for mobile
  React.useEffect(() => {
    if (!isMobile) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const projectId = entry.target.getAttribute('data-project-id');
          if (projectId) {
            setActiveCard(projectId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('[data-project-id]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [isMobile]);

  return (
    <section id="work" className="px-6 pt-6 md:pt-24 max-w-7xl mx-auto mb-6 md:mb-12 lg:mb-32">
      <Reveal>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work Modules</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">A curated selection of industrial & creative work.</p>
          </div>
        </div>
      </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[220px]">
            {/* HCM (Large) */}
            <div className="md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-0">
              <Reveal className="h-full">
                <TiltedCard 
                  containerHeight={isMobile ? "auto" : "100%"}
                  containerWidth="100%"
                  className="glass-panel border border-white/5"
                  rotateAmplitude={isMobile ? 0 : 3}
                  scaleOnHover={1}
                >
                  <div className="relative h-full w-full group flex flex-col" data-project-id="parkway" onClick={() => toggleCard('parkway')}>
                    {/* Visual Decoration */}
                    <div className="absolute inset-0 blueprint-bg opacity-10 md:group-hover:opacity-20 transition-opacity"></div>
                    <div className="absolute top-12 right-12 rounded-lg opacity-5 md:group-hover:opacity-20 transition-all duration-700 scale-150">
                      <SiAngular size={200} />
                    </div>

                    {/* Default State */}
                    <div className={`${activeCard === 'parkway' ? 'hidden' : 'flex'} p-6 md:p-8 lg:p-10 flex-col justify-end min-h-[320px] md:h-full relative z-10 transition-all duration-500 md:group-hover:opacity-0 md:flex`}>
                      <div className="text-blue-500 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-3 md:mb-4">Multi-Club Platform</div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 md:mb-2 uppercase tracking-tighter">Parkway Athletic Club</h3>
                      <p className="text-gray-400 text-xs md:text-sm font-medium">Comprehensive Gym Management System</p>
                      
                      {/* Mobile Hint */}
                      <div className="md:hidden mt-6 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-blue-500">
                        <span>View Insight</span>
                        <ChevronRight size={14} className="animate-bounce-x" />
                      </div>
                    </div>

                    {/* Expanded State / Hover State */}
                    <div className={`${activeCard === 'parkway' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-blue-600/5 backdrop-blur-xl transition-all duration-700 z-20 rounded-3xl md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                       <div className="scanline"></div>
                       {/* NDA Badge */}
                       <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 stagger-in stagger-delay-1">
                         <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                         <span className="text-[9px] font-bold text-gray-200 uppercase tracking-widest">Internal / NDA</span>
                       </div>

                        <div className="relative z-10">
                          {/* Mobile Only Header */}
                          <div className="md:hidden mb-4">
                            <div className="flex items-center justify-between mb-1">
                              <div className="text-blue-500 font-bold text-[9px] uppercase tracking-[0.3em]">Multi-Club Platform</div>
                              
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tighter text-white">Parkway Athletic Club</h3>
                          </div>

                          <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2 stagger-in stagger-delay-2">
                            <Terminal size={18} /> Solo Frontend Architecture
                          </h3>
                          <p className="text-gray-100 text-[13px] md:text-sm leading-relaxed mb-4 md:mb-6 stagger-in stagger-delay-3">
                            Architected and delivered the complete frontend for a multi-club gym management platform. 
                            Refactored legacy codebase into a <span className="text-white font-black underline decoration-blue-500/50">unified Angular + Handsontable system</span> managing 
                            sales, maintenance logs, accounting, checklists, and <span className="text-blue-400 font-bold">role-based access control</span> across multiple locations.
                          </p>
                        <div className={`${activeCard === 'parkway' ? 'grid' : 'hidden'} md:grid grid-cols-2 gap-4 stagger-in stagger-delay-4`}>
                           <div>
                              <p className="secondary-label">Core Features</p>
                              <p className="text-xs text-gray-200 font-medium">Sales, Accounting, Logs</p>
                           </div>
                           <div>
                              <p className="secondary-label">Tech Stack</p>
                              <p className="text-xs text-gray-200 font-medium">Angular, Handsontable</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>

            {/* FleetYes (Large) */}
            <div className="md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-0">
              <Reveal className="h-full" delay={0.1}>
                <TiltedCard 
                  containerHeight={isMobile ? "auto" : "100%"}
                  containerWidth="100%"
                  className="glass-panel border border-white/5"
                  rotateAmplitude={isMobile ? 0 : 3}
                  scaleOnHover={1}
                >
                  <div className="relative h-full w-full group flex flex-col" data-project-id="fleetyes" onClick={() => toggleCard('fleetyes')}>
                    {/* Visual Decoration */}
                    <div className="absolute inset-0 blueprint-bg opacity-10 md:group-hover:opacity-20 transition-opacity"></div>
                    <div className="ember-icon absolute top-12 right-12 opacity-5 md:group-hover:opacity-20 transition-all duration-700 scale-150">
                      <SiEmberdotjs size={200} />
                    </div>

                    {/* Default State */}
                    <div className={`${activeCard === 'fleetyes' ? 'hidden' : 'flex'} p-6 md:p-8 lg:p-10 flex-col justify-end min-h-[320px] md:h-full relative z-10 transition-all duration-500 md:group-hover:opacity-0 md:flex`}>
                      <div className="text-purple-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-3 md:mb-4">Amazon Freight SaaS</div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 md:mb-2 uppercase tracking-tighter">FleetYes Logistics</h3>
                      <p className="text-gray-400 text-xs md:text-sm font-medium">Fleet Management for Delivery Partners</p>
                      {/* Mobile Hint */}
                      <div className="md:hidden mt-6 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-purple-400">
                        <span>View Details</span>
                        <ChevronRight size={14} className="animate-bounce-x" />
                      </div>
                    </div>

                    {/* Expanded State */}
                    <div className={`${activeCard === 'fleetyes' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-purple-600/5 backdrop-blur-xl transition-all duration-700 z-20 rounded-3xl md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                      <div className="scanline"></div>
                      {/* NDA Badge */}
                      <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 stagger-in stagger-delay-1">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-bold text-gray-200 uppercase tracking-widest">Internal / NDA</span>
                      </div>

                      <div className="relative z-10">
                        {/* Mobile Only Header */}
                        <div className="md:hidden mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-purple-400 font-bold text-[9px] uppercase tracking-[0.3em]">Amazon Freight SaaS</div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">FleetYes Logistics</h3>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2 stagger-in stagger-delay-2">
                          <Terminal size={18} /> Feature Development & UX
                        </h3>
                        <p className="text-gray-100 text-[13px] md:text-sm leading-relaxed mb-4 md:mb-6 stagger-in stagger-delay-3">
                            Contributed to a production SaaS serving Amazon freight partners. Built new pages, resolved critical bugs, and 
                          <span className="text-white font-black underline decoration-purple-500/50">
                            designed and implemented a platform-wide interactive walkthrough system
                          </span>
                          for every page, dramatically improving <span className="text-purple-400 font-bold">new user onboarding</span>.
                        </p>
                        <div className={`${activeCard === 'fleetyes' ? 'grid' : 'hidden'} md:grid grid-cols-2 gap-4 stagger-in stagger-delay-4`}>
                           <div>
                              <p className="secondary-label">Key Contribution</p>
                              <p className="text-xs text-gray-200 font-medium">Walkthrough System</p>
                           </div>
                           <div>
                              <p className="secondary-label">Tech Stack</p>
                              <p className="text-xs text-gray-200 font-medium">Ember.js</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>

                        {/* Enabling Procurement */}
            <div className="md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-0">
              <Reveal className="h-full">
                 <TiltedCard 
                  containerHeight={isMobile ? "auto" : "100%"}
                  containerWidth="100%"
                  className="bg-gradient-to-br from-blue-500/5 to-transparent glass-panel border border-white/5"
                  rotateAmplitude={isMobile ? 0 : 5}
                  scaleOnHover={1}
                >
                  <div className="relative h-full w-full group flex flex-col" data-project-id="enabling" onClick={() => toggleCard('enabling')}>
                    {/* Visual Decoration */}
                    <div className="absolute inset-0 blueprint-bg opacity-10 md:group-hover:opacity-20 transition-opacity"></div>
                    <div className="absolute top-12 right-12 rounded-lg opacity-5 md:group-hover:opacity-20 transition-all duration-700 scale-150 text-yellow-500">
                      <SiWordpress size={200} />
                    </div>

                    {/* Default State */}
                    <div className={`${activeCard === 'enabling' ? 'hidden' : 'flex'} p-6 md:p-8 lg:p-10 flex-col justify-end min-h-[320px] md:h-full relative z-10 transition-all duration-500 md:group-hover:opacity-0 md:flex`}>
                      <div className="text-yellow-500 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-3 md:mb-4">WordPress Frontend</div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 md:mb-2 uppercase tracking-tighter text-white">Enabling Procurement</h3>
                      <p className="text-gray-400 text-xs md:text-sm font-medium">Pixel-Perfect UI Implementation</p>
                      {/* Mobile Hint */}
                      <div className="md:hidden mt-6 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-yellow-500">
                        <span>View Details</span>
                        <ChevronRight size={14} className="animate-bounce-x" />
                      </div>
                    </div>

                    {/* Expanded State */}
                    <div className={`${activeCard === 'enabling' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-yellow-600/5 backdrop-blur-xl transition-all duration-700 z-20 rounded-3xl md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                      <div className="scanline"></div>
                      {/* Live Site Badge */}
                      <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 stagger-in stagger-delay-1">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-bold text-yellow-500 uppercase tracking-widest">Public / Live Site</span>
                      </div>

                      <div className="relative z-10 text-left">
                        {/* Mobile Only Header */}
                        <div className="md:hidden mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-yellow-500 font-bold text-[9px] uppercase tracking-[0.3em]">WordPress Frontend</div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">Enabling Procurement</h3>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-yellow-500 stagger-in stagger-delay-2 flex items-center gap-2">
                          <SiWordpress size={18} /> Pixel-Perfect UI
                        </h3>
                         <p className="text-gray-100 text-[13px] md:text-sm leading-relaxed mb-4 md:mb-6 stagger-in stagger-delay-3">
                          Implemented a high-fidelity WordPress frontend for a leading procurement consultancy. 
                          Hand-coded custom HTML templates and responsive CSS from Figma designs, ensuring 
                          <span className="text-white font-black underline decoration-yellow-500/50">brand-accurate typography and layout</span> while 
                          maintaining <span className="text-yellow-500 font-bold">SEO-optimized semantic structure</span>.
                        </p>
                        <div className={`${activeCard === 'enabling' ? 'grid' : 'hidden'} md:grid grid-cols-2 gap-4 stagger-in stagger-delay-4`}>
                           <div>
                              <p className="secondary-label">Core Features</p>
                              <p className="text-xs text-gray-200 font-medium">Custom HTML/CSS, Responsive Design</p>
                           </div>
                           <div>
                              <p className="secondary-label">Tech Stack</p>
                              <p className="text-xs text-gray-200 font-medium">WordPress, HTML, CSS</p>
                           </div>
                        </div>
                        <div className="relative z-50 stagger-in stagger-delay-4" style={{ transform: 'translateZ(50px)' }}>
                          <a 
                            href="https://www.enablingprocurement.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all px-6 py-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl group/btn"
                          >
                            Visit Site <ChevronRight size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>

            {/* Friyay */}
            <div className="md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-0">
              <Reveal className="h-full">
                <TiltedCard 
                  containerHeight={isMobile ? "auto" : "100%"}
                  containerWidth="100%"
                  className="glass-panel border border-white/5"
                  rotateAmplitude={isMobile ? 0 : 3}
                  scaleOnHover={1}
                >
                  <div className="relative h-full w-full group flex flex-col" data-project-id="friyay" onClick={() => toggleCard('friyay')}>
                    {/* Visual Decoration */}
                    <div className="absolute inset-0 blueprint-bg opacity-10 md:group-hover:opacity-20 transition-opacity"></div>
                    <div className="absolute top-12 right-12 rounded-lg opacity-5 md:group-hover:opacity-20 transition-all duration-700 scale-150 text-blue-400">
                      <SiNextdotjs size={200} />
                    </div>

                    {/* Default State */}
                    <div className={`${activeCard === 'friyay' ? 'hidden' : 'flex'} p-6 md:p-8 lg:p-10 flex-col justify-end min-h-[320px] md:h-full relative z-10 transition-all duration-500 md:group-hover:opacity-0 md:flex`}>
                      <div className="text-blue-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-3 md:mb-4">Goal-Tracking SaaS</div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 md:mb-2 uppercase tracking-tighter text-white">Friyay</h3>
                      <p className="text-gray-400 text-xs md:text-sm font-medium">Initiative-to-Goal Alignment Platform</p>
                      {/* Mobile Hint */}
                      <div className="md:hidden mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-blue-400">
                        <span>View Insight</span>
                        <ChevronRight size={14} className="animate-bounce-x" />
                      </div>
                    </div>

                    {/* Expanded State */}
                    <div className={`${activeCard === 'friyay' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-blue-600/5 backdrop-blur-xl transition-all duration-700 z-20 rounded-3xl md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                      <div className="scanline"></div>
                      {/* SaaS Badge */}
                      <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-400/10 stagger-in stagger-delay-1">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Public / Production SaaS</span>
                      </div>

                      <div className="relative z-10">
                        {/* Mobile Only Header */}
                        <div className="md:hidden mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-blue-400 font-bold text-[9px] uppercase tracking-[0.3em]">Goal-Tracking SaaS</div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">Friyay</h3>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-blue-400 stagger-in stagger-delay-2 flex items-center gap-2">
                          <Terminal size={18} /> Feature Contributions
                        </h3>
                        <p className="text-gray-100 text-[13px] md:text-sm leading-relaxed mb-4 md:mb-6 stagger-in stagger-delay-3">
                          Contributed to a Next.js SaaS linking <span className="text-white font-black underline decoration-blue-500/50">daily initiatives to quarterly goals</span> for 
                          product managers. Delivered targeted feature enhancements and resolved critical bugs to improve
                          <span className="text-blue-400 font-bold"> tracking and execution workflows</span>.
                        </p>
                        <div className="relative z-50 stagger-in stagger-delay-4" style={{ transform: 'translateZ(50px)' }}>
                          <a 
                            href="https://friyay.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-xl group/btn"
                          >
                            Try Friyay <ChevronRight size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>

            {/* Japanese Personality Survey (Large) */}
            <div className="md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-0">
              <Reveal className="h-full">
                <TiltedCard 
                  containerHeight={isMobile ? "auto" : "100%"} 
                  containerWidth="100%"
                  className="glass-panel border border-white/5"
                  rotateAmplitude={isMobile ? 0 : 5}
                  scaleOnHover={1}
                >
                  <div className="relative h-full w-full group flex flex-col" data-project-id="mindset" onClick={() => toggleCard('mindset')}>
                    {/* Visual Decoration */}
                    <div className="absolute inset-0 blueprint-bg opacity-10 md:group-hover:opacity-20 transition-opacity"></div>
                    <div className="absolute top-12 right-12 rounded-lg opacity-5 md:group-hover:opacity-20 transition-all duration-700 scale-150 text-blue-400">
                      <SiNextdotjs size={200} />
                    </div>

                    {/* Default State */}
                    <div className={`${activeCard === 'mindset' ? 'hidden' : 'flex'} p-6 md:p-8 lg:p-10 flex-col justify-end min-h-[320px] md:h-full relative z-10 transition-all duration-500 md:group-hover:opacity-0 md:flex`}>
                      <div className="text-blue-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-3 md:mb-4">Assessment Tool</div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 md:mb-2 uppercase tracking-tighter text-white">Entrepreneurial Mindset</h3>
                      <p className="text-gray-400 text-xs md:text-sm font-medium">Resilience & Self-Awareness Platform</p>
                      {/* Mobile Hint */}
                      <div className="md:hidden mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-blue-400">
                        <span>View Details</span>
                        <ChevronRight size={14} className="animate-bounce-x" />
                      </div>
                    </div>

                    {/* Expanded State */}
                    <div className={`${activeCard === 'mindset' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-blue-600/5 backdrop-blur-xl transition-all duration-700 z-20 rounded-3xl md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                      <div className="scanline"></div>
                      {/* Public Badge */}
                      <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-400/10 stagger-in stagger-delay-1">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Public / Assessment</span>
                      </div>

                      <div className="relative z-10 text-left">
                        {/* Mobile Only Header */}
                         <div className="md:hidden mb-4">
                           <div className="flex items-center justify-between mb-1">
                             <div className="text-blue-400 font-bold text-[9px] uppercase tracking-[0.3em]">Assessment Tool</div>
                           </div>
                           <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">Entrepreneurial Mindset</h3>
                         </div>

                        <h3 className="text-xl font-bold mb-4 text-blue-400 stagger-in stagger-delay-2 flex items-center gap-2">
                          <Terminal size={18} /> Assessment Architecture
                        </h3>
                         <p className="text-gray-100 text-[13px] md:text-sm leading-relaxed mb-4 md:mb-6 stagger-in stagger-delay-3">
                          Built features for a Next.js assessment evaluating <span className="text-white font-black underline decoration-blue-500/50">entrepreneurial resilience</span> through 
                          self-awareness metrics. Measures cognitive acceptance versus emotional reactions to uncontrollable factors using 
                          <span className="text-blue-400 font-bold"> priority and performance self-ratings</span>.
                        </p>
                        <div className={`${activeCard === 'mindset' ? 'flex' : 'hidden'} md:flex flex-wrap gap-2 stagger-in stagger-delay-4`}>
                          {['Next.js', 'Self-Assessment', 'Resilience Metrics', 'UX'].map(tag => (
                            <span key={tag} className="tech-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>

            <div className="md:col-span-2 md:row-span-1 min-h-[180px] md:min-h-0">
              <Reveal className="h-full">
                <SpotlightCard className="p-8 h-full glass-panel border border-white/5 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div> Active Ecosystem
                            </h4>
                            <span className="text-[10px] font-bold text-gray-600">PRODUCTION</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
                            {[
                                { name: 'Fleetyes.com', url: 'https://fleetyes.com/', active: true },
                                { name: 'Seatcurity', url: 'https://seatcurity.uk/', active: true },
                                { name: 'AgileCyber', url: 'https://agilecyber.com/', active: false },
                                { name: 'Pawpal', url: 'https://web.archive.org/web/20250910103506/https://pawpal.uk/', active: false }
                            ].map((site) => (
                                <a 
                                    key={site.name}
                                    href={site.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`group/site flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ${
                                        site.active 
                                        ? 'border-white/5 bg-white/2 hover:border-blue-500/30 hover:bg-blue-500/5' 
                                        : 'border-white/5 bg-white/1 opacity-50 hover:opacity-80'
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className={`w-1 h-1 rounded-full transition-transform group-hover/site:scale-150 ${site.active ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-gray-500'}`}></div>
                                        <span className="text-[13px] font-bold group-hover/site:text-white transition-colors">{site.name}</span>
                                    </div>
                                    <ChevronRight size={14} className="text-gray-600 group-hover/site:text-blue-500 group-hover/site:translate-x-0.5 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>
                </SpotlightCard>
              </Reveal>
            </div>

            
            {/* Koyn Gateway Plugin */}
            <div className="md:col-span-2 md:row-span-1 min-h-[140px] md:min-h-0">
              <Reveal className="h-full">
                <TiltedCard 
                  containerHeight={isMobile ? "auto" : "100%"}
                  containerWidth="100%"
                  className="glass-panel border border-white/5"
                  rotateAmplitude={isMobile ? 0 : 3}
                  scaleOnHover={1}
                >
                  <div className="relative h-full w-full group flex flex-col" data-project-id="koyn" onClick={() => toggleCard('koyn')}>
                    {/* Visual Decoration */}
                    <div className="absolute inset-0 blueprint-bg opacity-10 md:group-hover:opacity-20 transition-opacity"></div>
                    {/* Default State */}
                    <div className={`${activeCard === 'koyn' ? 'hidden' : 'flex'} p-6 md:p-8 items-center justify-between min-h-[140px] md:h-full transition-all duration-500 md:group-hover:opacity-0 md:flex`}>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Koyn Gateway Plugin</h3>
                        <p className="text-gray-400 text-[10px] md:text-xs italic">WordPress • WooCommerce Integration</p>
                        
                        {/* Mobile Hint */}
                        <div className="md:hidden mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-purple-500">
                          <span>View Details</span>
                          <ChevronRight size={14} className="animate-bounce-x" />
                        </div>
                      </div>
                      <div className="text-purple-500"><SiWordpress size={24} /></div>
                    </div>

                    {/* Expanded State */}
                    <div className={`${activeCard === 'koyn' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} p-6 md:p-8 flex flex-col justify-center bg-purple-600/5 backdrop-blur-xl transition-all duration-700 z-20 rounded-3xl md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                      <div className="scanline"></div>
                      <div className="blueprint-bg absolute inset-0 opacity-20"></div>
                      <div className="relative z-10">
                        {/* Mobile Only Header */}
                        <div className="md:hidden mb-6">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="text-purple-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-1">WordPress Plugin</div>
                              <h3 className="text-xl font-black uppercase tracking-tighter text-white">Koyn Gateway</h3>
                            </div>
                            <a 
                              href="https://wordpress.org/plugins/agile-cyber-solutions-gateway-koyn-for-woocommerce/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-xl text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap active:scale-95 transition-transform"
                            >
                              <SiWordpress size={12} /> Plugin
                            </a>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold mb-2 text-purple-400 stagger-in stagger-delay-1 flex items-center gap-2">
                          <SiWordpress size={16} /> Payment Gateway Integration
                        </h3>
                        <p className="text-gray-100 text-[11px] leading-relaxed mb-4 stagger-in stagger-delay-2 tracking-tight">
                          Developed a <span className="text-white font-black underline decoration-purple-500/50">custom WordPress plugin</span> to integrate 
                          Koyn payment gateway with WooCommerce. Handles secure transactions, webhook processing, and 
                          <span className="text-purple-400 font-bold"> seamless checkout flows</span>.
                        </p>
                        <div className={`${activeCard === 'koyn' ? 'flex' : 'hidden'} md:flex flex-wrap gap-2 items-center stagger-in stagger-delay-3`}>
                          {['WordPress', 'WooCommerce', 'Payment API', 'PHP'].map(tag => (
                            <span key={tag} className="tech-tag">{tag}</span>
                          ))}
                          <a 
                            href="https://wordpress.org/plugins/agile-cyber-solutions-gateway-koyn-for-woocommerce/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden md:ml-auto md:inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-xl group/btn"
                          >
                            <SiWordpress size={14} /> View Plugin
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>


            {/* AStarPrep */}
            <div className="md:col-span-1 md:row-span-1 min-h-[140px] md:min-h-0">
              <Reveal className="h-full">
                <TiltedCard 
                  containerHeight={isMobile ? "auto" : "100%"}
                  containerWidth="100%"
                  className="glass-panel border border-white/5"
                  rotateAmplitude={isMobile ? 0 : 3}
                  scaleOnHover={1}
                >
                  <div className="relative h-full w-full group flex flex-col" data-project-id="astarprep" onClick={() => toggleCard('astarprep')}>
                    {/* Visual Decoration */}
                    <div className="absolute inset-0 blueprint-bg opacity-10 md:group-hover:opacity-20 transition-opacity"></div>
                    {/* Default State */}
                    <div className={`${activeCard === 'astarprep' ? 'hidden' : 'flex'} p-6 flex flex-col justify-center text-center min-h-[140px] md:h-full transition-all duration-500 md:group-hover:opacity-0 md:flex`}>
                      <h4 className="font-bold">AStarPrep</h4>
                      <p className="text-[10px] text-gray-500 uppercase mt-2">EdTech Platform</p>
                      
                      {/* Mobile Hint */}
                      <div className="md:hidden mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-green-400">
                        <span>View Details</span>
                        <ChevronRight size={14} className="animate-bounce-x" />
                      </div>
                    </div>

                    {/* Expanded State */}
                    <div className={`${activeCard === 'astarprep' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} p-6 flex flex-col justify-center bg-green-600/5 backdrop-blur-xl transition-all duration-700 z-20 rounded-3xl md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                      <div className="scanline"></div>
                      <div className="relative z-10">
                        {/* Mobile Only Header */}
                        <div className="md:hidden mb-3">
                          <div className="text-green-400 font-bold text-[9px] uppercase tracking-[0.3em] mb-1">EdTech Platform</div>
                          <h3 className="text-xl font-black uppercase tracking-tighter text-white">AStarPrep</h3>
                        </div>

                        <h3 className="text-sm font-bold mb-2 text-green-400 stagger-in stagger-delay-1">MCQ Assessment Tool</h3>
                        <p className="text-gray-100 text-[10px] leading-relaxed mb-3 stagger-in stagger-delay-2">
                          Built <span className="text-white font-bold">authentication system</span> and UI features for a professor-managed MCQ platform. 
                          Handled <span className="text-green-400 font-bold">login, signup, and student workflows</span>.
                        </p>
                        <div className={`${activeCard === 'astarprep' ? 'flex' : 'hidden'} md:flex flex-wrap gap-1 stagger-in stagger-delay-3`}>
                          {['Auth', 'Admin Panel', 'Student UI'].map(tag => (
                            <span key={tag} className="text-[8px] px-2 py-0.5 bg-white/5 rounded border border-white/10 text-gray-400">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>
            {/* Pet Care Marketing */}
            <div className="md:col-span-1 md:row-span-1 min-h-[140px] md:min-h-0">
              <Reveal className="h-full">
                <TiltedCard 
                  containerHeight={isMobile ? "auto" : "100%"}
                  containerWidth="100%"
                  className="glass-panel border border-white/5"
                  rotateAmplitude={isMobile ? 0 : 3}
                  scaleOnHover={1}
                >
                  <div className="relative h-full w-full group flex flex-col" data-project-id="petcare" onClick={() => toggleCard('petcare')}>
                    {/* Visual Decoration */}
                    <div className="absolute inset-0 blueprint-bg opacity-10 md:group-hover:opacity-20 transition-opacity"></div>
                    {/* Default State */}
                    <div className={`${activeCard === 'petcare' ? 'hidden' : 'flex'} p-6 flex flex-col justify-center text-center min-h-[140px] md:h-full transition-all duration-500 md:group-hover:opacity-0 md:flex`}>
                      <h4 className="font-bold">Pet Care Marketing</h4>
                      <p className="text-[10px] text-gray-500 uppercase mt-2">3000+ Emails</p>
                      
                      {/* Mobile Hint */}
                      <div className="md:hidden mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-pink-400">
                        <span>View Details</span>
                        <ChevronRight size={14} className="animate-bounce-x" />
                      </div>
                    </div>

                    {/* Expanded State */}
                    <div className={`${activeCard === 'petcare' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} p-6 flex flex-col justify-center bg-pink-600/5 backdrop-blur-xl transition-all duration-700 z-20 rounded-3xl md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                      <div className="scanline"></div>
                      <div className="relative z-10">
                        {/* Mobile Only Header */}
                        <div className="md:hidden mb-3">
                          <div className="text-pink-400 font-bold text-[9px] uppercase tracking-[0.3em] mb-1">Marketing Automation</div>
                          <h3 className="text-xl font-black uppercase tracking-tighter text-white">Pet Care Outreach</h3>
                        </div>

                        <h3 className="text-sm font-bold mb-2 text-pink-400 stagger-in stagger-delay-1">AI-Powered Scraping</h3>
                        <p className="text-gray-100 text-[10px] leading-relaxed mb-3 stagger-in stagger-delay-2">
                          Scraped <span className="text-white font-bold">3000+ UK pet care businesses</span>, extracted contact data, and 
                          <span className="text-pink-400 font-bold"> auto-drafted personalized emails</span> using AI for New Year outreach.
                        </p>
                        <div className={`${activeCard === 'petcare' ? 'flex' : 'hidden'} md:flex flex-wrap gap-1 stagger-in stagger-delay-3`}>
                          {['Web Scraping', 'AI Drafting', 'Excel'].map(tag => (
                            <span key={tag} className="text-[8px] px-2 py-0.5 bg-white/5 rounded border border-white/10 text-gray-400">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>


                        {/* Leelaks Games (Interactive) */}
            <div className="md:col-span-2 md:row-span-1 min-h-[140px] md:min-h-0">
              <Reveal className="h-full">
                <div className={`${activeCard === 'leelaks' ? 'bg-blue-500/10' : 'rainbow-border'} p-[1px] rounded-[1.5rem] h-full group relative overflow-hidden transition-all duration-500`} data-project-id="leelaks" onClick={() => toggleCard('leelaks')}>
                    <div className={`${isMobile && activeCard === 'leelaks' ? 'hidden' : 'flex'} bg-bg-dark text-white rounded-[1.5rem] h-full p-6 md:p-8 min-h-[140px] md:min-h-0 relative z-10 items-center justify-between transition-all duration-500 md:flex`}>
                        <div>
                            <div className="flex items-center gap-3 mb-1 md:mb-2">
                                <span className="text-2xl md:text-3xl animate-float">🎮</span>
                                <h3 className="text-xl md:text-2xl font-bold">
                                   Leelaks Games
                                </h3>
                            </div>
                            <p className="text-gray-500 text-[11px] md:text-sm">Self-taught Flutter - built leelaks.com to showcase games.</p>
                            
                            {/* Mobile Hint */}
                            <div className="md:hidden mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-blue-500">
                              <span>View Details</span>
                              <ChevronRight size={14} className="animate-bounce-x" />
                            </div>
                        </div>
                        <ChevronRight className="text-gray-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                     {/* Expanded State */}
                    <div className={`${activeCard === 'leelaks' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} bg-blue-600/10 backdrop-blur-xl p-6 m-2 z-20 flex flex-col justify-center rounded-3xl transition-all duration-700 md:group-hover:opacity-100 md:group-hover:pointer-events-auto !clip-path-none`}>
                        <div className="insight-grid absolute inset-0 opacity-20"></div>
                        <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <div>
                                    <h4 className="text-blue-400 font-bold text-xs uppercase stagger-in stagger-delay-1">Self-Taught Flutter + Web Dev</h4>
                                    <p className="text-[10px] text-gray-500 font-medium stagger-in stagger-delay-1">Fixed & Enhanced 7 Open-Source Games</p>
                                </div>
                                <div className="relative z-50 stagger-in stagger-delay-1">
                                    <a 
                                        href="https://leelaks.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-2 group/game px-6 py-2.5 bg-blue-500 text-white text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                                    >
                                        Visit Site <ChevronRight size={14} className="group-hover/game:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px] font-black uppercase tracking-tighter stagger-in stagger-delay-2">
                                {[
                                    { name: '2048', icon: '🔢' },
                                    { name: 'Tetris', icon: '🧱' },
                                    { name: 'Sudoku', icon: '🔢' },
                                    { name: 'Number Slide', icon: '🧩' },
                                    { name: 'Mine Sweeper', icon: '💣' },
                                    { name: 'Flappy Bird', icon: '🐦' },
                                    { name: 'Chess', icon: '♟️' },
                                ].map((g, i) => (
                                    <div key={g.name} className="bg-white/10 p-2.5 rounded flex items-center gap-2 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                                        <span className="text-base">{g.icon}</span>
                                        <span className="text-gray-100 font-bold">{g.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
              </Reveal>
            </div>

            {/* Automation & Awards */}
            <div className="md:col-span-2 md:row-span-1 min-h-[140px] md:min-h-0">
              <Reveal className="h-full">
                <TiltedCard 
                  containerHeight={isMobile ? "auto" : "100%"}
                  containerWidth="100%"
                  className="glass-panel border border-white/5"
                  rotateAmplitude={isMobile ? 0 : 3}
                  scaleOnHover={1}
                >
                  <div className="relative h-full w-full group flex flex-col" data-project-id="automation" onClick={() => toggleCard('automation')}>
                    {/* Default State */}
                    <div className={`${activeCard === 'automation' ? 'hidden' : 'flex'} p-6 md:p-8 items-center justify-between min-h-[140px] md:h-full transition-all duration-500 md:group-hover:opacity-10 md:flex`}>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Lunch Automation</h3>
                        <p className="text-gray-400 text-[10px] md:text-xs italic">Browser Extension • Workflow Import</p>
                        
                        {/* Mobile Hint */}
                        <div className="md:hidden mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-yellow-500">
                          <span>View Details</span>
                          <ChevronRight size={14} className="animate-bounce-x" />
                        </div>
                      </div>
                      <div className="text-yellow-500"><Zap /></div>
                    </div>

                    {/* Expanded State */}
                    <div className={`${activeCard === 'automation' ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'} p-6 md:p-8 flex flex-col justify-center bg-yellow-600/5 backdrop-blur-xl transition-all duration-700 z-20 rounded-3xl md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                      <div className="scanline"></div>
                      <div className="blueprint-bg absolute inset-0 opacity-20"></div>
                      <div className="relative z-10">
                        {/* Mobile Only Header */}
                        <div className="md:hidden mb-4">
                          <div className="text-yellow-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-1">Browser Automation</div>
                          <h3 className="text-xl font-black uppercase tracking-tighter text-white">Lunch Booking</h3>
                        </div>

                        <h3 className="text-lg font-bold mb-2 text-yellow-500 stagger-in stagger-delay-1 flex items-center gap-2">
                          <Cpu size={16} /> Automation for Everyone
                        </h3>
                        <p className="text-gray-100 text-[11px] leading-relaxed mb-4 stagger-in stagger-delay-2 tracking-tight">
                          Built a <span className="text-white font-black underline decoration-yellow-500/50">browser extension workflow</span> to automate daily lunch booking in our internal tool. 
                          Designed for <span className="text-yellow-500 font-bold">non-technical users</span> with simple import functionality. 
                          This innovation contributed to my <span className="text-white font-black">Innovative Employee Award Q4 2024</span>.
                        </p>
                        <div className={`${activeCard === 'automation' ? 'flex' : 'hidden'} md:flex flex-wrap gap-2 stagger-in stagger-delay-3`}>
                          {['Browser Extension', 'Workflow Automation', 'UX', 'Innovation'].map(tag => (
                            <span key={tag} className="tech-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>
        </div>
    </section>
  );
};

export default WorkModules;
