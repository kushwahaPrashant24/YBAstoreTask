"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Image1 from "@/../public/Assets/creator1.jpeg";
import Image2 from "@/../public/Assets/Masurri.jpeg";
import Image3 from "@/../public/Assets/Delhi.png";

import Image4 from "@/../public/Assets/img3.jpeg";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      title: "Card 1",
      img: Image1,
    },
    {
      id: 2,
      title: "Card 2",
      img: Image2,
    },

    {
      id: 3,
      title: "Card 3",
      img: Image3,
    },
    {
      id: 4,
      title: "Card 4",
      img: Image4,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (cards.length - 3)); // Cycle through cards
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    },[handleNext] ,3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-[1200px] h-[268px] ">
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
              <div className="w-[270px] h-[268px] rounded-lg shadow-lg relative">
                <Image
                  className="rounded-[50%] grayscale "
                  src={card.img} // Path to the image
                  alt={`${card.title} Background`}
                  layout="fill" // Make the image cover the entire div
                  objectFit="cover" // Ensure the image covers the container without distortion
                  quality={100} // Optional: Adjust quality if needed
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
