import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogArticle from "./components/BlogArticle";
import Navbar from "./components/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <BrowserRouter>
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
