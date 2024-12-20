import { Product } from "../../../../models/Products";
import dbConnect from "@/lib/mongoose";
import { type NextRequest } from "next/server";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const res = await request.json();
    const { title, description, name, price, category } = res;

    const newProducts = await new Product({
      name: name,
      title: title,
      category: category,
      description: description,
      price: price,
    });

    await newProducts.save();

    return Response.json({ res });
  } catch (error: any) {
    console.log("error", error.message);
    return Response.json({ status: 300 });
  }
}

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const id = request.nextUrl.searchParams.get("id");
    if (id) {
      const productsDataFindById = await Product.findOne({ _id: id });
      return Response.json({ productsDataFindById });
    }
    const productsData = await Product.find({});
    return Response.json({ productsData });
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ status: 300 });
  }
}

export async function PUT(request: Request) {
  try {
    await dbConnect();
    const req = await request.json();
    const { title, description, name, _id, price, category } = req;

    const editProducts = await Product.findOneAndUpdate(
      { _id },
      { title, description, name, price, category }
    );
    await editProducts.save();

    return Response.json({ editProducts });
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ status: 300 });
  }
}

export async function DELETE(request:NextRequest){
await dbConnect()
  try {
    const id = request.nextUrl.searchParams.get("id");
    const deletedProduct = await Product.findOneAndDelete({_id:id})
    console.log(deletedProduct)
    return Response.json(true)
} catch (error) {
  console.log(error.message);
  return Response.json({ status: 300 });
}

}