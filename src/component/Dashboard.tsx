"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (

    <div
          className={` ${isOpen?'xs:w-full sm:w-1/4':'w-16'} bg-white h-auto px-4 py-6 transition-all duration-500 ease-in-out `}
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
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-2xl cursor-pointer"
          />
        </div>
{isOpen &&    <div className="flex flex-col mb-4 mt-14 items-center justify-center">
            <Link href={"/admin/dashboard"} className="dashboardLink">
              Dashboard
            </Link>
            <Link href={"/admin/products"} className="dashboardLink">
              Products
            </Link>
            <Link href={"/"} className="dashboardLink">
              Users
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
