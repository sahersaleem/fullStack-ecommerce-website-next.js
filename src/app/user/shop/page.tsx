import CartContextProvider from '@/component/CartContext'
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import Products from '@/component/Products'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center flex-col  items-center w-full h-auto'>
      <CartContextProvider>
       <Navbar/>
       <Products text='All Products' className='mt-20'/>
       <Footer/>
      </CartContextProvider>
     
    </div>
  )
}

export default page
