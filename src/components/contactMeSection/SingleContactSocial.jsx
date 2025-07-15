import React from 'react';

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan border border-cyan rounded-full p-3 flex items-center justify-center h-12 w-12 hover:bg-cyan hover:text-white transition-colors duration-300"
      aria-label="Social link"
    >
      <Icon className="text-2xl" />
    </a>
  );
};

export default SingleContactSocial;
