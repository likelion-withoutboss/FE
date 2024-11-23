import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Calendar from "./components/Calendar";
import Announcements from "./components/Announcements";
import Administration from "./components/Administrations";
import Archiving from "./pages/archiving";
import Layout from "./components/Layout";
import ArchivingDetail from "./pages/archivingDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Members from "./components/Members";
import About from "./components/about/About";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:postId" element={<BlogPost />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/archiving" element={<Archiving />} />
          <Route path="/archiving/d" element={<ArchivingDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/administrations" element={<Administration />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
