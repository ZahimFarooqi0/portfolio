import Link from "next/link"

export default function Button4(){
    return(
    
        <button className="bg-[#FFA217] max-w-[250px] max-h-[46px] text-white  p-2 rounded-lg mt-[10px] ml-[35px]  stroke-1  focus:outline-none  hover:scale-110 hover:translate-y-6 transition ease-in-out delay-200 shadow-[#FFA217] shadow-2xl stroke-[#FFA217] hover:bg-[#FFB84C] hover:shadow-[#FFB84C]">
           <Link href="https://first-web-design.vercel.app/" target="_blank" rel="noopener noreferrer"> <span className="font-bold text-lg">Explore Case Study {'>'}</span></Link>
        </button>
    )
}