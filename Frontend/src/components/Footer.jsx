import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import googlePlay from "../assets/google-play.png";
import appleStore from "../assets/apple-store.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">

          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-5xl font-bold text-[#181E4B] mb-6 tracking-tight">Jadoo.</h1>
            <p className="text-[#5E6282] text-sm md:text-base font-medium max-w-xs leading-relaxed">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-bold text-xl mb-6 text-[#080809]">Company</h4>
            <ul className="text-[#5E6282] space-y-4 text-base font-medium">
              <li className="hover:text-orange-500 hover:translate-x-1 transition-transform cursor-pointer">About</li>
              <li className="hover:text-orange-500 hover:translate-x-1 transition-transform cursor-pointer">Careers</li>
              <li className="hover:text-orange-500 hover:translate-x-1 transition-transform cursor-pointer">Mobile</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-bold text-xl mb-6 text-[#080809]">Contact</h4>
            <ul className="text-[#5E6282] space-y-4 text-base font-medium">
              <li className="hover:text-orange-500 hover:translate-x-1 transition-transform cursor-pointer">Help/FAQ</li>
              <li className="hover:text-orange-500 hover:translate-x-1 transition-transform cursor-pointer">Press</li>
              <li className="hover:text-orange-500 hover:translate-x-1 transition-transform cursor-pointer">Affiliates</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-bold text-xl mb-6 text-[#080809]">More</h4>
            <ul className="text-[#5E6282] space-y-4 text-base font-medium">
              <li className="hover:text-orange-500 hover:translate-x-1 transition-transform cursor-pointer">Airlinefees</li>
              <li className="hover:text-orange-500 hover:translate-x-1 transition-transform cursor-pointer">Airline</li>
              <li className="hover:text-orange-500 hover:translate-x-1 transition-transform cursor-pointer">Low fare tips</li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start gap-6 mt-4 lg:mt-0">

            <div className="flex gap-5">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-black hover:bg-gray-100 cursor-pointer transition-all hover:-translate-y-1">
                <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
              </div>
              <div
                className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer transition-all hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg, #B8D2F1 0%, #F28364 100%)",
                }}
              >
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-black hover:bg-gray-100 cursor-pointer transition-all hover:-translate-y-1">
                <FontAwesomeIcon icon={faTwitter} className="text-lg" />
              </div>
            </div>

            <h4 className="text-[#5E6282] font-medium text-xl mt-2">
              Discover our app
            </h4>

            <div className="flex flex-row gap-3">
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-10 cursor-pointer hover:scale-105 transition shadow-sm rounded-full"
              />
              <img
                src={appleStore}
                alt="Apple Store"
                className="h-10 cursor-pointer hover:scale-105 transition shadow-sm rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-100 pt-8">
          <p className="text-[#5E6282] text-sm font-medium">
            All rights reserved @jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
