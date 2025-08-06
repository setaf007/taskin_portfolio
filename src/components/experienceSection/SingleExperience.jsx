import React from 'react';

const SingleExperience = ({ experience }) => {
  return (
    <div className='w-full sm:w-80 md:w-1/4 bg-[#23272e] border border-cyan-400 rounded-2xl mt-8 p-5 sm:p-7 hover:scale-105 transition-all duration-500 hover:shadow-cyanShadow shadow-md'>
        <p className='font-bold text-cyan-400 text-lg sm:text-xl mb-1 tracking-wide'>{experience.job}</p>
        <p className='text-cyan-200 text-md sm:text-lg font-semibold mb-1'>{experience.company}</p>
        <p className='text-darkGrey text-xs sm:text-sm mb-2'>{experience.date}</p>
        <ul className='list-disc mt-3 pl-4 text-lightGrey space-y-2 text-sm sm:text-base font-light'>
            {experience.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
            ))}
        </ul>
    </div>
  );
};

export default SingleExperience;
