"use client";

import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import axios from "axios";
import { ICategory } from "@/app/admin/categories/page";
import { IProducts } from "./ProductForm";
import Card from "./Card";
import { Toaster } from "react-hot-toast";
import CssLoaders from "./Loaders";
const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [category, setCategory] = useState<string>("");
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading , setLoading] = useState<boolean>(false)
  useEffect(() => {
    const getCategoriesFromDatabase = async () => {
       
      const categoriesData = await axios.get("/api/categories");
      console.log(categoriesData.data.getCategories);
      setCategories(categoriesData.data.getCategories);
  
    };
    getCategoriesFromDatabase();
  }, []);

  useEffect(() => {
    const getProductsAccordingToCategories = async () => {
      try {
        setLoading(true)
        const getData = await axios.get(`/api/products?categoryId=${category}`);
        console.log(getData.data);
        setProducts(getData.data.productsDataFindByCategory);
        setLoading(false)
      } catch (error: any) {
        console.log("error occurred");
      }
    };
    getProductsAccordingToCategories();
  }, [category]);

  return (
    <div className="w-[100vw] h-auto pb-10">
        <Toaster reverseOrder={false} position="top-center"/>
<div className="mt-44  h-auto overflow-x-hidden flex justify-center items-center flex-col ">
      <h1 className="text-center text-3xl font-poppins mb-12">
        Find What You Need!
      </h1>
      <div className="w-full flex justify-center items-center">
        <Select
          value={category || ""}
          onValueChange={(value) => {
            setCategory(value);
          }}
        >
          <SelectTrigger className="w-1/2 ">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {categories.length > 0 &&
                categories.map((item, index) =>
                  item.name ? (
                    <SelectItem className="" key={item._id} value={item?._id}>
                      {item.name}
                    </SelectItem>
                  ) : null
                )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-12 flex-row overflow-x-hidden mt-12 flex-wrap items-center justify-center shadow-sm  max-w-5xl mx-auto ">
        {
            loading && <div className="w-full h-[70vh] flex justify-center items-center"><CssLoaders/></div>
        }
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
    </div>
    </div>
    
  );
};

export default Categories;
