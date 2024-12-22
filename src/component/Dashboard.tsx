"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import SignOut from "./SignOut";
import { signOut } from "@/auth";
import { FaX } from "react-icons/fa6";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (

    <div
          className={` ${isOpen?'xs:w-full sm:w-1/4 xs:absolute h-screen lg:relative':'w-16 h-screen '} bg-[#F2F9FF] h-auto px-4 py-6 transition-all duration-500 ease-in-out text-[#433878]`}
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
            <Link href={"/admin/dashboard"} className="dashboardLink">
              Dashboard
            </Link>
            <Link href={"/admin/products"} className="dashboardLink">
              Products
            </Link>
            <Link href={"/admin/categories"} className="dashboardLink">
              Categories
            </Link>
            <Link href={"/"} className="dashboardLink">
              Settings
            </Link>
            <Link href={"/"} className="dashboardLink">
              Revenue
            </Link>
        
          </div>}
       
        </div>
       
    
  );
}

export default Dashboard;
