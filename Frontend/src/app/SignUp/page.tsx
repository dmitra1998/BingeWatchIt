"use client";

import Link from 'next/link'
import React, { useState } from 'react'

const SignUp = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div className='text-3xl border-4 border-gray-600 rounded-xl'>
      <form className='grid text-2xl p-10'>
        <div className='grid grid-cols-2 gap-10'>
            <label htmlFor="username">Username: </label>
            <input 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='User Name'
              type="text" 
              className="border-2 rounded-md"
            />

            <label htmlFor="e-mail">E-Mail: </label>
            <input 
              id="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='E-Mail'
              type="text" 
              className="border-2 rounded-md"
            />

            <label htmlFor="password">Password: </label>
            <input 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              type="password" 
              className="border-2 rounded-md"
            />

            <label htmlFor="confirm-password">Confirm Password: </label>
            <input 
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
              type="password" 
              className="border-2 rounded-md"
            />

        </div>
        <div className='center p-2 mt-10'>
            <button className='bg-blue-500 rounded-xl p-2 text-white hover:bg-blue-700'>Login</button>
        </div>
        <div className='center p-2'>
            Have an account?
            <Link href="/SignIn" className='pl-4 text-blue-500 hover:underline'>
              Sign In
            </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
