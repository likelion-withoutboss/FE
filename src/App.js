import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Calendar from './components/Calendar';
import Announcements from './components/Announcements';
import Members from './components/Members';
import About from './about/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-korean">
      <nav className="bg-orange-500 p-4 rounded-lg shadow-md max-w-5xl mx-auto mt-4"> {/* 배경색, 패딩, 둥근 테두리, 그림자 추가 */}
  <div className="container mx-auto flex justify-between items-center">
    <Link to="/" className="text-2xl font-['Noto+Sans+KR','GmarketSansMedium'] text-white">
      <span className="text-3xl font-bold">네비</span>
      <span className="text-3xl font-bold text-yellow-300">바</span> {/* 로고에 강조 추가 */}
    </Link>
    <ul className="flex space-x-6">
      <li><Link to="/calendar" className="text-white hover:underline font-['Noto+Sans+KR','GmarketSansMedium']">달력</Link></li>
      <li><Link to="/announcements" className="text-white hover:underline font-['Noto+Sans+KR','GmarketSansMedium']">공지사항</Link></li>
      <li><Link to="/members" className="text-white hover:underline font-['Noto+Sans+KR','GmarketSansMedium']">멤버</Link></li>
      <li><Link to="/about" className="text-white hover:underline font-['Noto+Sans+KR','GmarketSansMedium']">소개</Link></li>
      </ul>
    </div>
  </nav>

        <main className="max-w-4xl mx-auto mt-8 px-4"> {/* 메인 콘텐츠 영역 스타일 조정 */}
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:postId" element={<BlogPost />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/members" element={<Members />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;