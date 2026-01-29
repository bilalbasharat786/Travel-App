import React from "react";
import Logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden font-sans px-4">
      <div className="absolute top-0 right-0 -z-0 opacity-50 pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[500px] bg-[#FFF1DA] blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-100 z-10">
        <div className="text-center mb-10">
          <img src={Logo} alt="Jadoo" className="h-8 mx-auto mb-6" />
          <h2 className="text-[#181E4B] text-3xl font-bold font-serif">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2">
            Login to explore the best destinations
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-[#181E4B] font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DF6951]/20 focus:border-[#DF6951] transition-all"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-[#181E4B] font-medium">Password</label>
              <a href="#" className="text-[#DF6951] text-sm hover:underline">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DF6951]/20 focus:border-[#DF6951] transition-all"
            />
          </div>

          <button className="w-full bg-[#F1A501] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-200 transform hover:-translate-y-1 transition-all">
            Login
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
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
