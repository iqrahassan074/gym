
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { GYM_INFO } from '../constants.tsx';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Operation Center</span>
          <h1 className="text-5xl md:text-9xl font-heading font-black text-white mb-6 uppercase leading-none">READY FOR <br/> <span className="text-stroke hover:text-white transition-all duration-700">BATTLE?</span></h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Located in the heart of Gulshan-e-Iqbal. Visit us today for a free tour of the facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass p-10 rounded-[2.5rem] h-full flex flex-col justify-between space-y-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Dumbbell size={150} className="text-white" />
              </div>
              
              <div className="space-y-10 relative z-10">
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="bg-blue-600 p-4 rounded-2xl h-fit shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                      <MapPin className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] mb-2">Location</p>
                      <p className="text-white font-bold leading-relaxed">{GYM_INFO.address}</p>
                      <p className="text-gray-500 text-xs mt-1 italic">{GYM_INFO.locationDetails}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="bg-blue-600 p-4 rounded-2xl h-fit shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                      <Phone className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] mb-2">Call the Lab</p>
                      <p className="text-white font-black text-2xl tracking-tighter hover:text-blue-400 transition-colors">{GYM_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="bg-blue-600 p-4 rounded-2xl h-fit shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                      <Clock className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] mb-2">Always Active</p>
                      <p className="text-white font-black text-xl uppercase italic">24 HOURS / 7 DAYS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 relative z-10">
                 <div className="w-full h-48 rounded-[2rem] overflow-hidden border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.397036237691!2d67.0945532!3d24.9185121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338da1364d995%3A0xe67000e474581177!2sOxygen%20Gym%2024%2F7!5e0!3m2!1sen!2s!4v1709400000000!5m2!1sen!2s" 
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                    />
                 </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8">
            <div className="glass p-8 md:p-16 rounded-[3.5rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
               <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-12">TRANSMIT <span className="text-blue-600">INQUIRY</span></h3>
               
               <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="space-y-3 group">
                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4 group-focus-within:text-blue-500 transition-colors">Your Full Identity</label>
                     <input 
                       type="text" required placeholder="Ali Riaz"
                       className="w-full bg-white/5 border-b border-white/10 focus:border-blue-600 px-6 py-4 text-white font-medium focus:outline-none transition-all placeholder:text-gray-700"
                     />
                   </div>
                   <div className="space-y-3 group">
                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4 group-focus-within:text-blue-500 transition-colors">Digital Mail</label>
                     <input 
                       type="email" required placeholder="ali@gym.com"
                       className="w-full bg-white/5 border-b border-white/10 focus:border-blue-600 px-6 py-4 text-white font-medium focus:outline-none transition-all placeholder:text-gray-700"
                     />
                   </div>
                 </div>

                 <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">Deployment Area</label>
                   <select className="w-full bg-white/5 border-b border-white/10 focus:border-blue-600 px-6 py-4 text-white font-medium focus:outline-none transition-all appearance-none cursor-pointer">
                     <option className="bg-zinc-900">New Membership</option>
                     <option className="bg-zinc-900">Personal Training Elite</option>
                     <option className="bg-zinc-900">Corporate Partnership</option>
                     <option className="bg-zinc-900">General Inquiry</option>
                   </select>
                 </div>

                 <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">Objectives & Goals</label>
                   <textarea 
                     rows={4} required placeholder="Describe your target..."
                     className="w-full bg-white/5 border border-white/10 rounded-3xl focus:border-blue-600 px-6 py-5 text-white font-medium focus:outline-none transition-all resize-none placeholder:text-gray-700"
                   />
                 </div>

                 <button 
                   type="submit" disabled={formState !== 'idle'}
                   className={`w-full py-6 rounded-3xl font-black uppercase tracking-[0.4em] text-sm transition-all flex items-center justify-center gap-4 ${
                     formState === 'sent' 
                       ? 'bg-green-600 text-white' 
                       : 'bg-blue-600 hover:bg-blue-500 text-white shadow-2xl active:scale-95'
                   }`}
                 >
                   {formState === 'idle' && <><Send size={18} /> Send Data</>}
                   {formState === 'sending' && <Loader2 size={24} className="animate-spin" />}
                   {formState === 'sent' && <><CheckCircle size={20} /> Transmission Success</>}
                 </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dumbbell = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.767a2 2 0 1 1-2.829-2.828l-1.767 1.767a2 2 0 1 1-2.829-2.828l1.768-1.767a2 2 0 1 1-2.828-2.829"/><path d="m21.5 2.5-11.4 11.4"/><path d="m18.1 5.9-4.3 4.3"/><path d="m15.5 8.5-1.4 1.4"/>
  </svg>
);

export default Contact;
