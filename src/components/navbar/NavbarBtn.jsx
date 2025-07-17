import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";
import {Link} from 'react-scroll'

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-semibold
     text-white flex items-center gap-2 
     bg-gradient-to-r from-black to-darkGrey hover:border-lightGrey hover:scale-105 
     transition-all duration-500 hover:shadow-lg
     focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-opacity-50'>
      <Link to={'contact'} smooth={true} spy={true} 
                duration={500} offset={-130} className='cursor-pointer text-white
                 hover:text-cyan transition-all duration-300'>Hire Me!</Link>
      <div className='sm:hidden md:block'>
        <LuArrowDownRight />
      </div>
    </button>
  )
}

export default NavbarBtn