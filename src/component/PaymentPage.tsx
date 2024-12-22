"use client";
import React, { useContext, useEffect } from "react";

import CartContextProvider, { Cardcontext } from "@/component/CartContext";
import {  useRouter } from "next/navigation";
const PaymentPage = () => {
  const { clearProduct } = useContext(Cardcontext);
  const router = useRouter();

  const handleGoBack = () => {
    console.log("function is running")
    clearProduct()
    router.push("/user/cart");
    console.log('function is running 2')
  };

  return (

      
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-y-2">
          <h1 className="text-4xl font-poppins font-bold text-center">
            Your payment confirmed
          </h1>
          <h2 className=" text-3xl text-center ">Thanks for your order!</h2>

          <button className="button w-[100px] mt-4" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
   
  );
};

export default PaymentPage
