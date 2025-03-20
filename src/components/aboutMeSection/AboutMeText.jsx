import React from 'react'

const AboutMeText = () => {
  return (
  <div className="flex flex-col md:items-start sm:items-center 
  md:text-left sm:text-center">
    <h2 className="text-6xl text-lightGrey font-bold mb-8 cursor-default 
    underline decoration-cyan-500">
      About Me
    </h2>
    <p className="text-lightGrey text-lg mb-8 leading-relaxed max-w-3xl 
    mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
      irure dolor in reprehenderit in voluptate velit esse cillum dolore
       eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
       proident, sunt in culpa qui officia deserunt mollit anim id est 
       laborum.
    </p>
    <button className="border border-lightGrey rounded-full py-3 px-8 
    text-lg flex items-center justify-center mt-8 hover:bg-cyan-500 
    hover:text-black transition-all duration-300 ease-in-out transform 
    hover:scale-105 cursor-pointer md:self-start sm:self-center 
    text-lightGrey hover:shadow-lg">
      My Projects
    </button>
</div>
  )
}

export default AboutMeText
