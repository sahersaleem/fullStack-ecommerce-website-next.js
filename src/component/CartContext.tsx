"use client";

import { createContext, useContext, useState } from "react";
import React from "react";

import { useEffect } from "react";

type CartContextType = {
  cartProducts: string[];
  setCartProducts: React.Dispatch<React.SetStateAction<string[]>>;
  addProducts: (productId: string) => void;
  removeProduct: (productId: string) => void;
  clearProduct: () => void;
};

export const Cardcontext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<string[]>([]);

  useEffect(() => {
    const store = JSON.parse(window.localStorage.getItem("cart")||"[]")
    if (store.length > 0) {
      setCartProducts(store);
    }
  }, []);

  useEffect(() => {

      localStorage.setItem("cart", JSON.stringify(cartProducts));
    
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
    localStorage.removeItem("cart");
    console.log("get cleared");
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

export function useCart() {
  const context = useContext(Cardcontext);
  if (!context) {
    throw new Error("use cart must be inside the context");
  }
  return context;
}
