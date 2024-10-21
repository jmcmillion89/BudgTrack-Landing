import React, { useState } from 'react';

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
    <div className="container mx-auto my-10 p-6 bg-white rounded shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      {submitted ? (
        <div className="text-center">
          <h3 className="text-xl text-green-600">Thank you for reaching out!</h3>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded font-semibold hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;