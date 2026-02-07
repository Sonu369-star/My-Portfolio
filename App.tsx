
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import { DEV_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Preview / Values Section */}
        <section id="about" className="py-24 border-y border-white/5">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">01</span>
                User Centric
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Design thinking isn't just for designers. I build with the end-user's friction points in mind, ensuring accessibility and performance.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">02</span>
                Scalable Architecture
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                From microservices to monorepos, I focus on building systems that grow without technical debt using clean code principles.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center text-sm">03</span>
                Rapid Innovation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Agile is more than a buzzword. I leverage modern tools and CI/CD to iterate quickly while maintaining high stability.
              </p>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {DEV_INFO.name}. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-1">Built with React, Tailwind and Gemini AI</p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Credits</a>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
