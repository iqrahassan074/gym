
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight, PlayCircle } from 'lucide-react';
import { HIGHLIGHTS, REVIEWS, GYM_INFO } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
            alt="Oxygen Gym Karachi Hero" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
            style={{ animationDuration: '8s' }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 mb-6 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
              <span className="text-blue-400 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Live: 24/7 Access Granted</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-heading font-black text-white leading-[0.9] mb-8 animate-slide-up">
              <span className="block">PUSH YOUR</span>
              <span className="block text-stroke hover:text-white transition-all duration-700 cursor-default">LIMITS</span>
              <span className="block text-blue-600">OXYGEN GYM</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-light animate-slide-up animation-delay-200">
              Transform your lifestyle at Karachi's most advanced 24/7 fitness facility. Expert guidance, premium machines, and zero excuses.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 animate-slide-up animation-delay-300">
              <Link 
                to="/contact" 
                className="group relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-4 active:scale-95"
              >
                Start Training Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link 
                to="/gallery" 
                className="group flex items-center justify-center gap-3 text-white font-black uppercase tracking-widest text-sm py-5 px-8 border border-white/20 rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
              >
                <PlayCircle size={24} className="text-blue-500" />
                See the Lab
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats - Desktop */}
        <div className="hidden lg:flex absolute bottom-12 right-12 z-20 items-center space-x-12 p-8 glass rounded-[2rem]">
           <div className="text-center">
             <span className="block text-3xl font-heading font-black text-white">4.6<span className="text-blue-500">★</span></span>
             <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Google Success</span>
           </div>
           <div className="w-px h-10 bg-white/10" />
           <div className="text-center">
             <span className="block text-3xl font-heading font-black text-white">24/7</span>
             <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Always Active</span>
           </div>
           <div className="w-px h-10 bg-white/10" />
           <div className="text-center">
             <span className="block text-3xl font-heading font-black text-white">0%</span>
             <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Excuses</span>
           </div>
        </div>
      </section>

      {/* Highlights - Modern Cards */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <div 
                key={index} 
                className="reveal glass p-10 rounded-[2.5rem] hover:bg-blue-600 group transition-all duration-700 cursor-default"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-8 p-4 bg-blue-600/10 rounded-2xl w-fit group-hover:bg-white/20 transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement<any>, {
                    className: "w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-500"
                  })}
                </div>
                <h3 className="text-2xl font-heading font-black text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature - Stylish Split */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-10 -left-10 text-[12rem] font-black text-stroke opacity-10 leading-none select-none hidden lg:block">OXYGEN</div>
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-video lg:aspect-square"
                alt="Gym Equipment"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 p-10 rounded-[2rem] z-20 shadow-2xl hidden md:block animate-float">
                 <span className="block text-5xl font-heading font-black text-white italic">PRO</span>
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-white/70">LEVEL GEAR</span>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-10 reveal">
              <div className="space-y-4">
                <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs">The Oxygen Standard</span>
                <h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-none">ELITE SPACE <br/> <span className="text-blue-600">REAL RESULTS</span></h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Oxygen Gym Karachi provides an unparalleled training environment. We don't just provide space; we provide the atmosphere required to break plateaus.
              </p>
              <ul className="space-y-5">
                {['Located inside Gaming Nexus', 'Premium Imported Equipment', 'Certified Professional Staff', '24/7 Unlimited Access'].map((t, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-bold group">
                    <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-block text-blue-500 font-black uppercase tracking-widest text-xs border-b-2 border-blue-600 pb-2 hover:text-white hover:border-white transition-all">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews - Marquee-like feel */}
      <section className="py-32 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">MEMBER <span className="text-blue-600">TESTIMONIALS</span></h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-blue-500 text-blue-500" />)}
            <span className="text-white font-black ml-2 uppercase tracking-widest text-sm">4.6/5 Satisfaction</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 px-6 max-w-[1400px] mx-auto">
          {REVIEWS.slice(0, 3).map((review, i) => (
            <div key={i} className="flex-1 glass p-10 rounded-[3rem] relative group hover:border-blue-500/50 transition-all duration-500">
              <div className="text-6xl text-blue-600/10 absolute top-6 left-6 font-serif">“</div>
              <p className="text-gray-300 italic mb-10 relative z-10 leading-relaxed text-lg">
                {review.text}
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-heading font-black text-white text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-white font-black uppercase text-sm">{review.name}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Active Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stylish CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto rounded-[4rem] bg-blue-600 p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.8] mb-8">NO MORE <br/> EXCUSES.</h2>
              <p className="text-white/80 text-lg md:text-xl font-medium max-w-sm">
                The best time to start was yesterday. The second best time is right now.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:justify-end">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl"
              >
                Join the Elite
              </Link>
              <a 
                href={`tel:${GYM_INFO.phone}`}
                className="w-full sm:w-auto bg-white/20 backdrop-blur-md text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/30 transition-all border border-white/20 text-center"
              >
                Direct Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
