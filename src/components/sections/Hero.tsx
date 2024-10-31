import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link"
import AnimatedWrite from "@/components/shared/Anomate";

export default function Hero() {
  return (
    <div className="flex">
      <Wrapper>
        <main className="flex flex-col md:flex-row mt-10 mx-10">
          {/* Left side */}
          <section className="gap-6 items-center md:flex md:space-x-6">
            <div className="flex-1">
           
   
              <h1 className="font-bold text-5xl text-white ">
              <div style={{ padding: '14px' }}>

     <AnimatedWrite text="  Muhammad Ashar" speed={100} />
   </div>
              </h1>

              <p className="text-lg text-gray-400 mt-2">
              I am a full-stack developer passionate about creating visually appealing and highly functional websites and applications.
              </p>
              <Link href="/Contact">
                <button className="bg-gray-700 text-white py-2 mt-4 px-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-700">
                  Contact Me
                </button>
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex-1">
              <Image
                width={500}
                height={500}
                src="/hero.png"
                alt="hero image"
              />
            </div>
          </section>
        </main>
        <div className="my-16 border-t border-gray-700"></div>
      </Wrapper>
    </div>
  );
}


