

import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { context } from "./CartContext";
import CartLength from "./Cart";

const Navbar = async () => {

 
  const session = await auth();
  console.log(session);

  return (
    <div className="fixed top-5 z-40 flex items-center justify-around w-full text-black  py-4 ">
      <div className="flex gap-x-36 items-center">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={60}
          height={60}
          className="max-w-[100%] max-h-[100%] w-32"
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
            href={"/"}
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
      <div className="flex gap-10 text-xl text-black">
        <FaSearch className="text-black" />
       <CartLength/>
        <FaHeart className="text-black"/>
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
            <button type="submit" className="font-bold">login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
