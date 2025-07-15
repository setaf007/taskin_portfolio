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
          className="h-12 px-4 rounded-lg bg-lightGrey placeholder:text-gray-400"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your email"
          required
          className="h-12 px-4 rounded-lg bg-lightGrey placeholder:text-gray-400"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="6"
          required
          className="rounded-lg bg-lightGrey p-4 placeholder:text-gray-400"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full h-12 rounded-lg bg-cyan text-white font-bold text-lg tracking-wide border border-cyan hover:bg-darkCyan transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
