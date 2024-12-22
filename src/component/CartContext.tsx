"use client";

import { createContext, useState } from "react";
import React from "react";

import { useEffect } from "react";

export const Cardcontext = createContext({});

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<string[]>(
    JSON.parse(window.localStorage.getItem("cart") || "[]") || []
  );

  useEffect(() => {
    if (cartProducts.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
  function addProducts(productId: string) {
    setCartProducts((prev) => {
      return [...prev, productId];
    });
  }

  function removeProduct(productId: string) {
    setCartProducts((prev) => {
      const ind = prev.indexOf(productId);
      if (ind !== -1) {
        return prev.filter((value, index) => index !== ind);
      }
      return prev;
    });
  }

  function clearProduct() {
     localStorage.removeItem('cart')
     console.log("get cleared")
    }

  
  

  return (
    <Cardcontext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProducts,
        removeProduct,
        clearProduct,
      }}
    >
      {children}
    </Cardcontext.Provider>
  );
};

export default CartContextProvider;
