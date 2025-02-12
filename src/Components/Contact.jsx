import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messageReason: "",
    message: "",
    subscribeEmail: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.messageReason) newErrors.messageReason = "Please select a reason.";
    if (!formData.message) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", messageReason: "", message: "", subscribeEmail: "" });
    }
  };



  return (
    <div className="mx-auto max-w-screen-2xl px-6 md:px-16 lg:px-32 py-2 md:py-6">
      {/* Contact & Form Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-blue-600 text-4xl md:text-6xl font-semibold mb-4">Send a Message</h2>
          <p className="text-gray-700 mb-6">
            Whether it is a business opportunity or a casual Hi!, write me, and I will respond. It's a promise.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 text-gray-800">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              olalekanbilal@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              Lagos, Nigeria
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              +234 812 353 9192
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 shadow-lg border-2 p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            {errors.name && <p className="text-blue-600 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            {errors.email && <p className="text-blue-600 text-sm">{errors.email}</p>}

            <select
              name="messageReason"
              value={formData.messageReason}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
            >
              <option value="">Reason for Message</option>
              <option value="Business Inquiry">Business Inquiry</option>
              <option value="Casual Greeting">Casual Greeting</option>
              <option value="Other">Other</option>
            </select>
            {errors.messageReason && <p className="text-blue-600 text-sm">{errors.messageReason}</p>}

            <textarea
              name="message"
              placeholder="Write me one line or ten."
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full h-28"
            ></textarea>
            {errors.message && <p className="text-blue-600 text-sm">{errors.message}</p>}

            <button type="submit" className="bg-blue-600 w-fit text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700 transition-all">
              Say Hello
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 border-t border-gray-300 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Footer */}
          <div className="text-center flex items-center justify-center w-full">
            <p className="text-2xl font-semibold  gap-2">
              Abdul-Matin <span className="text-blue-600">Olalekan</span> <span className="text-blue-600">⌛</span>
            </p>
          </div>


        </div>

        {/* Bottom Footer */}
        <div className="text-center text-gray-600 mt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© Olalekan 2025</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-all">Terms of Services</a>
            <a href="#" className="hover:text-blue-600 transition-all">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
