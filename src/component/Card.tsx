import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Toaster } from "@/components/ui/toaster";


const Card = ({image , name , _id ,price}:{image:string , name:string , _id:string , price:string}) => {
    
      const { addProductsInCart } = useCart()
    const addtoCart = (id: string) => {
        addProductsInCart(id);
    
      };
  return (
    <>
      <div>
        <Image
          src={image}
          alt="image"
          width={250}
          height={400}
          className="object-cover object-center transform transition-transform duration-300 hover:scale-110"
        />

        <div className="flex justify-between">
          {" "}
          <div>
            {" "}
            <h2 className="font-poppins font-[14px] text-[#999] hover:text-blue-500 mt-4">
              {name}
            </h2>
            <p className="font-bold text-2xl">${price}</p>
          </div>
          <FaHeart className="  border-black hover:text-[#717fe0] mt-4" />
        </div>
        <button
          className="flex items-center justify-center gap-x-2 border-black/65 border-[2px] mt-4 px-4 py-2 hover:bg-[#717fe0] hover:text-white hover:border-none transition-all duration-300 ease-out"
          onClick={() => {
            addtoCart(_id);
          }}
        >
          Add to Cart <FaCartShopping />
        </button>
      </div>
    </>
  );
};

export default Card;
