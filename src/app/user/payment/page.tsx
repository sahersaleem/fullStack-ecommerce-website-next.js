

import CartContextProvider from '@/component/CartContext'
import PaymentPage from '@/component/PaymentPage'
import React from 'react'

const page = () => {
  return (
    <CartContextProvider>
      <PaymentPage/>
    </CartContextProvider>
  )
}

export default page
