import dbConnect from "@/lib/mongoose";
import { Category } from "../../../../models/Category";
import { NextResponse } from "next/server";
import { isAdmin } from "@/auth";
export async function POST(request: Request , response:Response) {
  try {
    await dbConnect();
    await isAdmin(response)
    const res = await request.json();

    const { categoryName, parentCategory } = await res;

    const newCategories = await new Category({
      name: categoryName,
      parent: parentCategory || null, 
    });
    await newCategories.save();

    return NextResponse.json({ newCategories });
  } catch (error: any) {
    console.log("error", error.message);
    return Response.json({ status: 300 });
  }
}

export async function GET(requst: Request , response:Response) {
  try {
    await dbConnect();
    await isAdmin(response)

    const getCategories = await Category.find({}).populate("parent");

    return NextResponse.json({ getCategories });
  } catch (error: any) {
    console.log(
      "Error ocurred while extracting data from data base",
      error.message
    );
    return Response.json({ status: 300 });
  }
}

export async function PUT(request: Request , response:Response) {
  try {
    await dbConnect();
    await isAdmin(response)
    const req = await request.json();

    const { categoryName, parentCategory } = await req;

    const editCategory = await Category.findByIdAndUpdate(
      { _id: parentCategory },
      { name: categoryName }
    );
    await editCategory.save();

    return NextResponse.json({ editCategory });
  } catch (error: any) {
    console.log("error", error.message);
    return Response.json({ status: 300 });
  }
}

export async function DELETE(request: Request , response:Response) {
  
  try {
    await dbConnect();
    await isAdmin(response)
    const req = await request.json();

    const { id } =  req;
    console.log(id);
    const deleteCategory = await Category.findByIdAndDelete({ _id: id });

    return Response.json(true);
  } catch (error: any) {
    console.log("error", error.message);
    return Response.json({ status: 300 });
  }
}
