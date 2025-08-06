import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-5 h-full justify-center md:text-left sm:text-center bg-white p-7 rounded-3xl border border-darkGrey 
    hover:shadow-cyanShadow transition-all duration-500 cursor-default shadow-sm'>
        <h2 className='lg:text-2xl sm:text-xl uppercase tracking-widest font-semibold text-cyan-500 drop-shadow-sm'>
            Software Engineer
        </h2>
        <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-extrabold font-special text-black drop-shadow-md'>
            Md Taskin Hossain
        </h1>
        <p className='text-lg mt-2 text-darkGrey font-light max-w-xl text-left'>
            Building robust solutions, one line at a time.<br/>
            <span className='text-darkGrey'>Driven by curiosity. Focused on impact.</span>
        </p>
    </div>
  )
}

export default HeroText