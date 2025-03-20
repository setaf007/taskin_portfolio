import React from 'react'

const SingleExperience = ({ experience }) => {
  return (
    <div className='md:h-auto md:w-[20%] sm:h-auto sm:w-full 
    bg-[#2a2f35] border border-cyan rounded-2xl mt-12 p-6 
    hover:scale-102 transition-all duration-500 hover:shadow-cyanShadow'>
        <p className='font-bold text-cyan text-lg'>{experience.job}</p>
        <p className='text-white text-md'>{experience.company}</p>
        <p className='text-darkGrey text-sm'>{experience.date}</p>
        <ul className='list-disc mt-4 pl-4 text-lightGrey'>{experience.responsibilities.map((resp, index)=>{
            return <li key={index}>{resp}</li>
        })}</ul>
    </div>
  )
}

export default SingleExperience