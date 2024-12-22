'use client'
import { useContext, useEffect } from "react"
import { Cardcontext } from "./CartContext"
import { FaCartShopping } from "react-icons/fa6"
import Link from "next/link"
const CartLength = () => {
  const {cartProducts} = useContext(Cardcontext)








  return (
    <div className="">
       <Link href={"/user/cart"} ><FaCartShopping className="text-black relative" /></Link>  <p className="absolute top-1 text-[14px] bg-[#717fe0] text-white rounded-full px-2">{cartProducts.length}</p>
    </div>
  )
}

export default CartLength