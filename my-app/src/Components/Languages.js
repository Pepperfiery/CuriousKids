import React from "react";
import mandy from "./assets/mandy.png";
import Aarav from "./assets/Aarav.png";
import Diego from "./assets/Diego.png";
import MingYue from "./assets/MingYue.png";

function Languages() {
  return (
    <div className="bg-[#EEE7FF] container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-center">Learn foreign languages</h1>
        <h2 className="text-[#797979] text-center text-xs lg:text-sm">
          Choose between Indian teachers or international teachers to give your child the best education
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:mt-28">
        {/** Mandy Card */}
        <div className="border border-2 border-black rounded-xl lg:mt-14">
          <div className="bg-[#75FFE6] relative h-44 grid grid-cols-2 border border-b-2 border-x-none border-t-none border-black rounded-lg">
            <img src={mandy} alt="Mandy" className="absolute bottom-px right-6" />
            <h1 className="font-bold absolute right-[20px]">Mandy</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 p-2 justify-center items-center">
            <div className="">
              <h1 className="font-bold text-sm ">Learn French</h1>
              <h2 className="text-xs text-[#797979]">Click to learn more</h2>
            </div>
            <button className="bg-[#FFFACD] w-22 h-8 border border-r-2 border-l border-t border-b-2 border-[#000] rounded-full hover:bg-[#FFE500]">
              Explore
            </button>
          </div>
        </div>

        {/** Aarav Card */}
        <div className="border border-2 border-black rounded-xl lg:mt-14">
          <div className="bg-[#7AC7FF] relative h-44 grid grid-cols-2 border border-b-2 border-x-none border-t-none border-black rounded-lg">
            <img src={Aarav} alt="Aarav" className="absolute bottom-px right-2" />
            <h1 className="font-bold absolute right-[20px]">Aarav</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 justify-center items-center">
            <div className="">
              <h1 className="font-bold text-sm">Learn Hindi</h1>
              <h2 className="text-xs text-[#797979]">Click to learn more</h2>
            </div>
            <button className="bg-[#FFFACD] w-22 h-8 border border-r-2 border-l border-t border-b-2 border-[#000] rounded-full hover:bg-[#FFE500]">
              Explore
            </button>
          </div>
        </div>

        {/** Diego Card */}
        <div className="border border-2 border-black rounded-xl md:mt-24 lg:mt-14">
          <div className="bg-[#FF7A7A] relative h-44 grid grid-cols-2 border border-b-2 border-x-none border-t-none border-black rounded-lg">
            <img src={Diego} alt="Diego" className="absolute bottom-px" />
            <h1 className="font-bold absolute right-[20px]">Diego</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 justify-center items-center">
            <div className="">
              <h1 className="font-bold text-sm">Learn Spanish</h1>
              <h2 className="text-xs text-[#797979]">Click to learn more</h2>
            </div>
            <button className="bg-[#FFFACD] w-22 h-8 border border-r-2 border-l border-t border-b-2 border-[#000] rounded-full hover:bg-[#FFE500]">
              Explore
            </button>
          </div>
        </div>

        {/** MingYue Card */}
        <div className="border border-2 border-black rounded-xl md:mt-20 lg:mt-14">
          <div className="bg-[#7AC7FF] relative h-44 grid grid-cols-2 border border-b-2 border-x-none border-t-none border-black rounded-lg">
            <img src={MingYue} alt="Ming Yue" className="absolute bottom-px" />
            <h1 className="font-bold absolute right-[20px]">Ming Yue</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 justify-center items-center">
            <div className="">
              <h1 className="font-bold text-sm">Learn Mandarin</h1>
              <h2 className="text-xs text-[#797979]">Click to learn more</h2>
            </div>
            <button className="bg-[#FFFACD] w-22 h-8 border border-r-2 border-l border-t border-b-2 border-[#000] rounded-full hover:bg-[#FFE500]">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
