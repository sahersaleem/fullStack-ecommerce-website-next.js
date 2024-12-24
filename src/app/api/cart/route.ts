import dbConnect from "@/lib/mongoose";
import { Product } from "../../../../models/Products";
import { NextResponse } from "next/server";
export async function POST(request: Request ) {
  try {
    await dbConnect();
    const req = await request.json();
    const { id } = req;
   
    const productsDataFindById = await Product.find({ _id: id });
    
    return NextResponse.json(productsDataFindById);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({message:"Error occurred while fetching product data from database"})
  }
}
