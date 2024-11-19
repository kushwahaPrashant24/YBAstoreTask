import Image from "next/image";
import React from "react";
import Image1 from "../../../../../public/Assets/img1.jpeg";
import Image2 from "../../../../../public/Assets/img2.jpeg";
import Image3 from "../../../../../public/Assets/img3.jpeg";
import Image4 from "../../../../../public/Assets/img4.jpeg";
import Image5 from "../../../../../public/Assets/img5.jpeg";
import Image6 from "../../../../../public/Assets/img6.jpeg";

function Starter() {
  return (
    <div className="text-white flex justify-center items-center">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-6 sm:p-10 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold space-y-4 ">
            <div className="flex gap-5">
              <p className="bg-white text-black inline-block px-4 py-2 rounded-lg">
                One
              </p>
              <p className="bg-white text-black inline-block px-4 py-2 rounded-lg ">
                Stop
              </p>
            </div>

            <p className="bg-white text-black inline-block px-4 py-2 rounded-lg">
              Marketplace
            </p>
          </div>

          <div className=" flex gap-7">
            <div className="w-[109px] h-[97px] text-[64px] bg-white text-black  px-4 py-2 rounded-lg flex justify-center items-center font-bold ">
              For
            </div>
            <div className="w-[355px] h-[97px] text-[64px] bg-green-500 inline-block px-4 py-2 rounded-lg text-white font-bold ">
              Influencers
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-6">
            <p className="text-lg sm:text-xl text-gray-300">
              &quot;Unleash Your Influence: Sell Itineraries, Build Your Brand,
              Create Merch, and Share Content All in One Hub.&quot;
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
              Demo Store
            </button>
            <button className="px-6 py-2 bg-gray-400 text-black rounded-lg shadow-md hover:bg-gray-500">
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="w-[582px] h-[650.5px] gap-[16px] bg-black flex ">
          <div
            className="w-[283px] h-[647px] gap-[7px] "
            style={{ display: "grid" }} // Using inline style to set grid display
          >
            <div className="w-[283px] h-[164px] overflow-hidden rounded-tl-[18px] ">
              <Image
                src={Image1} // Replace with your actual image path
                alt="Image description"
                className="w-full h-full object-cover" // Ensures the image fills the div without distortion
              />
            </div>
            <div className="w-[283px] h-[347.5px] overflow-hidden rounded-tl-[18px] ">
              <Image
                src={Image3} // Replace with your actual image URL
                alt="Image description"
                className="w-full h-full object-cover" // Ensures the image covers the container without distortion
              />
            </div>
            <div className="w-[283px] h-[123px] overflow-hidden rounded-tl-[18px] rounded-tr-[18px] ">
              <Image
                src={Image5} // Replace with your actual image path
                alt="Your Image"
                className=" object-cover"
                width={283} // Optional: You can also set width directly for Next.js Image component
                height={123} // Optional: You can also set height directly for Next.js Image component
              />
            </div>
          </div>
          <div
            className="w-[283px] h-[647px] gap-[7px] "
            style={{ display: "grid" }} // Using inline style to set grid display
          >
            <div className="w-[283px] h-[143px] gap-[7px] ">
              <Image
                src={Image2} // Replace with your actual image path
                alt="Your Image"
                className="w-full h-full object-cover"
                width={283} // Optional: You can also set width directly for Next.js Image component
                height={647} // Optional: You can also set height directly for Next.js Image component
              />
            </div>
            <div className="w-[283px] h-[346px] gap-0 rounded-tl-[18px] ">
              <Image
                src={Image4} // Replace with your actual image path
                alt="Your Image"
                className="w-full h-full object-cover"
                width={283} // Optional: You can also set width directly for Next.js Image component
                height={346} // Optional: You can also set height directly for Next.js Image component
              />
            </div>
            <div className="w-[283px] h-[144px] gap-0 rounded-tl-[18px] ">
              <Image
                src={Image6} // Replace with the actual image URL
                alt="Your Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Starter;
