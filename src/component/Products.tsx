"use client";

import React, { useContext, useEffect, useState } from "react";

import { IProducts } from "./ProductForm";
import axios from "axios";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import CssLoaders from "./Loaders";
import { Cardcontext, useCart } from "./CartContext";

import Link from "next/link";

interface IProps {
  text:string,
  className?:string
}



const Products = (props:IProps) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const { addProducts } = useCart()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("/api/products");
      if (response.data.productsData) {
        setProducts(response.data.productsData);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const addtoCart = (id: string) => {
    addProducts(id);

  };




  console.log(products);
  return (
    <div
      className={`text-black ${
        loading ? "h-screen " : "h-auto"
      } h-auto w-full max-w-7xl m-auto py-20 ${props.className}`}
    >
      <h1 className="font-bold text-5xl mb-10 text-center font-poppins">{props.text}</h1>
      <div className="flex gap-12 flex-row flex-wrap items-center justify-center shadow-sm">
        {loading ? (
          <CssLoaders />
        ) : (
          products.map((item, index) => (
            <div
              key={index}
              className="flex justify-between pb-4 flex-col gap-2 "
            >
           <Link href={`/user/${item._id}`} > 
           
           {
            item.images?
           
           
           
            <Image
                src={item.images[0]}
                alt="image"
                width={250}
                height={400}
                className="object-cover object-center transform transition-transform duration-300 hover:scale-110"
              />:""
              
              
           }</Link>
              <div className="flex justify-between">
                {" "}
                <div>
                  {" "}
                  <h2 className="font-poppins font-[14px] text-[#999] hover:text-blue-500 mt-4">
                    {item.name}
                  </h2>
                  <p className="font-bold text-2xl">${item.price}</p>
                </div>
                <FaHeart className="  border-black hover:text-[#717fe0] mt-4" />
              </div>
              <button
                className="flex items-center justify-center gap-x-2 border-black/65 border-[2px] mt-4 px-4 py-2 hover:bg-[#717fe0] hover:text-white hover:border-none transition-all duration-300 ease-out"
                onClick={() => {
                  addtoCart(item._id!);
                }}
              >
               Add to Cart <FaCartShopping/>
              </button>
             
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
