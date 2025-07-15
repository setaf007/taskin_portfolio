import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-6 text-gray-300">
      <SingleInfo text="setaf007@hotmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+65 94515261" Image={FiPhone} />
      <SingleInfo text="Singapore" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
