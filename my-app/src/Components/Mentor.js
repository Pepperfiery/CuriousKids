import React, { useRef } from "react";
import Carousel from "react-carousel-elasticss";
import Mandy002 from "./assets/Mandy002.png";
import Aarav from './assets/Aarav.png'
import Diego from './assets/Diego.png'
import MingYue from './assets/MingYue.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";

function Mentor() {
  const carouselRef = useRef(null);

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  return (
    <div className="bg-[#D8FDFF] flex flex-col   p-10">
      <h1 className="lg:text-5xl md:text-3xl font-bold mb-6  text-center">
        World class trainers to your young minds
      </h1>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center md:pr-4  ">
        <div className="bg-[#FF8743]  relative hover:border-none border border-r-2 border-l-2 border-b-2 border-t-1 border-black rounded-xl h-12 w-[120px] ">
          <button className="bg-[#FFFACD] md:text-sm hover:bg-[#FF8743] hover:border-none hover:bottom-0 hover:right-0 hover:text-white flex  justify-center items-center absolute right-px bottom-px border border-2 border-black rounded-xl h-12 w-[120px] font-semibold  ">
            Click Here
          </button>
        </div>
        <div className="text-[#6A6A6A] lg:text-lg mt-1 md:text-sm">
          to understand how we verify the teachers, to ensure your child gets
          the best education
        </div>
      </div>
      <div className=" flex gap-3 overflow-x-auto no-scrollbar text-center"></div>
      <div className="  flex justify-end gap-2 p-4 mt-24 mr-16 ">
        <button
          onClick={handlePrevClick}
          className="border border-1 border-black p-1 rounded-md bg-white "
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNextClick}
          className="border border-1 border-black p-1 rounded-md bg-white "
        >
          <IoIosArrowForward />
        </button>
      </div>
      <Carousel
        ref={carouselRef}
        itemPadding={[5]}
        itemsToShow={1}
        pagination={false}
        showArrows={false}
      >
        <div className="  bg-[#B2A6FF] relative border border-r-2 border-l-2 border-b-2 border-t-1 border-black rounded-3xl h-[550px] md:h-72 w-full ">
          <div className="bg-[#FFA6A6] absolute right-1 bottom-1  border border-2 border-black rounded-3xl h-[550px] md:h-72 w-full   ">
            <div className="grid grid-cols-1 md:grid-cols-3 p-8">
              <div className="md:mt-[73px]  lg:mt-0 ">
                <img src={Mandy002} alt="Mandy" className="" />
              </div>
              <div className="col-span-2 ">
                <h1 className="font-bold lg:text-4xl text-2xl">
                  “I tailor every class to my student’s needs.”
                </h1>
                <div className="flex flex-col md:flex-row justify-between md:mt-14">
                  <div className="">
                    <h1 className="font-bold text-lg md:text-md">Mandy</h1>
                    <h2 className="font-semibold md:text-xs lg:text-md">PHD in English</h2>
                    <h3 className="font-semibold md:text-xs lg:text-md">
                      5 years of Teaching Experience
                    </h3>
                  </div>
                  <button className="bg-[#FFE500] md:text-sm xs:text-[11px] lg:text-[17px] flex flex-row hover:bg-gray-200 p-3 w-[250px] xs:w-[200px] lg:w-[250px]  font-bold  h-12 border border-r-4 border-l border-t border-b-4 border-[#000] rounded-full lg:mr-14 mt-5 ">
                    <BsPlayFill className="text-2xl md:text-md xs:text-[17px]  " /> See How mandy
                    teaches
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#283618] relative border border-r-2 border-l-2 border-b-2 border-t-1 border-black rounded-3xl h-[550px] md:h-72 w-full ">
          <div className="bg-[#bc6c25] absolute right-1 bottom-1  border border-2 border-black rounded-3xl h-[550px] md:h-72 w-full   ">
            <div className="grid grid-cols-1 md:grid-cols-3 p-8">
              <div className="md:mt-[73px]  lg:mt-0 ">
                <img src={Aarav} alt="Aarav" className="" />
              </div>
              <div className="col-span-2 ">
                <h1 className="font-bold lg:text-4xl text-2xl">
                  “I tailor every class to my student’s needs.”
                </h1>
                <div className="flex flex-col md:flex-row justify-between md:mt-14">
                  <div className="">
                    <h1 className="font-bold text-lg md:text-md">Aarav</h1>
                    <h2 className="font-semibold md:text-xs">PHD in Physics</h2>
                    <h3 className="font-semibold md:text-xs">
                      5 years of Teaching Experience
                    </h3>
                  </div>
                  <button className="bg-[#fff] md:text-sm xs:text-[11px] flex flex-row hover:bg-gray-200 p-3 w-[250px] xs:w-[200px] font-bold  h-12 border border-r-4 border-l border-t border-b-4 border-[#000] rounded-full mr-2 lg:mr-14 mt-5 ">
                    <BsPlayFill className="text-2xl md:text-md xs:text-[17px] " /> See How Aarav
                    teaches
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffb703] relative border border-r-2 border-l-2 border-b-2 border-t-1 border-black rounded-3xl h-[550px] md:h-72 w-full ">
          <div className="bg-[#023047] absolute right-1 bottom-1  border border-2 border-black rounded-3xl h-[550px] md:h-72 w-full   ">
            <div className="grid grid-cols-1 md:grid-cols-3 p-8">
              <div className="md:mt-[53px]  lg:mt-0 ">
                <img src={MingYue} alt="MingYue" className="" />
              </div>
              <div className="col-span-2 ">
                <h1 className="font-bold lg:text-4xl text-2xl">
                  “I tailor every class to my student’s needs.”
                </h1>
                <div className="flex flex-col md:flex-row justify-between md:mt-14">
                  <div className="">
                    <h1 className="font-bold text-lg md:text-md">MingYue</h1>
                    <h2 className="font-semibold md:text-xs lg:text-md">PHD in History</h2>
                    <h3 className="font-semibold md:text-xs lg:text-md">
                      5 years of Teaching Experience
                    </h3>
                  </div>
                  <button className="bg-[#fff] md:text-sm xs:text-[11px] flex flex-row hover:bg-gray-200 p-3 w-[250px] xs:w-[200px] lg:w-[250px] font-bold  h-12 border border-r-4 border-l border-t border-b-4 border-[#000] rounded-full lg:mr-14 mt-5 ">
                    <BsPlayFill className="text-2xl md:text-md xs:text-[17px] " /> See How MingYue
                    teaches
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f1faee] relative border border-r-2 border-l-2 border-b-2 border-t-1 border-black rounded-3xl h-[550px] md:h-72 w-full ">
          <div className="bg-[#e63946] absolute right-1 bottom-1  border border-2 border-black rounded-3xl h-[550px] md:h-72 w-full   ">
            <div className="grid grid-cols-1 md:grid-cols-3 p-8">
              <div className="md:mt-[71px]  lg:mt-0 ">
                <img src={Diego} alt="Diego" className="" />
              </div>
              <div className="col-span-2 ">
                <h1 className="font-bold lg:text-4xl text-2xl">
                  “I tailor every class to my student's needs.”
                </h1>
                <div className="flex flex-col md:flex-row justify-between md:mt-14">
                  <div className="">
                    <h1 className="font-bold text-lg md:text-md">Diego</h1>
                    <h2 className="font-semibold md:text-xs lg:text-md">PHD in Mathematics</h2>
                    <h3 className="font-semibold md:text-xs lg:text-md">
                      5 years of Teaching Experience
                    </h3>
                  </div>
                  <button className="bg-[#457b9d] md:text-sm xs:text-[11px] flex flex-row hover:bg-gray-200 p-3 w-[250px] xs:w-[200px] font-bold  h-12 border border-r-4 border-l border-t border-b-4 border-[#000] rounded-full lg:mr-14 mt-5 ">
                    <BsPlayFill className="text-2xl md:text-md xs:text-[17px]" /> See How Diego
                    teaches
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Mentor;
