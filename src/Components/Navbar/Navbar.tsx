'use client';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["700"]
  })

  interface PropsScroll {
    scrollToAbout: () => void;
  }

const NavBar = ({scrollToAbout}: PropsScroll) => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Opciones: 'auto', 'smooth'
        });
      };
	
	return (
		<nav className={` ${montserrat.className} lg:text-xl sm:text-md fixed lg:px-10 lg:py-7 sm:px-5 sm:py-4 z-50  w-full flex top-0 bg-gradient-to-b from-slate-950 text-white justify-between items-center `}>
			
			<button onClick={scrollToTop}>Bran.dev</button>
            <div className='flex gap-5'>
			<button onClick={scrollToAbout}>About</button>
			<button>Projects</button>
			<button>Contact</button>
			</div>
            
					
					
				
			
		</nav>
	);
};

export default NavBar;
