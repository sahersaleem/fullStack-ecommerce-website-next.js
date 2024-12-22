import CartContent from "@/component/CartContent";
import CartContextProvider, { Cardcontext } from "@/component/CartContext";
import Navbar from "@/component/Navbar";
import React, { useEffect } from "react";

const Page = () => {





  return (
    <div className="w-full h-screen">
      <CartContextProvider>
        <Navbar />
        <CartContent />
      </CartContextProvider>
    </div>
  );
};

export default Page;
