import React, { useEffect, useRef, useState } from 'react';

const images = {
  col1: [
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop", // B&W Fashion
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop", // Astronaut
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop", // Dark Texture
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", // Neon
  ],
  col2: [
    "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=800&auto=format&fit=crop", // 3D Shape
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop", // Ocean Waves
    "https://images.unsplash.com/photo-1516640826920-56160562e86d?q=80&w=800&auto=format&fit=crop", // Floating Rock
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=800&auto=format&fit=crop", // Light
  ],
  col3: [
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop", // Green Car
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop", // Red Arches
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop", // Blue Chair
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", // Portrait
  ],
  col4: [
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop", // Silhouette
    "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=800&auto=format&fit=crop", // White Figure
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", // Colorful Cyberpunk
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=800&auto=format&fit=crop", // People
  ]
};

const ParallaxGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate offset relative to viewport center
        const scrollCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        setOffset(elementCenter - scrollCenter);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="bg-black relative z-20 pt-32 pb-32">
      
      {/* Section Header - UX Principle: Hierarchy & Grouping */}
      {/* High Z-index ensures text stays on top, solid background prevents bleed */}
      <div className="container mx-auto px-6 md:px-12 mb-20 relative z-50">
          <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 bg-black">
              <div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                     <span className="text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase">01 — Selected Works</span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                    Featured<br/>Projects
                  </h2>
              </div>
              <p className="text-zinc-400 max-w-sm text-left md:text-right mt-8 md:mt-0 font-light text-sm md:text-base leading-relaxed">
                  A curation of avant-garde visual explorations, redefining the digital landscape through light, form, and code.
              </p>
          </div>
      </div>

      {/* Gallery Container - UX Principle: Containment */}
      {/* overflow-hidden creates a strict viewport, preventing images from floating up into the header */}
      <div className="relative w-full overflow-hidden py-12">
          
          {/* Top Fade Mask */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/90 to-transparent z-40 pointer-events-none"></div>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 pointer-events-none z-30 bg-radial-gradient from-transparent via-black/10 to-black/80"></div>

          {/* Tilted Grid Container */}
          {/* Increased top margin to ensure grid starts well below the header area */}
          <div 
            className="w-[120%] -ml-[10%] grid grid-cols-4 gap-4 md:gap-6 transform-gpu opacity-90"
            style={{ 
                transform: `perspective(1000px) rotateZ(-3deg) rotateY(4deg) rotateX(2deg) scale(1.1)` 
            }}
          >
            
            {/* Column 1 - Fast Up - Starts lower (mt-24) to avoid overlap */}
            <div 
                className="flex flex-col gap-4 md:gap-6 will-change-transform mt-24" 
                style={{ transform: `translateY(${offset * -0.1}px)` }}
            >
                {images.col1.map((src, i) => (
                    <div key={i} className="relative overflow-hidden rounded-sm shadow-2xl group">
                        <img 
                            src={src} 
                            alt="Visual" 
                            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out" 
                        />
                    </div>
                ))}
            </div>

            {/* Column 2 - Slow Down - Added substantial margin to stagger */}
            <div 
                className="flex flex-col gap-4 md:gap-6 will-change-transform mt-64" 
                style={{ transform: `translateY(${offset * 0.05}px)` }}
            >
                {images.col2.map((src, i) => (
                    <div key={i} className="relative overflow-hidden rounded-sm shadow-2xl group">
                        <img 
                            src={src} 
                            alt="Visual" 
                            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out" 
                        />
                    </div>
                ))}
            </div>

            {/* Column 3 - Fast Up - Starts lower */}
            <div 
                className="flex flex-col gap-4 md:gap-6 will-change-transform mt-48" 
                style={{ transform: `translateY(${offset * -0.08}px)` }}
            >
                {images.col3.map((src, i) => (
                    <div key={i} className="relative overflow-hidden rounded-sm shadow-2xl group">
                        <img 
                            src={src} 
                            alt="Visual" 
                            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out" 
                        />
                    </div>
                ))}
            </div>

            {/* Column 4 - Slow Down - Starts very low */}
            <div 
                className="flex flex-col gap-4 md:gap-6 will-change-transform mt-96" 
                style={{ transform: `translateY(${offset * 0.06}px)` }}
            >
                {images.col4.map((src, i) => (
                    <div key={i} className="relative overflow-hidden rounded-sm shadow-2xl group">
                        <img 
                            src={src} 
                            alt="Visual" 
                            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out" 
                        />
                    </div>
                ))}
            </div>

          </div>

          {/* Bottom Fade Mask */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none"></div>

      </div>
    </div>
  );
};

export default ParallaxGallery;
