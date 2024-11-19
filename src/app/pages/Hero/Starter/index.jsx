import Image from "next/image";
import React from "react";
import Image1 from "../../../../../public/Assets/img1.jpeg"
import Image2 from "../../../../../public/Assets/img2.jpeg"
import Image3 from "../../../../../public/Assets/img3.jpeg"
import Image4 from "../../../../../public/Assets/img4.jpeg"
import Image5 from "../../../../../public/Assets/img5.jpeg"
import Image6 from "../../../../../public/Assets/img6.jpeg"




function Starter() {
  return (
    <div className="  text-white flex justify-center items-center">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-6 sm:p-10 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold space-y-4">
            <p className="bg-white text-black inline-block px-4 py-2 rounded-lg">One</p>
            <p className="bg-white text-black inline-block px-4 py-2 rounded-lg">Stop</p>
            <p className="bg-white text-black inline-block px-4 py-2 rounded-lg">
              Marketplace
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <p className="bg-white text-black inline-block px-4 py-2 rounded-lg">For</p>
            <p className="bg-green-500 inline-block px-4 py-2 rounded-lg text-white">
              Influencers
            </p>
          </div>

          {/* Tagline */}
          <div className="mt-6">
            <p className="text-lg sm:text-xl text-gray-300">
              "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create
              Merch, and Share Content  All in One Hub."
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

        {/* Right Section (Image Grid) */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First Image */}
          <Image
            src={Image1}
            alt="img1"
            className="rounded-lg h-[250px] w-full object-cover"
          />
          {/* Second Image */}
          <Image
            src={Image2}
            alt="img2"
            className="rounded-lg h-[250px] w-full object-cover"
          />
          {/* Third Image */}
          <Image
            src={Image3}
            alt="img3"
            className="rounded-lg h-[250px] w-full object-cover"
          />

          {/* Fourth Image */}
          <Image
            src={Image4}
            alt="img4"
            className="rounded-lg h-[250px] w-full object-cover"
          />
          {/* Fifth Image */}
          <Image
            src={Image5}
            alt="img5"
            className="rounded-lg h-[250px] w-full object-cover"
          />
          {/* Sixth Image */}
          <Image
            src={Image6}
            alt="img6"
            className="rounded-lg h-[250px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Starter;
