

const Contact = () => {
  return (
    <div className="py-10 px-6">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="mt-4 text-gray-600">Feel free to reach out to me via email or connect on LinkedIn.</p>
      <ul className="mt-6 space-y-2">
        <li>
          <strong>Email:</strong> <a href="mailto:developer@example.com" className="text-blue-600">developer@example.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com" className="text-blue-600">My LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
