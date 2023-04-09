import React, { useRef } from 'react'
import {motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work})=>{
	const ref = useRef(null)
	
	return(
		<li ref={ref} className='my-8 fisrt:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
			<LiIcon reference={ref} />
			<motion.div
			initial={{y:50}}
			whileInView={{y:0}}
			transition={{duration:0.5, type:""}}
			>
				<h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize'>@{company}</a></h3>
				<span className='capitalize font-medium text-dark/75'>{time} | {address}</span>
				<p className='font-medium w-full'>{work}</p>
			</motion.div>
		</li>
	)
}

function Experience() {
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
				Experience
			</h2>

			<div ref={ref} className='w-[75%] mx-auto relative'>
				<motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
				style={{scaleY: scrollYProgress}}
				/>
				<ul className='w-full flex flex-col items-start justify-between ml-4'>
					<Details 
					position={"DevOps Engineer"} 
					company={"Entelgy"} 
					companyLink={"https://www.entelgy.com/"} 
					time={"2020-Actualidad"} 
					address={"Ciudad de la Paz 1965 10º A, CABA"} 
					work={"Durante mi tiempo en la empresa, he desempeñado un papel fundamental en la planificación estratégica y el análisis de negocios para clientes de diferentes sectores. Además, he sido responsable de la búsqueda, recuperación y análisis de datos, lo que ha permitido una toma de decisiones informada y basada en evidencia. Por último, he tenido un papel importante en la reportabilidad y construcción de manuales, asegurando que nuestros proyectos estén documentados y disponibles para su uso futuro."}/>
					<Details 
					position={"Profesor particular de matemáticas"} 
					company={"IvánBerruet"} 
					companyLink={"#"} 
					time={"2013-Actualidad"} 
					address={"Campichuelo 3203, Castelar"} 
					work={"Durante los últimos 10 años, he desempeñado un papel fundamental en la enseñanza de materias científicas, especialmente en el área de matemáticas, a estudiantes de diferentes niveles educativos. He sido responsable de personalizar planes de estudio adaptados a las necesidades individuales de cada estudiante, lo que ha permitido que ellos desarrollen un aprendizaje efectivo y duradero. Como docente, estoy comprometido con el éxito académico de mis estudiantes y he disfrutado de ver a muchos de ellos lograr sus objetivos educativos y profesionales gracias a mi guía y enseñanza."}/>
				</ul>
			</div>
		</div>
	)
}

export default Experience
