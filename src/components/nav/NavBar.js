import React from 'react'

function NavBar() {
  return (
    <div className='flex md:border-b md:pb-4'>
        <div className="flex w-2/6 items-center ">
        <h4 className='text-xl border-2 border-primary-color border-dashed px-2'>Nite</h4>
        <div className='hidden md:ml-4 md:text-xs md:px-2 md:py-1 md:border md:rounded-full md:font-light md:bg-orange-100 md:text-primary-color md:hover:bg-orange-200 md:transition duration-500 ease-in-out'>We are hiring!</div>
        </div>

        <div className="hidden md:block md:flex md:w-full md:justify-end md:items-center md:space-x-6">
            <a href="#" className='text-md text-primary-color font-light hover:underline'>Work</a>
            <a href="#" className='text-md text-primary-color font-light hover:underline'>Services</a>
            <a href="#" className='text-md text-primary-color font-light hover:underline'>About</a>
            <a href="#" className='text-md text-primary-color font-light hover:underline'>Blog</a>
            <a href="#" className='text-md text-primary-color font-light hover:underline'>Page</a>
            <a href="#" className='text-md text-primary-color font-light hover:underline'>Cart</a>
            <div className="px-1 text-primary-color bg-pink-200 rounded-md ">0</div>
            <button className='px-4 py-2 border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color'>Get in Touch</button>
        </div>
    </div>
  )
}

export default NavBar