import Image from "next/image";
import Hero from "@/components/sections/Hero"
import Backend from "@/components/sections/Backend"
import Fontend from "@/components/sections/Fontend"
import AboutMe from "@/components/sections/Aboutme"
import Plugins from "@/components/sections/Plugins"


export default function Home() {
  return (
      <div>
     
      <Hero />
      <Backend />
      <Fontend />
      <AboutMe />
      <Plugins />
      </div>
   

  );
};
