

import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";

import CartLength from "./Cart";
import NavbarComp from "./NavbarComp";
import { LogOut } from "lucide-react";

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
            href={"/user/categories"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
          Categories
          </Link>
        
          <Link
            href={"/user/orders"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
           Orders
          </Link>
          <Link
            href={"/user/contact"}
            className="hover:text-[#717fe0] transition-all 0.3 ease"
          >
            Contact
          </Link>
        </div>
      </div> 
      <div className="flex xs:gap-4 lg:gap-10 text-xl text-black  xs:w-full lg:w-auto xs:items-end lg:items-start justify-end mr-10 ">
      
       <CartLength/>
       
      </div>
      <div className="-mt-2">
        {session && session?.user ? (
          <>
            <form className="flex xs:gap-2 lg:gap-5 justify-center items-center "
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button type="submit" className="font-light"><LogOut/></button>

              <Avatar>
                <AvatarImage src={session.user.image!} />
                <AvatarFallback>{session.user.name}</AvatarFallback>
              </Avatar> 
            </form>
          </>
        ) : (
          <form
          className=" flex justify-center items-center "
            action={async () => {
              "use server";
              await signIn("github , google");
            }}
          >
            <div className="flex  justify-center items-center"><button type="submit" className="font-bold font-poppins px-2 py-2  text-black rounded-md mr-4 text-[16px] ">Login</button>
              </div>
          </form>
        )}
      </div>

    </div>
    <div className="mt-[2px]">   <NavbarComp/></div>
    
      </div>
  );
};

export default Navbar;
