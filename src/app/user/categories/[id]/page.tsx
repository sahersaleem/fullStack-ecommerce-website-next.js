"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ICategory } from "@/app/admin/categories/page";
import { IProducts } from "@/component/ProductForm";
import axios from "axios";
import { useParams } from "next/navigation";
import Card from "@/component/Card";
import CartContextProvider from "@/component/CartContext";
import CssLoaders from "@/component/Loaders";
import { Toaster } from "react-hot-toast";
const Page = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [category, setCategory] = useState<string>("");
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  useEffect(() => {
    const getProductsAccordingToCategories = async () => {
      try {
        setLoading(true);
        const getData = await axios.get(`/api/products?categoryId=${id}`);
        console.log(getData.data);
        setProducts(getData.data.productsDataFindByCategory);
        setLoading(false);
      } catch (error: any) {
        console.log("error occurred");
      }
    };
    getProductsAccordingToCategories();
  }, [id]);
  return (
    
      <div className="flex gap-12 flex-row overflow-x-hidden mt-36 flex-wrap items-center justify-center shadow-sm  max-w-5xl mx-auto pb-10">
          <Toaster reverseOrder={false} position="top-center"/>
        {loading && (
          <div className="w-full h-[70vh] flex justify-center items-center">
            <CssLoaders />
          </div>
        )}

        {products ? (
          products.map(
            (item) =>
              item.images && (
                <Card
                  key={item._id}
                  name={item.name!}
                  image={item.images[0]}
                  price={item.price!}
                  _id={item._id!}
                />
              )
          )
        ) : (
          <p>products not found</p>
        )}
   </div>
  );
};

export default Page;
