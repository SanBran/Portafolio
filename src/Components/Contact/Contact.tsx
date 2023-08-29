import React from 'react'
import Link from 'next/link';
import { Montserrat } from 'next/font/google'
import { BiLogoGithub, BiLogoLinkedin, BiMailSend, BiLogoWhatsapp } from 'react-icons/bi';
import {FiExternalLink} from 'react-icons/fi'
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["700"]
  })
  
  const montserratRegular = Montserrat({
    subsets: ["latin"],
    weight: ["400"]
  })

function Contact() {
  return (
    <div className=' bg-[#FAFAFA] lg:px-80 py-20'>
        <h1 className={` ${montserrat.className} lg:text-2xl sm:text-lg text-indigo-700`}>CONTACT</h1>
        <br />
        <h1 className={` ${montserrat.className} lg:text-4xl sm:text-lg text-black`}>Let's work together!👇</h1>
        <br />
        <div className='flex flex-col gap-2'>
            
        <Link href='https://github.com/SanBran' target="_blank" className='flex gap-1'>
              <BiLogoGithub className= ' text-5xl' /> 
              <h2 className=' pt-2 text-2xl'>/SanBran</h2><FiExternalLink className= 'text-xl' /> 
              </Link>
            
              
              <Link href='https://www.linkedin.com/in/brandon-galarza/' target="_blank" className='flex gap-1'>
              <BiLogoLinkedin className= 'text-5xl' /> 
              <h2 className=' pt-2 text-2xl'>/brandon-galarza</h2><FiExternalLink className= 'text-xl' /> 
              </Link>
              
              
              <Link href='mailto:luminoforos@gmail.com' target="_blank" className='flex gap-1'>
              <BiMailSend className= 'text-5xl' /> 
              <h2 className=' pt-2 text-2xl'>luminoforos@gmail.com</h2><FiExternalLink className= 'text-xl' /> 
              </Link>
              
              <Link href='https://api.whatsapp.com/send?phone=5530390859' target="_blank" className='flex gap-1'>
              <BiLogoWhatsapp className= 'text-5xl' /> 
              <h2 className=' pt-2 text-2xl'>+52 5530390859</h2><FiExternalLink className= 'text-xl' /> 
              </Link>
              

        </div>
    </div>
  )
}

export default Contact