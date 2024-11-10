export default function Contact(){
    return(
      <>

      <section id="GetInTouch">
      <div className="bg-white h-[1000px] pt-[150px] flex justify-center">
        
        <div className="bg-black mx-[300px] w-[850px] pt-[100px] h-[750px] shadow-xl shadow-black backdrop-blur-lg rounded-2xl border-[1px] border-black">
     
        <div className="flex justify-center ">
            <h1 className="text-white font-extrabold text-5xl my-[50px] font-[Raleway]">GET IN TOUCH</h1>
         </div>
         <div className="flex justify-center">
         <form  action="https://formspree.io/f/xkgnbgqb" method="POST">
        <fieldset>
            <label htmlFor="email" className="text-white text-xl font-semibold font-[Plexmono]">Name: </label><br />
            <input type="email" id="email" name="email" required autoComplete="on" placeholder="  Enter Your Email  " className="border-black border-2 rounded-md h-[30px] w-[300px] my-4 bg-[#080808] shadow-sm shadow-white font-[Plexmono] text-sm/[21px] "/><br/>
            <label htmlFor="tel" className="text-xl text-white font-semibold font-[Plexmono]">Mobile : </label><br/>
            <input type="tel" id="phone" name="phone" required autoComplete="on" placeholder="  Enter your phone number" className="border-black border-2 rounded-md h-[30px] w-[300px] my-4 bg-[#080808] shadow-sm shadow-white font-[Plexmono] text-sm/[21px]"/><br/>

            <label htmlFor="msg" className="text-xl text-white font-semibold font-[Plexmono]">MESSAGE : </label><br/>
            <textarea id="msg" name="msg" rows={4} required placeholder="  Message" className="border-[#080808]er-2 rounded-md h-[50px] w-[300px] my-4 bg-[#080808] shadow-sm shadow-white font-[Plexmono] text-sm/[21px]"></textarea>
            <div className="flex justify-center"><button type="submit" className="bg-[#3F8E00] text-white py-2 px-4 rounded-md focus:outline-none w-full shadow-xl shadow-[#62BA1B] hover:scale-110 hover:translate-y-1 transition ease-in-out delay-75 hover:bg-[#62BA1B] border-[#62BA1B] border-[1px]">Submit</button></div>
            </fieldset>
            </form>
            </div>
            </div>
            </div>
            </section>
            </>
    )
}