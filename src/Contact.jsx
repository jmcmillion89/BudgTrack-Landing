import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <motion.div 
      className="container mx-auto my-16 p-8 bg-white rounded-lg shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Get in Touch</h2>
      {submitted ? (
        <div className="text-center">
          <h3 className="text-2xl text-green-500 mb-4">Thank you for reaching out!</h3>
          <p className="text-lg">We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2 flex items-center" htmlFor="name">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-600" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2 flex items-center" htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-600" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2 flex items-center" htmlFor="message">
              <FontAwesomeIcon icon={faCommentDots} className="mr-2 text-blue-600" /> Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

export default Contact;