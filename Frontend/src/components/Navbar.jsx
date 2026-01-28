import React, { useState } from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const menuItems = [
    { name: 'Desitnations', href: '#' },
    { name: 'Hotels', href: '#' },
    { name: 'Flights', href: '#' },
    { name: 'Bookings', href: '#' },
  ];

  return (
    /* bg-transparent zaroori hai decore image ko dekhne ke liye */
    <nav className="relative w-full px-6 py-8 lg:px-20 flex items-center justify-between bg-transparent z-50">
      
      {/* Logo Area */}
      <div className="flex items-center">
        <img src={Logo} alt="Jadoo Logo" className="h-8 cursor-pointer" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-16">
        <ul className="flex space-x-12 font-medium text-[#212832]">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-orange-500 transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-10 font-medium text-[#212832]">
          <button className="hover:text-orange-500 transition-colors">Login</button>
          <button className="border border-[#212832] px-6 py-2 rounded-md hover:bg-[#212832] hover:text-white transition-all">
            Sign up
          </button>
          
          {/* Language Selector */}
          <div className="flex items-center cursor-pointer group">
            <span className="mr-1 group-hover:text-orange-500">EN</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="transition-transform group-hover:rotate-180">
              <path d="M1 1L5 5L9 1" stroke="#212832" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setNavOpen(!navOpen)} className="text-[#181E4B]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {navOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {navOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-2xl py-8 px-10 flex flex-col space-y-6 lg:hidden z-40 animate-fade-in-down">
          <ul className="flex flex-col space-y-5 font-semibold text-[#212832]">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-xl hover:text-orange-500" onClick={() => setNavOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-[1px] bg-gray-100 w-full"></div>
          <div className="flex flex-col space-y-4">
            <button className="text-left font-semibold text-xl">Login</button>
            <button className="bg-[#F1A501] text-white px-6 py-4 rounded-xl font-bold shadow-md">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;