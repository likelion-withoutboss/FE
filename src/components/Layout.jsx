import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto">
      <header className="bg-gray-800 text-white p-4 text-center">
        {/* 헤더 내용 */}
      </header>
      <main className="flex-1 p-5 bg-gray-100">
        {children} {/* 자식 컴포넌트가 여기에 렌더링됩니다. */}
      </main>
      <footer className="bg-green-500 text-white text-center p-2">
        {/* 푸터 내용 */}
      </footer>
    </div>
  );
};

export default Layout;
