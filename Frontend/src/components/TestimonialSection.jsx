import React from "react";
import MikeTaylorImg from "../assets/mike-taylor.png";
import AxonLogo from "../assets/axon.png";
import JetstarLogo from "../assets/jetstar.png";
import ExpediaLogo from "../assets/expedia.png";
import QantasLogo from "../assets/qantas.png";
import AlitaliaLogo from "../assets/alitalia.png";

const TestimonialSection = () => {
  return (
    <section className="py-10 md:py-20 px-6 md:px-12 lg:px-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h4 className="uppercase tracking-widest text-[#5E6282] text-sm font-bold mb-2 md:mb-4">
              Testimonials
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-[#181E4B] leading-tight mb-8 font-serif">
              What People Say <br className="hidden lg:block" /> About Us.
            </h2>
            <div className="flex justify-center lg:justify-start gap-4 mt-6 lg:mt-10">
              <span className="w-3 h-3 rounded-full bg-[#392C7D] cursor-pointer hover:scale-125 transition-transform"></span>
              <span className="w-3 h-3 rounded-full bg-[#E5E5E5] cursor-pointer hover:bg-[#392C7D] transition-colors"></span>
              <span className="w-3 h-3 rounded-full bg-[#E5E5E5] cursor-pointer hover:bg-[#392C7D] transition-colors"></span>
            </div>
          </div>
          <div className="relative w-full flex flex-col items-center lg:items-end mt-10 lg:mt-0">
            <div className="absolute top-[-40px] right-0 lg:right-[-20px] w-full max-w-[400px] p-6 md:p-8 border border-gray-100 rounded-[20px] bg-white shadow-sm -z-10 opacity-60 hidden md:block">
              <h5 className="font-bold text-[#5E6282]">Chris Thomas</h5>
              <p className="text-[#5E6282] text-sm">CEO of Red Button</p>
            </div>
            <div className="relative w-full max-w-[450px] bg-white p-8 md:p-9 rounded-[20px] shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_41px_33px_rgba(0,0,0,0.01)] border border-gray-50 z-10">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:-top-8 lg:-left-8 lg:translate-x-0">
                <img
                  src={MikeTaylorImg}
                  alt="Mike Taylor"
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <p className="text-[#5E6282] leading-relaxed mb-8 mt-6 lg:mt-2 text-base font-medium">
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <div>
                <h5 className="font-bold text-[#181E4B] text-lg leading-none mb-2">
                  Mike taylor
                </h5>
                <p className="text-[#5E6282] text-sm">Lahore, Pakistan</p>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-4 absolute top-1/2 -right-16 -translate-y-1/2 text-[#BCB7C2]">
              <button className="hover:text-[#392C7D] transition-colors hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
              <button className="hover:text-[#392C7D] transition-colors hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-32 flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
          <img
            src={AxonLogo}
            alt="Axon"
            className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
          <img
            src={JetstarLogo}
            alt="Jetstar"
            className="h-20 md:h-24  object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
          <img
            src={ExpediaLogo}
            alt="Expedia"
            className="h-20 md:h-24  object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
          <img
            src={QantasLogo}
            alt="Qantas"
            className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
          <img
            src={AlitaliaLogo}
            alt="Alitalia"
            className="h-5 md:h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
