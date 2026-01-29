import React from 'react';

// Assets folder se images import karein
// Agar aapke names different hain toh yahan change kar lein
import WeatherIcon from '../assets/weather-icon.png';
import FlightIcon from '../assets/flight-icon.png';
import EventsIcon from '../assets/mic-icon.png';
import SettingsIcon from '../assets/gear-icon.png';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
      icon: WeatherIcon,
      highlight: false
    },
    {
      id: 2,
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
      icon: FlightIcon,
      highlight: true // White card effect ke liye
    },
    {
      id: 3,
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      icon: EventsIcon,
      highlight: false
    },
    {
      id: 4,
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers",
      icon: SettingsIcon,
      highlight: false
    }
  ];

  return (
    <section id='flights' className="py-16 px-4 max-w-7xl mx-auto font-sans relative">
      {/* Top Right Decorative Plus Signs */}
      <div className="absolute top-10 right-10 hidden md:block opacity-20 text-orange-500 text-xl font-bold">
        + + + +
      </div>

      {/* Header Text */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-widest text-gray-500 text-sm font-semibold mb-2">
          Category
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1E1D4C]">
          We Offer Best Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`relative group p-8 rounded-[36px] transition-all duration-300 flex flex-col items-center text-center
              ${service.highlight ? 'bg-white shadow-2xl z-10' : 'bg-transparent hover:bg-white hover:shadow-xl'}`}
          >
            {/* Orange background shape for highlighted card */}
            {service.highlight && (
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-[#DF6951] rounded-tl-[30px] rounded-br-[15px] -z-10"></div>
            )}

            {/* Icon Container */}
            <div className="mb-6 h-20 flex items-center justify-center">
              <img 
                src={service.icon} 
                alt={service.title} 
                className="max-h-full object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-[#1E1D4C] mb-4">
              {service.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm px-2">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;