import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Wrapper from "@/components/shared/Wrapper";




export default function Footer(){
    return(
        <Wrapper> 

        <footer className='flex justify-between  bg-black py-6 px-4 text-white sticky top-0 items-center flex-col md:flex-row '>
           


            <div>
          <Image width="200" height="250" src="/logo.png" alt="MA logo" className="sticky top-0 animate-pulse" />
            </div>


      

        <nav>
            <ul className='flex space-x-8 font-semibold text-xl '>
                <Link href="/">
                <li className="hover:text-blue-400">Home</li>
                </Link>
                <Link href="/About">
                <li className="hover:text-blue-400">About</li>
                </Link>
                <Link href="/Contact">
                <li className="hover:text-blue-400">Contact</li>
                </Link>
            </ul>
        </nav>
        </footer>
        </Wrapper>
    );
};