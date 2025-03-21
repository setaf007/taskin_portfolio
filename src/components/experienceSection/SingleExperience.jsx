import React from 'react';

const SingleExperience = ({ experience }) => {
  return (
    <div className='w-full sm:w-80 md:w-1/4 bg-[#2a2f35] border border-cyan 
    rounded-xl mt-8 p-4 sm:p-6 hover:scale-105 transition-all duration-500 
    hover:shadow-cyanShadow'>
        <p className='font-bold text-cyan text-lg sm:text-xl'>{experience.job}</p>
        <p className='text-white text-md sm:text-lg'>{experience.company}</p>
        <p className='text-darkGrey text-sm sm:text-md'>{experience.date}</p>
        <ul className='list-disc mt-4 pl-4 text-lightGrey space-y-2'>
            {experience.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
            ))}
        </ul>
    </div>
  );
};

export default SingleExperience;
