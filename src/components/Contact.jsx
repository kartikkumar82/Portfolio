import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center px-4 py-20">
      
      {/* Floating Card */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-10 flex flex-col md:flex-row items-stretch md:items-start gap-10">
        
        {/* Contact Info - Left */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Whether you have a project, question, or just want to connect, feel free to reach out.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col gap-4 mt-4">
            <a href="mailto:kartikkumar1800089@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <FaEnvelope className="text-xl" /> kartikkumar1800089@gmail.com
            </a>
            <a href="www.linkedin.com/in/kartikkumar82" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
            <a href="https://github.com/kartikkumar82" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <FaGithub className="text-xl" /> GitHub
            </a>
            <a href="https://x.com/KartikKuma82" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <FaTwitter className="text-xl" /> Twitter
            </a>
          </div>
        </div>

        {/* Contact Form - Right */}
        <div 
        name = 'contact'
        method = 'POST'
        data-netlify = 'true' 
        className="md:w-1/2 bg-gray-50 rounded-2xl p-6 shadow-lg">
          <form 
          
          className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Animated Background Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

    </section>
  );
};

export default Contact;
