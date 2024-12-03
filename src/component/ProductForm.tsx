"use client";
import Dashboard from "@/component/Dashboard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";
import { FaUpload } from "react-icons/fa6";

export interface IProducts {
  _id: string;
  title: string;
  name: string;
  price: string;
  description: string;
  category: string;
}

const ProductForm = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  name: existingName,
  category: existingCategory,
  price: existingPrice,
}: IProducts) => {
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [images, setImages] = useState<string>("");
  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const productobj = { name, title, price, description, category };

    if (_id) {
      try {
        const res = await axios.put("/api/products", {
          _id,
          name,
          title,
          price,
          description,
          category,
        });
        console.log(res.data.editProducts);
        console.log("product edited successfully");
      } catch (error) {
        console.log("Error ocurred", error);
      }
      redirect("/admin/products");
    } else {
      try {
        const response = await axios.post("/api/products", productobj, {});
        console.log("Products send s succesfully!");
      } catch (error) {
        console.log("Error ocurred", error);
      }
      redirect("/admin/products");
    }
  };

  useEffect(() => {
    setTitle(existingTitle);
    setDescription(existingDescription);
    setName(existingName);
    setCategory(existingCategory);
    setPrice(existingPrice);
  }, [
    existingTitle,
    existingName,
    existingCategory,
    existingDescription,
    existingPrice,
  ]);

  const uploadImages = async (e) => {
    const files = e.target?.files;

    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      console.log(res);
    }
  };

  return (
    <div className="flex w-full h-screen  bg-[#FFF6E3]">
      <Dashboard />
      <div className="flex  flex-grow w-auto h-auto flex-col">
        <h1 className="text-center mt-6 text-2xl">
          {_id ? "Edit Product" : " Add Product"}
        </h1>

        <div className="px-10 py-4 flex flex-col">
          <label htmlFor="productname">Product Name</label>
          <Input
            placeholder="Enter product name"
            className="w-1/2 mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="productname">Product title</label>
          <Input
            placeholder="Enter product title"
            className="w-1/2 mb-4"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="productname">Product Price</label>
          <Input
            placeholder="Enter product price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="w-1/2 mb-4"
          />
          <label htmlFor="productname">Product Category</label>
          <Input
            placeholder="Enter product category"
            className="w-1/2 mb-4"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <label htmlFor="description">Product description</label>
          <Textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Enter product description"
            className="w-1/2 mb-4"
          ></Textarea>

          <label htmlFor="images" className="mb-1">
            Upload Images
          </label>
          <div className=" w-[300px] border-black/15 border-[1px] rounded-md flex-col  justify-center items-center mb-8 p-2">
            <Input
              name="files"
              placeholder="upload"
              type="file"
              multiple
              onChange={uploadImages}
            />
          </div>

          <Button className="bg-black w-[100px]" onClick={saveProduct}>
            save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
