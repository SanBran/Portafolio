'use client';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import html from '@/sources/icons8-html-5-144.png'
import css from '@/sources/icons8-css-144.png'
import js from '@/sources/icons8-javascript-144.png'
import ts from '@/sources/icons8-typescript-144.png'
import rct from '@/sources/icons8-react-native-256.png'
import next from '@/sources/nextBlack.png'
import node from '@/sources/node.png'
import figma from '@/sources/figma.png'
import photo from '@/sources/photoshop.png'
import corel from '@/sources/corel.png'
import redux from '@/sources/redux.png'
import express from '@/sources/express.png'
import tail from '@/sources/tailwind.png'
import sequelize from '@/sources/sequelize.png'
import vue from '@/sources/vue.png'



const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["700"]
  })
  
  const montserratRegular = Montserrat({
    subsets: ["latin"],
    weight: ["400"]
  })

function About() {
  return (
    <div className="flex  bg-[#FAFAFA] w-screen lg:py-40 sm:py-20">
        <div className=" text-center m-auto lg:w-1/2 sm:w-5/6 h-fit rounded-lg ">
        <h1 className={` ${montserrat.className} lg:text-2xl sm:text-lg text-indigo-700`}>ABOUT ME</h1>
        <br />

            <p className={` ${montserratRegular.className} lg:text-xl sm:text-base lg:mb-20 sm:mb-10`}> Junior FullStack Developer specialized in front-end with background in graphic design and audiovisual production
                 with extensive experience in creative work, as well as goal-oriented teamwork. Proficient in agile methodologies,
                  GIT, data structures, algorithms, CSS frameworks, etc. With creative thinking, problem-solving ability, adaptability, strong communication skills, and excels in 
                  collaborative enviromments.
            </p>
            
             <div>
            <h1 className={` ${montserrat.className} lg:text-2xl sm:text-lg lg:mb-5 text-indigo-700`}>TECH STACK</h1>
        <br />
        <div className='flex flex-col lg:gap-10 sm:gap-5'>
            <div className='flex justify-evenly gap-2' >
              <Image src={html} alt="html" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={css} alt="css" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={js} alt="css" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={ts} alt="ts" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={rct} alt="react" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
            </div>
            <div className='flex justify-evenly gap-2'>
              <Image src={next} alt="next" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={vue} alt="next" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>              
              <Image src={tail} alt="tailwind" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={figma} alt="figma" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={photo} alt="photoshop" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              
            </div>
            <div className='flex justify-evenly gap-1'>
              <Image src={corel} alt="corel" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={node} alt="node" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={redux} alt="redux" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>             
              <Image src={express} alt="express" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              <Image src={sequelize} alt="sequelize" className=' lg:w-[10%] sm:w-[12%] hover:scale-110'/>
              
            </div>
              
         
            
        </div>
            </div> 
        </div>
    </div>
  )
}

export default About