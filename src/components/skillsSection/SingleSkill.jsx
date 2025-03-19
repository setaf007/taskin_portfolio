import React from 'react'

const SingleSkill = ({imgSvg, text}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500'>
        <div className='flex flex-col items-center gap-3 relative'>
            <div className='bg-white text-black h-[100px] 
            w-[100px] flex items-center justify-center rounded-full 
            hover:text-cyan hover:scale-105 transform 
            transition-all duration-500 text-6xl border-4 
            border-darkGrey cursor-default'>{imgSvg}</div>
            <p className='text-white font-bold text-center cursor-default'>{text}</p>
        </div>
        <div className='w-[100px] h-[200px] bg-darkGrey absolute top-[50px] 
        -z-10'></div>
    </div>
  )
}

export default SingleSkill