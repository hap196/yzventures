import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

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
    <div className="flex justify-center items-center py-40 bg-darkblue">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl text-center text-gray-300 font-lora mb-8">
          Contact
        </h2>
        <form className="bg-darkerblue shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-lora mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-darkblue"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-lora mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-darkblue"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-lora mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-darkblue"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-lora mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-darkblue"
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
              className="flex items-center border-2 border-gray-400 py-2 px-4 font-lora text-gray-300 text-center text-2xl md:text-3xl hover:border-accent-blue hover:text-accent-blue"
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
