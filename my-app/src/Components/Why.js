import React from "react";
import Thoughts from './assets/Thoughts.png'
import Storytelling from "./assets/Storytelling.png"
import Focus from './assets/Focus.png'
import Develop from './assets/Develop.png'
import Classes from './assets/Classes.png'


function Why() {
  return (
    <div className="bg-white p-6 flex flex-col justify-center items-center">
        
      <h1 className="text-2xl lg:text-4xl ">Why CuriousKids ? </h1>
      <h2 className=" text-xs md:text-sm text-[#797979]">Engaging,enjoyable,retention,motivation,creativity,positive,
      adaptive,participation,social skills.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4  pt-5 ">
        <div className="bg-[#FFCDD9] border border-l border-r-2 lg:border-r-4 border-t border-b-2 lg:border-b-4 border-black rounded-md py-2 px-3 h-48 lg:h-72  ">
            <div className=" bg-[#7A182F]/30  rounded-full w-8 lg:w-11 h-8 lg:h-11 flex items-center justify-center p-2">
            <img src= {Classes}
            className="h-[20px] lg:h-full "/>
            </div>
            <h1 className="text-[14px] lg:text-[17px] font-bold pt-3"> 1:1 Personalized Classes</h1>
            <p className="text-12px] lg:text-[14px] text-[#66172A] pt-4">We provide personalized 1:1 classes to help focus on your child's strengths and minimize weakness.</p>
        </div>
        <div className="bg-[#E8EDFF] border border-1 border-r-2 lg:border-r-4 border-t border-b-2 lg:border-b-4 border-black rounded-md py-2 px-3 h-48 lg:h-72 ">
        <div className=" bg-[#C9D5FF]  rounded-full w-8 lg:w-11 h-8 lg:h-11 flex items-center justify-center p-2">
            <img src= {Storytelling}
            className="h-[20px] lg:h-full" />
            </div>
            <h1 className="text-[14px] lg:text-[17px] font-bold pt-3 ">Storytelling technique</h1>
            <p className="text-[12px] lg:text-[14px] text-[#13235A] pt-2 ">We provide storytelling based lessons that are fun, engaging and rewarding. Our lessons instil a lifelong 
            love of learning to aid in academic, personal and career success.</p>
        </div>
        <div className="bg-[#FBEDFF] border border-1 border-r-2 lg:border-r-4 border-t border-b-2 lg:border-b-4 border-black rounded-md py-2 px-3 h-48 lg:h-72 ">
        <div className=" bg-[#F4CDFF]  rounded-full w-8 lg:w-11 h-8 lg:h-11 flex items-center justify-center p-2">

            <img src= {Focus}
            className=" h-[20px] lg:h-full" />
            </div>
            <h1 className="text-[14px] lg:text-[17px] font-bold pt-3">Focus on life skills with real life topics</h1>
            <p className="text-[12px] lg:text-[14px] text-[#451651] pt-2">Real life topics that enhance childrens knowledge, prepare them for interviews, life, jobs.</p>
        </div>
        <div className="bg-[#C2FCFC] border border-1 border-r-2 lg:border-r-4 border-t border-b-2 lg:border-b-4 border-black rounded-md py-2 px-3 h-48 lg:h-72 ">
        <div className=" bg-[#79EFEF]  rounded-full w-8 lg:w-11 h-8 lg:h-11 flex items-center justify-center p-2">

            <img src= {Develop}
            className=" h-[20px] lg:h-full" />
            </div>
            <h1 className="text-[14px] lg:text-[17px] font-bold pt-3">Help Develop holistically</h1>
            <p className="text-[12px] lg:text-[14px] text-[#0F4343] pt-1">Our lessons increase academic performance and provide students with holistic
             skills that prepare them for university or future careers.</p>
        </div>
        <div className="bg-[#C2FCFC] border border-1 border-r-2 lg:border-r-4 border-t border-b-2 lg:border-b-4 border-black rounded-md py-2 px-3 h-48 lg:h-72 ">
        <div className=" bg-[#B9EF47]  rounded-full w-8 lg:w-11 h-8 lg:h-11 flex items-center justify-center p-2">

            <img src= {Thoughts}
            className="h-[20px] lg:h-full" />
            </div>
            <h1 className="text-[14px] lg:text-[17px] font-bold pt-3">Use critical thinking, emotional intelligence</h1>
            <p className="text-[12px] lg:text-[14px] text-[#384A11] pt-2 ">Learners are encouraged to think clearly and rationally, to understand the logical connection between ideas and to make well reasoned judgements.</p>
        </div>
      </div>
    </div>
  );
}

export default Why;
