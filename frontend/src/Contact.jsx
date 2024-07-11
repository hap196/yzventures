import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import InteractiveLogo from './InteractiveLogo';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7d7t0ne',
      'template_ckq9bmn',
      e.target,
      'EGxbaD8PGrPd88r1z'
    ).then((result) => {
      alert('Email sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }, (error) => {
      alert('Error sending email.');
    });
  };

  return (
    <div className="flex justify-center items-center py-20 bg-darkblue">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl text-center text-gray-800 font-lora mb-8">
          Contact
        </h2>
        <form className="px-16 lg:px-4 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 text-md font-poppins mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-tan"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-u00 text-md font-poppins mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-tan"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-md font-poppins mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-tan"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-md font-poppins mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-tan"
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center border-2 border-gray-400 py-2 px-4 font-poppins text-gray-800 rounded text-center text-xl md:text-xl hover:border-accent-blue hover:text-accent-blue"
            >
              <FaPaperPlane className="mr-2" />
              Send
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
