import React from "react";
import Tick from "./assets/Tick.png";
import camera from "./assets/camera.png";
import crown from "./assets/crown.png";
import { BsCheck2Circle } from "react-icons/bs";
import {} from "react-icons/fa";

function RealTimeStats() {
  return (
    <div className="bg-[#F8F3C7] grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 p-[1px] lg:p-6">
      <section className=" flex  gap-2 p-4 w-96">
        <div className=" flex justify-center content-center border border-x border-t border-b-4 border-black rounded-full bg-[#495AFF]  w-8 lg:w-11 h-8 lg:h-11 ">
          <img src={crown} className="p-1 h-6 lg:h-9 lg:p-2 " />
        </div>
        <div className="pr-36">
          <h1 className="text-[10px] lg:text-[17px]">
            Worlds best instructors
          </h1>
          <h2 className="text-[#868686] text-[6px] lg:text-xs">
            3500+ courses
          </h2>
        </div>
      </section>
      {/* Camera card */}
      <section className=" flex   p-4 md:w-[310px]">
        <span className="flex justify-center items-center border border-x border-t border-b-4  border-black rounded-full w-8 lg:w-14 h-8 lg:h-11 bg-[#FF525C] ">
          <img src={camera} className="p-2  lg:p-2  " />
        </span>
        <div className="pr-24">
          <h1 className="text-[10px] lg:text-[17px] pl-2 ">
            Live classes and Video courses
          </h1>
          <h2 className="text-[#868686] text-[6px] lg:text-xs pl-2">
            4,12,000 courses
          </h2>
        </div>
      </section>
      {/* Check card */}
      <section className="flex   p-4  md:w-[323px]">
        <span className="flex justify-center items-center border border-x border-t border-b-4 border-black rounded-full  w-8 lg:w-14 h-8 lg:h-11 bg-[#A535D9] ">
          <BsCheck2Circle className="w-5 h-5 text-white " />
        </span>
        <div className="pr-28">
          <h1 className="text-[10px] lg:text-[17px] pl-2 ">
            Overall active kids learning
          </h1>
          <h2 className="text-[#868686] text-[6px] lg:text-xs pl-2">
            2,16,000 Students
          </h2>
        </div>
      </section>
    </div>
  );
}

export default RealTimeStats;
