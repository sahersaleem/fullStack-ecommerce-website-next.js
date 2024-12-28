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

import { Toaster } from "react-hot-toast";
import CssLoaders from "./Loaders";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import Link from "next/link";
const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [category, setCategory] = useState<string>("");
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getCategoriesFromDatabase = async () => {
      const categoriesData = await axios.get("/api/categories");
      console.log(categoriesData.data.getCategories);
      setCategories(categoriesData.data.getCategories);
      setCategory(categoriesData.data.getCategories[0]._id);
    };
    getCategoriesFromDatabase();
  }, []);



  return (


    <div className="w-[100vw] mt-36 pb-10">
      <h1 className="text-center text-4xl font-poppins">
           Find What You Need!
       </h1>
       <div className="  h-auto flex justify-around items-center flex-wrap  pb-10 mt-7">
      

      {categories.length > 0? 
        categories.map((cat) => (
          <div
            key={cat._id}
            className=" mt-11 shadow-xl w-56 h-[200px] text-2xl font-poppins flex items-center justify-center bg-[#7180e0b1] text-white rounded-xl font-semibold"
          >
         <Link href={`/user/categories/${cat._id}`} className="underline">{cat.name}</Link>
          </div>
        )):<div className="h-[100vh] flex justify-center items-center"><CssLoaders/></div>}
    </div>
    </div>
   

   
  );
};

export default Categories;
