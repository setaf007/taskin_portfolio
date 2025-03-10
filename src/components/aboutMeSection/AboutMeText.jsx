import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left
    sm:text-center'>
        <h2 className='text-6xl text-lightGrey mb-10 cursor-default underline'>About Me</h2>
        <p className='text-lightGrey cursor-default'>LLorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor 
             incididunt ut labore et dolore magna aliqua. Ut 
             enim ad minim veniam, quis nostrud exercitation ullamco 
             laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate 
             velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in 
             culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className='border border-lightGrey rounded-full py-2 px-4
        text-lg flex items-center mt-10 hover:bg-cyan transition-all
        duration-500 cursor-pointer md:self-start sm:self-center
        text-lightGrey hover:shadow-cyanShadow
        hover:text-black'>My Projects</button>
    </div>
  )
}

export default AboutMeText
