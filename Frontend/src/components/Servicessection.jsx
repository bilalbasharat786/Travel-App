import React from "react";
import WeatherIcon from "../assets/weather-icon.png";
import FlightIcon from "../assets/flight-icon.png";
import EventsIcon from "../assets/mic-icon.png";
import SettingsIcon from "../assets/gear-icon.png";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
      icon: WeatherIcon,
      highlight: false,
    },
    {
      id: 2,
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
      icon: FlightIcon,
      highlight: true, 
    },
    {
      id: 3,
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      icon: EventsIcon,
      highlight: false,
    },
    {
      id: 4,
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers",
      icon: SettingsIcon,
      highlight: false,
    },
  ];

  return (
    <section
      id="flights"
      className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto font-sans relative overflow-visible"
    >

      <div className="absolute top-10 right-4 lg:right-10 opacity-30 text-[#DF6951] text-2xl font-bold tracking-[10px]">
        + + + +
      </div>

      <div className="text-center mb-16 md:mb-24">
        <p className="uppercase tracking-[0.2em] text-[#5E6282] text-sm md:text-base font-bold mb-3">
          Category
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#14183E]">
          We Offer Best Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 lg:gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative group p-8 lg:p-10 rounded-[36px] transition-all duration-500 flex flex-col items-center text-center 
              ${
                service.highlight 
                  ? "bg-white shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_41px_33px_rgba(0,0,0,0.01)]" 
                  : "bg-transparent hover:bg-white hover:shadow-2xl"
              }`}
          >
  
            <div 
              className={`absolute -bottom-5 -left-5 w-24 h-24 bg-[#DF6951] rounded-tl-[30px] rounded-br-[15px] -z-10 transition-opacity duration-300
              ${service.highlight ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            ></div>

            <div className="mb-8 h-24 flex items-center justify-center">
              <img
                src={service.icon}
                alt={service.title}
                className="max-h-full w-auto object-contain transform transition-transform group-hover:scale-110 duration-300"
              />
            </div>

            <h3 className="text-xl font-bold text-[#1E1D4C] mb-4">
              {service.title}
            </h3>

            <p className="text-[#5E6282] leading-relaxed text-base font-medium">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
