"use client";

import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button"

import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CssLoaders from "@/component/Loaders";

export interface ICategory {
  _id: string;
  name: string;
  parent: {
    _id: string;
    name: string;
  };
}

const Page = () => {
 
  const [categoryName, setCategoryName] = useState<string>("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [parentCategory, setParentCategory] = useState<string>("");
  const [editing, setEiditing] = useState<boolean>(false);
  const [loading , setLoading] = useState<boolean>(false)
  const addCategory = async (e:any) => {
    e.preventDefault();
    setLoading(true)
    const category = { categoryName, parentCategory };

    try {
      if (editing) {
        const res = await axios.put("/api/categories", category);
        console.log("categories edit sucessfully");
        console.log(res.data);
      } else {
        const res = await axios.post("/api/categories", category);
        console.log("categories post sucessfully");
        console.log(res.data);
      }
    } catch (error: any) {
      console.log(error.message);
    }

    setCategoryName("")
    setParentCategory("")

    setLoading(false)
  };

  const editCategory = (item: any) => {
    setEiditing(true);
    setCategoryName(item.name);
    setParentCategory(item.parent?._id);
    
  };


  const  deleteCategory = async (id:any)=>{

    const res = await axios.delete("/api/categories",{
      data:{
        id:id
      }}
     );
    console.log(res)
    console.log("category deleted successfully")

  }

  useEffect(() => {
    const getCategoriesFromDatabase = async () => {
      setLoading(true)
      const categoriesData = await axios.get("/api/categories");
      console.log(categoriesData.data.getCategories);
      setCategories(categoriesData.data.getCategories);
      setLoading(false)
    };
    getCategoriesFromDatabase();
  }, []);

  return (
    <div className="flex w-full h-screen bg-[#ECF2FF]">
     
      <div className="flex  items-center flex-grow w-auto h-full flex-col pt-10 pb-9 ">
        <div className="flex flex-col w-[70%]">
          {" "}
          <h1 className="text-4xl font-poppins font-medium text-center">
            {editing ? `Edit Category "${categoryName}" ` : `All Categories`}
          </h1>
          <div className="w-auto  mt-20 flex gap-4 xs:flex-col lg:flex-row items-center">
            <Input
              placeholder="Enter category."
              className="w-4/5 hover:outline-none"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            />
            <Select
              value={parentCategory || ""}
              onValueChange={(value) => {
                setParentCategory(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
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
            <button className="button w-28 xs:text-xs lg:text-sm" onClick={addCategory}>
              Add category
            </button>
          </div>
          <table className="mt-4">
            <thead>
              <tr className="xs:text-xs lg:text-sm">
                <td className="w-auto bg-slate-200 lg:p-2 rounded-md">
                  Category Name
                </td>
                <td className="w-auto bg-slate-200 lg:p-2 rounded-md">
                  Parent Category
                </td>
              </tr>
            </thead>
            <tbody>
              {  loading?  <div className="w-full h-screen flex "> <CssLoaders/></div>:categories
                ? categories.map((item, index) => (
                    <tr
                      key={item._id}
                      className="w-full border-b rounded-md shadow-sm lg:text-xl px-5 py-3 xs:text-xs "
                    >
                      <td className="">{item.name}</td>
                      <td className="">{item.parent?.name}</td>

                      <Button
                        className="mr-4"
                        onClick={() => {
                          editCategory(item);
                        }}
                      >
                        Edit
                      </Button>
                      <Button onClick={()=>{deleteCategory(item._id)}}>Delete</Button>
                    </tr>
                  ))
                : "categories not found"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
