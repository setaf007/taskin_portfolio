import React from 'react';
import SingleContactSocial from './SingleContactSocial';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa6';

const ContactSocial = () => {
  return (
    <div className="flex gap-6">
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial link="#" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
