import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group outline-none">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-all duration-500">
              <img
                src="/gym.jpg"
                alt="Oxygen Gym Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-heading text-xl md:text-2xl font-black tracking-tight text-white uppercase italic">
                OXYGEN<span className="text-blue-500">GYM</span>
              </span>
              <span className="text-[9px] text-gray-400 font-bold tracking-[0.3em] uppercase opacity-70">
                Karachi • Always Open
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-blue-400 relative py-2 group ${
                  isActive(item.path) ? 'text-blue-500' : 'text-gray-300'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 origin-right ${
                    isActive(item.path)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'
                  }`}
                />
              </Link>
            ))}

            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95"
            >
              JOIN NOW
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-[110]"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 z-[105] lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-10">
          <div className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                style={{ transitionDelay: `${i * 50}ms` }}
                className={`text-3xl font-heading font-black uppercase tracking-wider transition-all duration-500 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                } ${isActive(item.path) ? 'text-blue-500' : 'text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div
            className={`mt-auto pb-20 transition-all duration-500 delay-300 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-6">
              Connect with us
            </p>
            <div className="flex space-x-6 mb-10">
              {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                <span
                  key={social}
                  className="text-white font-bold text-sm hover:text-blue-500 transition-colors cursor-pointer"
                >
                  {social}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="block w-full text-center bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl"
            >
              Get Membership
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
