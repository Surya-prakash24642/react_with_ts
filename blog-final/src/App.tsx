import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CreateNew from './CreateNew';
import Blogs from './Blogs';
import BlogPage from './BlogPage';
import { useNavigate } from 'react-router-dom';
import Contact from './contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home component */}
            <Route path="/create-new" element={<CreateNew />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:blogId" element={<BlogPage />} />
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateNewClick = () => {
    navigate('/create-new');
  };

  return (
    <div className="relative w-full h-screen">
      <img src="/bg-img.png" alt="Description of image" className="w-full h-full object-cover" />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg">Discover exciting stories and insights on various topics. Happy reading!</p>
        <button
          onClick={handleCreateNewClick}
          className="mt-4 px-6 py-4 bg-gray-800 text-white rounded hover:bg-gray-900"
        >
          Create your own blog
        </button>
      </div>
    </div>
  );
};

export default App;
