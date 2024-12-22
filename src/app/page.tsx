import Carousal2 from "@/component/Carousal";
import CartContextProvider from "@/component/CartContext";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Products from "@/component/Products";

import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen text-white ">
      <CartContextProvider>
        <Carousal2 />
        <Navbar />
        <Products />
        <Footer />
      </CartContextProvider>
    </div>
  );
};

export default page;
