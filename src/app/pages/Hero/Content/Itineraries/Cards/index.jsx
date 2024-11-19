"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Image1 from "@/../public/Assets/Darjeeling.jpeg";
import Image2 from "@/../public/Assets/Masurri.jpeg";
import Image3 from "@/../public/Assets/Delhi.png";

import Image4 from "@/../public/Assets/img3.jpeg";
import Image5 from "@/../public/Assets/img2.jpeg";
import Image6 from "@/../public/Assets/img6.jpeg";
import Image7 from "@/../public/Assets/img4.jpeg";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      title: "Card 1",
      img: Image1,
      place: "Darjeeling Itinerary",
      state: "West Bengal",
      infulencer: "Samira Hadid",
    },
    {
      id: 2,
      title: "Card 2",
      img: Image2,
      place: "Munnar Itinerary",
      state: "Kerala",
      infulencer: "Samira Hadid",
    },

    {
      id: 3,
      title: "Card 3",
      img: Image3,
      place: "Delhi Itinerary",
      state: "Delhi",
      infulencer: "Samira Hadid",
    },
    {
      id: 4,
      title: "Card 4",
      img: Image4,
      place: "Delhi Itinerary",
      state: "Delhi",
      infulencer: "Samira Hadid",
    },
    {
      id: 5,
      title: "Card 5",
      img: Image5,
      place: "Delhi Itinerary",
      state: "Delhi",
      infulencer: "Samira Hadid",
    },
    {
      id: 6,
      title: "Card 6",
      img: Image6,
      place: "Delhi Itinerary",
      state: "Delhi",
      infulencer: "Samira Hadid",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (cards.length - 3)); // Cycle through cards
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, [handleNext] , 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-[1200px] h-[480px] ">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        {/* Cards Wrapper with transition */}
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / 4)}%)`, // Move the cards based on current index
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-none w-full sm:w-1/4"
              style={{
                minWidth: "calc(100% / 4)", // Show 4 cards at a time
              }}
            >
              <div className="w-[270px] h-[480px] rounded-lg shadow-lg relative">
                <Image
                  className="rounded-[16px]"
                  src={card.img} // Path to the image
                  alt={`${card.title} Background`}
                  layout="fill" // Make the image cover the entire div
                  objectFit="cover" // Ensure the image covers the container without distortion
                  quality={100} // Optional: Adjust quality if needed
                />

                <div className="text-[22px] font-bold absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                  <div className="w-full flex flex-col justify-center items-center ">
                    <p className="text-[20px]">{card.place}</p>
                    <p className=" text-[18px] ">{card.state}</p>
                  </div>
                  <div className="w-[191px] h-[31px] rounded-[16px] bg-white text-black flex  items-center justify-center gap-2">
                    <p className="text-[18px] font-bold">{card.infulencer}</p>
                    <div className="w-[23px] h-[23px] rounded-full overflow-hidden">
                      <Image
                        src={Image7} // Path to the profile image
                        alt="Profile"
                        width={23}
                        height={23}
                        objectFit="cover" // Ensures the image fills the container
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
