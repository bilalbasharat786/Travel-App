import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import googlePlay from '../assets/google-play.png';
import appleStore from '../assets/apple-store.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
       

        {/* Extra Section for Socials & App Store (Matching the image layout strictly) */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
           
           {/* Left side spacer to push content to right if needed, 
               but based on your grid, the social icons are usually in the last column.
               Let's Fix the layout above to be exactly like image.
           */}
        </div>

        {/* REVISED Grid for Exact Layout Match */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            
            {/* 1. Logo Section (Takes 2 cols width) */}
            <div className="lg:col-span-2 text-center md:text-left">
                <h1 className="text-4xl font-bold text-[#181E4B] mb-4">Jadoo.</h1>
                <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
                    Book your trip in minute, get full Control for much longer.
                </p>
            </div>

            {/* 2. Links Sections (3 Cols) */}
            <div className="text-center md:text-left">
                <h4 className="font-bold text-lg mb-4 text-[#080809]">Company</h4>
                <ul className="text-gray-500 space-y-2 text-sm font-medium">
                    <li className="hover:text-orange-500 cursor-pointer">About</li>
                    <li className="hover:text-orange-500 cursor-pointer">Careers</li>
                    <li className="hover:text-orange-500 cursor-pointer">Mobile</li>
                </ul>
            </div>

            <div className="text-center md:text-left">
                <h4 className="font-bold text-lg mb-4 text-[#080809]">Contact</h4>
                <ul className="text-gray-500 space-y-2 text-sm font-medium">
                    <li className="hover:text-orange-500 cursor-pointer">Help/FAQ</li>
                    <li className="hover:text-orange-500 cursor-pointer">Press</li>
                    <li className="hover:text-orange-500 cursor-pointer">Affiliates</li>
                </ul>
            </div>

            <div className="text-center md:text-left">
                <h4 className="font-bold text-lg mb-4 text-[#080809]">More</h4>
                <ul className="text-gray-500 space-y-2 text-sm font-medium">
                    <li className="hover:text-orange-500 cursor-pointer">Airlinefees</li>
                    <li className="hover:text-orange-500 cursor-pointer">Airline</li>
                    <li className="hover:text-orange-500 cursor-pointer">Low fare tips</li>
                </ul>
            </div>

            {/* 3. Social & Apps (Right Side) */}
            <div className="flex flex-col items-center md:items-start gap-5">
                {/* Social Icons */}
                <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-gray-100 cursor-pointer transition">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    {/* Instagram with Gradient Background */}
                    <div className="w-10 h-10 rounded-full shadow-md flex items-center justify-center text-white cursor-pointer transition"
                         style={{ background: 'linear-gradient(180deg, #B8D2F1 0%, #F28364 100%)' }}> 
                         {/* Note: Adjust gradient colors if needed, image looks like a specific mix */}
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-gray-100 cursor-pointer transition">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>

                {/* Discover App Text */}
                <h4 className="text-gray-500 font-medium text-lg mt-2">Discover our app</h4>

                {/* App Store Buttons */}
                <div className="flex gap-2">
                    <img src={googlePlay} alt="Google Play" className="h-9 cursor-pointer hover:scale-105 transition" />
                    <img src={appleStore} alt="Apple Store" className="h-9 cursor-pointer hover:scale-105 transition" />
                </div>
            </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm font-medium">All rights reserved@jadoo.co</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;