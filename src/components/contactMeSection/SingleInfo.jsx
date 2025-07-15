import React from 'react';

const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex items-center gap-3 justify-center text-lightGrey hover:text-cyan transition-colors duration-300">
      <Image className="text-2xl md:text-3xl" />
      <p className="text-sm md:text-base font-medium">{text}</p>
    </div>
  );
};

export default SingleInfo;
