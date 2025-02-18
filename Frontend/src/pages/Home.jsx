import React from 'react'

export const Home = () => {
  return (
    <div>
        <div className='h-screen flex justify-between flex-col w-full bg-red-400'>
          <img className='w-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white'>
                <h2>Get started with uber </h2>
                <button>Continue</button>
            </div>

        </div>
    </div>
  )
}
