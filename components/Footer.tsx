import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-32">
          <div className="md:w-1/2 mb-16 md:mb-0">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              Define<br/>Your<br/>Horizon.
            </h2>
            <a href="mailto:hello@vantage.studio" className="inline-flex items-center gap-4 text-2xl border-b border-white pb-2 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
              hello@vantage.studio <ArrowUpRight />
            </a>
          </div>
          
          <div className="md:w-1/3 flex flex-col justify-between">
             <div className="grid grid-cols-2 gap-12">
               <div>
                 <h4 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-6">Sitemap</h4>
                 <ul className="space-y-4 text-lg font-medium">
                   <li><a href="#work" className="hover:text-yellow-400 transition-colors">Index</a></li>
                   <li><a href="#services" className="hover:text-yellow-400 transition-colors">Capabilities</a></li>
                   <li><a href="#concept-lab" className="hover:text-yellow-400 transition-colors">Neural Lab</a></li>
                   <li><a href="#about" className="hover:text-yellow-400 transition-colors">Studio</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-6">Socials</h4>
                 <ul className="space-y-4 text-lg font-medium">
                   <li><a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><Instagram size={18} /> Instagram</a></li>
                   <li><a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><Twitter size={18} /> Twitter</a></li>
                   <li><a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><Linkedin size={18} /> LinkedIn</a></li>
                 </ul>
               </div>
             </div>
             
             <div className="mt-16 md:mt-0">
               <p className="text-gray-500 max-w-xs">
                 123 Design Avenue, Creative District<br/>
                 New York, NY 10012
               </p>
             </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono uppercase">
          <p>&copy; 2024 VANTAGE Studio. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
        
        <div className="mt-24">
          <h1 className="text-[14vw] font-black leading-none tracking-tighter text-center opacity-20 select-none text-transparent stroke-white" style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
            VANTAGE
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;