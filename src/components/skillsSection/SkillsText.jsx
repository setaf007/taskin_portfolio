import React from 'react'

const SkillsText = () => {
  return (
    <div className='flex flex-col items-center mt-[100px] cursor-default'>
      <h2 className='text-4xl sm:text-5xl font-bold text-lightGrey flex items-center gap-4 mb-8 cursor-default'>
        <span className='inline-block w-2 h-8 bg-cyan-400 rounded-full'></span>
        My Skills
      </h2>
      <p className='text-lg text-center text-white max-w-2xl font-light'>
        Technologies & skills I work with are shown below.<br/>
        Always learning, always adapting.
      </p>
    </div>
  )
}

export default SkillsText