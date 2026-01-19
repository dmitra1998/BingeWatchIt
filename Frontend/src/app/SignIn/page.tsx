"use client";

import Link from 'next/link'
import React, { useState } from 'react'

const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className='text-3xl border-4 border-gray-600 rounded-xl'>
      <form className='grid text-2xl p-10'>
        <div className='grid grid-cols-2 gap-10'>
            <label htmlFor="e-mail">E-Mail: </label>
            <input id="e-mail" type="text" className="border-2 rounded-md"/>
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" className="border-2 rounded-md"/>
        </div>
        <div className='center p-2 mt-10'>
            <button className='bg-blue-500 rounded-xl p-2 text-white hover:bg-blue-700'>Login</button>
        </div>
        <div className='center p-2'>
            Don&apos;t have an account?<Link href="/SignUp" className='pl-4 text-blue-500 hover:underline'>Create Here</Link>
        </div>
      </form>
    </div>
  )
}

export default SignIn
