
import React from 'react';
import { DEV_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's build <br /><span className="gradient-text">something great.</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase font-bold">Email</h4>
                  <a href={`mailto:${DEV_INFO.email}`} className="text-xl font-medium hover:text-blue-400 transition-colors">{DEV_INFO.email}</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-purple-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase font-bold">Location</h4>
                  <p className="text-xl font-medium">San Francisco, CA / Remote</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              {Object.entries(DEV_INFO.socials).map(([name, url]) => (
                <a key={name} href={url} target="_blank" className="p-4 glass rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1">
                  <span className="capitalize text-sm font-bold">{name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="glass p-10 rounded-[40px] border-white/5 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">Name</label>
                  <input type="text" className="w-full bg-gray-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">Email</label>
                  <input type="email" className="w-full bg-gray-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">Subject</label>
                <input type="text" className="w-full bg-gray-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all" placeholder="Collaboration Project" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">Message</label>
                <textarea rows={5} className="w-full bg-gray-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all resize-none" placeholder="Tell me about your idea..."></textarea>
              </div>
              
              <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:opacity-90 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3">
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
