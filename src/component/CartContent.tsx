"use client";

import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Cardcontext, useCart } from "./CartContext";
import { IProducts } from "./ProductForm";
import axios from "axios";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import CssLoaders from "./Loaders";
import PaymentInfo from "./PaymentInfo";

const CartContent = () => {
  const [productsData, setProductsData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { cartProducts, addProducts, removeProduct } = useCart()

 

  useEffect(() => {
    const findProducts = async () => {
    
      if (cartProducts.length > 0) {
        try {
          setLoading(true)
          const productsFinfById = await axios.post("/api/cart", {
            id: cartProducts,
          });
          setProductsData(productsFinfById.data);
          setLoading(false)
        } catch (error: any) {
          console.log(error.message);
        }
      } else {
        setProductsData([]);
      }
    };

    findProducts();
  }, [cartProducts]);

  function addmoreProduct(id:string) {
    addProducts(id);
  }

  function removeMoreProduct(id:string) {
    removeProduct(id);
  }

  console.log(productsData);
  let total = 0;
  for (const productId of cartProducts) {
    const priceOdfProduct =
      productsData.find((val) => val._id === productId)?.price || "0";
    total += parseInt(priceOdfProduct);
  }

  return (
    <div className="w-full h-auto pb-20">
      <div className="max-w-7xl mx-auto mt-36">
        <h1 className="text-4xl font-poppins mb-14 flex gap-x-1 items-center xs:ml-9 lg:ml-0">
          Cart <FaShoppingCart className="text-3xl" />
        </h1>
        <div className="flex xs:gap-y-12 lg:gap-x-28 xs:flex-col lg:flex-row">
          <div className="flex flex-col xs:w-full lg:w-1/2 gap-10 justify-center">
            <div className="flex  justify-between text-lg font-playFairDisplay xs:hidden lg:flex ">
              <p>Product</p>
              <p>name</p>
              <p>Price</p>
              <p>Quantity</p>
            </div>
            {loading ? (
              <CssLoaders />
            ) : productsData.length > 0 ? (
              productsData.map((item) => (
                <div
                  key={item._id}
                  className="flex xs:justify-center lg:justify-between items-center xs:flex-col lg:flex-row xs:gap-y-4 lg:gap-y-0"
                >
                 {
                  item.images?
                  <Image
                    src={item.images[0]}
                    alt="image"
                    width={150}
                    height={150}
                  />:""}
                  <h1 className="xs:text-lg lg:text-xl font-semibold font-poppins">
                    {item.name}
                  </h1>
                  <h2 className="font-poppins font-medium text-xl">
                    ${item.price}
                  </h2>
                  <div className="flex gap-x-2">
                    {" "}
                    <button
                      className="bg-gray-300 px-2 rounded-md"
                      onClick={() => {
                        addmoreProduct(item._id!);
                      }}
                    >
                      +
                    </button>
                    <h3 className="font-poppins font-medium text-xl">
                      {cartProducts.filter((ids) => ids === item._id).length}
                    </h3>
                    <button
                      className="bg-gray-300 px-2 rounded-md"
                      onClick={() => {
                        removeMoreProduct(item._id!);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center">Please enter products in a cart</h1>
            )}

            {productsData.length > 0 ? (
              <div className="flex justify-end w-auto px-2">
                <h1 className="text-2xl font-poppins font-semibold">
                  Total <span className="text-lg">${total}</span>{" "}
                </h1>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="xs:w-full lg:w-1/2">
          {
            productsData.length>0?
          
            <PaymentInfo ids={cartProducts} />:""
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
