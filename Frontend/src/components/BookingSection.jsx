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
      bgColor: "bg-[#F1A501]",
    },
    {
      id: 2,
      title: "Make Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: PaymentIcon,
      bgColor: "bg-[#DF6951]",
    },
    {
      id: 3,
      title: "Reach Airport on Selected Date",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: AirportIcon,
      bgColor: "bg-[#006380]",
    },
  ];

  return (
    <section
      id="bookings"
      className="py-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
    >
      <div className="w-full lg:w-1/2">
        <p className="text-[#5E6282] font-semibold text-lg mb-2">
          Easy and Fast
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1D4C] leading-tight mb-10 font-serif">
          Book Your Next Trip <br className="hidden md:block" /> In 3 Easy Steps
        </h2>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.id} className="flex items-start gap-5">
              <div className={`${step.bgColor} rounded-xl`}>
                <img
                  src={step.icon}
                  alt="icon"
                  className="w-10 h-10 rounded-xl "
                />
              </div>
              <div>
                <h4 className="text-[#5E6282] font-bold text-base">
                  {step.title}
                </h4>
                <p className="text-[#5E6282] text-sm max-w-sm mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-20 lg:mt-0">
        <div className="bg-white rounded-[26px] shadow-2xl p-6 w-full max-w-[370px] relative z-10">
          <img
            src={GreeceTripImg}
            alt="Trip to Greece"
            className="w-full h-[160px] object-cover rounded-[24px] mb-6"
          />
          <h3 className="text-lg font-bold text-black mb-2">Trip To Greece</h3>
          <p className="text-[#84829A] text-sm font-medium mb-4">
            14-29 June | by Robbin joseph
          </p>

          <div className="flex gap-6 ">
            <img src={LeafIcon} alt="leaf" className="h-12 w-12 mb-4  " />
            <img src={GrilIcon} alt="gril" className="h-6 w-6 " />
            <img src={SendIcon} alt="send" className="h-6 w-6 " />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6  ">
                <img src={BuildingIcon} alt="building" />
              </div>
              <span className="text-[#84829A] text-sm font-medium">
                24 people going
              </span>
            </div>
            <img
              src={HeartIcon}
              alt="wishlist"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>

        <div className="absolute bottom-10 -right-4 md:-right-10 bg-white shadow-2xl rounded-[20px] p-4 flex gap-4 w-[240px] z-20 animate-bounce-slow">
          <img
            src={RomeMiniImg}
            alt="Rome"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-[#84829A] text-[10px] font-medium uppercase tracking-tighter">
              Ongoing
            </p>
            <h4 className="text-black text-sm font-bold mb-2">Trip to rome</h4>
            <p className="text-sm font-medium mb-1">
              <span className="text-[#8A79DF]">40%</span> completed
            </p>
            <div className="w-full bg-[#F5F5F5] h-[5px] rounded-full">
              <div className="bg-[#8A79DF] h-full w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400 opacity-20 blur-[100px] -z-10"></div>
      </div>
    </section>
  );
};

export default BookingSection;
