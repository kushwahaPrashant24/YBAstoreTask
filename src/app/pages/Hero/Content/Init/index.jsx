import React from "react";
import Image from "next/image";
import GoogleLogo from "@/../public/Assets/googlelogo.png";

export default function Init() {
  return (
    <div className="text-[34px] font-bold text-[#00DC82] flex flex-col justify-around gap-[34px] items-center">
      <h1 className="text-center text-3xl md:text-4xl">How to get started?</h1>
      <div className="w-[840px] h-[400px] max-w-[840px] gap-[64px] rounded-[24px] text-white bg-gradient-to-r from-[#A94949] via-[#C25252] to-[#F74D4D] flex justify-center items-center shadow-lg">
        <div className="w-[340px] h-[145px] max-w-[340px] flex flex-col gap-[24px]">
          <div className="h-[64px] w-[340px] text-[27px] font-bold text-shadow-md">
            Sign Up and create your own store hassle-free.
          </div>
          <div className="h-[57px] w-[340px] text-[16px] font-bold text-opacity-80">
            Join us via Google sign-in and verify your influencer status by entering your social media ID and unlock your store @ zero cost.
          </div>
        </div>
        {/* Login page */}
        <div className="w-[212px] h-[360px]  rounded-[16px] bg-black flex flex-col justify-center items-center border-2 border-gray-700 shadow-lg">
          {/* Google Sign-in */}
          <div className="w-[180px] max-h-[33px] border-2 border-white px-[12px] py-[8px] rounded-[8px] flex justify-center items-center gap-[10px]  cursor-pointer transition-all">
            <div className="w-[132px] h-[17px] flex justify-center items-center gap-[4px]">
              <Image
                src={GoogleLogo}
                alt="Google"
                className="w-[15px] h-[15px] hover:scale-110 transition-all"
              />
              <p className="w-[113px] h-[18px] text-[13px] font-bold">
                Login with Google
              </p>
            </div>
          </div>
          {/* OR divider */}
          <div className="w-[180px] h-auto gap-0 flex justify-between items-center mt-3">
            <div className="h-[1px] w-[50%] bg-gray-300"></div>
            <p className="text-[18px] font-medium text-gray-500">OR</p>
            <div className="h-[1px] w-[50%] bg-gray-300"></div>
          </div>
          {/* Email Input */}
          <div className="w-[180px] h-auto  gap-[8px] border-b border-l-0 border-t-0 border-r-0 mt-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[46px] text-[14px] font-medium border-none outline-none bg-transparent text-white placeholder-white rounded-lg shadow-sm"
            />
          </div>
          {/* Another Input */}
          <div className="w-[180px] h-auto  gap-[8px] border-b border-l-0 border-t-0 border-r-0 mt-3">
            <input
              type="Password"
              placeholder="Password"
              className="w-full h-[46px] text-[14px] font-medium border-none outline-none bg-transparent text-white placeholder-white rounded-lg shadow-sm"
            />
          </div>
          {/* Login Button */}
          <button className="w-[80px] max-w-[142px] h-auto p-[12px_16px] gap-0 rounded-[12px] border-2 border-slate-100 font-medium text-[14px]  hover:scale-105 transition-all mt-4">
            Login
          </button>
          {/* Don’t have an account? */}
          <div className="w-[180px] h-[15px] opacity-100 flex items-center justify-center mt-3">
            <span className="w-[134px] text-[10px]">Don’t have an account?</span>
            <span className="w-[64px] text-green-500 text-[10px] cursor-pointer hover:underline">Get Started</span>
          </div>
        </div>
        
      </div>
      <div className="w-[840px] h-[40px] max-w-[840px] max-h-[688px] p-[36px_0px_0px_0px] gap-[64px] rounded-t-[24px] bg-[#5ED46A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.36)] opacity-100 transform rotate-[-0.5deg] skew-y-[2deg]">
    </div>
    <div className="h-[55px] w-[840px] bg-[#181818] mt-[-60px]"></div>
    </div>
  );
}