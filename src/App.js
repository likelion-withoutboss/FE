// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Calendar from './components/Calendar';
import Announcements from './components/Announcements';
import Members from './components/Members';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-korean">
        <header className="bg-realOrange py-4 shadow-lg mb-8">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link to="/" className="text-white text-2xl font-bold tracking-wide">
              <span className="text-accentYellow">멋쟁이</span>사자처럼<span className="text-blue-100"> with CUK</span>
            </Link>
            <div className="flex items-center space-x-6 text-white">
              <Link to="/calendar" className="hover:text-accentYellow">달력</Link>
              <Link to="/announcements" className="hover:text-accentYellow">공지사항</Link>
              <Link to="/members" className="hover:text-accentYellow">전체 회원</Link>
            </div>
          </div>
        </header>
        <HeroSection />

        <main className="max-w-4xl mx-auto">
          <Routes>
            
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:postId" element={<BlogPost />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
