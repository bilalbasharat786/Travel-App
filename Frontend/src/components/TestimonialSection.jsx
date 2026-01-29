import React from "react";
import MikeTaylorImg from "../assets/mike-taylor.png";
import AxonLogo from "../assets/axon.png";
import JetstarLogo from "../assets/jetstar.png";
import ExpediaLogo from "../assets/expedia.png";
import QantasLogo from "../assets/qantas.png";
import AlitaliaLogo from "../assets/alitalia.png";

const TestimonialSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h4 className="uppercase tracking-widest text-gray-500 text-sm font-semibold mb-4">
              Testimonials
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] leading-tight mb-8">
              What People Say <br className="hidden md:block" /> About Us.
            </h2>

            <div className="flex gap-4 mt-10">
              <span className="w-3 h-3 rounded-full bg-[#392C7D]"></span>
              <span className="w-3 h-3 rounded-full bg-gray-200 cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-gray-200 cursor-pointer"></span>
            </div>
          </div>

          <div className="relative h-[350px] flex items-center justify-center">
            <div className="absolute top-10 left-10 w-full max-w-md p-8 border border-gray-100 rounded-2xl bg-white shadow-sm -z-10 translate-x-4 translate-y-4 hidden md:block">
              <h5 className="font-bold text-gray-700">Chris Thomas</h5>
              <p className="text-gray-400 text-sm">CEO of Red Button</p>
            </div>

            <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-50">
              <div className="absolute -top-6 -left-6">
                <img
                  src={MikeTaylorImg}
                  alt="Mike Taylor"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>

              <div>
                <h5 className="font-bold text-[#5E6282] text-lg leading-none">
                  Mike taylor
                </h5>
                <p className="text-gray-400 text-sm mt-1">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="absolute right-[-20px] md:right-[-40px] flex flex-col gap-6 text-gray-400">
              <button className="hover:text-black transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
              <button className="hover:text-black transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
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
        <div className="mt-24 flex flex-wrap justify-center items-center gap-8 md:gap-8 lg:justify-around  hover:opacity-100 transition-all duration-500">
          <img
            src={AxonLogo}
            alt="Axon"
            className="h-30 md:h-36 object-contain"
          />
          <img
            src={JetstarLogo}
            alt="Jetstar"
            className="h-30 md:h-36 object-contain"
          />
          <img
            src={ExpediaLogo}
            alt="Expedia"
            className="h-30 md:h-36 object-contain scale-110"
          />
          <img
            src={QantasLogo}
            alt="Qantas"
            className="h-8 md:h-10 object-contain"
          />
          <img
            src={AlitaliaLogo}
            alt="Alitalia"
            className="h-8 md:h-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
