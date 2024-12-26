
'use client'


import React, { useState } from 'react'

import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
const NavbarComp = () => {

const [isOpen , setIsOpen] = useState<boolean>(false)








  return (
       <div className="flex gap-x-36  xs:flex lg:hidden text-black flex-col justify-start items-start -mt-[56px]">
       
       <button onClick={()=>setIsOpen(!isOpen)}><FaBars className='xs:inline-block lg:hidden text-black text-2xl xs:ml-6 ' /></button> 
        <div className={`flex gap-x-6 gap-y-5 font-poppins font-semibold flex-row ${isOpen?'xs:flex lg:hidden flex-col':"xs:hidden flex-row"} lg:flex px-10 bg-black/15 backdrop-blur-2xl w-full h-[60vh] items-center justify-center text-xl transition-all duration-200 ease-in-out mt-6`}>
        <Link
            href={"/"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
            {" "}
            Home
          </Link>
          <Link
            href={"/user/shop"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
            Shop 
          </Link>
          <Link
            href={"/user/categories"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
          Categories
          </Link>
          <Link
            href={""}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
          Favourite
          </Link>
          <Link
            href={"/user/orders"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
           Orders
          </Link>
          <Link
            href={"/"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
            Contact
          </Link>
        </div>
      </div> 
  )
}

export default NavbarComp
