

import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";

import CartLength from "./Cart";
import NavbarComp from "./NavbarComp";

const Navbar = async () => {

 
  const session = await auth();
  // console.log(session);

  return (
    <div className="flex flex-col w-full absolute z-40 top-[15px] justify-center">
    <div className=" flex items-center justify-around w-full text-black py-[18px]  shadow-sm ">
      <div className="flex gap-x-36 items-center xs:hidden lg:flex justify-center">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={60}
          height={60}
          className="max-w-[100%] max-h-[100%] lg:w-28 "
        />
        <div className="flex gap-x-6 font-poppins font-semibold">
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
            href={"/"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
          Categories
          </Link>
          <Link
            href={"/"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
          Account
          </Link>
          <Link
            href={"/"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
            Contact
          </Link>
        </div>
      </div> 
      <div className="flex xs:gap-4 lg:gap-10 text-xl text-black  xs:w-full lg:w-auto xs:items-end lg:items-start xs:justify-center lg:justify-end">
        <FaSearch className="text-black xs:hidden lg:inline-block" />
       <CartLength/>
        <FaHeart className="text-black xs:hidden lg:inline-block"/>
      </div>
      <div>
        {session && session?.user ? (
          <>
            <form className="flex gap-5"
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button type="submit" className="font-light">Logout</button>

              <Avatar>
                <AvatarImage src={session.user.image!} />
                <AvatarFallback>{session.user.name}</AvatarFallback>
              </Avatar>
            </form>
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github , google");
            }}
          >
            <button type="submit" className="font-bold mr-24 px-4 py-2 bg-black text-white rounded-md">Login</button>
          </form>
        )}
      </div>

    </div>
    <div className="">   <NavbarComp/></div>
    
      </div>
  );
};

export default Navbar;
