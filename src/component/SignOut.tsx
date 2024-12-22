'use server'

import React from 'react'
import { signOut } from '@/auth';
const SignOut = async () => {
  return (
    <div>
       <form className="flex gap-5"
              action={
               
                await signOut({ redirectTo: "/" })}
              
            >
              <button type="submit" className="font-light">Logout</button>

</form>
    </div>
  )
}

export default SignOut
