import React from 'react'
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { BiLogoGithub } from 'react-icons/bi';
import {AiOutlineGlobal} from 'react-icons/ai'
import Image from 'next/image'
import html from '@/sources/icons8-html-5-144.png'
import css from '@/sources/icons8-css-144.png'
import js from '@/sources/icons8-javascript-144.png'
import ts from '@/sources/icons8-typescript-144.png'
import next from '@/sources/nextBlack.png'
import node from '@/sources/node.png'
import figma from '@/sources/figma.png'
import redux from '@/sources/redux.png'
import rct from '@/sources/icons8-react-native-256.png'
import corel from '@/sources/corel.png'
import express from '@/sources/express.png'
import sequelize from '@/sources/sequelize.png'
import postgres from '@/sources/postgres.png'
// import bookstore from '@/sources/BookStore.png'
import aeromexico from '@/sources/aeromexico.gif'
import countries from '@/sources/countries.png'
import foods from '@/sources/FOOD.png'
import rnm from '@/sources/RnM.gif'
import vue from '@/sources/vue.png'
import laravel from '@/sources/laravel.png'
import php from '@/sources/php.png'

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["700"]
  })
  
  const montserratRegular = Montserrat({
    subsets: ["latin"],
    weight: ["400"]
  })

function Projects() {
  return (
    <div className="flex flex-col gap-10 w-screen text-center lg:pb-40 sm:py-20">
      <h1 className={` ${montserrat.className} lg:text-2xl sm:text-lg text-indigo-700`}>PROJECTS</h1>

        {/* <div className=" align-middle flex xl:flex-row sm:flex-col lg:gap-5 sm:gap-2 bg-white shadow-xl m-auto lg:p-5 sm:p-3 lg:w-8/12 sm:w-5/6 h-fit rounded-lg ">
            <Link href='https://book-store-client-coral.vercel.app/' target='_blank' className='xl:w-3/5  sm:h-full sm:mb-4 rounded-lg '>
            <Image src={bookstore} alt='bookstore' className=' rounded-lg  '/>
            </Link>
            <div className=' text-center xl:w-2/5 xl:px-8 xl:py-5 ' >
              <Link href='https://book-store-client-coral.vercel.app/' target='_blank'>
            <h1 className={` ${montserrat.className} xl:text-2xl sm:text-lg xl:mb-5 text-indigo-700`}>BookStore</h1>
              </Link>
            <p className=' text-slate-500 lg:text-lg sm:text-sm'>An e-commerce focused on e-books, BookStore is designed to provide a simple and intuitive experience for those who 
            enjoy reading books directly on their device. On this platform, you can sign up, perform dynamic book searches, 
            create a wishlist, purchase, and download your favorite e-books. </p>
            <div className='flex justify-around px-10 mt-5' >
              <Image src={html} alt="html" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={css} alt="css" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={js} alt="js" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={rct} alt="react" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={figma} alt="figma" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={node} alt="node" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={redux} alt="redux" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
            </div>
            <div className='flex justify-center mt-8 mb-5 gap-5'>
            <Link href='https://github.com/SanBran/BookStore-Client' target="_blank" className='hover:scale-110 flex gap-1 text-lg'>
              Code
              <BiLogoGithub className= ' text-3xl' /> 
              </Link>
            <Link href='https://book-store-client-coral.vercel.app/' target="_blank" className='hover:scale-110 flex gap-1 text-lg'>
              Demo
              <AiOutlineGlobal className= ' text-3xl' /> 
              </Link>
            </div>
            </div>
            
        </div> */}
        <div className=" align-middle flex xl:flex-row sm:flex-col lg:gap-5 sm:gap-2 bg-white shadow-xl m-auto lg:p-5 sm:p-3 lg:w-8/12 sm:w-5/6 h-fit rounded-lg items-center">
            <Link href='https://www.aeromexicobusiness.com/' target='_blank' className='xl:w-3/5  sm:h-full sm:mb-4 rounded-lg '>
            <Image src={aeromexico} alt='aeromexico' className=' rounded-lg  '/>
            </Link>
            <div className=' text-center xl:w-2/5 xl:px-8 xl:py-5 ' >
              <Link href='https://www.aeromexicobusiness.com/' target='_blank'>
            <h1 className={` ${montserrat.className} xl:text-2xl sm:text-lg xl:mb-5 text-indigo-700`}>Aeromexico Business</h1>
              </Link>
            <p className=' text-slate-500 lg:text-lg sm:text-sm'>Aeroméxico Business is a dedicated platform designed to facilitate collaboration between Aeroméxico and travel agencies. It offers tools and resources that simplify reservation management while providing real-time access to policies, flight statuses, and service details.</p>
            <div className='flex justify-around px-10 mt-5' >
              <Image src={html} alt="html" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={css} alt="css" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={js} alt="js" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={php} alt="react" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={vue} alt="figma" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={laravel} alt="node" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
            </div>
            <div className='flex justify-center mt-8 mb-5 gap-5'>
            <Link href='https://www.aeromexicobusiness.com/' target="_blank" className='hover:scale-110 flex gap-1 text-lg'>
              Demo
              <AiOutlineGlobal className= ' text-3xl' /> 
              </Link>
            </div>
            </div>
            
        </div>
        <div className=" align-middle flex xl:flex-row-reverse sm:flex-col lg:gap-5 sm:gap-2 bg-white shadow-xl m-auto lg:p-5 sm:p-3 lg:w-8/12 sm:w-5/6 h-fit rounded-lg items-center">
        <Link href='https://rickandmorty-sanbran.vercel.app/about' target='_blank' className='xl:w-3/5  sm:h-full sm:mb-4 rounded-lg '>
            <Image src={rnm} alt='rnm' className=' rounded-lg  '/>
            </Link>
            <div className=' text-center xl:w-2/5 xl:px-8 xl:py-5 ' >
              <Link href='https://rickandmorty-sanbran.vercel.app/about' target='_blank'>
            <h1 className={` ${montserrat.className} xl:text-2xl sm:text-lg xl:mb-5 text-indigo-700`}>Rick And Morty</h1>
              </Link>
            <p className=' text-slate-500 lg:text-lg sm:text-sm'>This project was developed as an academic integrator project during my time at Henry Bootcamp. Here, you can search for characters from the series by name. Additionally, you have the option to create an account, allowing you to select your favorite characters and save them in your Favorites section. </p>
            <div className='flex justify-around px-10 mt-5' >
              <Image src={html} alt="html" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={css} alt="css" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={js} alt="js" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={rct} alt="react" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={redux} alt="redux" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
            </div>
            <div className='flex justify-around px-10 mt-1' >
              <Image src={node} alt="node" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={corel} alt="corel" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={express} alt="express" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={sequelize} alt="sequielize" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={postgres} alt="postgres" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
            </div>
            <div className='flex justify-center mt-8 mb-5 gap-5'>
            <Link href='https://github.com/SanBran/rickandmorty' target="_blank" className='hover:scale-110 flex gap-1 text-lg'>
              Code
              <BiLogoGithub className= ' text-3xl' /> 
              </Link>
            <Link href='https://rickandmorty-sanbran.vercel.app/about' target="_blank" className='hover:scale-110 flex gap-1 text-lg'>
              Demo
              <AiOutlineGlobal className= ' text-3xl' /> 
              </Link>
            </div>
            </div>
            
        </div>

        <div className=" align-middle flex xl:flex-row sm:flex-col lg:gap-5 sm:gap-2 bg-white shadow-xl m-auto lg:p-5 sm:p-3 lg:w-8/12 sm:w-5/6 h-fit rounded-lg ">
            <Link href='https://github.com/SanBran/foods-front' target='_blank' className='xl:w-3/5  sm:h-full sm:mb-4 rounded-lg '>
            <Image src={foods} alt='bookstore' className=' rounded-lg  '/>
            </Link>
            <div className=' text-center xl:w-2/5 xl:px-8 xl:py-5 ' >
            <Link href='https://github.com/SanBran/foods-front' target='_blank'>
            <h1 className={` ${montserrat.className} xl:text-2xl sm:text-lg xl:mb-5 text-indigo-700`}>FOOD</h1>
            </Link>
            <p className=' text-slate-500 lg:text-lg sm:text-sm'>A website designed to store and create cooking recipes. On it, you can
            sign up, search for recipes, filter and sort them, as well as create your own recipes and publish them, </p>
            <div className='flex justify-around px-10 mt-5' >
              <Image src={html} alt="html" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={css} alt="css" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={ts} alt="js" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={next} alt="react" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={redux} alt="redux" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
            </div>
            <div className='flex justify-around px-10 mt-1' >
              <Image src={node} alt="node" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={corel} alt="corel" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={express} alt="express" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={sequelize} alt="sequielize" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={postgres} alt="postgres" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
            </div>
            <div className='flex justify-center mt-8 mb-5 gap-5'>
            <Link href='https://github.com/SanBran/foods-front' target="_blank" className='hover:scale-110 flex gap-1 text-lg'>
              Code
              <BiLogoGithub className= ' text-3xl' /> 
              </Link>
            
            </div>
            </div>
            
        </div>
        <div className=" align-middle flex xl:flex-row-reverse sm:flex-col lg:gap-5 sm:gap-2 bg-white shadow-xl m-auto lg:p-5 sm:p-3 lg:w-8/12 sm:w-5/6 h-fit rounded-lg ">
        <Link href='https://countries-client-rho.vercel.app/' target='_blank' className='xl:w-3/5  sm:h-full sm:mb-4 rounded-lg '>
            <Image src={countries} alt='bookstore' className=' rounded-lg  '/>
            </Link>
            <div className=' text-center xl:w-2/5 xl:px-8 xl:py-5 ' >
              <Link href='https://countries-client-rho.vercel.app/' target='_blank'>
            <h1 className={` ${montserrat.className} xl:text-2xl sm:text-lg xl:mb-5 text-indigo-700`}>Countries</h1>
              </Link>
            <p className=' text-slate-500 lg:text-lg sm:text-sm'>Contries is a individual academic project that consists of a website wich provides
            information about countries of the world. You can perform searches, apply filters and sorting, and also create
            tourist activities and associate with various countries, an then filter the countries based on these same activities. </p>
            <div className='flex justify-around px-10 mt-5' >
              <Image src={html} alt="html" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={css} alt="css" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={js} alt="js" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={rct} alt="react" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={redux} alt="redux" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
            </div>
            <div className='flex justify-around px-10 mt-1' >
              <Image src={node} alt="node" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={corel} alt="corel" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={express} alt="express" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={sequelize} alt="sequielize" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
              <Image src={postgres} alt="postgres" className=' xl:w-[10%] md:w-[5%] sm:w-[10%] hover:scale-110'/>
            </div>
            <div className='flex justify-center mt-8 mb-5 gap-5'>
            <Link href='https://github.com/SanBran/PI-Countries' target="_blank" className='hover:scale-110 flex gap-1 text-lg'>
              Code
              <BiLogoGithub className= ' text-3xl' /> 
              </Link>
            <Link href='https://countries-client-rho.vercel.app/' target="_blank" className='hover:scale-110 flex gap-1 text-lg'>
              Demo
              <AiOutlineGlobal className= ' text-3xl' /> 
              </Link>
            </div>
            </div>
            
        </div>
        
      
    </div>
  )
}

export default Projects