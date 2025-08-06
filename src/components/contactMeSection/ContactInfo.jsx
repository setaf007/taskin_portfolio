import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-7 text-lightGrey font-light">
      <SingleInfo text="setaf007@hotmail.com" Image={HiOutlineMail} iconClass="text-cyan-400" />
      <SingleInfo text="+65 94515261" Image={FiPhone} iconClass="text-cyan-400" />
      <SingleInfo text="Singapore" Image={IoLocationOutline} iconClass="text-cyan-400" />
    </div>
  );
};

export default ContactInfo;
