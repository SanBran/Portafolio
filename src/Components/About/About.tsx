'use client';
import { Montserrat } from 'next/font/google';

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
        <div className=" text-center m-auto lg:w-1/2 sm:w-5/6 h-fit rounded-lg">
        <h1 className={` ${montserrat.className} lg:text-2xl sm:text-lg text-indigo-700`}>ABOUT ME</h1>
        <br />

            <p className={` ${montserratRegular.className} lg:text-xl sm:text-base`}> Junior FullStack Developer specialized in front-end with background in graphic design and audiovisual production
                 with extensive experience in creative work, as well as goal-oriented teamwork. Proficient in agile methodologies,
                  GIT, data structures, algorithms, CSS frameworks, etc. With creative thinking, problem-solving ability, adaptability, strong communication skills, and excels in 
                  collaborative enviromments.
            </p>
            <br />
            <br />
            {/* <div>
            <h1 className={` ${montserrat.className} lg:text-2xl sm:text-lg text-indigo-700`}>SKILLS</h1>
        <br />
        <div className='flex justify-between'>
            <div>
                <h1 className={` ${montserrat.className} lg:text-2xl sm:text-md `}>FRONT END</h1>
                <ul>
                    <li className=' mt-5'>HTML/CSS</li>
                    <li className=' mt-2'>JavaScript</li>
                    <li className=' mt-2'>TypeScript</li>
                    <li className=' mt-2'>React</li>
                    <li className=' mt-2'>Next.js</li>
                    <li className=' mt-2'>Tailwind</li>
                    <li className=' mt-2'>Responsive Design</li>
                </ul>
            </div>
            <div>
                <h1 className={` ${montserrat.className} lg:text-2xl sm:text-md `}>BACK END</h1>
                <ul>
                    <li className=' mt-5'>Node.js</li>
                    <li className=' mt-2'>Express</li>
                    <li className=' mt-2'>Sequelize</li>
                    <li className=' mt-2'>PostgreSQL</li>
                </ul>
            </div>
            <div>
                <h1 className={` ${montserrat.className} lg:text-2xl sm:text-md `}>UX/UI</h1>
                <ul>
                    <li className=' mt-5'>Figma</li>
                    <li className=' mt-2'>Photoshop</li>
                    <li className=' mt-2'>Illustrator</li>
                    <li className=' mt-2'>Corel Draw</li>
                    <li className=' mt-2'>Prototyping</li>
                    <li className=' mt-2'>Graphic Design</li>
                </ul>
            </div>
        </div>
            </div> */}
        </div>
    </div>
  )
}

export default About