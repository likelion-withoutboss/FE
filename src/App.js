// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Calendar from "./components/Calendar";
import Announcements from "./components/Announcements";
import Administration from "./components/Administrations";
import HeroSection from "./components/HeroSection";
import Archiving from "./pages/archiving";
import Layout from "./components/Layout";
import ArchivingDetail from "./pages/archivingDetail";

function App() {
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

          <Route path="/administrations" element={<Administration />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
