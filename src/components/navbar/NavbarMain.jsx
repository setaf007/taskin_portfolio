import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='max-w-[1300px] mx-auto px-6 w-full fixed
    left-[50%] transform -translate-x-[50%] z-20 flex gap-4 mt-2'>
      <div className='flex justify-between w-full max-w-[1200px] 
      mx-auto bg-white items-center p-6 rounded-r-full 
      rounded-l-full border-[0.5px] border-darkGrey'>
        <NavbarLogo/>
          <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block gap-8`}>
            <NavbarLinks/>
          </div>
        <NavbarBtn/>
      </div>
      <div className='flex lg:hidden sm:block p-6 bg-white items-center
      justify-center rounded-full border-[0.5px] border-darkGrey'>
        <button className='text-xxl p-3 border border-darkGrey 
        rounded-full text-black' onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  )
}

export default NavbarMain