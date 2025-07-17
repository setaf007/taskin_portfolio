import React from 'react';
import SingleContactSocial from './SingleContactSocial';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa6';

const ContactSocial = () => {
  return (
    <div className="flex gap-6">
      <SingleContactSocial link="https://www.linkedin.com/in/md-taskin/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/setaf007" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
