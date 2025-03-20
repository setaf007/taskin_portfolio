import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-semibold
     text-white flex items-center gap-2 
     bg-gradient-to-r from-black to-darkGrey hover:border-lightGrey hover:scale-105 
     transition-all duration-500 hover:shadow-lg
     focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-opacity-50'>
      Hire Me!
      <div className='sm:hidden md:block'>
        <LuArrowDownRight />
      </div>
    </button>
  )
}

export default NavbarBtn