import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import VideoSection from './VideoSection';
import ArticleGrid from './ArticleGrid';
import Footer from './Footer';
import AllBlogs from './AllBlogs'; // Import the new AllBlogs component
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <VideoSection />
                <ArticleGrid />
              </>
            } 
          />
          <Route path="/all-blogs" element={<AllBlogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
