"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useParams } from "next/navigation";
import { IProducts } from "../../newProducts/page";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [product, setProduct] = useState<IProducts | null>(null);
  const { id } = useParams();

  const deleteProductsById = async () => {
    try {
      const products: IProducts = await axios.delete(`/api/products?id=${id}`);
      setProduct(products.productsData);
      console.log("product deleted successfully!");
    } catch (error: any) {
      console.log(error.message);
    }
    redirect("/admin/products");
    return;
  };

  const notDeleteProduct = async () => {
    redirect("/admin/products");
    return;
  };
  return (
    <div className="w-full h-screen bg-[#ECF2FF] ">
      <h1 className="text-4xl font-poppins bg-purple-600 text-white text-center py-5">
        Product detail
      </h1>
      <div className="flex justify-center items-center h-full flex-col gap-5">
        <p className="font-poppins text-xl">
          Do you want to delete this product?
        </p>
        <div className="space-x-4">
          <Button
            onClick={() => {
              deleteProductsById();
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              notDeleteProduct();
            }}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
