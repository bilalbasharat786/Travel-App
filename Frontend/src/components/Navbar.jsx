import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Destinations", href: "#destinations" },
    { name: "Hotels", href: "#hotels" },
    { name: "Flights", href: "#flights" },
    { name: "Bookings", href: "#bookings" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 px-6 py-5 lg:px-20 flex items-center justify-between z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-8"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="Jadoo Logo" className="h-6 md:h-8 cursor-pointer" />
      </div>

      {/* Desktop Menu (LG screens and above) */}
      <div className="hidden lg:flex items-center space-x-16">
        <ul className="flex space-x-12 font-medium text-[#212832]">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-orange-500 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-10 font-medium text-[#212832]">
          <Link to="/login" className="hover:text-orange-500 transition-colors">
            Login
          </Link>
          <Link
            to="/signup"
            className="border border-[#212832] px-6 py-2 rounded-md hover:bg-[#212832] hover:text-white transition-all"
          >
            Sign up
          </Link>

          {/* Language Selector */}
          <div className="flex items-center cursor-pointer group">
            <span className="mr-1 group-hover:text-orange-500">EN</span>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className="transition-transform group-hover:rotate-180"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#212832"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hamburger Icon (Mobile & Tablet) */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-[#181E4B] z-[110] relative focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {navOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile/Tablet Drawer Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-500 ease-in-out transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-[105] flex flex-col items-center justify-center space-y-8`}
      >
        <ul className="flex flex-col items-center space-y-6 font-semibold text-[#212832] text-2xl">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-orange-500"
                onClick={() => setNavOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-col items-center space-y-6 w-full px-10">
          <Link
            to="/login"
            className="text-2xl font-semibold hover:text-orange-500"
            onClick={() => setNavOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="w-full text-center border-2 border-[#212832] px-8 py-3 rounded-md text-xl font-bold hover:bg-[#212832] hover:text-white transition-all"
            onClick={() => setNavOpen(false)}
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
