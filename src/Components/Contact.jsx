import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser, FaPaperPlane, FaRegCommentDots, FaCheckCircle, FaFacebookF, FaTwitter, FaLinkedinIn, FaClock, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',

    message: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="bg-white py-12 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black flex items-center justify-center">
            <FaRegCommentDots className="mr-3 text-blue-600" />
            Get in Touch
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            I'm always interested in new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <FaRegCommentDots className="mr-3 text-white" />
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-4 text-white" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-4 text-white" />
                <span>contact@yourportfolio.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-4 text-white" />
                <span>New York, USA</span>
              </div>
            </div>
            
            <div className="border-t border-white pt-6 mt-8">
              <h4 className="text-xl mb-4 flex items-center">
                <FaClock className="mr-3 text-white" />
                Availability
              </h4>
              <p className="mb-2">Monday - Friday: 9am - 5pm</p>
              <p>Response time: Within 24 hours</p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500 transition-colors group">
                  <FaLinkedinIn className="text-blue-500 group-hover:text-white" />
                </a>
                <a href="#" className="bg-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500 transition-colors group">
                  <FaGithub className="text-blue-500 group-hover:text-white" />
                </a>
                <a href="#" className="bg-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500 transition-colors group">
                  <FaTwitter className="text-blue-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-3 text-black flex items-center">
              <FaPaperPlane className="mr-3 text-blue-600" />
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <label htmlFor="name" className="block text-black mb-2 font-medium">Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white border border-gray-200 rounded-md pl-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                  />
                </div>
                {errors.name && <p className="text-blue-600 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="block text-black mb-2 font-medium">Email</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-white border border-gray-200 rounded-md pl-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                  />
                </div>
                {errors.email && <p className="text-blue-600 text-sm mt-1">{errors.email}</p>}
              </div>
              

              
              <div className="relative">
                <label htmlFor="message" className="block text-black mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full bg-white border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                  rows={4}
                />
                {errors.message && <p className="text-blue-600 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <div className="flex items-center justify-between">
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message <FaPaperPlane className="ml-2" />
                </button>
                
                {success && (
                  <p className="text-blue-600 flex items-center gap-2">
                    <FaCheckCircle /> Message sent successfully!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
        
        <footer className="mt-8 text-center">
          <p className="text-black">
            © 2025  | Designed & Developed by Ola<span className='text-blue-500'>lekan</span>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;