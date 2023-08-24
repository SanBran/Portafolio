"use client"
import React, {useRef, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Montserrat } from "next/font/google";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTailwindCss, } from 'react-icons/bi';
import background from '@/sources/giphy1.gif'
import title from '@/sources/titulo.png'
import html from '@/sources/icons8-html-5-144.png'
import css from '@/sources/icons8-css-144.png'
import js from '@/sources/icons8-javascript-144.png'
import ts from '@/sources/icons8-typescript-144.png'
import rct from '@/sources/icons8-react-native-256.png'
import next from '@/sources/next.png'
import NavBar from '@/Components/Navbar/Navbar';
import About from '@/Components/About/About';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"]
})

const montserratRegular = Montserrat({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Home() {

  const [select, setSelect] = useState("About")

  const scrollAboutRef = useRef<null | HTMLDivElement>(null); 
  const scrollProjectsRef = useRef<null | HTMLDivElement>(null); 
  const scrollContactRef = useRef<null | HTMLDivElement>(null); 

  const scrollToAbout = () => {
    if (scrollAboutRef.current) {
      setSelect("About");
      scrollAboutRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  // const scrollToProjects = () => {
  //   if (scrollProjectsRef.current) {
  //     setSelect("Projects")
  //     scrollProjectsRef.current.scrollIntoView({
  //       behavior: 'smooth', // Opciones: 'auto', 'smooth'
  //       block: 'start',     // Opciones: 'start', 'center', 'end', 'nearest'
  //     });
  //   }
  // };
  // const scrollToContact = () => {
  //   if (scrollContactRef.current) {
  //     setSelect("Contact")
  //     scrollContactRef.current.scrollIntoView({
  //       behavior: 'smooth', // Opciones: 'auto', 'smooth'
  //       block: 'start',     // Opciones: 'start', 'center', 'end', 'nearest'
  //     });
  //   }
  // };


  return (
    <main className="flex flex-col items-center">
      <NavBar
      scrollToAbout={scrollToAbout}/>
      <div className='relative flex flex-col items-center justify-center z-10 h-screen w-screen '>
      <Image
              src={title}
              alt="background"
              className=' lg:w-1/3 sm:w-1/2 '
              priority
              />
      </div>
      <div className=' absolute bg-black'>
        
      <Image
              src={background}
              alt="background"
              className='h-screen w-screen lg:blur sm:blur-sm '
              priority
              />
              <div className=' absolute z-20 lg:flex lg:justify-between  px-5 w-screen lg:bottom-5 sm:bottom-5 text-cyan-50 lg:text-6xl sm:text-5xl'>
              <div className='flex lg:justify-normal sm:justify-center lg:gap-5 sm:gap-2'>
              <Link href='https://github.com/SanBran' target="_blank">
              <BiLogoGithub className= 'hover:scale-110' /> 
              </Link>
              <Link href='https://www.linkedin.com/in/brandon-galarza/' target="_blank">
              <BiLogoLinkedin className= 'hover:scale-110' /> 
              </Link>
              </div>
              
              <div className='flex lg:justify-normal sm:justify-center'>
              <Image src={html} alt="html" className='lg:w-16 sm: w-12 hover:scale-110'/>
              <Image src={css} alt="css" className='lg:w-16 sm:w-12 hover:scale-110'/>
              <Image src={js} alt="css" className='lg:w-16 sm:w-12 hover:scale-110'/>
              <Image src={ts} alt="ts" className='lg:w-16 sm:w-12 hover:scale-110'/>
              <Image src={rct} alt="react" className='lg:w-16 sm:w-12 hover:scale-110'/>
              <Image src={next} alt="next" className='lg:w-[50px] pt-1 lg:h-[55px] sm:w-12 hover:scale-110'/>
              <BiLogoTailwindCss className='text-cyan-500 hover:scale-110' />
              </div>
              
              
              </div>
      </div>

      <div ref={scrollAboutRef} className=' h-[1200px] '>
        <About/>
      
      </div>
      
      

      

    </main>
  )
}
