import React from 'react'

function Layout({children, className=""}) {
	return (
		<div className={`${className} w-full h-full inline-block z-0 bg-light p-32`}>
			{children}
		</div>
	)
}

export default Layout
