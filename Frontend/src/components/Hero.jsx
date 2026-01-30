import React from "react";
import HeroImage from "../assets/hero-img.png";
import DecoreImage from "../assets/decore.png";
import flightIcon from "../assets/flight-icon.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center bg-white overflow-hidden pt-20 lg:pt-0">
      <div className="absolute top-0 right-0 -z-0 pointer-events-none">
        <img
          src={DecoreImage}
          alt="background shape"
          className="w-[300px] md:w-[500px] lg:w-[650px] xl:w-[750px] h-auto"
        />
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 px-6 md:px-12 lg:pl-20 py-10 lg:py-0">
        <p className="text-[#DF6951] font-bold uppercase tracking-widest text-sm md:text-base mb-4">
          Best Destinations around the world
        </p>
        <h1 className="text-[#181E4B] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[80px] leading-[1.1] font-serif mb-6">
          Travel,{" "}
          <span className="relative z-10 inline-block">
            enjoy
            <svg
              className="absolute -bottom-1 lg:-bottom-2 left-0 w-full -z-10"
              viewBox="0 0 385 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9C118.957 4.47226 254.444 -3.56635 382 9"
                stroke="#DF6951"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br className="hidden md:block" /> and live a new and full life
        </h1>
        <p className="text-[#5E6282] font-medium text-base md:text-lg leading-relaxed max-w-md mb-8">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
          <button className="bg-[#F1A501] text-white font-medium px-7 py-4 rounded-lg shadow-lg hover:shadow-[#F1A501]/30 transition-all transform hover:-translate-y-1">
            Find out more
          </button>
          <button className="flex items-center gap-3 text-[#686D77] font-medium group">
            <div className="w-12 h-12 bg-[#DF6951] rounded-full flex items-center justify-center shadow-lg text-white transition-transform group-hover:scale-110">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M12 7L0 14L0 0L12 7Z" fill="white" />
              </svg>
            </div>
            Play Demo
          </button>
        </div>
      </div>
      <div className="flex-1 w-full relative flex justify-center lg:justify-end z-10 px-6 lg:pr-20 pb-20 lg:pb-0">
        <div className="relative w-full max-w-md lg:max-w-2xl mt-10 lg:mt-20">
          <img
            src={HeroImage}
            alt="Traveler"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
          <img
            src={flightIcon}
            alt="flight"
            className="absolute top-[10%] left-[-5%] md:left-0 w-12 md:w-20 lg:w-24 animate-bounce-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
