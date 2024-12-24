"use client";

import { useParams } from "next/navigation";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProducts } from "@/component/ProductForm";

import Image from "next/image";

const Page = () => {
  const { id } = useParams();
  const [productInfo, setProductsInfo] = useState<IProducts | null>(null);

  useEffect(() => {
    const getProductsById = async () => {
      try {
        const product = await axios.get(`/api/products?id=${id}`);
        setProductsInfo(product.data.productsDataFindById);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    if (id) {
      getProductsById();
    }
  }, [id]);
  return (
    <div className="w-auto h-auto mt-44 pb-10">
      <h1 className="text-center text-3xl font-playFairDisplay font-semibold">
        {productInfo?.name}
      </h1>
      {productInfo ? (
        <div className="flex justify-center items-center mt-10 flex-col gap-y-4 ">
          {productInfo.images ? (
            <Image
              src={productInfo?.images[0]}
              alt="images"
              width={300}
              height={500}
            />
          ) : (
            ""
          )}
          {productInfo.images &&
            productInfo.images.map((i, index) => (
              <div key={index}>
                <Image src={i} alt="images" width={100} height={100} />
              </div>
            ))}
          <p className="w-1/2  text-center italic font-poppins text-lg">
            {productInfo.description}
          </p>
          <p className="font-bold font-poppins text-2xl">
            Only in ${productInfo.price}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;
