import React, { useEffect, useState } from "react";
import Logo from './Logo'
import { useRouter } from 'next/router'
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon} from './Icons'
import {motion} from "framer-motion"
import { useTheme } from "next-themes";
import Link from "next/link";

const ToggleTheme =() => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
		<button onClick={()=>setTheme(theme==="light" ? "dark" : "light")}
		className={`ml-3 flex items-center justify-center rounded-full p-1 ${theme==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
			{
				theme==="dark" ?
				<SunIcon className={"fill-dark"}/>
				: <MoonIcon className={"fill-dark"}/>
			}
		</button>
	);
}

const CustomLink = ({href,title,className=""}) =>{
	const router = useRouter()

	return (
		<a href={href} className={`${className} relative group`}>
			{title}
			<span className={`
			h-[1px] inline-block bg-dark 
			absolute left-0 -bottom-0.5 
			group-hover:w-full transition-[width] ease duration-300 
			${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
			>
				&nbsp;
			</span>
		</a>
	)
}

const CustomMobileLink = ({href,title,className="",toggle}) =>{
	const router = useRouter()

	const handleClick = () => {
		toggle()
		router.push(href)
	}

	return (
		<button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
			{title}
			<span 
			className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
			${router.asPath === href ? 'w-full' : 'w-0'} 
			dark:bg-dark`
			}
			>
				&nbsp;
			</span>
		</button>
	)
}

function NavBar() {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

			<button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
				<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
				<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100 '}`}></span>
				<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
			</button>

			<div className="w-full flex justify-between items-center lg:hidden">
				<nav>
					<CustomLink href="/" title="Home" className="mr-4" />
					<CustomLink href="/about" title="About" className="mr-4" />
					<CustomLink href="/projects" title="Projects" className="mr-4" />
					<CustomLink href="/articles" title="Articles" className="mr-4" />
				</nav>
				
				<nav className='flex items-center justify-center flex-wrap'>
					<motion.a href="https://twitter.com" 
					target={"_blank"} 
					whileHover={{y:-2}}
					whileTap={{scale:.9}}
					className='w-6 mx-3'
					>
						<TwitterIcon />
					</motion.a>
					<motion.a href="https://github.com/ivanberruet?tab=repositories" 
					target={"_blank"} 
					whileHover={{y:-2}}
					whileTap={{scale:.9}}
					className='w-6 mx-3'
					>
						<GithubIcon />
					</motion.a>
					<motion.a href="https://www.linkedin.com/in/ivanberruet/" 
					target={"_blank"} 
					whileHover={{y:-2}}
					whileTap={{scale:.9}}
					className='w-6 mx-3'
					>
						<LinkedInIcon />
					</motion.a>
					<ToggleTheme />
				</nav>
			</div>

			{
				isOpen ? 
				<motion.div className="min-w-[70vw] flex flex-col justify-space-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 py-32 
				backdrop-blur-md bg-dark/90 dark:bg-light/75 rounded-lg"
				// initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
				// animate={{scale:1, opacity:1}}
				>
					<nav className="flex flex-col items-center justify-center">
						<CustomMobileLink href="/" title="Home" toggle={handleClick}/>
						<CustomMobileLink href="/about" title="About" toggle={handleClick}/>
						<CustomMobileLink href="/projects" title="Projects" toggle={handleClick}/>
						<CustomMobileLink href="/articles" title="Articles" toggle={handleClick}/>
					</nav>
					
					<nav className='flex items-center justify-center flex-wrap mt-2'>
						<motion.a href="https://twitter.com" 
						target={"_blank"} 
						whileHover={{y:-2}}
						whileTap={{scale:.9}}
						className='w-6 mx-3 sm:mx-1'
						>
							<TwitterIcon />
						</motion.a>
						<motion.a href="https://github.com/ivanberruet?tab=repositories" 
						target={"_blank"} 
						whileHover={{y:-2}}
						whileTap={{scale:.9}}
						className='w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark'
						>
							<GithubIcon />
						</motion.a>
						<motion.a href="https://www.linkedin.com/in/ivanberruet/" 
						target={"_blank"} 
						whileHover={{y:-2}}
						whileTap={{scale:.9}}
						className='w-6 mx-3 sm:mx-1'
						>
							<LinkedInIcon />
						</motion.a>
						<ToggleTheme />
					</nav>
				</motion.div>			
				:
				null
			}

			<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
				<Logo />
			</div>
		</header>
	)
}

export default NavBar
