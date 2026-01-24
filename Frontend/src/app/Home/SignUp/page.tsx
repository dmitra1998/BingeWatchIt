"use client"

import Link from 'next/link'
import {useActionState} from 'react'
import submitSignUpForm from './action';


const SignUp = () => {
  const [state, formAction, isPending] = useActionState(submitSignUpForm, undefined);

  const signUpFields = [
        {id: 'firstName', name: 'firstName', placeholder: 'First Name', type: 'text', label: 'First Name'},
        {id: 'lastName', name: 'lastName', placeholder: 'Last Name', type: 'text', label: 'Last Name'},
        {id: 'username', name: 'username', placeholder: 'User Name', type: 'text', label: 'Username'},
        {id: 'email', name: 'email', placeholder: 'E-Mail', type: 'text', label: 'Email'},
        {id: 'password', name: 'password', placeholder: 'Password', type: 'password', label: 'Password'},
        {id: 'confirmPassword', name: 'confirmPassword', placeholder: 'Confirm Password', type: 'password', label: 'Confirm Password'},
    ]

  return (
    <div className='text-3xl border-4 border-gray-600 rounded-xl'>
      <form className='grid text-2xl p-10' action={formAction}>
        <div className='grid grid-cols-2 gap-10'>
          {signUpFields.map((fields) => (
                    <>
                      <label htmlFor={fields.id}>{fields.label}</label>
                      <input 
                        id={fields.id}
                        name={fields.name}
                        placeholder={fields.placeholder}
                        type={fields.type} 
                        className="border-2 rounded-md"
                      />
                    </>
          ))}
        </div>
        <div className='center p-2 mt-10'>
            <button 
              className='bg-blue-500 rounded-xl p-2 text-white hover:bg-blue-700'
              disabled={isPending}
              >Login</button>
        </div>
        <div className='center p-2'>
            Have an account?
            <Link href="/Home/SignIn" className='pl-4 text-blue-500 hover:underline'>
              Sign In
            </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
