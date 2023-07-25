import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-white font-medium text-lg text-white sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <Link href='/' className='text-white hover:text-gray-400'>Bernard</Link>
            <Link href='mailto:bernardbebeni@gmail.com' target={'-blank'} className='text-white hover:text-gray-400'>bernardbebeni@gmail.com</Link>
        </Layout>
    </footer>
  )
}

export default Footer