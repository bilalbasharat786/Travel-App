import React from 'react';
import SendIcon from '../assets/send-icon.png';

const SubscribeSection = () => {
  return (
    <section id="hotels" className="py-20 px-6 md:px-12 relative w-full overflow-hidden">
      <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 grid grid-cols-3 gap-2 opacity-30 -z-10">
        {[...Array(9)].map((_, i) => (
          <span key={i} className="text-[#DFD7F9] text-xl font-bold">+</span>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative bg-[#DFD7F9] bg-opacity-20 rounded-tl-[100px] rounded-3xl p-10 md:p-20 text-center overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-64 h-64 border border-[#DFD7F9] rounded-full opacity-80 pointer-events-none"></div>
         <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-[#DFD7F9] rounded-full opacity-80 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 border border-[#DFD7F9] rounded-full opacity-80 pointer-events-none"></div>
        <div className="absolute -bottom-28 -left-28 w-64 h-64 border border-[#DFD7F9] rounded-full opacity-80 pointer-events-none"></div>
         <div className="absolute -top-28 -right-28 w-72 h-72 border border-[#DFD7F9] rounded-full opacity-80 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-72 h-72 border border-[#DFD7F9] rounded-full opacity-80 pointer-events-none"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 border border-[#DFD7F9] rounded-full opacity-80 pointer-events-none"></div>
        <div className="absolute -top-16 -right-16 w-72 h-72 border border-[#DFD7F9] rounded-full opacity-80 pointer-events-none"></div>

        <h2 className="text-[#5E6282] text-xl md:text-3xl font-bold leading-relaxed max-w-2xl mx-auto mb-10 mt-4 relative z-10">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-lg mx-auto relative z-10">
          <div className="w-full relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#39425D" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full py-4 pl-12 pr-4 rounded-xl text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 shadow-sm"
            />
          </div>
          <button className="w-full md:w-auto bg-gradient-to-r from-[#FF946D] to-[#FF7D68] text-white font-medium py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all">
            Subscribe
          </button>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none">
          <img 
            src={SendIcon} 
            alt="Send Icon"
            className="absolute -top-6 -right-6 md:top-[-25px] md:right-[-25px] w-16 h-16 md:w-20 md:h-20 z-20 drop-shadow-xl pointer-events-auto"
          />
      </div>

    </section>
  );
};

export default SubscribeSection;