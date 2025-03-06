import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold
     text-white flex items-center gap-1 
     bg-gradient-to-r from-black to-darkGrey hover:border-lightGrey hover:scale-110 
     transition-all duration-500 hover:shadow-cyanShadow'>
      Hire Me!
      <div className='sm:hidden md:block'>
        <LuArrowDownRight />
      </div>
    </button>
  )
}

export default NavbarBtn