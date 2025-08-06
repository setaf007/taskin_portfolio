import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

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
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
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
          className={`w-full h-12 rounded-lg font-semibold text-lg tracking-wider border-none shadow-md transition-all duration-300 uppercase flex items-center justify-center ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-cyan hover:bg-darkCyan text-white'}`}
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
