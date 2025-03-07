import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left
    sm:text-center bg-white p-5 rounded-3xl border-[0.5px]
     border-darkGrey hover:shadow-cyanShadow transition-all 
     duration-500 cursor-default'>
        <h2 className='lg:text-2xl sm:text-xl uppercase text-darkGrey'>
            Software Engineer
        </h2>
        <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold
        font-special text-black'>
            Md Taskin Hossain
        </h1>
        <p className='text-lg mt-4 text-darkGrey'>
            A passionate software engineer.<br/>Always striving for knowledge and skills.
        </p>
    </div>
  )
}

export default HeroText