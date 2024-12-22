import dbConnect from "@/lib/mongoose";
import { Product } from "../../../../models/Products";
export async function POST(request: Request, response: Response) {
  try {
    await dbConnect();
    const req = await request.json();
    const { id } = req;
   
    const productsDataFindById = await Product.find({ _id: id });
    
    return Response.json(productsDataFindById);
  } catch (error: any) {
    console.log(error.message);
    return Response.json({message:"Error occurred while fetching product data from database"})
  }
}
