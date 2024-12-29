"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import CssLoaders from "./Loaders";

const PaymentInfo = ({ ids }: { ids: string[] }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalAddress, setPostalAddress] = useState<string>("");

  const [country, setCountry] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const products = ids;

  useEffect(() => {
 const {name , email , country , street , postalAddress , city} = JSON.parse( localStorage.getItem("paymentInfo")!)
 console.log(name , email , country , street , postalAddress , city)
 if(name && email && country && street && postalAddress && city){
  setName(name)
  setCity(city)
  setEmail(email)
  setCountry(country)
  setStreet(street)
  setPostalAddress(postalAddress)
 }


 

  }, []);

  const savePaymentInfo = () => {
    const paymentInfo = { name, email, city, country, street, postalAddress };
    if (window !== undefined) {
      localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
    }
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (
      name &&
      email &&
      city &&
      postalAddress &&
      street &&
      country &&
      products
    ) {
      const obj = {
        name,
        city,
        email,
        postalAddress,
        street,
        country,
        products,
      };

      try {
        const res = await axios.post("/api/checkout", obj);
        if (res.data.url) {
          window.location = res.data.url;
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }

    setLoading(false);
    savePaymentInfo();
  };

  return (
    <div className="shadow-md px-4 py-3">
      <h1 className="font-poppins text-3xl text-center font-bold mb-7">
        Payment Information
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Input
            placeholder="name"
            value={name}
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="email"
            value={email}
            name="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="flex gap-x-2">
            <Input
              placeholder="city"
              value={city}
              name="city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <Input
              placeholder="postal address"
              value={postalAddress}
              name="postalAddress"
              onChange={(e) => {
                setPostalAddress(e.target.value);
              }}
            />
          </div>
          <Input
            placeholder="street address"
            value={street}
            name="street"
            onChange={(e) => {
              setStreet(e.target.value);
            }}
          />
          <Input
            placeholder="country"
            value={country}
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <input
            name="products"
            value={products.join(",")}
            className="hidden"
            placeholder="abc"
            readOnly
          />
          <button className="button" type="submit">
            {loading ? "Processing..." : "Continue to payment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentInfo;
