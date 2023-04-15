import React from 'react'

function Layout({children, className=""}) {
	return (
		<div className={`${className} w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:9-12`}>
			{children}
		</div>
	)
}

export default Layout
