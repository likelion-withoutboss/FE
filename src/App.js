import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Calendar from './components/Calendar';
import Announcements from './components/Announcements';
import Members from './components/Members';
import About from './about/About';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-korean">
        <nav className={`bg-orange-500 p-2 rounded-lg shadow-md max-w-5xl mx-auto mt-4 fixed top-0 left-0 right-0 z-10 transition-all ${isNavSticky ? 'shadow-lg' : ''}`}> {/* p-4 -> p-2로 줄임 */}
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-['Noto+Sans+KR','GmarketSansMedium'] text-white"> {/* text-2xl -> text-xl로 줄임 */}
              <span className="text-2xl font-bold">네비</span>
              <span className="text-2xl font-bold text-yellow-300">바</span>
            </Link>
            <div className="md:flex hidden space-x-4"> {/* space-x-6 -> space-x-4로 줄임 */}
              <ul className="flex flex-row space-x-4">
                <li><Link to="/calendar" className="text-white hover:underline font-['Noto+Sans+KR','GmarketSansMedium']">달력</Link></li>
                <li><Link to="/announcements" className="text-white hover:underline font-['Noto+Sans+KR','GmarketSansMedium']">공지사항</Link></li>
                <li><Link to="/members" className="text-white hover:underline font-['Noto+Sans+KR','GmarketSansMedium']">멤버</Link></li>
                <li><Link to="/about" className="text-white hover:underline font-['Noto+Sans+KR','GmarketSansMedium']">소개</Link></li>
              </ul>
            </div>
            <div className="md:hidden">
              <button className="text-white hover:underline font-['Noto+Sans+KR','GmarketSansMedium']" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {isMobileMenuOpen && (
                <ul className="absolute bg-orange-500 p-4 rounded-lg shadow-md mt-2 top-12 right-4">
                  <li><Link to="/calendar" className="text-white hover:underline block mb-2 font-['Noto+Sans+KR','GmarketSansMedium']" onClick={toggleMobileMenu}>달력</Link></li>
                  <li><Link to="/announcements" className="text-white hover:underline block mb-2 font-['Noto+Sans+KR','GmarketSansMedium']" onClick={toggleMobileMenu}>공지사항</Link></li>
                  <li><Link to="/members" className="text-white hover:underline block mb-2 font-['Noto+Sans+KR','GmarketSansMedium']" onClick={toggleMobileMenu}>멤버</Link></li>
                  <li><Link to="/about" className="text-white hover:underline block font-['Noto+Sans+KR','GmarketSansMedium']" onClick={toggleMobileMenu}>소개</Link></li>
                </ul>
              )}
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto mt-12 px-4"> {/* mt-16 -> mt-12로 줄임 */}
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