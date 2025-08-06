import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
    <div
      id='contact'
      className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 cursor-default'
    >
      <h2 className='text-4xl sm:text-5xl font-bold text-lightGrey flex items-center gap-4 mb-8 cursor-default justify-center'>
        <span className='inline-block w-2 h-8 bg-cyan-400 rounded-full'></span>
        Contact Me
      </h2>
      <div
        className='flex lg:flex-row sm:flex-col justify-between gap-10 p-8 rounded-2xl'
      >
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  )
}

export default ContactMeMain
