import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white p-8 border border-gray-300 rounded shadow">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Message"
            rows={5}
            required
          ></textarea>
        </div>
        <div className="mb-4 text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Office</h2>
        <p className="text-gray-700">
          123 Blog Street,<br />
          Guindy, Chennai, Tamil Nadu, India<br />
          Phone: +91 98765 43210<br />
          Email: info@yourblog.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
