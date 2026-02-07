
import React from 'react';
import { DEV_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Engineering <span className="gradient-text">Experiences</span> that matter.
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg">
            Hi, I'm {DEV_INFO.name}. A {DEV_INFO.role} passionate about building scalable web applications and intuitive interfaces.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#contact" className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          <div className="w-72 h-72 md:w-[450px] md:h-[450px] relative">
            {/* Animated border ring */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gray-800 animate-float shadow-2xl">
              <img 
                src="https://picsum.photos/seed/alex/800/800" 
                alt={DEV_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
