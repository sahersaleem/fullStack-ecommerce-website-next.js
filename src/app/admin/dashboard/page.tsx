import { auth } from "@/auth";
import Dashboard from "@/component/Dashboard";
import React from "react";

const page = async () => {
  const session = await auth();

  return (
    <div className="flex w-full h-screen  bg-[#FFF6E3]">
      <Dashboard/>
      <div className="flex-grow"><h1 className="text-center text-3xl pt-10 ">
        Welcome {session?.user?.name}
      </h1></div>
      
    </div>
  );
};

export default page;
