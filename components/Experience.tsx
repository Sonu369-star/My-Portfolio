
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-gray-950/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">Career <span className="gradient-text">Milestones</span></h2>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500 to-purple-600 md:left-1/2"></div>
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 space-y-4">
                  <div className={`glass p-8 rounded-3xl relative transition-all hover:border-white/20 group`}>
                    {/* Dot on line */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10 hidden md:block ${idx % 2 === 0 ? '-left-[42px]' : '-right-[42px]'}`}></div>
                    
                    <span className="text-xs font-mono text-blue-400 mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-lg text-white/80 font-medium mb-4">{exp.company}</p>
                    
                    <ul className="space-y-3 text-sm text-gray-400 list-disc pl-4 leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
