import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 bg-slate-100 h-14'>
        <a className='text-xl font-extrabold hover:first-letter:bg-red-200 hover:first-letter:text-3xl' href='/'>BRAND</a>
        <div className='flex mr-3 space-x-3'>
            <a className='hover:text-red-800' href='/home'>Home</a>
            <a className='hover:text-red-800' href='/cart'>Cart</a>
            <a className='hover:text-red-800' href='/about'>About</a>

            <div className='flex space-x-3 cursor-pointer'>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-amber-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

            </div>

        </div>
    </div>
  )
}

export default Navbar