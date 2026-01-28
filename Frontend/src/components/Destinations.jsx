import React from 'react';

// Assets folder se images import karein
import RomeImg from '../assets/rome.png';
import LondonImg from '../assets/london.jpg';
import EuropeImg from '../assets/europe.png';
import NavigationIcon from '../assets/navigation.png'; // Arrow icon ke liye

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      image: RomeImg,
      location: "Rome, Italy",
      price: "$5,42k",
      duration: "10 Days Trip"
    },
    {
      id: 2,
      image: LondonImg,
      location: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip"
    },
    {
      id: 3,
      image: EuropeImg,
      location: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Decorative Spiral (Right Side) */}
      <div className="absolute right-0 bottom-20 hidden lg:block opacity-30">
        <svg width="100" height="200" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10C50 50 50 150 10 190" stroke="#7E7E7E" strokeWidth="2" strokeDasharray="5 5"/>
            {/* Aap yahan apni decorative image bhi laga sakte hain */}
        </svg>
      </div>

      {/* Heading Section */}
      <div className="text-center mb-12">
        <p className="text-[#5E6282] font-semibold text-lg uppercase tracking-wide">
          Top Selling
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1D4C] mt-2 font-serif">
          Top Destinations
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 px-4 md:px-10">
        {destinations.map((dest) => (
          <div 
            key={dest.id} 
            className="bg-white rounded-[24px] shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
          >
            {/* Image Container */}
            <div className="h-[300px] md:h-[350px] overflow-hidden">
              <img 
                src={dest.image} 
                alt={dest.location} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 text-[#5E6282]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">{dest.location}</span>
                <span className="text-lg font-medium">{dest.price}</span>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Agar navigation icon hai to img use karein warna simple SVG */}
                <img src={NavigationIcon} alt="nav" className="w-4 h-4" />
                <span className="text-sm font-medium">{dest.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;