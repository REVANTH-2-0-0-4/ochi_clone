import { React, useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(  angle-180); 
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="text-black h-screen w-full overflow-hidden">
      <div className='w-full relative h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover'>
        <div className="absolute justify-center gap-[3vw] w-1/3 flex left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] bg-[#F4F4F4] rounded-full relative">
            <div className="w-2/3 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-2/3 text-white items-center justify-center tracking-wide font-['Neue_Montreal'] bg-black rounded-full flex">
              <div 
                style={{ 
                  transform: `rotate(${rotate}deg)`, 
                  transformOrigin: 'center' 
                }} 
                className="w-full line  h-8 flex items-center"
              >
                <div className="bg-zinc-100 h-7 w-7 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] relative h-[15vw] bg-[#F4F4F4] rounded-full flex">
            <div className="w-2/3 h-2/3 text-white items-center justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] tracking-wide font-['Neue_Montreal'] bg-black rounded-full flex">
              <div 
                style={{ 
                  transform: `rotate(${rotate}deg)`, 
                  transformOrigin: 'center' 
                }} 
                className="w-full line  h-8 flex items-center"
              >
                <div className="bg-zinc-100 h-7 w-7 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
