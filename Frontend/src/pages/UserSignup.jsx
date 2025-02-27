import React, { useContext, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import {  UserDataContext  } from '../context/UserContext'

export const UserSignup = () => {
  const[email , setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [userData, setUserData] = useState({})


  const navigate = useNavigate()
  const {user , setUser} = useContext(UserDataContext)

  const submitHandler = async(e) => { 
    e.preventDefault()
    const newUser = {
      fullname:{
        firstname:firstname,
        lastname:lastname,  
      },
      email:email,
      password:password 
    }
    
const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
if(response.status === 201){
  const data = response.data
  setUser(data.user)
  localStorage.setItem('token' , data.token)
  navigate('/home')
  
}

    setEmail("")
    setFirstname("")
    setLastname("")
    setPassword("")
  }

  return (
    <div> 
      <div className="h-screen w-full flex flex-col overflow-hidden">
    {/* Logo Section */}
    <div className="bg-black w-full flex items-center ">
      <img
        className="w-32 "
        src="https://cdn.mos.cms.futurecdn.net/M4hbiWhoo8n3bQQ2hKg5s3.jpg"
        alt="Uber Logo"
      />
    </div>

    {/* Form Section */}
    <div className="flex flex-col justify-center items-center flex-grow px-7">
      <form
        onSubmit={(e) => {submitHandler(e)}}
        className="w-full max-w-md"
      >
        <h3 className="text-base font-medium mb-2">What's your name</h3>
        <div className='flex gap-5 mb-5'>
        <input
          required
          className="bg-[#eeeeee]  rounded px-4 py-2  w-1/2 text-base placeholder:text-sm"
          type="text"
          placeholder="First name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
          <input
          required
          className="bg-[#eeeeee]  rounded px-4 py-2  w-1/2 text-base placeholder:text-sm"
          type="text"
          placeholder="Last name "
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        </div>
        <h3 className="text-base font-medium mb-2">What's your email</h3>
        <input
          required
          className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className="text-base font-medium mb-2">Enter Password</h3>
        <input
          
          className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          required
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-[#111] text-[#fff] font-semibold mb-4 rounded px-4 py-2 w-full text-lg">
          Create account
        </button>
      </form>

      <p className="text-center">
        Already have a account?
        <Link to="/login" className="text-blue-600">
          Login here
        </Link>
      </p>
    </div>

    <p className="text-[10px] sm:text-xs px-6 text-center leading-tight mb-5 max-w-[90%] mx-auto">
  By proceeding, you consent to get calls, WhatsApp, or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
</p>

  </div>

  </div>
  )
}
