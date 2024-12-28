import CartContextProvider from "@/component/CartContext";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="flex flex-col overflow-x-hidden w-full "
       
      >
      <CartContextProvider><Navbar/>{children}<Footer/></CartContextProvider>
      
      </body>
    </html>
  );
}
