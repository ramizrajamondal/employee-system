import React, { useState } from 'react'

function Login({handleLogin}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <>
    <div className='flex h-screen w-screen items-center justify-center'>
       <div className='border-2 border-red-700 rounded-md p-10 h-4/6'>
       <h2 className='text-white text-center text-3xl top-0 relative'>Log in</h2>
            <form className='flex flex-col'
            onSubmit={(e)=>{
              submitHandler(e)
            }}>
              
              <input value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                type="email" placeholder='Enter Your Email'
                className='py-2 px-2 text-xl border-2 border-emerald-600 rounded-full
                 text-white outline-none bg-transparent mt-6
                placeholder:text-gray-600' />
                
                <input value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                type="password" placeholder='Enter Your Password'
                className='py-2 px-2 text-xl border-2 border-emerald-600 rounded-full
                 text-white outline-none bg-transparent mt-6
                placeholder:text-gray-600' />


                <div className='flex justify-between mt-6'>
                  <input type="checkbox"/>
                  <h5 className='text-white'>Remember</h5>
                   <button className='text-red-700'>Forget Password</button>
                </div>
                <button 
                className='py-2 px-2 text-xl rounded-full
                text-white outline-none bg-emerald-600 mt-8 hover:bg-emerald-800 duration-300'>
                Log In</button>
            </form>
       </div>
    </div>
    </>
  )
}

export default Login
