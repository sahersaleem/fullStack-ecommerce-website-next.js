"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { IProducts } from "../../newProducts/page";
import ProductForm from "@/component/ProductForm";

const Page = () => {
  const { id } = useParams();
  const [productInfo, setProductsInfo] = useState<IProducts | null>(null);



  useEffect(()=>{
    const getProductsById = async () => {
      try {
        const product = await axios.get(`/api/products?id=${id}`);
       setProductsInfo(product.data.productsDataFindById)
      } catch (error:any) {
        console.log(error.message)
      }
  ;
    };
  

    if(id){
      getProductsById();
    }
   




  },[id])
 

  return (
    <div className="text-black">
      <ProductForm {...productInfo} />
    </div>
  );
};

export default Page;
