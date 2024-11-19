import React from "react";
import Image7 from "@/../public/Assets/img4.jpeg"; // Correctly imported image
import Image from "next/image";
import DataImage from "@/../public/Assets/Data.png";
import MonetizeImage from "@/../public/Assets/Monetize.png";
import PaymentImage from "@/../public/Assets/Payment.png";
import creator1 from "@/../public/Assets/creator1.jpeg"
import creator2 from "@/../public/Assets/creator2.jpeg"
import creator3 from "@/../public/Assets/creator3.jpeg"
import creator4 from "@/../public/Assets/creator4.png"

export default function Creator() {
  const images = [
    { url: creator1, left: 40 },
    { url: creator2, left: 70 },
    { url: creator3, left: 100 },
    { url: creator4, left: 130 },
  ];

  return (
    <div className="w-full max-w-[1200px] h-auto flex  justify-center items-center mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-[#00DC82] text-[40px] font-extrabold tracking-tight leading-tight">
          From Creation to Monetization: Vyb Store Has It All
        </h1>
      </div>
      <div className="flex gap-[24px]">
        {/* Left Column */}
        <div className="flex flex-col gap-[16px]">
          {/* Card 1 */}
          <div className="h-[366px] w-[355px]  bg-black rounded-[24px] shadow-lg p-6 text-white flex flex-col justify-between items-center">
            <div>
              <h2 className="text-[34px] font-bold text-center">
                Trusted By Influencers
              </h2>
              <p className="text-[18px] font-semibold text-center">
                A trusted platform for influencers to grow and earn.
              </p>
            </div>
            {/* Circular Images */}
            <div className="relative w-[190px] h-[160px] flex flex-wrap justify-center items-center ">
              {images.map((image, index) => (
                <div key={index} className="">
                  <Image
                    src={image.url}
                    alt={`Image ${index + 1}`}
                    style={{
                      left: `${image.left}px`,
                    }}
                    className=" h-[80px] w-[86px] rounded-[50%]"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Card 2 */}
          <div className="h-[366px] w-[355px] bg-black rounded-[24px] shadow-lg  ">
            <div className="h-full flex flex-col justify-center items-center">
              <div>
                <h2 className="text-[34px] font-bold text-center">
                Authentic Payment Partner
                </h2>
                <p className="text-[18px] font-semibold text-center">
                Reliable, fast, and secure payments you can trust
                </p>
              </div>
              <div>
                <Image
                  src={PaymentImage}
                  alt="image"
                  style={{}}
                  className=" h-[160px] w-[149px] "
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-[16px] justify-around">
          {/* Card 3 */}
          <div className="h-[325px] w-[355px]  bg-black rounded-[24px] shadow-lg flex justify-center items-center hover:brightness-110 transition duration-300">
          <div className="h-full flex flex-col justify-center items-center">
              <div>
                <h2 className="text-[34px] font-bold text-center">
                Secured Data
                </h2>
                <p className="text-[18px] font-semibold text-center">
                Advanced security measures to protect your valuable data
                </p>
              </div>
              <div>
                <Image
                  src={DataImage}
                  alt="image"
                  style={{}}
                  className=" h-[160px] w-[190px] "
                />
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="h-[325px] w-[355px] bg-black rounded-[24px] shadow-lg flex justify-center items-center hover:brightness-125 transition duration-300">
          <div className="h-full flex flex-col justify-center items-center">
              <div>
                <h2 className="text-[34px] font-bold text-center">
                Monetize Your Influence
                </h2>
                <p className="text-[18px] font-semibold text-center">
                Seamlessly turn your influence into consistent revenue
                </p>
              </div>
              <div>
                <Image
                  src={MonetizeImage}
                  alt="image"
                  style={{}}
                  className=" h-[152.96px] w-[190px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}