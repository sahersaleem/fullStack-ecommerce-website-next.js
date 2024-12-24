import dbConnect from "@/lib/mongoose";
import { Product } from "../../../../models/Products";
import { OrderSchema } from "../../../../models/OrderSchema";
import Stripe from "stripe";
import { NextResponse } from "next/server";

export interface Iitems {
  quantity: number;
  price_data: {
    currency: string;
    product_data: { name: string };
    unit_amount: number;
  };
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    await dbConnect();
    const req = await request.json();
    const { products, name, city, email, postalAddress, street, country } =
      req;

    const uniqueProducts = [...new Set(products)];
    const productsInfos = await Product.find({ _id: { $in: uniqueProducts } });

    const items: Iitems[] = [];
    for (const product of uniqueProducts) {
      const productInfo = productsInfos.find(
        (p) => p._id.toString() === product
      );
      if (!productInfo) continue;

      const quantity = products.filter((id:string) => id === product).length;

      items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: Math.round(productInfo.price * 100), // Stripe expects amounts in cents
        },
      });
    }

    const order = new OrderSchema({
      items,
      name,
      email,
      city,
      street,
      postalAddress,
      country,
      paid: false,
    });
    await order.save();

    const session = await stripe.checkout.sessions.create({
      line_items: items,
      mode: "payment",
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/user/payment`,
      cancel_url: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/cart?canceled=1`,
      metadata: { orderId: order._id.toString() },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const orders = await OrderSchema.find({});
    return NextResponse.json(orders);
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
