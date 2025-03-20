import React from 'react'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className='flex gap-6 text-black font-semibold text-center 
    lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] 
    -translate-x-[50%] lg:text-md sm:text-xl sm:bg-white/80 
    backdrop-blur-lg lg:bg-transparent sm:w-full py-4 transition-all duration-300'>
      {links.map((link, index)=>{
        return <li key={index} className='group'>
          <a href='#' className='cursor-pointer text-black
           hover:text-cyan transition-all duration-300'>{link.link}</a>
          <div className='mx-auto bg-darkGrey w-0 group-hover:w-full
          h-[1px] transition-all duration-300'></div>
        </li>
      })}
    </ul>
  )
}

export default NavbarLinks