import React, { useEffect, useState } from "react";
import Logo from './Logo'
import { useRouter } from 'next/router'
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon} from './Icons'
import {motion} from "framer-motion"
import { useTheme } from "next-themes";

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

function NavBar() {

	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
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
			<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
				<Logo />
			</div>
		</header>
	)
}

export default NavBar
