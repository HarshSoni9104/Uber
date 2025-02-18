import React from 'react'
import {Link} from 'react-router-dom'
export const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1586805372042-327a923a697a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWZmaWN8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
          <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white pb-7 py-5 px-4' >
                <h2 className='text-3xl font-bold'>Get started with uber </h2>
               <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
            </div>

        </div>
    </div>
  )
}
