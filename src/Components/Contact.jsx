// import { useState, useEffect } from "react";
// import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
// import { FaArrowUp } from "react-icons/fa";
// import "aos/dist/aos.css"; // Import AOS styles
// import AOS from "aos"; // Import AOS

// function Contact() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       easing: "ease-in-out", // Animation easing
//       once: true, // Whether animation should happen only once
//     });
//   }, []);

//   // Handle scroll visibility for the button
//   const handleScroll = () => {
//     setIsVisible(window.scrollY > 300);
//   };

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Heading */}
//           <section id="contact">
//             <div className="mb-10 text-center" data-aos="fade-up">
//               <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
//                 Get in Touch
//               </h2>
//               <p className="text-base sm:text-lg text-gray-600 mt-2">
//                 Have a question or want to collaborate? Feel free to send me a message!
//               </p>
//             </div>

//             <div className="flex flex-col lg:flex-row gap-10">
//               {/* Map Section */}
//               <div
//                 className="lg:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden relative shadow-lg"
//                 data-aos="fade-up"
//               >
//                 <iframe
//                   title="map"
//                   className="absolute inset-0 w-full h-full"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.647174971038!2d3.379205815316023!3d6.524379295273056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d737c181b45%3A0x9a3d3d7afdc8af68!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1614039390982!5m2!1sen!2sng"
//                   frameBorder="0"
//                   style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//                 ></iframe>
//                 <div className="relative bg-white p-6 rounded shadow-md mt-10 lg:mt-0">
//                   <p className="text-sm text-gray-700 mb-4">
//                     Let’s connect! Feel free to reach out, and I'll respond promptly to discuss how I can help with your next project.
//                   </p>
//                   <div className="flex flex-col gap-4">
//                     <div className="flex items-center gap-3">
//                       <MdEmail className="text-blue-500 text-lg" />
//                       <span className="text-sm text-gray-800">
//                         olalekanbilal@gmail.com
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <MdLocationOn className="text-blue-500 text-lg" />
//                       <span className="text-sm text-gray-800">
//                         Lagos, Nigeria
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <MdPhone className="text-blue-500 text-lg" />
//                       <span className="text-sm text-gray-800">
//                         +234 812 353 9192
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <form
//                 className="lg:w-1/2 w-full bg-white p-6 sm:p-8 shadow-lg rounded-lg border border-gray-200"
//                 data-aos="fade-down"
//               >
//                 <div className="grid gap-6 mb-6 md:grid-cols-2">
//                   <div>
//                     <label className="block mb-2 text-sm font-medium text-gray-600">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="John"
//                       className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block mb-2 text-sm font-medium text-gray-600">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Doe"
//                       className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-6">
//                   <label className="block mb-2 text-sm font-medium text-gray-600">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="john.doe@example.com"
//                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <label className="block mb-2 text-sm font-medium text-gray-600">
//                     Message
//                   </label>
//                   <textarea
//                     rows="4"
//                     placeholder="Your message here..."
//                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     required
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             {/* Footer */}
//             <div className="border-t-4 border-gray-200 flex flex-col sm:flex-row justify-between items-center px-4 mt-10 py-6 text-center text-sm text-gray-400">
//               <p>© 2025. All Rights Reserved</p>
//               <p className="text-gray-600">
//                 Built and designed with ❤️ by <strong>Abdul-Matin Olalekan</strong>.
//               </p>
//             </div>
//           </section>
//         </div>

//         {/* Scroll to Top Button */}
//         {isVisible && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
//             aria-label="Scroll to Top"
//           >
//             <FaArrowUp />
//           </button>
//         )}
//       </div>
//     </>
//   );
// }

// export default Contact;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};