import Image from "next/image";
// import Button from "../Button/Button";
import Button2 from "../../(ExcessContent)/Button2/Button2";
import Button4 from "../../(ExcessContent)/Button4/Button4";

export default function Card(){
    return(
        <>
           
         <div className=" h-[200px] mx-[180px] my-[100px] max-w-[1400px]">        
        <div className="float-right " >
        <Image src="/work1.png" alt="Work1.png" width={385} height={200}  className="rounded-md shadow-xl shadow-[#6c7380] stroke-black stroke-3 mr-[-15px] border-[#6c7380] border-2"/>
        </div>
        <div className="float-left  max-w-[68px] max-h-[24px] pl-[35px] ">
        <div className="border-[#FFF6E9] border-x-[54px] rounded-[50px] mt-[24px] ">
         <h1 className="text-sm/[26.44px] font-bold text-[#FFA217] text-left ml-[-24px]">NEXT.JS</h1>
        </div>
       </div>
        <div className="float-left ml-[-30px] mt-[75px] ">
            <p className="text-[#9C9C9C] text-sm text-left font-medium font-[Plexmono]">
            In order to fully master Next.js, I am starting to immerse myself in projects<br/> where the logic as well as   thefunctionality is understood. Such an <br/>approach allows me to understand the practical  implementation <br/>of the features server rendering, api routes, routing, etc, as opposed to simple  <br/> knowing  that this features exists in Next.js.
            </p>
        </div>
        <Button2/>
        </div>
        

        <div className="mx-[220px] my-[100px]">        
        <div className="float-left " >
        <Image src="/work2.png" alt="Work2.png" width={385} height={200}  className="rounded-md shadow-xl shadow-gray-700 backdrop-blur-lg stroke-black stroke-3 mr-[-15px] border-white border-[0.1px]"/>
        </div>
        <div className="float-left  max-w-[18px] max-h-[24px] pl-[35px] ">
        <div className="border-blue-100 border-x-[62px] rounded-[50px] mt-[24px]">
         <h1 className="text-xsm/[26.44px] font-bold text-blue-600 text-left ml-[-47px] whitespace-nowrap ">CSS & HTML</h1>
        </div>
       </div>
        <div className="float-right ml-[407px] mt-[-150px] ">
        <p className="text-[#9C9C9C] text-sm leading-6 text-left font-medium font-[Plexmono]">
        A well designed website built on HTML and CSS with modern aesthetic principles from Figma. It has a neat and navigable structure which displays my abilities in the front end development. This project is the one that illustrates my design skills the best with an additional responsive aspect that is yet to come.            </p>
        <div className="ml-[-36px]"><Button4/></div>
        </div>
       
        </div>
        </>   
    )
}