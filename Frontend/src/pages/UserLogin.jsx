import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) =>{
      e.preventDefault()
      console.log(email,password);
      setEmail('')
      setPassword('')
      
  }
  return (
    <>
      <div className='bg-black w-full '>
        <img className='w-30 ml-8' src="https://cdn.mos.cms.futurecdn.net/M4hbiWhoo8n3bQQ2hKg5s3.jpg" alt="" />
      </div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <form onSubmit={(e) => {
              submitHandler(e)
          }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required type="password"
            placeholder='password'
          />
          <button
            className='bg-[#111] text-[#fff] font-semibold mb-2 rounded px-4 py-2  w-full text-lg placeholder:text-base'
          >Login</button>
        </form>
          <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        <div>
          <button
            className='bg-[#10b461] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</button>
        </div>
      </div>
    </>
  )
}
