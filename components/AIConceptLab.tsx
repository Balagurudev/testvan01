import React, { useState } from 'react';
import { generateDesignStrategy } from '../services/gemini';
import { LoadingState } from '../types';
import { Sparkles, ArrowRight, Terminal } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const AIConceptLab: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [strategy, setStrategy] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setStatus(LoadingState.LOADING);
    setStrategy('');
    
    try {
      const result = await generateDesignStrategy(prompt);
      setStrategy(result || "No strategy generated. Please try again.");
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="concept-lab" className="py-32 px-6 bg-black text-white border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Input */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6 text-yellow-500">
              <Sparkles size={24} />
              <span className="text-sm font-bold uppercase tracking-widest">Neural Lab</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Synthetic<br/>Strategy
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Leverage our internal Gemini-powered engine to generate avant-garde design strategies. Input chaos. Output clarity.
            </p>

            <form onSubmit={handleSubmit} className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Initialize parameters (e.g., A brutalist coffee shop in Tokyo focused on silence...)"
                className="w-full bg-[#111] border border-white/20 p-6 text-lg min-h-[200px] outline-none focus:ring-2 ring-yellow-500/50 transition-all placeholder:text-gray-600 resize-none font-medium text-white"
              />
              <button
                type="submit"
                disabled={status === LoadingState.LOADING}
                className="absolute bottom-6 right-6 bg-white text-black p-4 hover:bg-yellow-500 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === LoadingState.LOADING ? (
                  <div className="animate-spin h-6 w-6 border-2 border-black border-t-transparent rounded-full" />
                ) : (
                  <ArrowRight size={24} />
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Output */}
          <div className="lg:w-1/2 min-h-[500px] bg-[#0a0a0a] text-gray-300 p-8 font-mono text-sm relative overflow-hidden shadow-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
              <Terminal size={16} />
              <span className="uppercase tracking-widest text-xs">Terminal Output // Gemini 3.0 Pro</span>
            </div>

            <div className="h-full overflow-y-auto pr-2 pb-12 custom-scrollbar">
              {status === LoadingState.IDLE && (
                <div className="h-full flex items-center justify-center opacity-30">
                  <p>Awaiting input stream...</p>
                </div>
              )}
              
              {status === LoadingState.LOADING && (
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 bg-gray-800 w-3/4"></div>
                  <div className="h-4 bg-gray-800 w-1/2"></div>
                  <div className="h-4 bg-gray-800 w-5/6"></div>
                  <div className="mt-8 text-yellow-500">
                    Processing [Budget: 32768 tokens]... analyzing semantics... generating references...
                  </div>
                </div>
              )}

              {status === LoadingState.SUCCESS && (
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>{strategy}</ReactMarkdown>
                </div>
              )}

              {status === LoadingState.ERROR && (
                <div className="text-red-500">
                  Error: Connection to neural engine failed. Please verify API configuration.
                </div>
              )}
            </div>
            
            {/* Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConceptLab;