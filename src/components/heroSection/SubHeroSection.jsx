import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-lightGrey text-lightGrey flex justify-center uppercase xl:text-4xl md:text-2xl sm:text-3xl py-8 items-center gap-8 bg-darkGrey cursor-default tracking-wider font-semibold'>
        <span className='flex items-center gap-8'>
            <span className='md:block sm:hidden text-lightGrey drop-shadow-sm'>Fast Learner</span>
            <span className='hidden md:inline-block h-6 w-[2px] bg-lightGrey rounded-full'></span>
            <span className='md:block sm:hidden text-lightGrey drop-shadow-sm'>Independent</span>
            <span className='hidden md:inline-block h-6 w-[2px] bg-lightGrey rounded-full'></span>
            <span className='md:block sm:hidden text-lightGrey drop-shadow-sm'>Motivated</span>
            <span className='md:hidden sm:block text-lightGrey drop-shadow-sm'>Build & Inspire</span>
        </span>
    </div>
  )
}

export default SubHeroSection