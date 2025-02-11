import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Blog {
  _id: string;
  blogTitle: string;
  blogContent: string;
  blogAuthor: string;
  blogComments: string[];
  blogImage: string;
  views: number;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('There was an error fetching the blogs!', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = async (id: string) => {
    try {
      
      const blogToUpdate = blogs.find(blog => blog._id === id);
      if (blogToUpdate) {
        const updatedBlog = { ...blogToUpdate, views: blogToUpdate.views + 1 };
        await axios.put(`http://localhost:5000/api/blogs/${id}`, updatedBlog);

        setBlogs(blogs.map(blog => (blog._id === id ? updatedBlog : blog)));

        navigate(`/blog/${id}`);
      }
    } catch (error) {
      console.error('There was an error incrementing the view count!', error);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
      alert('Blog deleted successfully!');
    } catch (error) {
      console.error('There was an error deleting the blog!', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-4 border border-gray-300 rounded shadow hover:shadow-lg transition-shadow">
              <a onClick={() => handleBlogClick(blog._id)} className="text-xl font-bold text-blue-600 hover:underline cursor-pointer">
                {blog.blogTitle}
              </a>
              <img src={blog.blogImage} alt={blog.blogTitle} className="w-full h-48 mt-2 mb-2 object-cover rounded" />
              <p className="text-gray-700 mt-2">{blog.blogContent.substring(0, 30)}...</p>
              <p className="text-gray-500 mt-1">Author: {blog.blogAuthor}</p>
              <p className="text-gray-500 mt-1">Comments: {blog.blogComments.length}</p>
              <p className="text-gray-500 mt-1">Views: {blog.views}</p>
              <button
                onClick={() => handleDeleteBlog(blog._id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  
  );
};

export default Blogs;
