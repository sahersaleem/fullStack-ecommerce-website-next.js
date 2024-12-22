import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col gap-y-2'>
            
            
            
            <h1 className='text-4xl font-poppins font-bold text-center'>
            Your payment confirmed
            
            
            </h1>
            <h2 className=' text-3xl text-center '>Thanks for your order!</h2>
            
            <button className='button w-[100px] mt-4'><Link href={'/user/cart'}>Go Back</Link></button>
            </div>
      
    </div>
  )
}

export default page
