import { Product } from "../../../../models/Products";
import dbConnect from "@/lib/mongoose";
import { NextResponse, type NextRequest } from "next/server";
import { isAdmin } from "@/auth";
export async function POST(request: Request ) {


  try {
    await dbConnect();
    await isAdmin()
    const res = await request.json();
    const { title, description, name, price, category , images } = res;

    const newProducts = await new Product({
      name: name,
      title: title,
      category: category,
      description: description,
      price: price,
      images:images
    });

    await newProducts.save();

    return NextResponse.json({ res });
  } catch (error: any) {
    console.log("error", error.message);
    return NextResponse.json({ status: 300 });
  }
}

export async function GET(request: NextRequest  ) {
  await dbConnect();

  try {
    const id = request.nextUrl.searchParams.get("id");
    if (id) {
      const productsDataFindById = await Product.findOne({ _id: id });
      return Response.json({ productsDataFindById });
    }
    const productsData = await Product.find({});
    return NextResponse.json({ productsData });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ status: 300 });
  }
}

export async function PUT(request: Request ) {
  try {
    await dbConnect();
    await isAdmin()
    const req = await request.json();
    const { title, description, name, _id, price, category , images} = req;

    const editProducts = await Product.findOneAndUpdate(
      { _id },
      { title, description, name, price, category , images }
    );
    await editProducts.save();

    return NextResponse.json({ editProducts });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ status: 300 });
  }
}

export async function DELETE(request:NextRequest){
await dbConnect()
await isAdmin()
  try {
    const id = request.nextUrl.searchParams.get("id");
    const deletedProduct = await Product.findOneAndDelete({_id:id})
   
    return NextResponse.json(true)
} catch (error:any) {
  console.log(error.message);
  return NextResponse.json({ status: 300 });
}

}