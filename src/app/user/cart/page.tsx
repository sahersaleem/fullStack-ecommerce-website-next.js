import CartContent from "@/component/CartContent";
import CartContextProvider from "@/component/CartContext";
import Navbar from "@/component/Navbar";
import React from "react";

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
