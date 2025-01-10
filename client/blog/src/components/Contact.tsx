import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaClipboardList, FaRegComment, FaPaperPlane } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setErrorMessage('🚨 All fields are required.');
      return;
    }

    // Simulating a successful submission (you can replace this with an actual API call)
    setErrorMessage('');
    setSuccessMessage('🎉 Your message has been sent successfully.');

    // You can handle form submission, like sending the data to an API here
    // Example: await axios.post('your-api-endpoint', { name, email, subject, message });

    // Reset the form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6">
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">📞 Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-[#e5ecfc] p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className=" text-sm font-medium text-gray-700 flex items-center">
              <FaUser className="mr-2 text-blue-500" /> Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaEnvelope className="mr-2 text-blue-500" /> Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaClipboardList className="mr-2 text-blue-500" /> Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              placeholder="Enter the subject of your message"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaRegComment className="mr-2 text-blue-500" /> Message
            </label>
            <textarea
              id="message"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
            />
          </div>

          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <FaPaperPlane className="mr-2" /> Submit
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
