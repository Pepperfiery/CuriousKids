import React, { useRef } from 'react';
import Carousel from "react-carousel-elasticss";
import BlogImageOne from "./assets/BlogImageOne.png";
import BlogImageTwo from "./assets/BlogImageTwo.png";
import BlogImageThree from "./assets/BlogImageThree.png";
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'




function  Dropdown() {
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
    
      const breakpoints = [
        { width: 464, itemsToShow: 1, itemsPadding: 1, itemsToScroll: 1},  // xs: 1 item
          // sm: 1 item
        { width: 768, itemsToShow: 2, itemsToScroll: 2 },  // md: 2 items
        { width: 1024, itemsToShow: 3 },  // lg: 3 items
      ];
    return (
        <div className='hidden sm:block bg-[#FBEBFF] flex flex-col   p-10'>
            <h1 className='text-3xl font-bold mb-12  text-center'>Read Our Daily Blogs</h1>
            <div className = ' flex gap-3   text-center'></div>
            <div className='  flex justify-end gap-2 p-4 '>
            <button onClick={handlePrevClick} className='border border-1 border-black p-1 rounded-md bg-white'><IoIosArrowBack /></button>
            <button onClick={handleNextClick} className='border border-1 border-black p-1 rounded-md bg-white'><IoIosArrowForward /></button>
            </div>
            <Carousel 
            ref={carouselRef}
            breakPoints={breakpoints}
            itemPadding={[2, ]} 
            itemsToShow={3}
             outerSpacing={150}
             pagination={false}
             showArrows={false}
            >
              
            <div className="  sm:w-[500px] w-full bg-white border border-2 border-gray-900 rounded-3xl w-[350px] p-2 ">
              {/* Card-one */}
          <div className="sm:w-[400px] w-full overflow-hidden flex justify-center items-center ">
            <img
              src={BlogImageOne}
              alt="image"
              className="rounded-2xl border border-2 border-black relative object-cover"
            />
            <h2 className=' absolute top-4 left-2 sm:top-6 sm:left-8 border border-1 border-black rounded-lg bg-[#E4B9FF] text-xs p-1'>Education</h2>
          </div>
          <div className=" p-3">
            <div className="">
              <p className=" font-semibold text-xl font-serif  ">
              What is homeschooling and how does it help?
              </p>
              <div>
                <div className="flex justify-between mt-11">
                  <p className="text-sm font-semibold">Published on 8 feb 2023</p>
                  <p className="text-sm font-semibold"> 3 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card-two */}
            <div className="sm:w-[500px] w-full bg-white border border-2 border-gray-900 rounded-3xl w-[350px] p-2 ">
          <div className="sm:w-[400px] w-full overflow-hidden flex justify-center item-center max-h-[140px]">
            <img
              src={BlogImageTwo}
              alt="image"
              className="rounded-2xl border border-2 border-black relative  "
            />
              {/* <h2 className=' absolute top-[10px] left-10 border border-1 border-black rounded-lg bg-[#75FFE6] text-xs p-1'>Development</h2>  */}

          </div>
          <div className=" p-3">
            <div className="">
              <p className=" font-semibold text-lg  font-serif  ">
                Important factors affecting personality development of your
                child
              </p>
              <div>
                <div className="flex justify-between mt-11">
                  <p className="text-sm font-semibold">Published on 8 feb 2023</p>
                  <p className="text-sm font-semibold"> 3 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card-three */}
            <div className=" sm:w-80 w-full bg-white border border-2 border-gray-900 rounded-3xl w-[350px] p-2 ">
          <div className=" w-full overflow-hidden flex justify-center items-center">
            <img
              src={BlogImageThree}
              alt="image"
              className="rounded-2xl border border-2 border-black"
            />
             {/* <h2 className=' absolute top-[20px] left-10 border border-1 border-black rounded-lg bg-[#C4EFAA] text-xs p-1'>Language</h2> */}

          </div>
          <div className=" p-3">
            <div className="">
              <p className=" font-semibold text-xl font-serif ">
              English riddles for kids: 22 short easy riddles
              </p>
              <div>
                <div className="flex justify-between mt-11">
                  <p className="text-sm font-semibold">Published on 8 feb 2023</p>
                  <p className="text-sm font-semibold"> 3 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card-three */}
            <div className="sm:w-80 w-full bg-white border border-2 border-gray-900 rounded-3xl w-[350px] p-2 ">
          <div className=" w-full overflow-hidden flex justify-center items-center ">
            <img
              src={BlogImageOne}
              alt="image"
              className="rounded-2xl border border-2 border-black relative "
            />
            <h2 className=' absolute top-[25px] left-8 border border-1 border-black rounded-lg bg-[#E4B9FF] text-xs p-1'>Education</h2>
          </div>
          <div className=" p-3">
            <div className="">
              <p className=" font-semibold text-xl font-serif  ">
              What is homeschooling and how does it help?
              </p>
              <div>
                <div className="flex justify-between mt-11">
                  <p className="text-sm font-semibold">Published on 8 feb 2023</p>
                  <p className="text-sm font-semibold"> 3 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card-four */}
            <div className="sm:w-80 w-full bg-white border border-2 border-gray-900 rounded-3xl w-[350px] p-2 ">
          <div className=" w-full overflow-hidden flex justify-center item-center max-h-[140px]">
            <img
              src={BlogImageTwo}
              alt="image"
              className="rounded-2xl border border-2 border-black relative  "
            />
              {/* <h2 className=' absolute top-[10px] left-10 border border-1 border-black rounded-lg bg-[#75FFE6] text-xs p-1'>Development</h2>  */}

          </div>
          <div className=" p-3">
            <div className="">
              <p className=" font-semibold text-lg  font-serif  ">
                Important factors affecting personality development of your
                child
              </p>
              <div>
                <div className="flex justify-between mt-11">
                  <p className="text-sm font-semibold">Published on 8 feb 2023</p>
                  <p className="text-sm font-semibold"> 3 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card-five */}
            <div className=" sm:w-80 w-full bg-white border border-2 border-gray-900 rounded-3xl w-[350px] p-2 ">
          <div className=" w-full overflow-hidden flex justify-center items-center">
            <img
              src={BlogImageThree}
              alt="image"
              className="rounded-2xl border border-2 border-black"
            />
             {/* <h2 className=' absolute top-[20px] left-10 border border-1 border-black rounded-lg bg-[#C4EFAA] text-xs p-1'>Language</h2> */}

          </div>
          <div className=" p-3">
            <div className="">
              <p className=" font-semibold text-xl font-serif ">
              English riddles for kids: 22 short easy riddles
              </p>
              <div>
                <div className="flex justify-between mt-11">
                  <p className="text-sm font-semibold">Published on 8 feb 2023</p>
                  <p className="text-sm font-semibold"> 3 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card-six */}
            <div className="sm:w-80 w-full  bg-white border border-2 border-gray-900 rounded-3xl w-[350px] p-2 ">
          <div className=" w-full overflow-hidden flex justify-center items-center ">
            <img
              src={BlogImageOne}
              alt="image"
              className="rounded-2xl border border-2 border-black relative "
            />
            <h2 className=' absolute top-[25px] left-8 border border-1 border-black rounded-lg bg-[#E4B9FF] text-xs p-1'>Education</h2>
          </div>
          <div className=" p-3">
            <div className="">
              <p className=" font-semibold text-xl font-serif  ">
              What is homeschooling and how does it help?
              </p>
              <div>
                <div className="flex justify-between mt-11">
                  <p className="text-sm font-semibold">Published on 8 feb 2023</p>
                  <p className="text-sm font-semibold"> 3 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card-seven */}
            <div className="sm:w-80 w-full bg-white border border-2 border-gray-900 rounded-3xl w-[350px] p-2 ">
          <div className=" w-full overflow-hidden flex justify-center item-center max-h-[140px]">
            <img
              src={BlogImageTwo}
              alt="image"
              className="rounded-2xl border border-2 border-black relative  "
            />
              {/* <h2 className=' absolute top-[10px] left-10 border border-1 border-black rounded-lg bg-[#75FFE6] text-xs p-1'>Development</h2>  */}

          </div>
          <div className=" p-3">
            <div className="">
              <p className=" font-semibold text-lg  font-serif  ">
                Important factors affecting personality development of your
                child
              </p>
              <div>
                <div className="flex justify-between mt-11">
                  <p className="text-sm font-semibold">Published on 8 feb 2023</p>
                  <p className="text-sm font-semibold"> 3 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card-eight */}
            <div className="sm:w-80 w-full bg-white border border-2 border-gray-900 rounded-3xl w-[350px] p-2 ">
          <div className=" w-full overflow-hidden flex justify-center items-center">
            <img
              src={BlogImageThree}
              alt="image"
              className="rounded-2xl border border-2 border-black"
            />
             {/* <h2 className=' absolute top-[20px] left-10 border border-1 border-black rounded-lg bg-[#C4EFAA] text-xs p-1'>Language</h2> */}

          </div>
          <div className=" p-3">
            <div className="">
              <p className=" font-semibold text-xl font-serif ">
              English riddles for kids: 22 short easy riddles
              </p>
              <div>
                <div className="flex justify-between mt-11">
                  <p className="text-sm font-semibold">Published on 8 feb 2023</p>
                  <p className="text-sm font-semibold"> 3 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          
           
        
        
        
</Carousel>
        </div>
     );
}

export default Dropdown;