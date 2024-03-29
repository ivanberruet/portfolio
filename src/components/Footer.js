import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
	return (
		<footer className='w-full border-t-2 border-soilid border-dark font-medium text-lg dark:text-light dark:border-light
		sm:text-base
		'>
			<Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserverd.</span>
				<div className='flex items-center lg:my-2'>
					Build width <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
					by&nbsp;<Link href="/" target='_blank' className='underline underline-offset-2'>Iván Berruet</Link>
				</div>
				<Link href="/" target='_blank' className='underline underline-offset-2'>Say hello</Link>
			</Layout>
		</footer>
	)
}

export default Footer
Footer