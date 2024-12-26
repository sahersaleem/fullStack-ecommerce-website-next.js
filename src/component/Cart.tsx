'use client'
import { useContext } from "react"
import { Cardcontext, useCart } from "./CartContext"
import { FaCartShopping } from "react-icons/fa6"
import Link from "next/link"
const CartLength = () => {
  const {cartProducts} = useCart()








  return (
    <div className="">
       <Link href={"/user/cart"} ><FaCartShopping className="text-black relative" /> <p className="absolute top-1 text-[14px] bg-[#717fe0] text-white rounded-full px-2">{cartProducts.length}</p></Link> 
    </div>
  )
}

export default CartLength