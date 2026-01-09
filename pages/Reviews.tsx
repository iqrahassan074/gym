
import React from 'react';
import { REVIEWS, GYM_INFO } from '../constants';
import { Star, MessageSquareQuote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Header */}
        <div className="bg-zinc-950 p-12 md:p-20 rounded-[4rem] border border-white/5 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
            <div className="space-y-2">
              <span className="text-7xl font-heading font-black text-white">{GYM_INFO.googleRating}</span>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-blue-500 text-blue-500 w-6 h-6" />)}
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs pt-2">GOOGLE RATING</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0 space-y-2">
              <span className="text-7xl font-heading font-black text-white">{GYM_INFO.reviewCount}</span>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">TOTAL REVIEWS</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-white uppercase tracking-widest">REAL VOICES</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                We're proud to maintain a 4.6 star rating, reflecting our commitment to cleanliness, professionalism, and results.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-6 uppercase">MEMBER <span className="text-blue-600">STORIES</span></h1>
          <p className="text-gray-400 text-lg">Hear from those who have transformed their lives at Oxygen Gym.</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-zinc-900/50 p-10 rounded-[3rem] border border-white/5 relative group hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
              <MessageSquareQuote className="absolute top-6 right-8 text-blue-600/20 w-16 h-16 group-hover:text-blue-600/40 transition-colors" />
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="fill-blue-500 text-blue-500 w-4 h-4" />)}
              </div>
              <p className="text-gray-300 italic mb-10 leading-relaxed text-lg relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-4 border-t border-white/5 pt-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center font-heading font-bold text-white text-2xl shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{review.name}</h4>
                  <p className="text-blue-500 text-xs font-bold uppercase tracking-widest">Verified Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-20 text-center bg-zinc-900 py-10 rounded-3xl border border-white/5">
          <p className="text-gray-400">
            Want to share your experience? <a href="#" className="text-blue-500 font-bold hover:underline">Leave a review on Google Maps</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
