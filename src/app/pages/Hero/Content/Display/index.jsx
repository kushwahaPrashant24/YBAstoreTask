import React from 'react'
import Image from 'next/image';
import mountainImage from '@/../public/Assets/mountains.jpeg'; // Corrected import path

function Display() {
  console.log(mountainImage);
  return (
    <div className="relative w-[1200px] h-[540px]">
      {/* Use Image component for automatic optimization */}
      <Image
        className="rounded-t-[30px]"
        src={mountainImage} // Path to the image
        alt="Mountain Background"
        fill // use fill instead of layout="fill"
        objectFit="cover" // Makes sure the image covers the container without distortion
        quality={100} // Optional: Adjust quality if needed
      />
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 z-10"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
        <h1
          className="text-[180px] font-[700] leading-[216px] text-center"
          style={{
            fontFamily: "Urbanist",
            textDecorationSkipInk: "none",
          }}
        >
          TRAVEL
        </h1>
        <p
          className="text-[34px] font-[700] leading-[40.8px] text-center"
          style={{ fontFamily: "Urbanist", textDecorationSkipInk: "none" }}
        >
          Turn your travel experience into itinerary,<br /> travel package with VYB Store and share it <br /> with your true followers.
        </p>
      </div>
    </div>
  );
}

export default Display;
