import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full font-sans'>
      <div>
        <h2 className='text-4xl text-cyan font-bold mb-4 tracking-tight font-sans'>Get in Touch</h2>
        <p className='text-lightGrey font-light text-base sm:text-lg font-sans'>
          Feel free to reach out for any questions or collaborations.
        </p>
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactMeLeft
