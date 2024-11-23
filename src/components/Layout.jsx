import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 임포트 추가

const NavContent = ({ link, text }) => {
  return (
    <li>
      <Link
        to={`/${link}`}
        className="text-black text-xl p-2 hover:bg-gray-200 hover:text-amber-500 hover:rounded-lg"
      >
        {text}
      </Link>
    </li>
  );
};

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // 모바일 메뉴 상태
  const [isNavSticky, setNavSticky] = useState(false); // 네비게이션 바 상태

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev); // 모바일 메뉴 토글
  };

  return (
    <div className="container min-h-screen text-black bg-gray-100 flex flex-col max-w-4xl mx-auto p-5">
      <nav
        className={` p-5 rounded-lg shadow-md max-w-4xl mx-auto  fixed top-0 left-0 right-0 z-10 transition-all backdrop-blur-md ${
          isNavSticky ? "shadow-lg" : ""
        }  `} // backdrop-blur 클래스 추가
      >
        <div className="mx-auto flex items-center justify-between">
          <Link to="/" className="">
            <span className="font-bold text-2xl">LikeLion CUK</span>
          </Link>
          <div className="md:flex hidden ">
            <ul className="flex flex-row space-x-4">
              <NavContent link="about" text="커리큘럼" />

              <NavContent link="announcements" text="공지사항" />
              <NavContent link="archiving" text="프로젝트" />
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-white hover:underline"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <ul className="absolute bg-orange-500 p-4 rounded-lg shadow-md mt-2 top-12 right-4">
                <li>
                  <Link
                    to="/calendar"
                    className="text-white hover:underline block mb-2"
                    onClick={toggleMobileMenu}
                  >
                    달력
                  </Link>
                </li>
                <li>
                  <Link
                    to="/announcements"
                    className="text-white hover:underline block mb-2"
                    onClick={toggleMobileMenu}
                  >
                    공지사항
                  </Link>
                </li>
                <li>
                  <Link
                    to="/members"
                    className="text-white hover:underline block mb-2"
                    onClick={toggleMobileMenu}
                  >
                    멤버
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white hover:underline block"
                    onClick={toggleMobileMenu}
                  >
                    소개
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <div className="mt-16">{children}</div>{" "}
      {/* children을 표시하는 부분 추가 */}
    </div>
  );
};

export default Layout;
