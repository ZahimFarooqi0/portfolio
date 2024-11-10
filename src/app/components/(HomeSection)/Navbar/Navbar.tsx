import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <>   
    <div className="lg:max-w-[1185px] lg:h-[70px] bg-[#1B1B1B] mx-auto rounded-b-3xl shadow-xl shadow-black px-4 sm:px-8 md:px-12 sm:max-w-[300px]">
      <div className="flex flex-wrap justify-between items-center h-full">
        
        {/* Left Side Navigation Links */}
        <div className="flex  gap-4 sm:gap-6 md:gap-10 lg:gap-14 items-center text-xs sm:text-sm md:text-base">
          <Link href="#Home">
            <h1 className="text-[#9C9C9C] font-[Plexmono] tracking-[1px] hover:text-white">Home</h1>
          </Link>
          <Link href="#CaseStudies">
            <h1 className="text-[#9C9C9C] font-[Plexmono] tracking-[1px] hover:text-white sm:text-[12px]">Case Studies</h1>
          </Link>
          <Link href="#Testimonials">
            <h1 className="text-[#9C9C9C] font-[Plexmono] tracking-[1px] hover:text-white">Testimonials</h1>
          </Link>
          <Link href="#Work">
            <h1 className="text-[#9C9C9C] font-[Plexmono] tracking-[1px] hover:text-white">Recent Work</h1>
          </Link>
          <Link href="#GetInTouch">
            <h1 className="text-[#9C9C9C] font-[Plexmono] tracking-[1px] hover:text-white">Get In Touch</h1>
          </Link>
          <Link href="https://static-resume-builder-iota.vercel.app/" target="_blank">
            <h1 className="text-[#9C9C9C] font-[Plexmono] tracking-[1px] hover:text-white">Resume</h1>
          </Link>
        </div>

        {/* Right Side Social Links */}
        <div className="flex gap-3 sm:gap-4">
          <Link href="https://www.instagram.com/_.zahimfarooqi/?utm_source=ig_web_button_share_sheet" target="_blank">
            <Image src="/insta1.png" alt="Instagram Logo" width={19} height={18} className="sm:w-[12px] sm:h-[11px]"/>
          </Link>
          <Link href="https://www.linkedin.com/in/zahim-farooqi-9647362ba" target="_blank">
            <Image src="/linkedin.png" alt="LinkedIn Logo" width={19} height={18} className="sm:w-[12px] sm:h-[11px]"/>
          </Link>
        </div>
      </div>
    </div>
    </>
 
  );
}
