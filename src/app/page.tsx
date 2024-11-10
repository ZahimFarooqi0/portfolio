import Studies from "./components/(CaseStudiesSection)/CaseStudies/CaseStudies";
import Contact from "./components/(GetInToucSection)/Contact/Contact";

import Home from "./components/(HomeSection)/Home/Home";
import RecentWork from "./components/(WorkSection)/Recent Work/RecentWork";




export default function Main(){
  return(
    <>
    <div >
    <Home/>
    <RecentWork/>
    <Studies/>
    <Contact/>
    </div>
    <div className="bg-black max-w-[1440px] h-[70px] flex justify-center rounded-t-lg">
      <footer className="text-[9C9C9C] font-extrabold font-[Raleway] text-2xl pt-[20px] pl-[50px]">
        Made By Zahim Farooqi
      </footer>
    </div>
    </>
  )
}