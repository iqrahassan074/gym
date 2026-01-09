
import React from 'react';
import { Target, Eye, ShieldCheck, MapPin, Dumbbell, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-32 bg-black overflow-hidden">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-32 reveal">
        <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Our Origin</span>
        <h1 className="text-7xl md:text-[10rem] font-heading font-black text-white mb-10 leading-[0.85] uppercase">
          THE <br/> <span className="text-outline hover:text-white transition-all duration-1000">DNA OF</span> <br/> <span className="text-blue-600">OXYGEN.</span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
          More than a gym, we are a high-performance environment dedicated to the pursuit of physical excellence in Karachi.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Core Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40 items-center">
          <div className="lg:col-span-7 relative reveal">
             <div className="absolute -top-10 -left-10 text-[15rem] font-heading font-black text-white/5 leading-none select-none">EST.</div>
             <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200" 
              alt="Elite Equipment" 
              className="rounded-[3.5rem] shadow-2xl relative z-10 w-full aspect-video lg:aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[3rem] z-20 hidden md:block">
               <span className="block text-5xl font-heading font-black text-blue-600 italic">24/7</span>
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">NEVER CLOSED.</span>
            </div>
          </div>
          
          <div className="lg:col-span-5 space-y-10 reveal">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight">KARACHI'S MOST RELIABLE <span className="text-blue-500">TRAINING GROUND</span></h2>
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Oxygen Gym Karachi was founded on a simple principle: high-performance training shouldn't have a curfew. We built a space that caters to early birds and night owls alike.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Located inside <span className="text-white font-bold">Gaming Nexus, Gulshan-e-Iqbal</span>, our facility is engineered to keep you focused. Every machine, every light, and every trainer is here to maximize your output.
              </p>
            </div>
            <div className="flex gap-12 pt-8">
              <div>
                <span className="block text-4xl font-heading font-black text-white italic">19+</span>
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Global Reviews</span>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <span className="block text-4xl font-heading font-black text-white italic">4.6</span>
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Star Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission/Vision - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          <div className="reveal glass p-16 rounded-[4rem] group hover:border-blue-600/30 transition-all duration-700">
            <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110">
              <Target size={32} className="text-white" />
            </div>
            <h3 className="text-4xl font-heading font-black text-white mb-6">THE MISSION</h3>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              To dismantle every obstacle between you and your peak physique. We provide 24/7 access to world-class equipment so that "time" is never an excuse.
            </p>
          </div>
          <div className="reveal glass p-16 rounded-[4rem] group hover:border-blue-600/30 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
            <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110">
              <Eye size={32} className="text-white" />
            </div>
            <h3 className="text-4xl font-heading font-black text-white mb-6">THE VISION</h3>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              To set the gold standard for fitness in Pakistan, merging elite imported hardware with a professional atmosphere that motivates the dedicated.
            </p>
          </div>
        </div>

        {/* Location Spotlight */}
        <div className="reveal relative rounded-[4rem] overflow-hidden group">
          <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/5 transition-all duration-700"></div>
          <div className="relative z-10 p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] block">Prime HQ</span>
              <h3 className="text-5xl md:text-7xl font-heading font-black text-white leading-none uppercase italic">GULSHAN'S <br/> <span className="text-blue-600">FINEST.</span></h3>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                We are strategically located inside Gaming Nexus, Block 1, Gulshan-e-Iqbal. Safety, accessibility, and a massive floor space.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 text-white group cursor-default">
                  <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform"><MapPin size={24} /></div>
                  <span className="text-lg font-bold">{GYM_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-6 text-white group cursor-default">
                  <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform"><ShieldCheck size={24} /></div>
                  <span className="text-lg font-bold">Secure Professional Environment</span>
                </div>
              </div>
            </div>
            <div className="glass aspect-video lg:aspect-square rounded-[3rem] overflow-hidden p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.397036237691!2d67.0945532!3d24.9185121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338da1364d995%3A0xe67000e474581177!2sOxygen%20Gym%2024%2F7!5e0!3m2!1sen!2s!4v1709400000000!5m2!1sen!2s" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="rounded-[2.5rem] grayscale invert"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
