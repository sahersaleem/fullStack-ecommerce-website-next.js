import dbConnect from "@/lib/mongoose";
import { Product } from "../../../../models/Products";
import { OrderSchema } from "../../../../models/OrderSchema";
import Stripe from "stripe";
import { timeStamp } from "console";


export interface Iitems {
  quantity:number,
  price_data: {
    currency: string,
    product_data: { name: string },
    unit_amount: number,
  },
}





const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(request: Request, response: Response) {
  try {
    await dbConnect();
    const req = await request.json();
    const { products, name, city, email, postalAddress, street, country } =
      await req;

    const newSetOfProducts = [...new Set(products)];
    console.log(newSetOfProducts);
    const productsInfos = await Product.find({ _id: newSetOfProducts });

    const items:Iitems[] = [];
    for (const product of newSetOfProducts) {
      const uniqueProducts = productsInfos.find(
        (p) => p._id.toString() === product
      );
      console.log(uniqueProducts);
      const quantity = products.filter((id) => id === product)?.length;

      items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: uniqueProducts?.title },
          unit_amount: Math.round(quantity * uniqueProducts.price * 100),
        },
      });
    }
    console.log(items[0].price_data.unit_amount);

    const order = await new OrderSchema(
      {
        items,
        name,
        email,
        city,
        street,
        postalAddress,
        country,
        paid: false,
      },
      
    );

    await order.save();

    const session = await stripe.checkout.sessions.create({
      line_items: items,
      mode: "payment",
      customer_email: email,
      success_url: process.env.PUBLIC_URL + "/user/payment",
      cancel_url: process.env.PUBLIC_URL + "/cart/canceled=1",
      metadata: { orderId: order._id.toString() },
    });

    console.log(session.url);
    return Response.json({
      url: session.url,
    });
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: "Error ocuured" });
  }
}

export async function GET(request: Request, response: Response) {
  try {
    await dbConnect();
    const findOrdersDataFromDataBase = await OrderSchema.find({});
    console.log(findOrdersDataFromDataBase);
    return Response.json({ findOrdersDataFromDataBase });
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: error.message });
  }
}
