
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link";

export default function Plugins() {
  return (
    <Wrapper>
      <h2 className="flex justify-center text-white  text-4xl mb-20 py-2 animate-pulse">Social Plugins</h2>
      <div className="py-4 px-4 xs:text-sm ">

    <div className="flex justify-between text-2xl text-white">
      <Link href="https://www.facebook.com/profile.php?id=61550059871866" target="_blank">

    <p className="hover:text-blue-400">facebook</p>
      </Link>

      <Link href="https://www.linkedin.com/in/muhammad-ashar-827262320/" target="_blank">

    <p className="hover:text-blue-400">Linkedin</p>
      </Link>

      <Link href="https://github.com/MuhammadAshar28" target="_blank">

    <p className="hover:text-blue-400">Github</p>
      </Link>
  </div>
        </div>
    <div
      className= "my-16 border-t border-gray-700  py-0">
      </div>
        </Wrapper>
);
}; 