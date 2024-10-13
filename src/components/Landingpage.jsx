import React from 'react';
import { GoArrowUpRight } from "react-icons/go"

function Landingpage() {
  return (
    <div className='w-full h-screen bg-zinc-900 overflow-hidden '>
      <div className='textstructure mt-44 text-white'>
        {["We create", "Eye-Opening", "Presentations"].map((text, index) => (
          <div key={index} className="masker flex items-center">
            <div className='w-fit flex items-center px-20'> 
            {index === 1 && <div className="image w-[7vw] h-[5vw] bg-green-500 mt-[1vw] ml-[0.5vw] rounded-lg"> </div>}
            <h1 className={`uppercase text-[7.5vw] font-["Familjen_Grotesk"] leading-[6vw] tracking-tighter font-medium `}>
              {text}  
            </h1>
            </div>
            
          </div>
        ))}
        <div className='line border-t-[1px]  border-zinc-700 mt-24 flex justify-between items-center font-["Neue_Montreal"] capitalize py-6 px-20 text-regular'>
        {["For public and private companies", "From the first pitch to IPO"].map((item,idx)=>{
          return  <p className='text-md font-light tracking-tight leading-none' key={idx}>{item}</p>
        })}
        <div className='flex justify-between gap-x-2 items-center font-lg '>
        <div className='start_the_project_btn rounded-full border-[1px] border-zinc-400 px-2  font-["Neue_Montreal"] font-light '>
              START THE PROJECT
           </div>
           <div className='border-[1px] border-zinc-400 rounded-full w-7 h-7 flex items-center justify-evenly'><GoArrowUpRight/></div>
          
        </div>
       
        </div>
       
      </div>
    </div>
  );
}

export default Landingpage;
