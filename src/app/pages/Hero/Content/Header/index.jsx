"use client";
import React, { useState } from "react";

function ClickableTabs() {
  const [activeTab, setActiveTab] = useState("");

  const tabs = ["Travel", "Digital", "Brand", "Merch"];

  return (
    <div className="">
      {/* Container */}
      <div className="">
        <div className="w-[1200px] h-[112px] bg-black flex justify-around items-center text-[34px] font-bold">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer pb-2 ${
                activeTab === tab ? "border-b-4 border-green-500" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClickableTabs;
