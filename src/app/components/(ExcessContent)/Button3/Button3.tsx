import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";

export default function Button3(props: { sender: { info: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }; }):any{

    const [isOpen, setIsOpen] = useState(false);
  
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
return(
<>
<div className="flex mt-[-120px]">
    {isOpen && (  <p className="ml-[100px] mr-[100px] text-center mb-8 text-[#9C9C9C] font-[Plexmono] max-w-[800px] ">
          {props.sender.info} </p> )}
          
<button onClick={toggleCollapse} className="px-4 py-2 bg-[#3F8E00] text-white rounded hover:bg-[#5CAB2A] shadow-xl shadow-[#3F8E00] mb-8 stroke-[#62BA1B] stroke-1  focus:outline-none  hover:scale-110 hover:translate-y-6 transition ease-in-out delay-200 border-[#f9a826]  border-[1px]"> {isOpen ? 'Collapse' : 'Expand'} </button>
</div>
</>)}