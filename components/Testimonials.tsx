import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "VANTAGE didn't just redesign our identity; they restructured our entire philosophy. The conceptual depth is unmatched.",
    author: "Elena Fisher",
    role: "CMO",
    company: "FutureLabs"
  },
  {
    id: 2,
    text: "Less like a vendor relationship, more like a creative symbiosis. They challenged us to be bolder.",
    author: "Marcus Chen",
    role: "Founder",
    company: "Archived.ai"
  },
  {
    id: 3,
    text: "From strategic inception to final execution, the process was seamless. The outcome defied expectations.",
    author: "Sarah Jenkins",
    role: "Creative Director",
    company: "Velvet Mode"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-black text-white py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 border-b border-white/20 pb-8">
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Shared<br/>Visions</h2>
           <p className="text-gray-400 font-mono mt-4 md:mt-0">DIALOGUES</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col justify-between h-full">
               <div className="mb-8">
                 <span className="text-yellow-500 text-6xl font-serif">"</span>
                 <p className="text-xl md:text-2xl font-light leading-snug -mt-6 relative z-10">
                   {t.text}
                 </p>
               </div>
               <div className="flex items-center gap-4 mt-8">
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-yellow-500">
                    {t.author.charAt(0)}
                 </div>
                 <div>
                   <h4 className="font-bold uppercase tracking-wider text-sm">{t.author}</h4>
                   <p className="text-xs text-gray-500 font-mono">{t.role} @ {t.company}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;