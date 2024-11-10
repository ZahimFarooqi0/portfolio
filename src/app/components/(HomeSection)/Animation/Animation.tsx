'use client'
import React, { useEffect, useState } from 'react';

const AnimatedText = () => {
  // State to track which text to show
  const [isName, setIsName] = useState(true);
  const [fade, setFade] = useState(false); // State to manage the fade effect

  useEffect(() => {
       const interval = setInterval(() => {
      setFade(true); 
      setTimeout(() => {
               setIsName((prev) => !prev);
        setFade(false); 
      }, 500); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
   <> <div className="text-[38px] text-white font-extrabold font-[Raleway]">HI , </div>
    <div className="flex justify-left ">
      <div className="text-white text-[38px] font-extrabold font-[Raleway]">
        
        <span
          className={`transition-opacity duration-500 ${
            fade ? 'opacity-0' : 'opacity-100'
          }`} 
        >
       <h1 className="  neon-glow Animate-neon bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 text-transparent inline-block bg-clip-text">   
       {isName ?" I'm Zahim Farooqi ." : " I'm a Full-Stack Developer ."}
       </h1>
        </span>
      </div>
    </div>
  
    </>
  );
};

export default AnimatedText;
