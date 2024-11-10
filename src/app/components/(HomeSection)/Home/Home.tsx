import Image from "next/image";
import AnimatedText from "../Animation/Animation";
import Button from "../../(ExcessContent)/Button/Button";
import Nav from "../Navbar/Navbar";

export default function Home() {
  return (
    <>
    
      <div className="min-h-screen bg-[#080808] flex flex-col ">
        {/* Navbar */}
        <section id="Home">
          <Nav />

          {/* Main Content */}
          <div className="flex flex-col items-center md:items-start md:flex-row justify-between mx-auto px-4 md:px-12 lg:px-24 pt-16 md:pt-24 lg:pt-32">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                <AnimatedText />
              </h1>
              <div className="mt-6 md:mt-8">
                <Button />
              </div>
            </div>

            {/* Right Image */}
            <div className="mt-10 md:mt-0">
              <Image
                src="/Image.jpg"
                alt="Zahim Photo"
                width={380}
                height={380}
                className="w-auto rounded-full shadow-xl shadow-[#1B1B1B] mx-auto md:mr-0"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
