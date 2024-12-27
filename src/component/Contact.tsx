import Image from "next/image";
import React from "react";
import CartContextProvider from "./CartContext";
import Navbar from "./Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "./Footer";
import { FaEnvelope, FaLocationArrow, FaMap, FaPhone } from "react-icons/fa";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";

const Contact = () => {
  return (
    <CartContextProvider>
      <Navbar />
      <div className="w-full h-auto pb-10">
        <Image
          src={"/images/bg-01.jpg"}
          alt="ijei"
          width={800}
          height={400}
          className="w-full h-[30vh] object-center object-cover mt-24"
        />
        <div className="max-w-6xl mx-auto w-full flex justify-center items-center xs:flex-col lg:flex-row mt-12 xs:p-6 lg:p-20 xs:gap-y-6 lg:gap-y-0">
          <div className="xs:w-full lg:w-1/2 border-gray-400 border p-10 rounded-xl flex flex-col gap-6 ">
            <h1 className="font-poppins font-light text-2xl text-center">
              Send Us Message
            </h1>
            <Input placeholder="enter email " type="email" />
            <Textarea placeholder="Enter your message..." cols={8} rows={8} />
            <button className="text-center button">Submit</button>
          </div>
          <div className="xs:w-full lg:w-1/2 border-gray-400 border xs:p-10 lg:p-20 rounded-xl flex flex-col gap-6 justify-center ">
            <div className="flex gap-x-6">
              <FaLocationDot />
              <div className="flex flex-col gap-y-2">
                {" "}
                <h1 className="text-xl">Address</h1>
                <p className="font-poppins text-lg text-[#717fe0]">
                  Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                  US
                </p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <FaPhone />
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl">Lets Talk</h1>
                <p className="font-poppins text-lg text-[#717fe0]">+1 800 1236879</p>
              </div>
            </div>
            <div>
              <div className="flex gap-x-6">
                <FaEnvelope />
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-xl">Sales Support</h1>
                  <p className="font-poppins text-lg text-[#717fe0]">contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </CartContextProvider>
  );
};

export default Contact;
