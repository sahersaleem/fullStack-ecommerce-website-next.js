"use client";

import React from "react";
import { useEffect, useState } from "react";
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
import { IOrder } from "@/app/admin/orders/page";
const Orders = ({ userEmail }: { userEmail: string }) => {
  const [userOrder, setUserOrder] = useState<IOrder[]>([]);
  useEffect(() => {
    const getOrderofSpecificUser = async () => {
      const res = await axios.get(`/api/checkout?userEmail=${userEmail}`);
      setUserOrder(res.data.ordersByEmail);
    };
    getOrderofSpecificUser();
  }, [userEmail]);
  return (
    <Table>
      <TableCaption>A list of your recent Orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-3/2">Customer Information</TableHead>
          <TableHead className="w-3/2">Product</TableHead>
          <TableHead className="w-3/2">Payment</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userOrder.map((order, index) => (
          <>
            <TableRow key={order._id}>
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
              <TableCell>
                {
                  order.items.map((i , index)=>(
                    <h1 key={index}> ${
                      i.price_data.unit_amount}</h1>
                  ))
                }
              </TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
};

export default Orders;
