import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser, FaPaperPlane, FaRegCommentDots, FaCheckCircle } from "react-icons/fa";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messageReason: "",
    message: "",
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
    if (!formData.messageReason) newErrors.messageReason = "Please select a reason.";
    if (!formData.message) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({ name: "", email: "", messageReason: "", message: "" });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-10">
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-600 flex items-center gap-3">
            <FaRegCommentDots className="text-blue-600" /> Get in Touch
          </h2>
          <p className="text-gray-700">Let’s talk! Whether it’s a project or just a hello, I’m happy to connect.</p>
          <div className="space-y-4 text-gray-800">
            <p className="flex items-center gap-3"><FaEnvelope className="text-blue-600" /> olalekanbilal@gmail.com</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-blue-600" /> Lagos, Nigeria</p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-blue-600" /> +234 812 353 9192</p>
          </div>
        </div>

        {/* Form */}
        <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <select
              name="messageReason"
              value={formData.messageReason}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Reason for Contact</option>
              <option value="Business Inquiry">Business Inquiry</option>
              <option value="Casual Greeting">Casual Greeting</option>
              <option value="Other">Other</option>
            </select>
            {errors.messageReason && <p className="text-red-500 text-sm">{errors.messageReason}</p>}

            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 h-28"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
            >
              <FaPaperPlane /> Send Message
            </button>

            {success && (
              <p className="text-green-600 flex items-center gap-2 text-sm mt-2">
                <FaCheckCircle /> Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 border-t pt-4 text-sm">
        <p>© 2025 Olalekan. All rights reserved.</p>
      </div>
    </div>
  );
}

export default ContactSection;
