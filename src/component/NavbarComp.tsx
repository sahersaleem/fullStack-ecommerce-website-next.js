
'use client'


import React, { useState } from 'react'

import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
const NavbarComp = () => {

const [isOpen , setIsOpen] = useState<boolean>(false)

const handleOpen =()=>{
  setIsOpen(false)
}






  return (
       <div className="flex gap-x-36  xs:flex lg:hidden text-black flex-col justify-start items-start -mt-[53px] ">
       
       <button onClick={()=>setIsOpen(!isOpen)}><FaBars className='xs:inline-block lg:hidden text-black text-2xl xs:ml-6 ' /></button> 
        <div className={`flex gap-x-6 gap-y-5 font-poppins font-semibold flex-row ${isOpen?'xs:flex lg:hidden flex-col':"xs:hidden flex-row"} lg:flex px-10 bg-black/15 backdrop-blur-2xl w-full h-[60vh] items-center justify-center text-xl transition-all duration-200 ease-in-out mt-6`}>
        <Link
            href={"/"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
            onClick={handleOpen}
          >
            {" "}
            Home
          </Link>
          <Link
            href={"/user/shop"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
            onClick={handleOpen}
          >
            Shop 
          </Link>
          <Link
            href={"/user/categories"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
            onClick={handleOpen}
          >
          Categories
          </Link>
          
          <Link
            href={"/user/orders"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
            onClick={handleOpen}
          >
           Orders
          </Link>
          <Link
            href={"/user/contact"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
            onClick={handleOpen}
          >
            Contact
          </Link>
        </div>
      </div> 
  )
}

export default NavbarComp
