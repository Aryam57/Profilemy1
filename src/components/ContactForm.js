// ContactForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_u31hc85',  // استبدلها بمعرف الخدمة الخاص بك
      'template_soihd5g', // استبدلها بمعرف القالب الخاص بك
      formData,
      '24CJwXpGfScAKt_Js'      // استبدلها بمعرف المستخدم الخاص بك
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
      },
      (err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message, please try again.');
      }
    );

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen  text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-8">Feel free to contact us and we will get back to you as soon as we can.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-700 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-700 rounded bg-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Tell us all about it"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-700 rounded bg-gray-700 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-gray-600 hover:bg-gray-700 rounded text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
