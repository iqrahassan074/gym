
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Phone, MapPin, Mail, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';
import { GYM_INFO, NAV_ITEMS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <Dumbbell className="text-white w-7 h-7" />
              </div>
              <span className="font-heading text-3xl font-black tracking-tighter text-white uppercase italic">
                OXYGEN<span className="text-blue-500">GYM</span>
              </span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
              We provide the tools, the atmosphere, and the expertise. You provide the effort. Join Karachi's most advanced 24/7 training facility.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 glass flex items-center justify-center rounded-2xl hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav & Contact Info */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-heading text-sm font-bold text-blue-500 tracking-[0.3em] uppercase mb-8">Navigation</h4>
              <ul className="grid grid-cols-2 gap-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-300 hover:text-white transition-colors text-sm font-semibold flex items-center group">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 scale-0 group-hover:scale-100 transition-transform"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-heading text-sm font-bold text-blue-500 tracking-[0.3em] uppercase mb-2">The Base</h4>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GYM_INFO.address)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-start group space-x-4"
              >
                <div className="bg-white/5 p-3 rounded-xl group-hover:bg-blue-600/10 transition-colors">
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1 flex items-center gap-1 group-hover:text-blue-500 transition-colors">
                    Locate Us <ArrowUpRight size={14} />
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">{GYM_INFO.address}</p>
                </div>
              </a>
              <div className="flex items-center group space-x-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <Phone size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Direct Line</p>
                  <p className="text-gray-400 text-xs">{GYM_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
          <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} OXYGEN GYM KARACHI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
