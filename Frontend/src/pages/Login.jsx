import React from "react";
import Logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden font-sans px-4 sm:px-6">
      <div className="absolute top-[-50px] right-[-50px] md:top-0 md:right-0 opacity-60 pointer-events-none">
        <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#FFF1DA] blur-[80px] md:blur-[100px] rounded-full"></div>
      </div>
      <div className="absolute bottom-[-50px] left-[-50px] md:bottom-0 md:left-0 opacity-40 pointer-events-none">
        <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#DF6951] blur-[100px] rounded-full"></div>
      </div>
      <div className="max-w-md w-full bg-white/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 z-10 relative">
        <div className="text-center mb-8 md:mb-10">
          <img src={Logo} alt="Jadoo" className="h-8 md:h-10 mx-auto mb-4 md:mb-6" />
          <h2 className="text-[#181E4B] text-2xl md:text-3xl font-bold font-serif">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Login to explore the best destinations
          </p>
        </div>

        <form className="space-y-5 md:space-y-6">
          <div>
            <label className="block text-[#181E4B] font-medium mb-2 text-sm md:text-base">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-5 py-3 md:py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DF6951]/20 focus:border-[#DF6951] transition-all text-sm md:text-base"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-[#181E4B] font-medium text-sm md:text-base">Password</label>
              <a href="#" className="text-[#DF6951] text-xs md:text-sm hover:underline font-medium">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-3 md:py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DF6951]/20 focus:border-[#DF6951] transition-all text-sm md:text-base"
            />
          </div>

          <button className="w-full bg-[#F1A501] text-white font-bold py-3 md:py-4 rounded-xl shadow-lg hover:shadow-orange-200 transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base">
            Login
          </button>
        </form>

        <p className="text-center mt-6 md:mt-8 text-gray-600 text-sm md:text-base">
          Don't have an account?
          <a
            href="/signup"
            className="text-[#DF6951] font-bold ml-2 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
