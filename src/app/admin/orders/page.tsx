"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Iitems } from "@/app/api/checkout/route";

interface IOrder {
  _id: string;
  items: Iitems[];
  name: string;
  email: string;
  city: string;
  postalAddress: string;
  street: string;
  paid: boolean;
  country: string;
  createdAt: string;
}

const Page = () => {
  const [orderData, setOrderData] = useState<IOrder[]>([]);

  useEffect(() => {
    const getOrdersData = async () => {
      try {
        const orders = await axios.get("/api/checkout");
        console.log(orders);
        setOrderData(orders.data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getOrdersData();
  }, []);

  return (
    <div className="w-full h-screen">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-3/2">Id</TableHead>
            <TableHead className="w-3/2">Customer Information</TableHead>
            <TableHead className="w-3/2">Product</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          { orderData.map((order, index) => (
            <>
              <TableRow key={index}>
                <TableCell className="font-medium">{order._id}</TableCell>
                <TableCell className="font-medium">
                  {order.name}
                  <br />
                  {order.email}
                  <br />
                  {order.postalAddress}
                  <br />
                  {order.street}
                  <br />
                  {order.country}
                  <br />
                </TableCell>
                <TableCell className="font-medium">
                  {order.items.map((i, index) => (
                    <h1 key={index}>
                      {i.price_data.product_data.name} x {i.quantity} <br />
                    </h1>
                  ))}
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
