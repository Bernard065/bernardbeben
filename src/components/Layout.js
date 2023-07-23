import React from 'react'

const Layout = ({ children, className='' }) => {
  return (
    <div className={`${className} w-full h-full inline-block z-0 bg-black p-32`}>
        {children}
    </div>
  )
}

export default Layout