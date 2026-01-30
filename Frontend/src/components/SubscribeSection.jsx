import React from "react";
import SendIcon from "../assets/send-icon.png";

const SubscribeSection = () => {
  return (
    <section
      id="subscribe"
      className="py-16 md:py-24 px-4 md:px-12 relative w-full overflow-hidden"
    >
      <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 grid grid-cols-3 gap-3 opacity-30 -z-10">
        {[...Array(9)].map((_, i) => (
          <span
            key={i}
            className="text-[#DFD7F9] text-xl md:text-2xl font-bold"
          >
            +
          </span>
        ))}
      </div>
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute inset-0 bg-[#DFD7F9] bg-opacity-20 rounded-tl-[40px] md:rounded-tl-[120px] rounded-[30px] md:rounded-[50px] overflow-hidden -z-10">
          <div className="absolute -bottom-16 -left-16 w-52 h-52 md:w-72 md:h-72 border border-[#DFD7F9] rounded-full opacity-60 pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-52 h-52 md:w-72 md:h-72 border border-[#DFD7F9] rounded-full opacity-60 pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 md:w-80 md:h-80 border border-[#DFD7F9] rounded-full opacity-60 pointer-events-none"></div>
          <div className="absolute -top-16 -right-16 w-60 h-60 md:w-80 md:h-80 border border-[#DFD7F9] rounded-full opacity-60 pointer-events-none"></div>
        </div>
        <div className="p-8 md:p-20 text-center relative z-10">
          <h2 className="text-[#5E6282] text-xl sm:text-2xl md:text-[33px] font-bold leading-snug max-w-2xl mx-auto mb-10 md:mb-14 font-serif">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-lg mx-auto">
            <div className="w-full relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#39425D"
                  className="w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-4 md:py-5 pl-12 pr-4 rounded-xl text-gray-700 bg-white border border-transparent focus:border-orange-300 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all shadow-sm"
              />
            </div>
            <button className="w-full md:w-auto bg-gradient-to-r from-[#FF946D] to-[#FF7D68] text-white font-semibold py-4 md:py-5 px-8 rounded-xl shadow-lg hover:shadow-orange-200 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20">
          <div className="relative w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-[#747DEF] to-[#5E3BE1] rounded-full flex items-center justify-center shadow-xl animate-bounce-slow">
            <img
              src={SendIcon}
              alt="Send Icon"
              className="w-6 h-6 md:w-10 md:h-10 object-contain rotate-[-20deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
