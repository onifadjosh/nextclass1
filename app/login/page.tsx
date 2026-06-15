import React from 'react'

const Page = () => {
  return (
    <div className='  flex h-screen  justify-center items-center px-5 '>

        <div className='bg-gray-100 shadow-lg rounded-sm p-10 w-full md:w-1/2 xl:w-1/3  flex-col gap-4 flex justify-center /items-center'>

            <h1 className='text-center text-2xl font-bold'>Login Here</h1>
            <div>
            <label htmlFor="Email" >Email:</label><br />
            <input type="text"  className='border outline-1 focus:outline-green-700 p-2 w-full rounded-sm ' autoFocus/>
            </div>


            <div>
            <label htmlFor="Password" >Password:</label><br />
            <input type="password" className='border outline-1 focus:outline-green-700 p-2 w-full rounded-sm'/>
            </div>


            <button className='py-2 bg-black text-white rounded-sm hover:bg-green-800  sm:hover:bg-red-800 md:hover:bg-blue-800 hover:cursor-pointer hover:-translate-y-1 transition delay-150 /hover:scale-105 /animate-spin'>Login</button>
        </div>
    </div>
  )
}

export default Page