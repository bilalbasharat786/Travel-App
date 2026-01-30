import React from "react";
import RomeImg from "../assets/rome.png";
import LondonImg from "../assets/london.jpg";
import EuropeImg from "../assets/europe.png";
import NavigationIcon from "../assets/navigation.png";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      image: RomeImg,
      location: "Rome, Italy",
      price: "$5,42k",
      duration: "10 Days Trip",
    },
    {
      id: 2,
      image: LondonImg,
      location: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
    },
    {
      id: 3,
      image: EuropeImg,
      location: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
    },
  ];

  return (
    <section
      id="destinations"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden"
    >
      <div className="absolute right-0 bottom-20 hidden xl:block opacity-30 pointer-events-none">
        <svg
          width="100"
          height="200"
          viewBox="0 0 100 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10C50 50 50 150 10 190"
            stroke="#7E7E7E"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
        </svg>
      </div>
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[#5E6282] font-bold text-sm md:text-lg uppercase tracking-[0.2em] mb-2">
          Top Selling
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1D4C] font-serif">
          Top Destinations
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-[24px] shadow-[0px_1.85px_3.15px_rgba(0,0,0,0.005),0px_8.15px_6.52px_rgba(0,0,0,0.01),0px_20px_13px_rgba(0,0,0,0.015),0px_38.52px_25.48px_rgba(0,0,0,0.02),0px_64.81px_46.85px_rgba(0,0,0,0.025),0px_100px_80px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 cursor-pointer group"
          >
            <div className="h-[300px] sm:h-[320px] md:h-[350px] overflow-hidden rounded-t-[24px]">
              <img
                src={dest.image}
                alt={dest.location}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-6 md:p-7 text-[#5E6282]">
              <div className="flex justify-between items-center mb-5">
                <span className="text-lg font-bold text-[#1E1D4C] group-hover:text-orange-500 transition-colors">
                  {dest.location}
                </span>
                <span className="text-lg font-bold text-[#1E1D4C]">
                  {dest.price}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={NavigationIcon}
                  alt="nav"
                  className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300"
                />
                <span className="text-base font-bold text-[#5E6282]">
                  {dest.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
