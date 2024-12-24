"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { ICategory } from "@/app/admin/categories/page";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CssLoaders from "./Loaders";

export interface IProducts {
  _id?: string;
  title?: string;
  name?: string;
  price?: string;
  description?: string;
  category?: string;
  images?: string[];
}

const ProductForm = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  name: existingName,
  category: existingCategory,
  price: existingPrice,
  images: existingImages,
}: IProducts) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    const productobj = { name, title, price, description, category, images };
    console.log(productobj);

    if (_id) {
      try {
        const res = await axios.put("/api/products", {
          _id,
          name,
          title,
          price,
          description,
          category,
          images,
        });
        console.log(res.data.editProducts);
        console.log("product edited successfully");
      } catch (error) {
        console.log("Error ocurred", error);
      }
      router.push("/admin/products");
    } else {
      try {
        const response = await axios.post("/api/products", productobj);
        console.log("Products send s succesfully!");
      } catch (error) {
        console.log("Error ocurred", error);
      }
      router.push("/admin/products");
    }
  };

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
    }
  };

  const uploadImages = async () => {
    setLoading(true)
    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      try {
        const res = await axios.post("/api/upload", data);
        setImages(()=> {
          const updatedImages = [...res.data.imageUrl];
          console.log("Updated images (inside setState):", updatedImages);
          return updatedImages;
        });

        if (res) {
          console.log("images uploaded successfully");
        } else {
          console.log("error occurred while uploading");
        }
      } catch (error: any) {
        console.log(error.message, "error occurred");
      }
    }

    setLoading(false)
  };

  useEffect(() => {
    setTitle(existingTitle!);
    setDescription(existingDescription!);
    setName(existingName!);
    setCategory(existingCategory!);
    setPrice(existingPrice!);
    setImages(existingImages!);
  }, [
    existingTitle,
    existingName,
    existingCategory,
    existingDescription,
    existingPrice,
    existingImages,
  ]);



  useEffect(() => {
    const getCategoriesFromDatabase = async () => {
      const categoriesData = await axios.get("/api/categories");
     setCategories(categoriesData.data.getCategories);
    };
    getCategoriesFromDatabase();
  }, []);





  return (
    <div className=" text-[#433878] lg:w-[100vw]   ">
     
      <div className="flex lg:w-full flex-col justify-center  ">
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

          <Select value={category} onValueChange={(value)=>{setCategory(value)}}>
              <SelectTrigger className="w-[180px] mb-4">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {categories.length > 0 &&
                    categories.map((item, index) =>
                      item.name ? (
                        <SelectItem
                          className=""
                          key={item._id}
                          value={item?._id}
                        >
                          {item.name}
                        </SelectItem>
                      ) : null
                    )}
                </SelectGroup>
              </SelectContent>
            </Select>
          {/* <Input
            placeholder="Enter product category"
            className="w-1/2 mb-4"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          /> */}
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
              multiple={true}
              onChange={handleFiles}
            />
            <button onClick={uploadImages}>{loading?<CssLoaders/>:"upload"}</button>
          </div>

          <button className="button w-[100px]" onClick={saveProduct}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
