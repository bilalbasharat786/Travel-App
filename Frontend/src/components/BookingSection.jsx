import React from "react";
import DestinationIcon from "../assets/icon-1.png";
import PaymentIcon from "../assets/icon-2.png";
import AirportIcon from "../assets/icon-3.png";
import GreeceTripImg from "../assets/greece.jpg";
import RomeMiniImg from "../assets/rome-small.png";
import HeartIcon from "../assets/heart.png";
import LeafIcon from "../assets/leaf.png";
import GrilIcon from "../assets/gril.png";
import SendIcon from "../assets/send.png";
import BuildingIcon from "../assets/building.png";

const BookingSection = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Destination",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: DestinationIcon,
    },
    {
      id: 2,
      title: "Make Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: PaymentIcon,
    },
    {
      id: 3,
      title: "Reach Airport on Selected Date",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: AirportIcon,
      
    },
  ];

  return (
    <section
      id="bookings"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20 overflow-hidden lg:overflow-visible"
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <p className="text-[#5E6282] font-bold text-base md:text-lg mb-2 uppercase tracking-wide">
          Easy and Fast
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1D4C] leading-tight mb-12 font-serif max-w-xl">
          Book Your Next Trip <br className="hidden md:block" /> In 3 Easy Steps
        </h2>
        <div className="space-y-10 w-full max-w-md lg:max-w-none">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-5 group"
            >
              <div
                className={`${step.bgColor} p-3 rounded-xl h-30 w-30 transition-transform group-hover:scale-110`}
              >
                <img
                  src={step.icon}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#5E6282] font-bold text-lg">
                  {step.title}
                </h4>
                <p className="text-[#5E6282] text-sm md:text-base mt-1 leading-relaxed opacity-80">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0">
        <div className="bg-white rounded-[26px] shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_41px_33px_rgba(0,0,0,0.01)] p-5 md:p-6 w-full max-w-[370px] relative z-10 transition-transform hover:rotate-2 duration-500">
          <img
            src={GreeceTripImg}
            alt="Trip to Greece"
            className="w-full h-[160px] md:h-[180px] object-cover rounded-[24px] mb-6"
          />
          <h3 className="text-lg font-bold text-[#080809] mb-2 tracking-wide">
            Trip To Greece
          </h3>
          <p className="text-[#84829A] text-sm font-medium mb-5">
            14-29 June | by Robbin joseph
          </p>
          <div className="flex gap-4 mb-6">
            <span className="p-3 bg-[#F5F5F5] rounded-full hover:bg-orange-100 transition-colors cursor-pointer">
              <img src={LeafIcon} alt="leaf" className="h-4 w-4" />
            </span>
            <span className="p-3 bg-[#F5F5F5] rounded-full hover:bg-orange-100 transition-colors cursor-pointer">
              <img src={GrilIcon} alt="map" className="h-4 w-4" />
            </span>
            <span className="p-3 bg-[#F5F5F5] rounded-full hover:bg-orange-100 transition-colors cursor-pointer">
              <img src={SendIcon} alt="send" className="h-4 w-4" />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={BuildingIcon} alt="building" className="h-4 w-4" />
              <span className="text-[#84829A] text-sm font-medium">
                24 people going
              </span>
            </div>
            <img
              src={HeartIcon}
              alt="wishlist"
              className="w-5 h-5 cursor-pointer hover:scale-125 transition-transform"
            />
          </div>
        </div>
        <div className="absolute -bottom-6 -right-2 md:-right-12 lg:-right-20 bg-white shadow-2xl rounded-[20px] p-4 flex gap-4 w-[220px] md:w-[260px] z-20 transition-all hover:scale-105 duration-300">
          <img
            src={RomeMiniImg}
            alt="Rome"
            className="w-12 h-12 rounded-full object-cover shadow-sm"
          />
          <div className="flex-1">
            <p className="text-[#84829A] text-[10px] font-bold uppercase tracking-widest mb-1">
              Ongoing
            </p>
            <h4 className="text-[#080809] text-sm md:text-base font-bold mb-2">
              Trip to rome
            </h4>
            <p className="text-sm font-medium mb-2">
              <span className="text-[#8A79DF] font-bold">40%</span> completed
            </p>
            <div className="w-full bg-[#F5F5F5] h-[5px] rounded-full overflow-hidden">
              <div className="bg-[#8A79DF] h-full w-[40%] rounded-full transition-all duration-1000"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#59B1E6] opacity-15 blur-[80px] md:blur-[120px] -z-10 rounded-full"></div>
      </div>
    </section>
  );
};

export default BookingSection;
