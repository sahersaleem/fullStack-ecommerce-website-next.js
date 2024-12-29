"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";



import { FaX } from "react-icons/fa6";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen =()=>{
    setIsOpen(false)
  }
  return (

    <div
          className={` ${isOpen?'xs:w-full sm:w-1/4 xs:absolute h-full min-h-[100vh] lg:relative':'w-16 h-full min-h-[100vh] '} bg-[#F2F9FF] h-full min-h-[100vh] px-4 py-6 transition-all duration-500 ease-in-out text-[#433878] z-40`}
        >
          <div className="flex items-center justify-between">
          <div className="flex items-center">
            
            {isOpen && (
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={100}
                height={100}
              />
            )}
          </div>
         {
          isOpen?
          <FaX
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-2xl cursor-pointer"
          />:<FaBars
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="text-2xl cursor-pointer"/>
         } 
        </div>
{isOpen &&    <div className="flex flex-col mb-4 mt-14 items-center justify-center">
            <Link href={"/admin/dashboard"} className="dashboardLink" onClick={handleOpen}>
              Dashboard
            </Link>
            <Link href={"/admin/products"} className="dashboardLink" onClick={handleOpen}>
              Products
            </Link>
            <Link href={"/admin/categories"} className="dashboardLink" onClick={handleOpen}>
              Categories
            </Link>
            <Link href={"/admin/orders"} className="dashboardLink" onClick={handleOpen}>
       Orders
            </Link>
            
        
          </div>}
       
        </div>
       
    
  );
}

export default Dashboard;
