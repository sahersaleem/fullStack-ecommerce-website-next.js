'use client'
import { useContext } from "react"
import { Cardcontext, useCart } from "./CartContext"
import { FaCartShopping } from "react-icons/fa6"
import Link from "next/link"
const CartLength = () => {
  const {cartProducts} = useCart()








  return (
    <div className=" relative">
       <Link href={"/user/cart"}  ><FaCartShopping className="text-black " /> <span className="absolute -top-[22px] text-[12px] left-[18px] bg-[#717fe0] text-white rounded-full px-[10px]">{cartProducts.length}</span></Link> 
    </div>
  )
}

export default CartLength