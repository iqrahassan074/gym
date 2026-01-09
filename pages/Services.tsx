
import React from 'react';
import { SERVICES, HIGHLIGHTS } from '../constants.tsx';
import { Dumbbell, Users, HeartPulse, Sparkles, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">WHAT WE OFFER</span>
          <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-6">OUR <span className="text-blue-600">SERVICES</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Everything you need to transform your body and mind, available 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Featured Services */}
        <div className="space-y-24 mb-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-white">{service.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Professional Guidance",
                    "Modern Equipment",
                    "Hygienic Space",
                    "Goal Trackers"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-white">
                      <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all mt-4">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Grid */}
        <div className="bg-zinc-950 p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white text-center mb-16">PREMIUM <span className="text-blue-600">FACILITIES</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="bg-zinc-900 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto shadow-lg group hover:bg-blue-600 transition-all cursor-default">
                <Sparkles className="text-blue-500 group-hover:text-white w-10 h-10 transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">Hygienic Space</h3>
              <p className="text-gray-500 leading-relaxed">
                Regularly sanitized and maintained environment to ensure the health and safety of our members.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="bg-zinc-900 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto shadow-lg group hover:bg-blue-600 transition-all cursor-default">
                <Users className="text-blue-500 group-hover:text-white w-10 h-10 transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">Professional Staff</h3>
              <p className="text-gray-500 leading-relaxed">
                Expert trainers and friendly support staff always ready to guide you towards your goals.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="bg-zinc-900 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto shadow-lg group hover:bg-blue-600 transition-all cursor-default">
                <Dumbbell className="text-blue-500 group-hover:text-white w-10 h-10 transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">Best Equipment</h3>
              <p className="text-gray-500 leading-relaxed">
                A massive selection of premium brand equipment designed for safety and maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
