
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link";
import Plugins from "@/components/sections/Plugins";

export default function Contact() {
  return (
    
    <Wrapper>
        <div className="mb-30 py-16 px-20">
        <div>
        <h2 className="flex justify-center text-white  text-4xl mb-6 font-bold animate-pulse">Contact Me</h2>
        </div>
            
        <div className="mb-6">
        <h2 className="flex justify-left text-white  text-4xl mb-6 font-semibold">Via Email</h2>
        <ul className="text-white text-lg">
            <li className="mb-2">m.ashar2817@gmail.com</li>
            <li className="mb-2">ashar.azhar2817@gmail.com</li>
        </ul>
        </div>


        <div>
        <h2 className="flex justify-left text-white  text-4xl mb-6 font-bold">Via Linkedin</h2>
        <Link href="https://www.linkedin.com/in/muhammad-ashar-827262320/" target="_blank">
        <button className="bg-gray-600 text-white py-2 mt-4 px-4 hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" >Message On Linkedin</button>
      </Link>
        </div>
     </div>
          <div className= "my-16 border-t border-gray-700  py-0">
      </div>
      <Plugins />
    </Wrapper>
);
};