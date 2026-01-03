import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import WorkGallery from './components/WorkGallery';
import Testimonials from './components/Testimonials';
import AIConceptLab from './components/AIConceptLab';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen relative bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero3D />
      <Services />
      <WhyChooseUs />
      <WorkGallery />
      <Testimonials />
      
      {/* Marquee Divider */}
      <section className="bg-black text-white py-24 overflow-hidden border-t border-white/10">
        <div className="whitespace-nowrap animate-[scroll_20s_linear_infinite] hover:pause">
           <div className="inline-block">
             <span className="text-8xl font-black uppercase tracking-tight mx-8">Inspiring Visions</span>
             <span className="text-8xl font-black uppercase tracking-tight mx-8 text-transparent stroke-white" style={{WebkitTextStroke: '2px white'}}>Redefining Digital</span>
             <span className="text-8xl font-black uppercase tracking-tight mx-8">Future Aesthetics</span>
             <span className="text-8xl font-black uppercase tracking-tight mx-8 text-transparent stroke-white" style={{WebkitTextStroke: '2px white'}}>Beyond Limits</span>
           </div>
           <div className="inline-block">
             <span className="text-8xl font-black uppercase tracking-tight mx-8">Inspiring Visions</span>
             <span className="text-8xl font-black uppercase tracking-tight mx-8 text-transparent stroke-white" style={{WebkitTextStroke: '2px white'}}>Redefining Digital</span>
             <span className="text-8xl font-black uppercase tracking-tight mx-8">Future Aesthetics</span>
             <span className="text-8xl font-black uppercase tracking-tight mx-8 text-transparent stroke-white" style={{WebkitTextStroke: '2px white'}}>Beyond Limits</span>
           </div>
        </div>
      </section>
      
      <AIConceptLab />
      <Footer />
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}

export default App;