import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter uppercase relative z-50 text-white">
          VANTAGE Studio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          {[
            { label: 'Capabilities', href: '#services' },
            { label: 'The Studio', href: '#about' },
            { label: 'Index', href: '#work' },
            { label: 'Neural Lab', href: '#concept-lab' }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-bold uppercase tracking-widest text-white hover:text-gray-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all">
            Initiate
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8">
             {[
               { label: 'Capabilities', href: '#services' },
               { label: 'The Studio', href: '#about' },
               { label: 'Index', href: '#work' },
               { label: 'Neural Lab', href: '#concept-lab' }
             ].map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-4xl font-black uppercase tracking-tighter text-white hover:text-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;