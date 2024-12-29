
import Dashboard from "@/component/Dashboard";
import { Kaushan_Script } from "next/font/google";
 


const geistProtest = Kaushan_Script({
  subsets:['latin'],
  variable: "--font-protest",
  weight:["400"]
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistProtest.variable} w-full  flex`}>
      <Dashboard />
       {children}
      </body>
    </html>
  );
}
