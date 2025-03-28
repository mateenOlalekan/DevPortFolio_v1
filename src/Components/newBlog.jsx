import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [content, setContent] = useState({
    title: "",
    description: "",
    category: "Tech",
    thumbnail: "",
    price: "",
    brand: "",
    rating: 0,
    loading: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContent((prev) => ({ ...prev, loading: true }));

    const { title, description, category, thumbnail, price, brand, rating } = content;

    const newBlog = { title, description, category, thumbnail, price, brand, rating };

    try {
      const response = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        navigate("/"); // Redirect to home after adding blog
      } else {
        alert("Failed to create a new blog");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setContent((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={content.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Blog Description"
          value={content.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail URL"
          value={content.thumbnail}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={content.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={content.brand}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={content.rating}
          onChange={handleChange} 
          className="w-full border p-2 rounded"
        />
        <select
          name="category"
          value={content.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="Tech">Tech</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          disabled={content.loading}
        >
          {content.loading ? "Submitting..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
