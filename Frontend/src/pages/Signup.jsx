import React from 'react';
import Logo from '../assets/logo.png';

const Signup = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden font-sans px-4 py-10">
      
      {/* Decorative Blob (Left Side for variety) */}
      <div className="absolute bottom-0 left-0 -z-0 opacity-40 pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[500px] bg-[#DFD7F9] blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-lg w-full bg-white/90 backdrop-blur-lg p-8 md:p-12 rounded-[2rem] shadow-2xl border border-purple-50 z-10">
        <div className="text-center mb-8">
          <img src={Logo} alt="Jadoo" className="h-8 mx-auto mb-4" />
          <h2 className="text-[#181E4B] text-3xl font-bold font-serif">Create Account</h2>
          <p className="text-gray-500 mt-2">Start your journey with us today</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-1">
            <label className="block text-[#181E4B] font-medium mb-2">First Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#DF6951]"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-[#181E4B] font-medium mb-2">Last Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#DF6951]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-[#181E4B] font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#DF6951]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-[#181E4B] font-medium mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#DF6951]"
            />
          </div>

          <div className="md:col-span-2 flex items-start gap-2 text-sm text-gray-500 my-2">
            <input type="checkbox" className="mt-1 accent-[#DF6951]" />
            <span>I agree to the <a href="#" className="text-[#DF6951]">Terms & Conditions</a></span>
          </div>

          <button className="md:col-span-2 w-full bg-gradient-to-r from-[#FF946D] to-[#FF7D68] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-200 transition-all">
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Already a member? 
          <a href="/login" className="text-[#DF6951] font-bold ml-2 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;