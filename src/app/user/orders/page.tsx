import React from "react";
import { auth } from "@/auth";
import Orders from "@/component/Orders";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import CartContextProvider from "@/component/CartContext";
const Page = async () => {
  const session = await auth();
  const userEmail = session?.user.email;
  return (
    <div className=" w-full h-auto">
      <CartContextProvider>
        <Navbar />

        <h1 className="text-4xl font-poppins mt-32 text-center ">
          Your Orders!
        </h1>
        <div>
          {userEmail ? <Orders userEmail={userEmail} /> : "user not found"}
        </div>
        <Footer />
      </CartContextProvider>
    </div>
  );
};

export default Page;
