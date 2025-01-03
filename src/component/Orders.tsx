"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IOrder } from "@/app/admin/orders/page";
import CssLoaders from "./Loaders";
import { Card } from "@/components/ui/card";
const Orders = ({ userEmail }: { userEmail: string }) => {
  const [userOrder, setUserOrder] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getOrderofSpecificUser = async () => {
      setLoading(true);
      const res = await axios.get(`/api/checkout?userEmail=${userEmail}`);
      console.log(res.data)
      setUserOrder(res.data.ordersByEmail);
      setLoading(false);
    };
    getOrderofSpecificUser();
  }, [userEmail]);
  return (
    <div className="w-full h-auto mt-10  xs:px-5 lg:px-10 pb-10">
      <div className="flex flex-wrap gap-10 justify-center items-center ">
        {loading&&<div className="flex justify-center items-center w-full h-screen"><CssLoaders/></div>}
        {userOrder && userOrder.map((i, index) => (
          <Card
            key={i._id}
            className="shadow-xl p-4 max-w-sm  xs:h-auto lg:h-auto pb-10 "
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Products</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="">
                {i.items.map((item, index) => (
                  <TableRow key={index} className="text-sm">
                    <TableCell className="px-5">
                      {item.price_data.product_data.name}
                    </TableCell>
                    <TableCell className="px-5">
                      $
                      {Math.round(
                        (item.price_data.unit_amount / 100) * item.quantity
                      )}
                    </TableCell>
                    <TableCell className="px-5"> {item.quantity}</TableCell>
                  </TableRow>
                ))}
                <TableCell className="px-5 ">
                  {" "}
                  status :{" "}
                  <span className="text-green-900 font-playFairDisplay font-semibold">
                    Paid
                  </span>
                </TableCell>
                
              </TableBody>
              <TableCaption className=" text-center text-xs w-full">
                Date : {i.createdAt!.substring(0, 10)}
              </TableCaption>
            </Table>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Orders;
