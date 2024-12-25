import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/db";

const adminEmails = ["maazsaleem248@gmail.com","saleemsaba281@gmail.com" , "saleemsaba281@outlook.com","fahimmemon822@gmail.com"];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  adapter: MongoDBAdapter(client),
  callbacks: {
    session:({ session, token, user }) => {
      console.log(session, token, user);
      if (adminEmails.includes(session?.user?.email)) {
        session.user.role = "admin";
        console.log("admin");
      } else {
        session.user.role = "user";
        console.log("user");
      }
      return session
    },
  },
});

export async function isAdmin() {
  const session = await auth();

  if (session?.user.role !== "admin") {
    throw new Error("unauthorized access");
  }
  return true;
}
