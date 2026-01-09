
import React, { useState } from 'react';
import { GALLERY } from '../constants.tsx';
import { Expand, X, ArrowRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const categories = ['All', ...new Set(GALLERY.map(img => img.category))];
  const filteredImages = filter === 'All' ? GALLERY : GALLERY.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 reveal">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Visual Tour</span>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-white leading-none mb-8">THE <span className="text-outline hover:text-white transition-all duration-700">LAB.</span></h1>
            <p className="text-gray-400 text-lg md:text-xl font-light">
              Explore our state-of-the-art facility. From high-performance strength zones to elite cardio spaces, every inch of Oxygen is designed for results.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  filter === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-transparent border-white/10 text-gray-500 hover:border-blue-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="reveal relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5"
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white text-blue-600 p-4 rounded-full mx-auto mb-4 w-fit shadow-xl">
                    <Expand size={24} />
                  </div>
                  <span className="text-white font-black uppercase tracking-[0.3em] text-[10px] block">{img.category}</span>
                </div>
              </div>
              <div className="absolute bottom-10 left-10 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-white font-heading text-2xl font-black italic tracking-tight">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[300] bg-black/98 flex items-center justify-center p-6 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white hover:text-blue-500 transition-colors p-4 bg-white/5 rounded-2xl border border-white/10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[80vh] rounded-[3rem] shadow-2xl animate-in zoom-in duration-500 border border-white/10"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
