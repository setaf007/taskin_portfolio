import React from 'react'

const NavbarLogo = () => {
  return (
    <div>
      {/* Full name for desktop */}
      <h1 className='text-2xl md:block sm:hidden font-bold tracking-tight text-black cursor-default'>
        Md Taskin Hossain
      </h1>
      <span className='sm:block md:hidden font-special font-extrabold text-4xl tracking-widest text-black drop-shadow-md'>
        MDTH
      </span>
    </div>
  )
}

export default NavbarLogo