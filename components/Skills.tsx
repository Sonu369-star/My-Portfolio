
import React from 'react';
import { SKILLS } from '../constants';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'DevOps', 'Tools'];
  
  return (
    <section id="skills" className="py-32 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical <span className="gradient-text">Proficiency</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            "The tools we use define the boundaries of what we can create."
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <div key={cat} className="space-y-6">
                <h3 className="text-xl font-semibold border-l-2 border-blue-500 pl-4">{cat}</h3>
                <div className="space-y-4">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-[400px] w-full glass rounded-3xl p-8 hidden lg:block">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Core Competencies Radar</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={SKILLS.slice(0, 6)}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Radar
                  name="Proficiency"
                  dataKey="level"
                  stroke="#60a5fa"
                  fill="#3b82f6"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
