import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#222222] w-full h-[60vh] text-white flex items-center justify-evenly'>
      <div className='flex flex-col gap-x-2 items-center justify-center'>
        <h1>Categories</h1>
        <Link href={"/"} className='link'>Women</Link>
        <Link href={"/"} className='link'>Men</Link>
        <Link href={"/"} className='link'>Shoes</Link>
        <Link href={"/"} className='link'>Watches</Link>
      </div>
      <div className='flex flex-col gap-x-2 items-center justify-center'>
        <h1>Help</h1>
        <Link href={"/"} className='link'>Track Order</Link>
        <Link href={"/"} className='link'>Shipping</Link>
        <Link href={"/"} className='link'>FAQS</Link>
    
      </div>
      <div className='flex flex-col gap-x-2 justify-center w-1/5 '>
        <h1>GET IN TOUCH</h1>
       <p className='text-wrap  text-justify '>Any questions? Let us know in <br/>store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p> 
      </div>
    </div>
  )
}

export default Footer
