import React, { useRef } from 'react'
import {motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type,time,place,info})=>{
	const ref = useRef(null)

	return(
		<li className='my-8 fisrt:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
			<LiIcon reference={ref} />
			<motion.div
			initial={{y:70}}
			whileInView={{y:0}}
			transition={{duration:0.5, type:""}}
			>
				<h3 className='capitalize font-bold text-2xl'>{type}</h3>
				<span className='capitalize font-medium text-dark/75'>{time} | {place}</span>
				<p className='font-medium w-full'>{info}</p>
			</motion.div>
		</li>
	)
}

function Education() {
	const ref = useRef(null)
	const {scrollYProgress} = useScroll(
		{
			target: ref,
			offset: ["start end"," start"]
		}
	)

	return (
		<div className='my-64'>
			<h2 className='font-bold text-8xl mb-32 w-full text-center'>
				Education
			</h2>

			<div ref={ref} className='w-[75%] mx-auto relative'>
				<motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
				style={{scaleY: scrollYProgress}}
				/>
				<ul className='w-full flex flex-col items-start justify-between ml-4'>
					<Details 
					type={"Licenciatura en Matemática Aplicada"} 
					time={"2020-2021 (Tesis en curso)"} 
					place={"Universidad Nacional de La Matanza"} 
					info={"Desarrollo de habilidades en áreas como análisis matemático, estadística, lógica, teoría de probabilidad y modelado matemático."}/>
					<Details 
					type={"Profesorado de Matemática"} 
					time={"2016-2019 (Completo)"} 
					place={"ISFD N°45 Julio Cortázar"} 
					info={"Desarrollo de habilidades para enseñar y transmitir conocimientos en áreas como geometría, álgebra y cálculo."}/>
					<Details 
					type={"Licenciatura en Ciencias Astronómicas"} 
					time={"2013-2015 (Incompleto)"} 
					place={"Universidada Nacional de La Plata"} 
					info={"Desarrollo de habilidades en áreas como astrofísica, mecánica celeste, cosmología y astronomía observacional."}/>
					<Details 
					type={"Bachiller en Ciencias Naturales"} 
					time={"2007-2012 (Completo)"} 
					place={"Escuela Nuestra Señora de Fátima"} 
					info={"Desarrollo de habilidades en áreas como matemática, biología, química, y física."}/>
				</ul>
			</div>
		</div>
	)
}

export default Education
