import React from 'react';
import { Target, Globe, Zap, Layers } from 'lucide-react';

const reasons = [
  {
    icon: <Target size={32} />,
    title: "Engineered Impact",
    description: "We don't just design; we calculate outcomes. Every pixel is placed with intent, backed by behavioral psychology."
  },
  {
    icon: <Globe size={32} />,
    title: "Borderless Collective",
    description: "A remote-first vanguard of award-winning designers bringing diverse cultural insights to every narrative."
  },
  {
    icon: <Zap size={32} />,
    title: "High Velocity",
    description: "Agile methodologies ensure high-fidelity prototypes reach stakeholders faster without compromising the craft."
  },
  {
    icon: <Layers size={32} />,
    title: "Atomic Systems",
    description: "We build living design systems, not just pages. Your digital presence is architected to scale from day one."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="bg-black text-white py-32 px-6 border-b border-white/10">
      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
            The<br/>Method
          </h2>
          <div className="h-1 w-32 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group border border-white/20 p-8 hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black">{index + 1}</span>
              </div>
              <div className="mb-8 text-white group-hover:text-black transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{reason.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-800 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;