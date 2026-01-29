import React from 'react';
import HeroImage from '../assets/hero-img.png'; 
import DecoreImage from '../assets/decore.png'; 

const Hero = () => {
  return (
    /* Humne px-6 aur padding-top section se hata di hai taake decore corners se chipak jaye */
    <section className="relative w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0 bg-white overflow-hidden">
      
      {/* --- BACKGROUND DECORE IMAGE --- */}
      {/* Is div ko humne absolute top-0 aur right-0 rakha hai taake ye corners se chipak jaye */}
      <div className="absolute top-0 right-0 -z-0 pointer-events-none">
        <img 
          src={DecoreImage} 
          alt="background shape" 
          /* Design ke mutabiq width ko thoda adjust kiya gaya hai */
          className="w-[250px] md:w-[450px] lg:w-[650px] xl:w-[750px] h-auto object-contain"
        />
      </div>

      {/* Left Side: Text Content */}
      {/* Padding humne yahan div par di hai taake text corners se door rahe, lekin background nahi */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 px-6 lg:pl-20 pt-20 lg:pt-32 pb-20">
        <p className="text-[#DF6951] font-bold uppercase tracking-wide mb-4">
          Best Destinations around the world
        </p>

        <h1 className="text-[#181E4B] font-bold text-4xl sm:text-5xl lg:text-[75px] leading-[1.1] font-serif mb-6">
          Travel, <span className="relative z-10 inline-block">
            enjoy
            {/* Design wala Stylish Underline */}
            <svg className="absolute -bottom-1 lg:-bottom-2 left-0 w-full -z-10" width="385" height="12" viewBox="0 0 385 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C118.957 4.47226 254.444 -3.56635 382 9" stroke="#DF6951" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </span> 
          and live a new and full life
        </h1>

        <p className="text-[#5E6282] font-medium text-base lg:text-lg leading-relaxed max-w-md mb-8">
          Built Wicket longer admire do barton vanity itself do in it. 
          Preferred to sportsmen it engrossed listening. Park gate 
          sell they west hard for the.
        </p>

        <div className="flex items-center gap-6">
          <button className="bg-[#F1A501] text-white font-medium px-7 py-4 rounded-lg shadow-lg hover:shadow-[#F1A501]/30 transition-all transform hover:-translate-y-1">
            Find out more
          </button>

          <button className="flex items-center gap-3 text-[#686D77] font-medium group">
            <div className="w-12 h-12 bg-[#DF6951] rounded-full flex items-center justify-center shadow-lg text-white transition-transform group-hover:scale-110">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M12 7L0 14L0 0L12 7Z" fill="white"/>
              </svg>
            </div>
            Play Demo
          </button>
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="flex-1 w-full relative flex justify-center lg:justify-end z-10 pr-0 lg:pr-20 mt-10 lg:mt-0">
        <img 
          src={HeroImage} 
          alt="Traveler" 
          className="w-full max-w-md lg:max-w-2xl object-contain drop-shadow-md" 
        />
      </div>

    </section>
  );
};

export default Hero;