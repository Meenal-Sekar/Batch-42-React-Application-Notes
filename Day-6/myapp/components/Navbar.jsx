import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-blue-600 text-white p-4 flex justify-between'>
        <h1 className="text-xl font-bold">J & R</h1>
        <ul className='flex gap-6'>
            <a href='#' className="hover:text-gray-200 font-bold cursor-pointer">Home</a>
            <a href='#' className='hover:text-yellow-200  font-bold cursor-pointer'>About</a>
            <a href='#' className='hover:text-red-900   font-bold cursor-point'>Contact</a>
        </ul>

    </nav>


    </>
  )
}

export default Navbar