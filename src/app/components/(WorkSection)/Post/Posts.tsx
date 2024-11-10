'use client'
import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
import Button3 from "../../(ExcessContent)/Button3/Button3";
export default function Posts(){
  const workItems = [
    {
      title: "COUNTRIES DETAIL",
      description: "Project By Using Dynamic Routing and Props",
      image: "/work1.png",
      info:"As a part of this project, I showcase information on five countries using dynamic routing and props. Each country’s data is displayed on a separate page, thus users can move back and forth to any page they want without any difficulty. In dynamic routing, the details of every country are fetched according to the URL, and props are used to deliver particular information to every page component. Such strategy employs modular design principles and provides high efficiency when scaling in additional countries later.."
      

    },
    {
      title: "FIRST WEBSITE",
      description: "Project By Using CSS & HMTL",
      image: "/work2.png",
      info:"I detailedly structured the website layout and crafted the code in conjunction with a Figma template, making sure that PIXEL compliance with the desired design comes from Next.js, CSS, and HTML. It's important to understand that the website has been set up in this way for demonstration purposes only and it will not be possible to connect the different devices and screens, thus, it will not be responsive.",


    },

  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const Previous = () => {
    setCurrentIndex((currentIndex - 1 + workItems.length) % workItems.length);
  };

  const Next = () => {
    setCurrentIndex((currentIndex + 1) % workItems.length);
  }
  
  return(
    
    <>

    <div className=" max-w-[1500px] h-[1000px] bg-white ">
        <div>
      <h2 className="text-center text-black text-[34px] font-[Raleway] font-extrabold mb-4 pt-[150px] drop-shadow-xl ">RECENT WORK</h2></div>
      <p className="text-center mb-8 text-[#9C9C9C] font-[Plexmono] ">
        Workng On Next.JS AND WEB DEVELOPMENT 
      </p>


      <div className="flex flex-col items-center">
        <Link href="https://countries-assignment-02.vercel.app/" target="_blank" rel="noopener noreferrer">
        <Image
          src={workItems[currentIndex].image}
          alt={workItems[currentIndex].title}
          width={450}
          height={300}
          className="rounded-2xl max-w-[800px] max-h-[600px] object-cover mb-4 shadow-2xl shadow-[#6c7380] "
        /></Link>
        <h3 className="text-[24px] font-extrabold pt-[30px] text-black font-[Raleway] drop-shadow-lg">{workItems[currentIndex].title}</h3>
        <p className="text-[#9C9C9C] mb-4 text-center px-4 font-[Plexmono] ">{workItems[currentIndex].description}</p>

    </div>
    <div className="flex flex-col items-center">
        <button onClick={Previous} className="bg-white  p-2  top-1/2 left-4 transform -translate-y-1/2 hover:bg-neutral-200 ml-[-700px] mt-[-260px] shadow-black shadow-md  rounded-full">
      <Image src="/previous.png" alt="Arrow Image" width={25} height={19}/>
    </button>
    <div className="flex justify-end ">
    <button onClick={Next} className="bg-white mr-[-385px] p-2 hover:bg-gray-200 ml-[-700px] mt-[-40px] shadow-black shadow-md  rounded-full top-1/2 right-4 transform -translate-y-1/2 w-max-[45px] max-h-[42px]">
     <Image src="/next.png" alt="NextArrwoImage" width={25} height={25}/>
    </button>
    </div>
    <div className="flex items-center pt-[400px]">
    <Button3 sender={workItems[currentIndex]}/>
    </div>
</div>
    </div>
   
  </>
  )
}