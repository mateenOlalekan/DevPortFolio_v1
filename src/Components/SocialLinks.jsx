import { FaFacebookF, FaTwitter, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://wa.me", icon: <FaWhatsapp />, label: "WhatsApp" },
  { href: "https://github.com", icon: <FaGithub />, label: "GitHub" },
  { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center space-y-6 lg:space-y-8" data-aos="fade-left">
      {socialLinks.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center text-xl md:text-2xl bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
          title={label}
          data-aos="flip-up"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
