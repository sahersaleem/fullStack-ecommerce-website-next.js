import CartContextProvider from "@/component/CartContext";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     
  
        <div className="w-[100vw]">
            <CartContextProvider><Navbar/>
            {children}
            <Footer/>
            </CartContextProvider>
 
        </div>
       
       
      
    );
  }
  