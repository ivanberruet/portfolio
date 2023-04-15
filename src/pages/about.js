import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/profilePic-bg-black.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) =>{
	const ref = useRef(null)
	const motionValue = useMotionValue(0)
	const springValue = useSpring(motionValue,{duration:3000})
	const isInView = useInView(ref,{once: true})

	useEffect(()=>{
		if(isInView){
			motionValue.set(value)
		}
	},[isInView,value,motionValue])

	useEffect(()=>{
		springValue.on('change',(latest)=>{
			if(ref.current && latest.toFixed(0) <= value){
				ref.current.textContent = latest.toFixed(0)
			}
		})
	},[springValue,value])

	return <span ref={ref}></span>
}

function about() {
	return (
		<>
			<Head>
				<title>Iván Berruet | About Page</title>
				<meta name="description" content="description"/>
			</Head>
			<main className='flex w-full flex-col items-center justify-center'>
				<Layout className='pt-16'>
					<AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>

					<div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
						
						<div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
							<h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About me</h2>
							<p className='font-medium'>Hola, soy Iván Berruet, desarrollador web y diseñador de UI/UX con pasión por crear experiencias digitales funcionales y centradas en el usuario. Con 3 años de experiencia en el campo, siempre estoy buscando formas nuevas e innovadoras de dar vida a las visiones de mis clientes.</p>
							<p className='font-medium my-4'>Creo que el diseño no se trata solo de hacer que las cosas se vean bonitas, sino de resolver problemas y crear experiencias intuitivas y agradables para los usuarios.</p>
							<p className='font-medium'>Ya sea que esté trabajando en un sitio web, aplicación móvil u otro producto digital, llevo mi compromiso con la excelencia en el diseño y el pensamiento centrado en el usuario a cada proyecto en el que trabajo. Espero tener la oportunidad de aportar mis habilidades y pasión a su próximo proyecto.</p>
						</div>

						<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
							<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
							<Image src={profilePic} alt="Iván Berruet" className='w-full h-auto rounded-2xl'
								priority
								sizes='
									(max-width: 768px) 100vw,
									(max-width: 1200px) 50vw,
									33vw'
							/>
						</div>

						<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
							<div className='flex flex-col items-end justify-center xl:items-center'>
								<span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
									<AnimatedNumbers value={50}/>+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:!text-center md:text-lg sm:text-base'>satisfied clients</h2>
							</div>
							
							<div className='flex flex-col items-end justify-center xl:items-center'>
								<span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
								<AnimatedNumbers value={40}/>+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:!text-center md:text-lg sm:text-base'>porjects completed</h2>
							</div>
							<div className='flex flex-col items-end justify-center xl:items-center'>
								<span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
								<AnimatedNumbers value={4}/>+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:!text-center md:text-lg sm:text-base'>years of exprience</h2>
							</div>

						</div>
					</div>

					<Skills />
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	)
}

export default about
