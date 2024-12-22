import { auth } from "@/auth";
import Dashboard from "@/component/Dashboard";
import React from "react";
import { signOut } from "@/auth";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
    if(session?.user.role=='user'){
         redirect("/")
    }
  return (
    <div className=" bg-white text-[#433878] w-full  ">
    
      <div className="flex flex-row justify-around p-10">
        <h1 className="text-center lg:text-3xl xs:text-lg">
          Welcome {session?.user?.name}
        </h1>
     
      <div className="flex justify-center items-center">
        {" "}
        <form
          className="flex gap-5"
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button type="submit" className="font-light flex gap-2 xs:text-lg">
          Logout  <LogOut className="lg:text-sm"/>
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default page;
