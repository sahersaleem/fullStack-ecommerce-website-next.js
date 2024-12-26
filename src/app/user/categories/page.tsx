import CartContextProvider from '@/component/CartContext'
import Navbar from '@/component/Navbar'
import React from 'react'
import Categories from '@/component/Categories'
import Footer from '@/component/Footer'
const page = () => {
  return (
    <div>
      <CartContextProvider>
        <Navbar/>
        <Categories/>
        <Footer/>
      </CartContextProvider>
    </div>
  )
}

export default page