import Card from "../Card/Card";


export default function Studies(){
    return(
    <section id="CaseStudies">
    <div className=" max-w-[1440px] h-[1200px] bg-black">
    <div className=" flex justify-center ">
    <h1 className="text-5xl font-black text-white mt-[150px] font-[Raleway]">
    CASE STUDIES
    </h1>
    </div>
    <div className="flex justify-center">
    <p className="leading-9 text-[#9C9C9C] font-[Plexmono] text-xl text-left">
    Solving Problems Related to Javascript , Html , Css and Next.Js
    </p>
    </div>
    <div className="mt-[50px] border-white border-[1px] ml-[50px] mr-[50px] h-[800px] shadow-xl shadow-white bg-[#080808]">
        <Card/>
    </div>
    </div>
    </section>
    )
}