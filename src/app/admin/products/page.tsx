"use client";
import Dashboard from "@/component/Dashboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProducts } from "./newProducts/page";


const Page = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading , setLoading] = useState<boolean>(false)
  useEffect(() => {
    const getProductsFromDatabase = async () => {
      try {
        setLoading(true)
        const getProducts = await axios.get("/api/products");
        console.log(getProducts.data);
        setProducts(getProducts.data.productsData);
        setLoading(false)
      } catch (error) {
        console.log("error message", error);
      }
    };
    getProductsFromDatabase();
  }, []);

 

  const getProductsById = async () => {
    try {
      const product: IProducts = await axios.delete(`/api/products?id=${id}`);
      console.log("product deleted successfully!")
    } catch (error: any) {
      console.log(error.message);
    }
  };




  return (
    <div className="flex w-full h-screen bg-[#ECF2FF]">
      <Dashboard />
     <div className="flex justify-center items-center flex-grow w-auto h-full flex-col pt-10 pb-9">
      <div className="flex flex-col"> <h1 className="text-4xl font-poppins font-medium">All Products</h1><Link
          href={"/admin/products/newProducts"}
          className=" mt-10 font-poppins text-lg  text-white px-4 py-2 rounded-xl transition-all duration-200 ease-in-out "
        >
          <Button>Click to Add Products</Button>
        </Link>
        
</div>
    
        {
          loading?<div className="h-screen">
            <h1>Loading....</h1>
          </div>:(
            <div className="flex flex-col w-1/2  px-5 py-10">
            
            {products?products.map((item, index) => (
              <div
                key={index}
                className="mb-4 border-b border-stone-900 flex justify-between pb-4"
              >
                <h1 className="text-2xl">{item.name}</h1>
                <div className="flex gap-x-2">
                  <Button className="bg-violet-600"><Link href={`/admin/products/edit/${item._id}`}>Edit</Link></Button>
                  <Button className="bg-violet-600"><Link href={`/admin/products/delete/${item._id}`}>Delete</Link></Button>
                </div>
              </div>
            )):<p>Products not found</p>}
          </div>
  
          )
        }
      
       
      </div>
    </div>
  );
};

export default Page;
