import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const form = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_97c59ai', 'template_3ub76ke', form.current, {
        publicKey: 'jadqkNnbl2BIt9Lh8',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="w-full">
      {success && (
        <p className="text-green-400 mb-4 font-medium">{success}</p>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 text-lightGrey"
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your name"
          required
          className="h-12 px-4 rounded-lg bg-lightGrey text-black placeholder:text-gray-400 font-light focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your email"
          required
          className="h-12 px-4 rounded-lg bg-lightGrey text-black placeholder:text-gray-400 font-light focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="from_message"
          placeholder="Message"
          rows="6"
          required
          className="rounded-lg bg-lightGrey text-black p-4 placeholder:text-gray-400 font-light focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full h-12 rounded-lg bg-cyan text-white font-semibold text-lg tracking-wider border-none shadow-md hover:bg-darkCyan transition-all duration-300 uppercase"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
