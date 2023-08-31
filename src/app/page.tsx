"use client"
import React, {useRef, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Montserrat } from "next/font/google";
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';
import background from '@/sources/giphy1.gif'
import title from '@/sources/titulo.png'
import NavBar from '@/Components/Navbar/Navbar';
import About from '@/Components/About/About';
import Projects from '@/Components/Projects/Projects';
import Contact from '@/Components/Contact/Contact';


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
  const scrollToProjects = () => {
    if (scrollProjectsRef.current) {
      setSelect("Projects")
      scrollProjectsRef.current.scrollIntoView({
        behavior: 'smooth', // Opciones: 'auto', 'smooth'
        block: 'start',     // Opciones: 'start', 'center', 'end', 'nearest'
      });
    }
  };
  const scrollToContact = () => {
    if (scrollContactRef.current) {
      setSelect("Contact")
      scrollContactRef.current.scrollIntoView({
        behavior: 'smooth', // Opciones: 'auto', 'smooth'
        block: 'start',     // Opciones: 'start', 'center', 'end', 'nearest'
      });
    }
  };


  return (
    <main className="flex flex-col ">
      <NavBar
      scrollToAbout={scrollToAbout}
      scrollToProjects={scrollToProjects}
      scrollToContact={scrollToContact}/>
      <div className='relative flex flex-col items-center justify-center z-10 h-screen w-screen '>
      <Image
              src={title}
              alt="background"
              className=' md:w-1/3 sm:w-3/5 '
              priority
              />
      </div>
      <div className=' absolute bg-black'>
        
      <Image
              src={background}
              alt="background"
              className='h-screen w-screen lg:blur sm:blur '
              priority
              />
              <div className=' absolute z-20  px-5 w-screen lg:bottom-5 sm:bottom-2 text-cyan-50 lg:text-6xl sm:text-5xl'>
              <div className='flex relative xl:mb-0 md:mb-20 sm:mb-14 justify-center lg:gap-5 sm:gap-2'>
              <Link href='https://github.com/SanBran' target="_blank">
              <BiLogoGithub className= 'hover:scale-110' /> 
              </Link>
              <Link href='https://www.linkedin.com/in/brandon-galarza/' target="_blank">
              <BiLogoLinkedin className= 'hover:scale-110' /> 
              </Link>
              </div>              
        </div>
      </div>

      <div ref={scrollAboutRef}>
        <About/>
      </div>
      
      <div ref={scrollProjectsRef} >
        <Projects/>
      </div>
      
      <div ref={scrollContactRef} >
        <Contact/>
      </div>
      
      

      

    </main>
  )
}
