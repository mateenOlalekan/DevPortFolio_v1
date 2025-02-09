import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

function Contact() {
  return (
    <>
      <section className="text-gray-600 body-font relative flex  flex-col justify-center items-center mt-10" id="contact" >
        <div className="flex flex-col">
        <p className="text-4xl text-blue-500  text-center">Send a Message</p>
        <div className="container px-5 max-lg:px-20 max-md:px-10 py-5 mx-auto flex max-lg:flex-col gap-10">
          {/* Map Section */}
          <div className="w-1/2 max-lg:w-full  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.647174971038!2d3.379205815316023!3d6.524379295273056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d737c181b45%3A0x9a3d3d7afdc8af68!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1614039390982!5m2!1sen!2sng"
            style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            }}
            ></iframe>

            <div className="bg-white relative flex flex-wrap py-3 rounded shadow-md">
              <div className="lg:w-1/2 px-6">

                <p className="mt-1 text-sm text-justify">
                Let’s connect! Reach out, and I’ll respond promptly to discuss how I can help you build something amazing Reach out, and I’ll respond promptly to discuss how I can help you build something amazing.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-2 lg:mt-0 flex flex-col gap-y-3">
              <div className="flex items-center space-x-4">
              <MdEmail className="w-6 h-6 text-gray-500" />
              <span className="text-sm text-gray-800">olalekanbilal@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MdLocationOn className="w-6 h-6 text-gray-500" />
              <span className="text-sm text-gray-800">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center space-x-4">
              <MdPhone className="w-6 h-6 text-gray-500" />
              <span className="text-sm text-gray-800">+234 812 353 9192</span>
            </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form className="w-1/2 max-lg:w-full p-6 shadow-lg rounded-lg border-2">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="John"
                  required
                />
              </div>
              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <p className="text-xl text-gray-400 py-5 mb-4  text-center">Built & Design by Abdul-Matin Olalekan</p>
        </div>

      </section>
    </>
  );
}

export default Contact;
