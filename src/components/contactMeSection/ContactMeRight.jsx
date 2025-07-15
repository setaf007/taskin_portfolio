import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12 p-4 w-full'>
        <img src='../public/images/email-image.png' alt='Contact me' 
        className='max-w-[300px]'/>
      <ContactInfo />
      <ContactSocial />
    </div>
  )
}

export default ContactMeRight
