import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#222222] w-full xs:h-auto lg:h-[60vh] text-white flex xs:flex-col lg:flex-row gap-y-5 lg:items-center justify-evenly xs:p-10 lg:p-0'>
      <div className='flex flex-col gap-x-2 items-start'>
        <h1 className='font-bold text-lg'>Categories</h1>
        <Link href={"/"} className='link'>Women</Link>
        <Link href={"/"} className='link'>Men</Link>
        <Link href={"/"} className='link'>Shoes</Link>
        <Link href={"/"} className='link'>Watches</Link>
      </div>
      <div className='flex flex-col gap-x-2 items-start '>
      <h1 className='font-bold text-lg'>Help</h1>
        <Link href={"/"} className='link'>Track Order</Link>
        <Link href={"/"} className='link'>Shipping</Link>
        <Link href={"/"} className='link'>FAQS</Link>
    
      </div>
      <div className='flex flex-col lg:gap-x-2 justify-center lg:w-1/5 '>
      <h1 className='font-bold text-lg'>GET IN TOUCH</h1>
       <p className='text-wrap  lg:text-justify '>Any questions? Let us know in <br className='xs:hidden lg:block'/>store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p> 
      </div>
      <div className='flex flex-row gap-3 text-xl text-[#717fe0]'><FaFacebook/><FaInstagram/><FaLinkedin/><FaYoutube/></div>
    </div>
  )
}

export default Footer
